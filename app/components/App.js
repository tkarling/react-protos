import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import Footer from './Footer';
// import AddTodo from './AddTodo';
import ItemListView from './itemList/ItemListView';

// const App = () => (
//     <div>
//         <AddTodo />
//         <VisibleTodoList />
//         <Footer />
//     </div>
// );

const App = () => (
    <div>
        <ItemListView />
    </div>
);

export default App;