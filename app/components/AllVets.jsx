import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AllVets(props) {
    const { vets } = props;
    return (
        <div>
        {vets.map(vet => 
        (<Link to={`/vets/${vet.id}`} key={vet.id}>
            <div>{vet.name}</div>
        </Link>
        ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        vets: state.allVets
    }
}

export default connect(mapStateToProps)(AllVets);
