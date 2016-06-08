import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
    rItems: [{
        id: v4(),
        abbr: 'joo',
        text: 'remote joo niin'
    }, {
        id: v4(),
        abbr: 'moi',
        text: 'remote moi vaan',
    }, {
        id: v4(),
        abbr: 'hei',
        text: 'remote hei vaan',
    }],
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchRItems = () =>
    delay(1000).then(() => {
        return fakeDatabase.rItems;
        // switch (filter) {
        //     case 'all':
        //         return fakeDatabase.todos;
        //     case 'active':
        //         return fakeDatabase.todos.filter(t => !t.completed);
        //     case 'completed':
        //         return fakeDatabase.todos.filter(t => t.completed);
        //     default:
        //         throw new Error(`Unknown filter: ${filter}`);
        // }
    });

export const addRItem = (abbr, text) =>
    delay(1000).then(() => {
        const rItem = {
            id: v4(),
            abbr,
            text,
        };
        fakeDatabase.rItems.push(rItem);
        return rItem;
    });

// export const toggleTodo = (id) =>
//     delay(500).then(() => {
//         const todo = fakeDatabase.todos.find(t => t.id === id);
//         todo.completed = !todo.completed;
//         return todo;
//     });