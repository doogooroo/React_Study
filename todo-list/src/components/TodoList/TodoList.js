import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    // 리스트 렌더링시 항상 shouldComponentUpdate 매서드 구현 습관화 ***
    shouldComponentUpdate(nextProps, nextState) {
        //console.log('TotoList');
        return this.props.todos !== nextProps.todos;
    }

    render(){
        const {todos, onToggle, onRemove} = this.props;
        
        const todoList = todos.map(
            todo => (
                <TodoItem key={todo.id} done={todo.done} onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)}>{todo.text}</TodoItem>
            )
        )

        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList;