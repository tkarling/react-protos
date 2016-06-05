import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import React, {PropTypes} from 'react';
import RpNavigation from './shared/RpNavigation';

const App = ({children, location}) => (
    <div>
        <RpNavigation pathName={location.pathname}/>
        {children || <div className="welcome">Welcome to React Protos</div>}
    </div>
);

App.propTypes = {
    children: PropTypes.object
};


export default App;