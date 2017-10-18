import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, fetchStudents } from '../reducers';

function AllStudents(props) {
    const { students, removeStudent } = props;
    return (
        <div>
            <div className="title">All Students</div>
            <Link to="/new-student"><button className="btn btn-default">Add Student</button></Link>
            <div className="student-list">
                <ul>
                {students.map(student => <li key={student.id}><Link to={`/students/${student.id}`}>{student.fullName}</Link> <button value={student.id} onClick={removeStudent} className="btn btn-default">Delete</button></li>)}
                </ul>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        students: state.allStudents
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeStudent: function(event) {
            confirm("Are you sure you want to delete this student?");
            dispatch(deleteStudent(event.target.value))
            dispatch(fetchStudents());
        }
    }
}

const StudentList = connect(mapStateToProps, mapDispatchToProps)(AllStudents);

export default StudentList;

