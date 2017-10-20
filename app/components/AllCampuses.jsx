import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCampus, fetchCampuses } from '../reducers';

function AllCampuses(props) {
    const { campuses, removeCampus } = props;
    return (
        <div className="main">
            <div className="campus-add">
                <Link to="/new-campus"><button className="button-main"><span className="glyphicon glyphicon-plus" />Add Campus</button></Link>
            </div>
            <div className="campus-list">
                {campuses.map(campus => {
                    return (
                    <Link to={`/campuses/${campus.id}`} key={campus.id} className="list-link">
                        <div className="campus">
                            <div className="campus-title">{campus.name}</div>
                            <div className="modify">
                                <Link to={`/campuses/edit/${campus.id}`}>
                                    <button value={campus.id} className="glyphicon glyphicon-pencil" />
                                </Link>
                                    <button value={campus.id} onClick={removeCampus} className="glyphicon glyphicon-remove" />
                            </div>
                            <img src={campus.imageUrl} />
                        </div>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        campuses: state.allCampuses
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        removeCampus: function(event) {
            confirm("Are you sure you want to delete this campus?");
            console.log(event.target.value);
            dispatch(deleteCampus(event.target.value, ownProps.history));
            dispatch(fetchCampuses());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
