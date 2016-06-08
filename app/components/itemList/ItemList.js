import './ItemList.scss';

import React, {PropTypes} from 'react';
import Item from './Item';
import ItemInput from './ItemInput';

const ItemList = ({items, title, onItemClick, onItemDelete, onItemAdd}) => (
    <div className="rp-item-list">
        <ItemInput onItemAdd={onItemAdd}/>
        <h4>{title}</h4>
        <table className="table rp-item-table">
            <tbody>
            {items && items.map(item =>
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
        // completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    title: PropTypes.string,
    onItemClick: PropTypes.func.isRequired,
    onItemDelete: PropTypes.func.isRequired,
};

ItemList.defaultProps = {
  title: 'Table Title'
};

export default ItemList;