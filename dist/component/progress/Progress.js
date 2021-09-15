import _pt from "prop-types";

/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity, Dimensions, StyleSheet, View, Text, Platform } from "react-native";
import _ from "lodash";
import Messages from "../../i18n/Messages";
import AppSizes from "../../style/constant/AppSizes";
import AppColors from "../../style/constant/AppColors";
const {
  width,
  height
} = Dimensions.get("window");
const DefaultConfig = {
  maxWidthPercentage: 0.8,
  maxHeightPercentage: 0.8
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center"
  },
  dialog: {
    backgroundColor: "#fff",
    width: Math.min(AppSizes.screenWidth, AppSizes.screenHeight) * DefaultConfig.maxWidthPercentage,
    maxHeight: height * DefaultConfig.maxHeightPercentage,
    borderRadius: 5,
    borderWidth: 0
  },
  title: {
    alignSelf: "stretch",
    textAlign: "center",
    margin: AppSizes.paddingSml,
    color: AppColors.textColor
  },
  textContent: {
    padding: AppSizes.paddingMedium,
    color: AppColors.textColor,
    textAlign: "center",
    marginVertical: AppSizes.paddingSml
  },
  divider: {
    backgroundColor: AppColors.primaryColor,
    alignSelf: "stretch"
  },
  button: {
    flex: 1
  },
  buttonText: {
    textAlign: "center",
    padding: AppSizes.paddingSml,
    backgroundColor: "transparent",
    color: AppColors.primaryColor,
    marginVertical: Platform.OS === "ios" ? 0 : AppSizes.paddingXXTiny
  },
  buttonStyle: {
    flex: 1
  },
  textLoading: {
    paddingLeft: AppSizes.paddingMedium,
    paddingTop: AppSizes.padding,
    paddingBottom: AppSizes.padding,
    color: AppColors.textColor,
    fontSize: AppSizes.fontXXMedium,
    textAlign: "center",
    height: "100%",
    justifyContent: "center"
  },
  loadingContainer: {
    // width: AppSizes.paddingMedium * 2,
    // backgroundColor: 'red',
    height: 100,
    backgroundColor: "transparent",
    // flexDirection: 'row',
    padding: AppSizes.paddingXXSml,
    alignItems: "center",
    justifyContent: "center" // borderRadius: AppSizes.paddingTiny,
    // borderWidth: AppSizes.paddingMicro,
    // borderColor: AppColors.grayLight

  },
  lottieView: {
    width: AppSizes.paddingLarge * 5,
    height: AppSizes.paddingLarge * 5
  }
});

class Progress extends Component {
  static propTypes = {
    onSuccess: _pt.func,
    promiseFunction: _pt.oneOfType([_pt.arrayOf(_pt.shape({
      method: _pt.func.isRequired,
      params: _pt.any.isRequired
    })), _pt.shape({
      method: _pt.func.isRequired,
      params: _pt.any.isRequired
    })]).isRequired,
    onError: _pt.func,
    handleError: _pt.func
  };

  static show(promiseFunction, onSuccess, onError, handleError) {
    // if (!_.isFunction(promiseFunction)) {
    //   throw new Error("Progress.show: First param must be a function");
    // }
    Actions.progress({
      promiseFunction,
      onSuccess,
      onError,
      handleError
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  componentDidMount() {
    this.doTask();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  setError(error) {
    if (this.props.handleError && this.props.handleError(error)) {
      this.dismiss();
      return;
    }

    if (error && error.response && error.response.data) {
      this.setState({
        error: error.response.data
      });
      return;
    }

    if (error?.data?.message) {
      this.setState({
        error: error?.data
      });
      return;
    }

    this.setState({
      error
    });
  }

  generatePromiseFunc = proFunc => {
    const {
      method,
      params
    } = proFunc;
    let taskItem;

    if (!_.isArray(params)) {
      taskItem = method(params);
    } else {
      taskItem = method(...params);
    }

    return taskItem;
  };

  cancel() {
    this.dismiss();

    if (this.props.onError) {
      this.props.onError(this.state.error);
    }
  }

  dismiss() {
    // this.abivinLoading.stopAnimated()
    Actions.pop();
  }

  doTask() {
    this.setState({
      error: null
    }, () => {
      const {
        promiseFunction,
        onError,
        onSuccess,
        handleError
      } = this.props; // if (!_.isArray(this.props.params))
      //   task = this.props.promiseFunction(this.props.params);
      // else task = this.props.promiseFunction(...this.props.params);

      let promiseAll;

      const isArrayFunc = _.isArray(promiseFunction);

      if (isArrayFunc) {
        //@ts-ignore
        promiseAll = promiseFunction.map(func => this.generatePromiseFunc(func));
      } else {
        promiseAll = [this.generatePromiseFunc(promiseFunction)];
      }

      const task = Promise.all(promiseAll);
      console.log(task);
      task.then(result => {
        // call server and receive response with known exception
        if (result) {
          // if (
          //   result.request &&
          //   result.data &&
          //   result.data.responseData &&
          //   result.data.responseData.error
          // ) {
          //   this.setError(result.data.responseData.error);
          //   return;
          // }
          // const error = result?.data?.error?.status;
          // if (!_.isEmpty(error)) {
          //   this.setError(result?.data);
          //   return;
          // }
          // Success
          this.dismiss();

          if (onSuccess) {
            onSuccess(isArrayFunc ? result : result?.[0]);
          }
        } else {
          this.setError({
            message: Messages.notResponseServer
          });
        }
      }).catch(error => {
        if (this.unmounted) {
          throw error;
        }

        this.setError(error);
      });
    });
  }

  retry() {
    this.doTask();
  }

  renderLoadingView() {
    return <View style={styles.loadingContainer}>
        <Text style={[styles.textLoading, {
        color: "white"
      }]}>
          #keepcalmNfightcorona
        </Text>
      </View>;
  }

  renderHorizontalDivider() {
    return <View style={[styles.divider, {
      height: 1
    }]} />;
  }

  renderVerticalDivider() {
    return <View style={[styles.divider, {
      width: 1
    }]} />;
  }

  render() {
    const {
      error
    } = this.state;
    return (
      /** Dim background and handle touch outside */
      <View style={styles.container}>
        {!error && this.renderLoadingView()}
        {error && <View style={styles.dialog}>
            <Text style={styles.title}>{Messages.error}</Text>
            <Text style={styles.textContent}>{error.message}</Text>

            {this.renderHorizontalDivider()}
            <View style={{
            flexDirection: "row-reverse",
            alignItems: "center"
          }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => this.retry()}>
                <Text style={styles.buttonText}>{Messages.retry}</Text>
              </TouchableOpacity>
              {this.renderVerticalDivider()}
              <TouchableOpacity style={styles.buttonStyle} onPress={() => this.cancel()}>
                <Text style={styles.buttonText}>{Messages.cancel}</Text>
              </TouchableOpacity>
            </View>
          </View>}
      </View>
    );
  }

}

export default Progress;