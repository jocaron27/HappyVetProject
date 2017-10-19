import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SingleCampus(props) {
    const { campus, students } = props;
    return (
        <div>
            <Link to={`/campuses/edit/${campus.id}`}>
                <button value={campus.id} className="btn btn-default">Edit</button>
            </Link>
            <div className="title">{campus.name}</div>
            <div className="subtitle">Location: {campus.location}</div>
            <img src={campus.imageUrl} />
            <ul>
                {students.map(student => <li key={student.id}><Link to={`/students/${student.id}`}>{student.fullName}</Link></li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = function(state, ownProps) {
    const campusId = Number(ownProps.match.params.id)
    return {
        campus: state.allCampuses.find(campus => campus.id === campusId) || {name: '', location: '', imageUrl: ''},
        students: state.allStudents.filter(student => student.campusId === campusId)
    }
};

const LoadCampus = connect(mapStateToProps)(SingleCampus);

export default LoadCampus;

