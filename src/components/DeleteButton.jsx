import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';

function DeleteButton({ onDelete }){
    return <MdDeleteOutline className='action' onClick={onDelete} />;
}

DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
