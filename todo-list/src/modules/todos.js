import { Map, List} from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// Ducks 구조 

// 액션 타입 설정
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 리듀서 초기값 설정
const initialState = List( [ Map({ id: 0, text: 'Study React', done:true})
                            , Map({ id:1, text: 'Component Styling', done:false })]);

export default handleActions({ 
    [INSERT] : (state, action) => {
        const { id, text, done} = action.payload;
        return state.push(Map({ id, text, done}));} ,
    [TOGGLE] : (state, action) => {
        const {payload : index} = action; // = const index = action.payload;
        return state.updateIn([index, 'done'], done => !done);}, 
    [REMOVE] : (state, action) => {
        const { payload : index} = action;
        return state.delete(index);}
}, initialState)

                            
