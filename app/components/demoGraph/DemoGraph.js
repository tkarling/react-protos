import './DemoGraph.scss';

import React, {PropTypes} from 'react';

const DemoGraph = ({items}) => (
    <div className="demo-graph">
        Hello from DemoGraph
    </div>
);

DemoGraph.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onItemClick: PropTypes.func.isRequired,
};

export default DemoGraph;