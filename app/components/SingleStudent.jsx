import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props) {
    const { student, campus } = props;
    return (
        <div>
            <div className="title">{student.fullName}</div>
            <div className="subtitle">Campus: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></div>
            <h4>{student.email}</h4>
            <h4>Age: {student.age}</h4>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    const studentId = Number(ownProps.match.params.id)
    let selectedStudent = state.allStudents.find(student => student.id === studentId) || {name: '', age: '', email: '', campusId: ''}
    return {
        student: state.allStudents.find(student => student.id === studentId) || {name: '', age: '', email: '', campusId: ''},
        campus: state.allCampuses.find(campus => campus.id === selectedStudent.campusId) || {id: '', name: ''}
    }
}

const LoadStudent = connect(mapStateToProps)(SingleStudent);

export default LoadStudent;
