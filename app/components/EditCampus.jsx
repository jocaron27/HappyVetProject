import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editCampus, writeCampusName, writeCampusLocation, selectCampusImage } from '../reducers';

function EditCampus(props) {
    const { campus, students, handleChangeName, handleChangeLocation, handleChangeImage, handleSubmit, newCampusEntryName, newCampusEntryLocation, newCampusEntryImage } = props;
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Edit Campus</label>
          <input
            value={newCampusEntryName}
            onChange={handleChangeName}
            className="form-control"
            type="text"
            name="name"
            placeholder={campus.name}
          />
          <input
          value={newCampusEntryLocation}
          onChange={handleChangeLocation}
          className="form-control"
          type="text"
          name="location"
          placeholder={campus.location}
          />
          <select name="imageUrl" value={newCampusEntryImage} selected={campus.imageUrl} onChange={handleChangeImage}>
            <option>Choose an Image</option>
            <option value="/mars.png">Red Planet</option>
            <option value="/neptune.png">Purple Planet</option>
            <option value="/venus.png">Orange Planet</option>
            <option value="/jupiter.png">Brown Planet</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Edit Campus</button>
        </div>
      </form>
      <ul>
      {students.map(student => {
        return (
        <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.fullName}</Link> <Link to={`/students/edit/${student.id}`}>
            <button value={student.id} className="btn btn-default">Edit</button>
        </Link>
        </li>
        )}
      )}
      </ul>
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

