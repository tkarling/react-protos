import './RpNavigation.scss';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const RpNavigation = ({pathName}) => {
    const getClass = (myPathName, currentPathName) => {
        return "nav-link " + ((myPathName === currentPathName) ? 'active bg-info' : 'text-muted');
    };

    return (
        <div className="rp-navigation">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className={getClass('/', pathName)} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={getClass('/ltable', pathName)} to="/ltable">LTable</Link>
                </li>
                <li className="nav-item">
                    <Link className={getClass('/rtable', pathName)} to="/rtable">RTable</Link>
                </li>
                <li className="nav-item">
                    <Link className={getClass('/graph', pathName)} to="/graph">Graph</Link>
                </li>
            </ul>
        </div>)
};

RpNavigation.propTypes = {
    pathName: PropTypes.string,
};

export default RpNavigation;