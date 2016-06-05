import './RpNavigation.scss';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function getClass(myPathName, currentPathName) {
    return "nav-link " + ((myPathName === currentPathName) ? 'active bg-info' : 'text-muted');
}

const RpNavigation = ({pathName}) => (
    <div className="rp-navigation">
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className={getClass('/', pathName)} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={getClass('/table', pathName)} to="/table">Table</Link>
            </li>
            <li className="nav-item">
                <Link className={getClass('/graph', pathName)} to="/graph">Graph</Link>
            </li>
        </ul>
    </div>
);

RpNavigation.propTypes = {
    pathName: PropTypes.string,
};

export default RpNavigation;