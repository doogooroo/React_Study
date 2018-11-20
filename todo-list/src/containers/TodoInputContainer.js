import React, {Component} from 'react';
import TodoInput from '../components/TodoInput';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; // 액션 생성함수들을 한꺼번에 불러오기
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component { 
    id = 1;
    getId = () => {
        return ++this.id;
    }
    // 메서드 구현
    handleChange = (e) => {
        const {value} = e.target;
        const {InputActions} = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const {InputActions, TodosActions, value} = this.props;

        const todo = { 
            id:this.getId(),
            text: value,
            done: false
         };

         TodosActions.insert(todo);
         InputActions.setInput('');
    }

    // props를 전달
    render() {
        const {value} = this.props;
        const { handleChange, handleInsert } = this;

        return (
            <TodoInput 
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    }
}

// store상태와 액션 함수 연결!!!!
export default connect(
    (state) => ({ 
        value:state.input.get('value')
}),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch), // bindActionCreators() 자주 사용
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);




