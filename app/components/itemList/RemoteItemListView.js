import './ItemList.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { fetchRItems, getErrorMessage, getIsFetching } from '../../reducers';
import ItemList from './ItemList';
import FetchError from './FetchError';

class RemoteItemListView extends Component {
    componentDidMount() {
        this.fetchData();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.filter !== prevProps.filter) {
    //         this.fetchData();
    //     }
    // }

    fetchData() {
        // const { filter, fetchTodos } = this.props;
        // fetchTodos(filter);
        const { fetchRItems } = this.props;
        fetchRItems();
    }

    render() {
        const { isFetching, errorMessage, items, onItemClick, onItemDelete, onItemAdd } = this.props;
        if (isFetching && !items.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !items.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            );
        }

        return (
            <ItemList
                items={items}
                onItemClick={onItemClick}
                onItemDelete={onItemDelete}
                onItemAdd={onItemAdd}
            />
        );
    }
}

RemoteItemListView.propTypes = {
    // filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
    errorMessage: PropTypes.string,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchRItems: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return {
        isFetching: getIsFetching(state),
        errorMessage: getErrorMessage(state),
        items: fetchRItems(state),
        title: 'Table in Remote Storage'
    };
};


RemoteItemListView = connect(
    mapStateToProps,
    actions
)(RemoteItemListView);

export default RemoteItemListView;