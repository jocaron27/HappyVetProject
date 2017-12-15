import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchVets } from '../reducers';

function AllVets(props) {
    const { vets } = props;
    return vets.map(vet => 
        (<Link to={`/vets/${vet.id}`} key={vet.id}>
            <div>{vet.name}</div>
        </Link>
        )
    )
}

function mapStateToProps(state) {
    return {
        vets: state.allVets
    }
}

// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         getVets: function() {
//             dispatch(fetchVets());
//         }
//     }
// }

export default connect(mapStateToProps)(AllVets);
