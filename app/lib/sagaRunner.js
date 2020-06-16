import each from "lodash/each";
import { END } from "redux-saga";
import getSagaInjectors from "./sagaInjectors";

export default function sagaRunner(store, isServer, stopDispatch = true) {
  const taskArray = (store.globalSaga && [store.globalSaga.task]) || [];
  if (stopDispatch) store.dispatch(END);
  each(store.injectedSagas, saga => {
    taskArray.push(saga.task);
  });
  return Promise.all(taskArray.map(task => task.done)).then(() => {
    if (!isServer && stopDispatch) {
      const { injectSaga } = getSagaInjectors(store);
      each(store.injectedSagas, (descriptor, key) => {
        const { saga } = descriptor;
        injectSaga(key, { saga });
      });
      // eslint-disable-next-line
      store.globalSaga && store.runSaga(store.globalSaga.globalSaga);
    }
  });
}
