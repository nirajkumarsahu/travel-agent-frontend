import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import { connect } from "react-redux";
import { compose } from "redux";
import globalActions, { setViewPortInfo } from "global/actions";
import throttle from "lodash/throttle";
import initStore from "./store";
import embedSagaAndReducer from "./embedSagaAndReducer";
import sagaRunner from "./sagaRunner";

import { checkViewPort } from "./utils";

export const getPageWrapper = (
  PageComponent,
  { key, reducer, saga, initialActions }
) =>
  class PageWrapper extends Component {
    static addRequestDetails(action, requestDetails) {
      return { ...action, requestDetails };
    }

    static actionDispatcherFunc({ actionArray, store, requestDetails }) {
      actionArray.map(action =>
        store.dispatch(
          typeof action === "function"
            ? PageWrapper.addRequestDetails(action(), requestDetails)
            : { type: "DEFAULT_ACTION" }
        )
      );
    }

    static async getInitialProps(...params) {
      const initialParams = params[0];

      const { store, isServer, req, res } = initialParams;

      embedSagaAndReducer(key, store, reducer, saga);

      let pageProps = {};
      // This function checks if the component has any Getinitialprops function
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(...params);
      }

      let requestDetails = { isServer };
      let cookies = "";
      if (req && req.headers && req.headers.cookie) {
        cookies = req.headers.cookie;
      }
      requestDetails = {
        ...requestDetails,
        cookies
      };

      if (isServer && globalActions instanceof Array) {
        PageWrapper.actionDispatcherFunc({
          actionArray: globalActions,
          store,
          requestDetails
        });
      }

      const ttlFlag = store.getState().globalReducer.ttlInfo[key];
      let updateDataFlag = true;
      if (ttlFlag) {
        updateDataFlag = Date.now() > ttlFlag;
      }
      if (isServer || updateDataFlag) {
        if (isServer) {
          requestDetails = {
            ...requestDetails,
            serverRes: res
          };
        }
        PageWrapper.actionDispatcherFunc({
          actionArray: initialActions || [],
          store,
          requestDetails
        });
      }

      // Wait till all sagas are done
      await sagaRunner(store, isServer);

      return {
        pageProps
      };
    }

    componentDidMount() {
      //  eslint-disable-next-line
      const { dispatch } = this.props;
      const isMobileView = checkViewPort();
      dispatch(setViewPortInfo(isMobileView));
      this.initResizeListener();
    }

    componentWillUnmount() {
      this.destroyResizeListener();
    }

    onResize = () => {
      //  eslint-disable-next-line
      const { dispatch } = this.props;
      const isMobileView = checkViewPort();
      dispatch(setViewPortInfo(isMobileView));
    };

    initResizeListener = () => {
      //  eslint-disable-next-line
      window && window.addEventListener("resize", throttle(this.onResize, 200));
    };

    destroyResizeListener = () => {
      //  eslint-disable-next-line
      window &&
        window.removeEventListener("resize", throttle(this.onResize, 200));
    };

    render() {
      return <PageComponent {...this.props} />;
    }
  };

export default (
  PageComponent,
  { mapStateToProps, mapDispatchToProps, key, reducer, saga, initialActions }
) => {
  const PageWrapper = getPageWrapper(PageComponent, {
    key,
    reducer,
    saga,
    initialActions
  });

  // Move all non react specific static properties from PageComponent to PageWrapper
  hoistNonReactStatic(PageWrapper, PageComponent, {
    getInitialProps: true
  });

  // Give a unique identifier to the new high order component
  PageWrapper.displayName = `cisEnhanced(${PageComponent.displayName ||
    PageComponent.name ||
    "Component"})`;

  // Connecting the mapStateToProps and mapDispatchToProps methods with the store
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );
  const withRedux = initStore({
    key,
    reducer,
    saga
  });

  return compose(
    withRedux,
    withConnect
  )(PageWrapper);
};
