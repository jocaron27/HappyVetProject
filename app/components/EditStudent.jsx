import React from 'react';
import { connect } from 'react-redux';
import { editStudent, writeStudentFirstName, writeStudentLastName, writeStudentAge, writeStudentEmail, writeStudentCampus } from '../reducers';

function EditStudent(props) {
    const {
        allCampuses, student, handleChangeFirstName, handleChangeLastName, handleChangeAge, handleChangeEmail, handleChangeCampusId, handleSubmit, newStudentEntryFirstName, newStudentEntryLastName, newStudentEntryAge, newStudentEntryEmail, newStudentEntryCampusId } = props;
    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h2 className="instructions">Edit Student</h2>
                    <label htmlFor="name">Student First Name:</label>
                    <input
                        value={newStudentEntryFirstName}
                        onChange={handleChangeFirstName}
                        className="form-control"
                        type="text"
                        name="first"
                        placeholder={student.first}
                    />
                    <label htmlFor="name">Student Last Name:</label>
                    <input
                        value={newStudentEntryLastName}
                        onChange={handleChangeLastName}
                        className="form-control"
                        type="text"
                        name="last"
                        placeholder={student.last}
                    />
                    <label htmlFor="name">Student Age:</label>
                    <input
                        value={newStudentEntryAge}
                        onChange={handleChangeAge}
                        className="form-control"
                        type="text"
                        name="age"
                        placeholder={student.age}
                        min="18"
                    />
                    <label htmlFor="name">Student Email:</label>
                    <input
                        value={newStudentEntryEmail}
                        onChange={handleChangeEmail}
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder={student.email}
                    />
                    <label htmlFor="name">Choose a campus:</label>
                    <br />
                    <select name="campusId" value={newStudentEntryCampusId || student.campusId} onChange={handleChangeCampusId}>
                        {allCampuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="button-main">Edit Student</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    const studentId = Number(ownProps.match.params.id);
    return {
        allCampuses: state.allCampuses,
        student: state.allStudents.find(student => student.id === studentId) || {first: '', last: '', age: '', email: '', campusId: ''},
        newStudentEntryFirstName: state.newStudentEntryFirstName,
        newStudentEntryLastName: state.newStudentEntryLastName,
        newStudentEntryAge: state.newStudentEntryAge,
        newStudentEntryEmail: state.newStudentEntryEmail,
        newStudentEntryCampusId: state.newStudentEntryCampusId
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  const id = Number(ownProps.match.params.id);
  return {
    handleChangeFirstName (event) {
        dispatch(writeStudentFirstName(event.target.value));
    },
    handleChangeLastName(event) {
        dispatch(writeStudentLastName(event.target.value))
    },
    handleChangeAge(event) {
        dispatch(writeStudentAge(event.target.value))
    },
    handleChangeEmail(event) {
        dispatch(writeStudentEmail(event.target.value))
    },
    handleChangeCampusId(event) {
        dispatch(writeStudentCampus(event.target.value))
    },
    handleSubmit: function(event) {
        event.preventDefault();
        const checkForUpdate = { first: event.target.first.value, last: event.target.last.value, age: event.target.age.value, email: event.target.email.value, campusId: event.target.campusId.value}
        const toUpdate = { id };
        for (var keys in checkForUpdate) {
            if (checkForUpdate[keys]) {
                toUpdate[keys] = checkForUpdate[keys];
            }
        }
        dispatch(editStudent(toUpdate, ownProps.history));
        dispatch(writeStudentFirstName(''));
        dispatch(writeStudentLastName(''));
        dispatch(writeStudentAge(''));
        dispatch(writeStudentEmail(''));
        dispatch(writeStudentCampus(''));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);

