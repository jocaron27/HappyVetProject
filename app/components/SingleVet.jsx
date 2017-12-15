import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SingleVet(props) {
    const { vet} = props;
    return (
        <div>
            <div>{vet.name}</div>
            <div>{vet.description}</div>
        </div>
    )
}

const mapStateToProps = function(state, ownProps) {
    const vetId = Number(ownProps.match.params.id)
    return {
        vet: state.allVets.find(vet => vet.id === vetId) || {name: '', description: ''},
    }
};

export default connect(mapStateToProps)(SingleVet);

