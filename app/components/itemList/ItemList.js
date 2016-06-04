import './ItemList.scss';

import React, {PropTypes} from 'react';
import Item from './Item';
import ItemInput from './ItemInput';

const ItemList = ({items, onItemClick, onItemDelete}) => (
    <div className="rp-item-list">
        <ItemInput />
        <h4> Table title</h4>
        <table className="table rp-item-table">
            <tbody>
            {items.map(item =>
                <Item
                    key={item.id}
                    {...item}
                    onClick={() => onItemClick(item.id)}
                    onDelete={() => onItemDelete(item.id)}
                />
            )}
            </tbody>
        </table>
    </div>
);

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onItemClick: PropTypes.func.isRequired,
};

export default ItemList;