import { connect } from 'react-redux';
// import { deleteItem } from '../../actions';
import DemoGraph from './DemoGraph';

const getGraphItems = (items) => {
    return items;
};

const mapStateToProps = (state) => {
    return {
        items: getGraphItems(state.items),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            console.log('onItemClick');
            // dispatch(deleteItem(id));
        },
    };
};

const DemoGraphView = connect(
    mapStateToProps,
    mapDispatchToProps
)(DemoGraph);

export default DemoGraphView;