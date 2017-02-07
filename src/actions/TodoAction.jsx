import dispatcher from '../dispatcher.js';

export function addTodo(text) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    });
}
