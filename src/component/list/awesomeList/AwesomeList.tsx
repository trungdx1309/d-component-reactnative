/* eslint-disable react/sort-comp */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-underscore-dangle */
import _ from "lodash";
import React, { Component } from "react";
import {
  FlatList,
  SectionList,
  ViewPropTypes,
  ViewStyle,
  FlatListProps,
  SectionListProps,
} from "react-native";
import View from "../../view/View";
import AwesomeListMode from "./AwesomeListMode";
import AwesomeListStyle from "./AwesomeListStyle";
import { isArray, isString } from "./AwesomeListUtils";
import EmptyView from "./EmptyView";
import PagingView from "./PagingView";

const DEFAULT_PAGE_SIZE = 20;

//@ts-ignore
export interface IAwesomeListProps<T>
  extends Omit<
      Partial<FlatListProps<T>>,
      "data" | "getItemLayout" | "viewabilityConfig"
    >,
    Omit<
      Partial<SectionListProps<T>>,
      "data" | "getItemLayout" | "viewabilityConfig"
    > {
  containerStyle?: ViewStyle;
  listStyle?: ViewStyle;
  emptyViewStyle?: ViewStyle;
  source: (props: any) => any;
  keyExtractor?: (props: any, index: number) => any;
  type?: string;
  renderSeparator?: () => SectionListProps<T>["ItemSeparatorComponent"];
  transformer?: (res: any) => any;
  isPaging?: boolean;
  isSectionList?: boolean;
  createSections?: (props: any) => any;
  renderEmptyView?: (props?: any) => Element;
  renderErrorView?: (props?: any) => Element;
  renderProgress?: (props?: any) => Element;
  listHeaderComponent?: FlatListProps<any>["ListHeaderComponent"];
  emptyText?: string;
  filterEmptyText?: string;
  pageSize?: number;
  className?: string;
  renderItem: SectionListProps<T>["renderItem"];
}

class AwesomeList<T> extends Component<IAwesomeListProps<T>, any> {
  static defaultProps = {
    keyExtractor: (item: any) => {
      if (item.id) {
        return item.id;
      }

      if (isString(item)) return item;

      console.log("You need to provide a key extractor");
    },
    renderSeparator: () => <View />,
    source: Promise.resolve([]),
    transformer: (response: any) => {
      return response;
    },

    containerStyle: AwesomeListStyle.containerListStyle,
    listStyle: AwesomeListStyle.listStyle,

    isPaging: false,
    isSectionList: false,

    renderSectionHeader: null,
    createSections: null,
    renderEmptyView: null,
    listHeaderComponent: null,
    emptyText: "No result",
    filterEmptyText: "No filter result",
    renderErrorView: null,
    renderProgress: null,
    numColumns: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  };

  DEFAULT_PAGING_DATA: { pageIndex: number; pageSize: any };

  private _unmounted: boolean | undefined;

  pagingData: any;

  noMoreData: any;

