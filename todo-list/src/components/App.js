import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTools = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text:`일정 ${index}`, done:false})
);

class App extends Component {
    state = {
        input: '' ,
        todos: initialTools,
    }

    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        console.log('remove')
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index+1, todos.length)
            ]
        });

    }

    handleToogle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        console.log('toggle')
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        }

        this.setState({
            todos: [
                ...todos.slice(0,index),
                toggled,
                ...todos.slice(index+1, todos.length)
            ]
        })
    }

    handleInsert = () => {
        const {todos, input} = this.state;
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };

        this.setState({
            todos: [...todos, newTodo],
            input: ' '
        })
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        });
    }

    render(){
        const {input, todos} = this.state;
        const {
            handleChange,
            handleInsert,
            handleToogle,
            handleRemove
        } = this;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos} onToggle={handleToogle} onRemove={handleRemove}/>
            </PageTemplate>
        )
    }
}

export default App;