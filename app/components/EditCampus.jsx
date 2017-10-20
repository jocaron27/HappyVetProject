import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editCampus, writeCampusName, writeCampusLocation, selectCampusImage } from '../reducers';

function EditCampus(props) {
    const { campus, students, handleChangeName, handleChangeLocation, handleChangeImage, handleSubmit, newCampusEntryName, newCampusEntryLocation, newCampusEntryImage } = props;
    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h2 className="instructions">Edit Campus</h2>
                    <label htmlFor="name">Campus Name:</label>
                    <input
                        value={newCampusEntryName}
                        onChange={handleChangeName}
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder={campus.name}
                    />
                    <label htmlFor="name">Campus Location:</label>
                    <input
                    value={newCampusEntryLocation}
                    onChange={handleChangeLocation}
                    className="form-control"
                    type="text"
                    name="location"
                    placeholder={campus.location}
                    />
                    <label htmlFor="imageUrl">Choose an image:</label>
                    <br />
                    <select name="imageUrl" value={newCampusEntryImage || campus.imageUrl} onChange={handleChangeImage}>
                        <option value="/mars.png">Red Planet</option>
                        <option value="/neptune.png">Purple Planet</option>
                        <option value="/venus.png">Orange Planet</option>
                        <option value="/jupiter.png">Brown Planet</option>
                        <option value="/mercury.png">Yellow Planet</option>
                        <option value="/uranus.png">Blue Planet</option>
                        <option value="/pluto.png">White Planet</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="button-main">Edit Campus</button>
                </div>
                <div className="edit-students">
                    <h2 className="instructions">Edit Students</h2>
                    <table className="student-list">
                    <tbody>
                        {students.map(student => {
                            return (
                            <tr key={student.id}>
                                <td className="modify">
                                    <Link to={`/students/edit/${student.id}`}>
                                        <button value={student.id} className="glyphicon glyphicon-pencil" />
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/students/${student.id}`}><button className="student-button">{student.fullName}</button></Link>
                                </td>
                            </tr>
                            )}
                        )}
                    </tbody>
                    </table>
                </div>
                    <div className="student-add">
                    <Link to="/new-student"><button className="button-main"><span className="glyphicon glyphicon-plus" />Add Student</button></Link>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    const campusId = Number(ownProps.match.params.id);
    return {
        campus: state.allCampuses.find(campus => campus.id === campusId) || {name: '', location: '', imageUrl: ''},
        students: state.allStudents.filter(student => student.campusId === campusId),
        newCampusEntryName: state.newCampusEntryName,
        newCampusEntryLocation: state.newCampusEntryLocation,
        newCampusEntryImage: state.newCampusEntryImage
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  const id = Number(ownProps.match.params.id);
  return {
    handleChangeName (event) {
        dispatch(writeCampusName(event.target.value));
    },
    handleChangeLocation(event) {
        dispatch(writeCampusLocation(event.target.value))
    },
    handleChangeImage(event) {
        dispatch(selectCampusImage(event.target.value))
    },
    handleSubmit: function(event) {
        event.preventDefault();
        const checkForUpdate = { name: event.target.name.value, location: event.target.location.value, imageUrl: event.target.imageUrl.value}
        const toUpdate = { id };
        for (var keys in checkForUpdate) {
            if (checkForUpdate[keys]) {
                toUpdate[keys] = checkForUpdate[keys];
            }
        }
        dispatch(editCampus(toUpdate, ownProps.history));
        dispatch(writeCampusName(''));
        dispatch(writeCampusLocation(''));
        dispatch(selectCampusImage(''));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);