  originData: any;

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      emptyMode: AwesomeListMode.PROGRESS,
      pagingMode: AwesomeListMode.HIDDEN,
      sections: [],
    };

    this.DEFAULT_PAGING_DATA = {
      pageIndex: 1,
      pageSize: props.pageSize,
    };
  }

  UNSAFE_componentWillMount() {
    this._unmounted = false;
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this._unmounted = true;
  }

  /**
   * Logic
   */
  isNoMoreData(newData: any) {
    if (
      !newData ||
      !isArray(newData) ||
      !this.props.isPaging ||
      this.isSectionsList()
    ) {
      return true;
    }
    return this.pagingData ? newData.length < this.pagingData.pageSize : false;
  }

  isSectionsList() {
    return this.props.isSectionList;
  }

  /**CONTROL VIEW */

  /**
   * call API from source, and fill data to the list
   * if the component is unmounted => return;
   * if error, show emptyView with error mode, reset data to empty,
   *
   * if reponse is passed, fill data to the list, set empty mode is hidden
   */

  start() {
    if (this.noMoreData) return;

    const { source, transformer } = this.props;
    /**
     * if the first load in paging list, construct to pagingData,
     */
    if (!this.pagingData) {
      this.pagingData = this.DEFAULT_PAGING_DATA;
    }

    source(this.pagingData)
      .then((response: any) => {
        this.pagingData = {
          ...this.pagingData,
          pageIndex: this.pagingData.pageIndex + 1,
        };
        const data = transformer && transformer(response);
        let sections: Array<any> = [];
        this.noMoreData = this.isNoMoreData(data);

        if (!isArray(data)) {
          // eslint-disable-next-line no-throw-literal
          throw "Data is not an array";
        }

        if (_.isEmpty(data) && this.state.data.length === 0) {
          this.setState({
            data: [],
            sections,
            pagingMode: AwesomeListMode.HIDDEN,
            emptyMode: AwesomeListMode.EMPTY,
            refreshing: false,
          });
          return;
        }

        if (this.isSectionsList()) {
          sections =
            this.props.createSections && this.props.createSections(data);
        }
        this.setState({
          // eslint-disable-next-line react/no-access-state-in-setstate
          data: this.state.data.concat(data),
          sections,
          pagingMode: AwesomeListMode.HIDDEN,
          emptyMode: AwesomeListMode.HIDDEN,
          refreshing: false,
        });
      })
      .catch((error: any) => {
        console.log(error);
        if (this._unmounted) return;
        /**
         * if the first loading
         * display emptyView with error mode
         */
        if (this.pagingData.pageIndex === this.DEFAULT_PAGING_DATA.pageIndex) {
          this.setState({
            pagingMode: AwesomeListMode.HIDDEN,
            emptyMode: AwesomeListMode.ERROR,
            data: [],
            sections: [],
            refreshing: false,
          });
        } else {
          this.setState({
            pagingMode: AwesomeListMode.ERROR,
            emptyMode: AwesomeListMode.HIDDEN,
            refreshing: false,
          });
        }
      });
  }

  onRetry() {
    this.setState({ emptyMode: AwesomeListMode.PROGRESS }, this.start() as any);
  }
  /**
   * this function help list refresh when list is scrolled down.
   * enable refreshing in list data
   * action refresh
   */

  onRefresh() {
    this.setState(
      {
        refreshing: true,
        emptyMode: AwesomeListMode.HIDDEN,
        pagingMode: AwesomeListMode.HIDDEN,
      },
      () => this.refresh()
    );
  }

  /**
   * actual refresh data list
   * set data list is empty list,
   * call start function to recall source function.
   */
  refresh() {
    this.noMoreData = false;
    this.pagingData = null;
    this.setState(
      {
        data: [],
        sections: [],
        emptyMode: AwesomeListMode.PROGRESS,
        pagingMode: AwesomeListMode.HIDDEN,
      },
      () => this.start()
    );
  }

  onEndReached() {
    if (
      this.noMoreData ||
      !this.props.isPaging ||
      this.state.data.length === 0 ||
      this.state.pagingMode === AwesomeListMode.PROGRESS
    ) {
      return;
    }

    this.setState({ pagingMode: AwesomeListMode.PROGRESS }, () => this.start());
  }

  /** Apply filter  to list*/
  applyFilter(actionFilter: any) {
    if (
      (!this.state.data || this.state.data.length === 0) &&
      !this.originData
    ) {
      console.log("Cannot apply filter case the data is empty");
      return;
    }
    if (!this.originData) {
      this.originData = this.state.data;
    }
    this.setState({ emptyMode: AwesomeListMode.PROGRESS }, () =>
      this.calculateFilter(actionFilter)
    );
  }

  /**
   * should not be call in acestor component
   * @param {*} actionFilter
   */
  calculateFilter(actionFilter: any) {
    const dataFilter = _.filter(this.originData, (item, index) => {
      return actionFilter(item, index);
    });

    if (!dataFilter || dataFilter.length === 0) {
      this.setState({
        data: [],
        sections: [],
        emptyMode: AwesomeListMode.FILTER_EMPTY,
        pagingMode: AwesomeListMode.HIDDEN,
      });
    } else {
      let sections = [];
      if (this.isSectionsList()) {
        sections =
          this.props.createSections && this.props.createSections(dataFilter);
      }
      this.setState({
        data: dataFilter,
        sections,
        emptyMode: AwesomeListMode.HIDDEN,
        pagingMode: AwesomeListMode.HIDDEN,
      });
    }
  }

  removeFilter() {
    if (!this.originData) {
      console.log("You have not apply any filter data");
      return;
    }
    let sections = [];
    if (this.isSectionsList()) {
      sections =
        this.props.createSections && this.props.createSections(this.originData);
    }

    this.setState(
      { emptyMode: AwesomeListMode.HIDDEN, data: this.originData, sections },
      () => {
        this.originData = null;
      }
    );
  }

  render() {
    const {
      containerStyle,
      listStyle,
      emptyViewStyle,
      keyExtractor,
      renderItem,
      renderSeparator,
      renderEmptyView,
      listHeaderComponent,
      emptyText,
      renderErrorView,
      renderProgress,
      filterEmptyText,
      className,
      ...rest
    } = this.props;

    return (
      <View style={containerStyle} className={className}>
        {this.isSectionsList() ? (
          <SectionList
            style={listStyle}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              keyExtractor && keyExtractor(item, index)
            }
            ItemSeparatorComponent={renderSeparator && renderSeparator()}
            stickySectionHeadersEnabled
            onRefresh={() => this.onRefresh()}
            ListHeaderComponent={listHeaderComponent}
            refreshing={this.state.refreshing}
            {...rest}
            sections={this.state.sections}
          />
        ) : (
          <FlatList
            style={listStyle}
            data={this.state.data}
            renderItem={renderItem as any}
            keyExtractor={(item, index) =>
              keyExtractor && keyExtractor(item, index)
            }
            ItemSeparatorComponent={renderSeparator && renderSeparator()}
            refreshing={this.state.refreshing}
            onRefresh={() => this.onRefresh()}
            onEndReached={() => this.onEndReached()}
            ListFooterComponent={() => (
              <PagingView
                mode={this.state.pagingMode}
                retry={() => this.onRetry()}
              />
            )}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={listHeaderComponent}
            {...rest}
          />
        )}
        <EmptyView
          mode={this.state.emptyMode}
          retry={() => this.onRetry()}
          renderEmptyView={renderEmptyView}
          emptyText={emptyText}
          renderErrorView={renderErrorView && renderErrorView}
          renderProgress={renderProgress && renderProgress}
          filterEmptyText={filterEmptyText}
        />
      </View>
    );
  }
}

export default AwesomeList;
