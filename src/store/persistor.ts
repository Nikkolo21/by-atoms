/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import merge from "lodash.merge";
import cloneDeep from "lodash.clonedeep";
import { read, write } from "./localStorage";

let lastState: any = {};
const keysToProcess: any = [];
let timeIterator: any;

const processNextKey = () => {
  if (keysToProcess.length) {
    const key = keysToProcess.shift();
    const persistKey = lastState[key]._persistConfig?.key;
    const blackList = lastState[key]._persistConfig?.blacklist || [];
    const persisted = { ...lastState[key] };

    blackList.forEach((ignoredKey: any) => {
      delete persisted[ignoredKey];
    });

    write(`persist:${persistKey}`, persisted);
  } else {
    if (timeIterator) clearInterval(timeIterator);
    timeIterator = undefined;
  }
};

// It can persist only 1 level items, refactor when more is necessary.
const update = (newState: any) => {
  Object.keys(newState).forEach((key) => {
    if (!newState[key]._persistConfig) return;
    if (lastState[key] === newState[key]) return;
    keysToProcess.push(key);
  });

  if (!timeIterator) {
    timeIterator = setInterval(processNextKey, 100);
  }

  lastState = newState;
};

const withPersistor = (config: any) => (reducer: any) => {
  const { initialState, ...restConfig } = config;
  const persistedData = read(`persist:${restConfig.key}`);

  const rehydrated = merge(cloneDeep(initialState), persistedData);

  return (state = rehydrated, action: any) => {
    const result = reducer(state, action);
    result._persistConfig = restConfig;
    return result;
  };
};

const persistStore = (store: any) => {
  store.subscribe(() => {
    update(store.getState());
  });
};

export { withPersistor, persistStore };
