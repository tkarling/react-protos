import './ItemList.scss';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome/lib';

const ItemInput = ({onItemAdd}) => {
    let text, abbr;

    const onSubmit = e => {
        e.preventDefault();
        if (!text.value.trim() && !abbr.value.trim()) {
            return;
        }
        onItemAdd(abbr.value, text.value);
        abbr.value = '';
        text.value = '';
    };

    return (
        <div className="rp-add-item">
            <form onSubmit={onSubmit}>
                <table className="input-group" cellspacing="0"><tbody>
                    <tr>
                        <td width="30%"><input className="form-control" placeholder="Abbr" ref={aa => { abbr = aa; }}/></td>
                        <td width="50%"><input className="form-control" placeholder="Text" ref={node => { text = node; }}/></td>
                        <td width="20%" style={{textAlign: 'center'}}>
                            <button type="submit" className="btn btn-info"><FontAwesome name="plus"/></button>
                        </td>
                    </tr>
                </tbody></table>
            </form>
        </div>
    );
};

ItemInput.propTypes = {
    onItemAdd: PropTypes.func.isRequired,
};

export default connect()(ItemInput);
