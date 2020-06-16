import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import nextReduxWrapper from "next-redux-wrapper";

import createReducer from "./reducers";
import globalSaga from "../../global/sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  process.env.NODE_ENV !== "production" && typeof window === "object"
    ? composeWithDevTools
    : compose;

export default options => WrapperComp => {
  const hasKey = !!options.key;
  if (!hasKey)
    throw new Error(`${WrapperComp.displayName} should be passed a key`);
  const hasSaga = !!options.saga;
  const hasReducer = !!options.reducer;
  const reducer =
    hasKey && hasReducer ? { [options.key]: options.reducer } : {};

  const configureStore = (initialState = {}) => {
    const store = createStore(
      createReducer(reducer),
      initialState,
      composeEnhancers(...enhancers)
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = reducer;
    store.globalSaga = { globalSaga, task: store.runSaga(globalSaga) };

    // Each Saga injected is given a unique key for tracking
    store.injectedSagas = {};
    if (hasSaga) {
      store.injectedSagas[options.key] = {
        ...options.saga,
        task: store.runSaga(options.saga)
      };
    }
    return store;
  };

  return nextReduxWrapper(configureStore)(WrapperComp);
};
