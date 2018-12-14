import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// only develop mode Redux Devtools use
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState는 추후 서버사이드 랜더링을 했을때 전달받는 초기 상태
const configure = (preloadedState) => 
    createStore(reducers, preloadedState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));
export default configure;