import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AllStudents(props) {
    const { students } = props;
    return (
        <div>
            <div className="title">All Students</div>
            <div className="student-list">
                <ul>
                {students.map(student => <li key={student.id}><Link to={`/students/${student.id}`}>{student.fullName}</Link></li>)}
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

const StudentList = connect(mapStateToProps)(AllStudents);

export default StudentList;

