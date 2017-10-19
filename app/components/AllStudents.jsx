import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, fetchStudents } from '../reducers';

function AllStudents(props) {
    const { students, removeStudent } = props;
    return (
        <div className="main">
            <div className="campus-add">
                <Link to="/new-student"><button className="button-main"><span className="glyphicon glyphicon-plus" />Add Student</button></Link>
            </div>
            <div className="list">
                <table>
                <tr>
                    <th>Students</th>
                    <th />
                </tr>
                {students.map(student => {
                    return (
                        <tr key={student.id}>
                            <td><Link to={`/students/${student.id}`}>{student.fullName}</Link></td>
                            <td><Link to={`/students/edit/${student.id}`}>
                                <span value={student.id} className="glyphicon glyphicon-pencil" />
                            </Link>
                            <span value={student.id} onClick={removeStudent} className="glyphicon glyphicon-remove" />
                            </td>
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

