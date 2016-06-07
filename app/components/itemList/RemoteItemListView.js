import './ItemList.scss';

import { connect } from 'react-redux';
import { deleteItem } from '../../actions';
import ItemList from './ItemList';

const getItems = (items) => {
    return items;
};

const mapStateToProps = (state) => {
    return {
        items: [], // getItems(state.items),
        title: 'Table in Remote Storage'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            console.log('Remote: onItemClick');
            // dispatch(toggleTodo(id));
        },
        onItemDelete: (id) => {
            console.log('Remote: onItemDelete');
            // dispatch(deleteItem(id));
        },
        onItemAdd: (abbr, text) => {
            console.log('Remote: onItemAdd');
            // dispatch(addItem(abbr, text));
        }
    };
};

const RemoteItemListView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default RemoteItemListView;