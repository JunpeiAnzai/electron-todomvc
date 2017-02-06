import dispatcher from './dispatcher.jsx';

export function addTodo(text) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    });
}
