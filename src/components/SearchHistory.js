import React, { useState } from 'react';
import { store } from '../index'
import { addItem, removeItem } from '../redux/actions'
import { connect } from "react-redux";


function SearchHistory(props) {
    return (<div className="searchHistory">
        <h3>Search History</h3>
        <ul>
            {props.Reducer.SearchArray.map((value, index) => {
                const temp =
                    <div key={value + index}>
                        <li > {value}
                            <button className="deleteButton" onClick={e => props.removeItem(value)}>X</button>
                        </li>
                    </div>
                return temp;
            })}
        </ul>
    </div>
    )
}

const mapStateToProps = state => {
    return store.getState();
};

export default connect(
    mapStateToProps,
    { addItem: addItem, removeItem: removeItem }
)(SearchHistory);
