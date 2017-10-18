import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCampus, fetchCampuses } from '../reducers'

function AllCampuses(props) {
    const { campuses, removeCampus } = props;
    return (
        <div>
            <div className="title">All Campuses</div>
            <Link to="/new-campus"><button className="btn btn-default">Add Campus</button></Link>
            <div className="campus-list">
                <ul>
                {campuses.map(campus => <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link> <button value={campus.id} onClick={removeCampus} className="btn btn-default">Delete</button></li>)}
                </ul>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        campuses: state.allCampuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeCampus: function(event) {
            confirm("Are you sure you want to delete this campus?");
            dispatch(deleteCampus(event.target.value))
            dispatch(fetchCampuses());
        }
    }
}

const CampusList = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default CampusList;
