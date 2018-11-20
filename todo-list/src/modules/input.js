import { Map } from 'immutable';
import {handleActions, createAction} from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT'; // 액션 타입 설정

export const setInput = createAction(SET_INPUT); // 액션 생성 함수

// 리듀서 초기값 설정
const initialState = Map({value:''});

// 리듀서 생성
export default handleActions({ [SET_INPUT]: (state, action) => { 
    return state.set('value', action.payload)} // payload
}, initialState);


// Ducks 구조 