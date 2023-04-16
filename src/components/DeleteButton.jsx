import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';

function DeleteButton({ id, onDelete}){
    return <MdDeleteOutline className='action' onClick={() => onDelete(id)} />;
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
