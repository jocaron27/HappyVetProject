import React from 'react';
import { connect } from 'react-redux';

function SingleCampus(props) {
    const { campus } = props;
    return (
        <div className="title">{campus.name}</div>
    )
}

function mapStateToProps(state, ownProps) {
    const campusId = Number(ownProps.match.params.id)
    return {
        campus: state.allCampuses.find(campus => campus.id === campusId),
        students: state.allStudents.filter(student => student.campusId === campusId)
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         getCampus: function(campus) {
//             dispatch(fetchCampuses(campus))
//         }
//     }
// }

const LoadCampus = connect(mapStateToProps)(SingleCampus);

export default LoadCampus;

