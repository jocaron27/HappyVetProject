import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SingleCampus(props) {
    const { campus, students } = props;
    return (
        <div className="main">
            <div className="campus-single">
                <div className="campus-info">
                    <img src={campus.imageUrl} />
                    <div className="campus-header-main">
                        <div className="campus-header-sub">
                            <div className="campus-title">{campus.name}</div>
                            <div className="modify">
                                <Link to={`/campuses/edit/${campus.id}`}>
                                    <button value={campus.id} className="glyphicon glyphicon-pencil" />
                                </Link>
                            </div>
                        </div>
                        <div className="campus-subtitle">Location: {campus.location}</div>
                    </div>
                </div>
                <h2 className="student-subtitle">Students:</h2>
                <div className="student-list">
                <table>
                <tbody>
                    {students.map(student => {
                        return (
                            <tr key={student.id}>
                                <Link to={`/students/${student.id}`}><button className="student-button">{student.fullName}</button></Link>
                            </tr>
                        )}
                    )}
                </tbody>
                </table>
            </div>
            </div>
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

