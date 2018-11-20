import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../modules/todos';

class TodoListContainer extends Component {
    // 실제 메서드 구현
    handleToggle = (id) => {
        const { TodosActions } = this.props;
        TodosActions.toggle(id);
    }

    handleRemove = (id) => {
        const { TodosActions } = this.props;
        TodosActions.remove(id);
    }

    render(){
        const {todos} = this.props;
        const { handleToggle, handleRemove } = this;
        //전달
        return (
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

//액션 메서드 연결
export default connect( 
    (state) => ({
        todos:state.todos
    }),
    (dispach) => ({
        TodosActions: bindActionCreators(todoActions, dispach)
    })
 )(TodoListContainer)
