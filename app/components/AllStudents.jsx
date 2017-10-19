import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, fetchStudents } from '../reducers';

function AllStudents(props) {
    const { students, removeStudent } = props;
    return (
        <div className="main">
            <div className="student-add">
                <Link to="/new-student"><button className="button-main"><span className="glyphicon glyphicon-plus" />Add Student</button></Link>
            </div>
            <div className="student-list">
                <table>
                {students.map(student => {
                    return (
                        <tr key={student.id}>
                            <td className="modify"><Link to={`/students/edit/${student.id}`}>
                                <button value={student.id} className="glyphicon glyphicon-pencil" />
                            </Link>
                            <button value={student.id} onClick={removeStudent} className="glyphicon glyphicon-remove" />
                            </td>
                            <td><Link to={`/students/${student.id}`}><button className="student-button">{student.fullName}</button></Link></td>
                        </tr>
                    )}
                )}
                </table>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        students: state.allStudents
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        removeStudent: function(event) {
            confirm("Are you sure you want to delete this student?");
            dispatch(deleteStudent(event.target.value, ownProps.history))
            dispatch(fetchStudents());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);

