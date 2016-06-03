import './ItemList.scss';

import { connect } from 'react-redux';
import { deleteItem } from '../../actions';
import ItemList from './ItemList';

const getItems = (items, filter) => {
    return items;
    // switch (filter) {
    //     case 'SHOW_ALL':
    //         return todos;
    //     case 'SHOW_COMPLETED':
    //         return todos.filter(t => t.completed);
    //     case 'SHOW_ACTIVE':
    //         return todos.filter(t => !t.completed);
    //     default:
    //         throw new Error(`Unknown filter: ${filter}.`);
    // }
};

const mapStateToProps = (state) => {
    return {
        items: getItems(state.items
            // state.visibilityFilter
        ),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            console.log('onItemClick');
            // dispatch(toggleTodo(id));
        },
        onItemDelete: (id) => {
            console.log('onItemDelete');
            dispatch(deleteItem(id));
        },
    };
};

const ItemListView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default ItemListView;