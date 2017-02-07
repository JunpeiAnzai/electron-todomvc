import React from 'react';
import Todo from '../components/Todo.jsx';
import TodoStore from '../stores/TodoStore.jsx';
import * as TodoAction from '../actions/TodoAction.jsx';

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    componentWillMount() {
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll(),
            });
        });
    }

    addTodo() {
        TodoAction.addTodo('New Task!');
    }

    render () {
        const {todos} = this.state;

        const todoList = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <button onClick={this.addTodo.bind(this)}>Add!</button>
                <h3>My Todo List</h3>
                <ul>{todoList}</ul>
            </div>
        );
    }
}