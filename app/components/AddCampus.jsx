import React from 'react';
import { connect } from 'react-redux';
import { writeCampusName, writeCampusLocation, selectCampusImage, createCampus } from '../reducers';

function AddCampus(props) {
    const { newCampusEntryImage, newCampusEntryName, newCampusEntryLocation, handleChangeName, handleChangeLocation, handleChangeImage, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Add a Campus</label>
          <input
            value={newCampusEntryName}
            onChange={handleChangeName}
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter campus name"
          />
          <input
          value={newCampusEntryLocation}
          onChange={handleChangeLocation}
          className="form-control"
          type="text"
          name="location"
          placeholder="Enter campus location"
          />
          <select name="imageUrl" value={newCampusEntryImage} onChange={handleChangeImage}>
            <option>Choose an Image</option>
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
          <button type="submit" className="btn btn-default">Add Campus</button>
        </div>
      </form>
    )
}

const mapStateToProps = function (state) {
    return {
        newCampusEntryName: state.newCampusEntryName,
        newCampusEntryLocation: state.newCampusEntryLocation,
        newCampusEntryImage: state.newCampusEntryImage
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
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
    handleSubmit (event) {
      event.preventDefault();
      const name = event.target.name.value;
      const location = event.target.location.value;
      const imageUrl = event.target.imageUrl.value;
      dispatch(createCampus({name, location, imageUrl}, ownProps.history));
      dispatch(writeCampusName(''));
      dispatch(writeCampusLocation(''));
      dispatch(selectCampusImage(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);

