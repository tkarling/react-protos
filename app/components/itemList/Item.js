import React, {PropTypes} from 'react';

const Item = ({onClick, completed, abbr, text}) => (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none',}} >
        {abbr} {text}
    </li>
);

Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    abbr: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Item;
