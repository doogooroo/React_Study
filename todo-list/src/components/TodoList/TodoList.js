import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    // 리스트 렌더링시 항상 shouldComponentUpdate 매서드 구현 습관화 ***
    shouldComponentUpdate(nextProps, nextState) {
        //console.log('TotoList');
        return this.props.todos !== nextProps.todos;
    }

    // todos에 다 담겨 있다(Map이기 때문에 .get()로 접근)
    render(){
        const {todos, onToggle, onRemove} = this.props;
        
        const todoList = todos.map(
            todo => (
                <TodoItem 
                    key={todo.get('id')} 
                    done={todo.get('done')} 
                    onToggle={() => onToggle(todo.get('id'))} 
                    onRemove={() => onRemove(todo.get('id'))}>
                        {todo.get('text')}
                </TodoItem>
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