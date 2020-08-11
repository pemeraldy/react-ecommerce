import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

