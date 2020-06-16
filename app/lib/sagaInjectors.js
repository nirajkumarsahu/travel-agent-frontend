import isEmpty from "lodash/isEmpty";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";
import invariant from "invariant";
import conformsTo from "lodash/conformsTo";

import checkStore from "./checkStore";
import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from "./constants";

const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkDescriptor = descriptor => {
  const shape = {
    saga: isFunction,
    mode: mode => isString(mode) && allowedModes.indexOf(mode) > -1
  };
  invariant(
    conformsTo(descriptor, shape),
    "sagaInjector.js : Saga descriptor is invalid"
  );
};

const checkKey = key =>
  invariant(
    isString(key) && !isEmpty(key),
    "sagaInjector.js : Expected `key` to be a non empty string"
  );

export function injectSagaFactory(store, isValid) {
  function injectSaga(key, descriptor = {}, args) {
    if (!isValid) checkStore(store);

    // if mode is not present then give it a default mode of RESTART_ON_REMOUNT
    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || RESTART_ON_REMOUNT
    };
    const { saga } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    // eslint-disable-next-line no-param-reassign
    store.injectedSagas[key] = {
      ...newDescriptor,
      task: store.runSaga(saga, args)
    };
  }
  return injectSaga;
}

export function ejectSagaFactory(store, isValid) {
  function ejectSaga(key) {
    if (!isValid) checkStore(store);
    checkKey(key);

    if (Object.prototype.hasOwnProperty.call(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      descriptor.task.cancel();
    }
  }
  return ejectSaga;
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true)
  };
}
