import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props) {
    const { student, campus } = props;
    return (
        <div className="main">
            <div className="student-single">
                <div className="student-header-main">
                    <div className="student-header-sub">
                        <div className="student-title">{student.fullName}</div>
                        <div className="modify">
                            <Link to={`/students/edit/${student.id}`}>
                                <button value={student.id} className="glyphicon glyphicon-pencil" />
                            </Link>
                        </div>
                    </div>
                    <h4><b>Campus:</b> <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h4>
                    <h4><b>Email:</b> {student.email}</h4>
                    <h4><b>Age:</b> {student.age}</h4>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    const studentId = Number(ownProps.match.params.id)
    let selectedStudent = state.allStudents.find(student => student.id === studentId) || {first: '', last: '', age: '', email: '', campusId: ''}
    return {
        student: state.allStudents.find(student => student.id === studentId) || {first: '', last: '', age: '', email: '', campusId: ''},
        campus: state.allCampuses.find(campus => campus.id === selectedStudent.campusId) || {id: '', name: ''}
    }
}

const LoadStudent = connect(mapStateToProps)(SingleStudent);

export default LoadStudent;
