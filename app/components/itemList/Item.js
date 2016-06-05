import './ItemList.scss';

import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome/lib';

const Item = ({onClick, onDelete, completed, abbr, text}) => (
    <tr style={{ textDecoration: completed ? 'line-through' : 'none',}}>
        <td width="5%"><FontAwesome className="square" name="square"/></td>
        <td width="15%"><strong>{abbr}</strong></td>
        <td onClick={onClick} >{text}</td>
        <td width="10%" onClick={onDelete}>
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </td>
    </tr>
);

Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    abbr: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Item;
