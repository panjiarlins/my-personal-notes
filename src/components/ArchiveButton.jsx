import React from 'react';
import PropTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

function ArchiveButton({ id, onArchive, isArchived }){
    if (isArchived){
        return <BiArchiveOut className='action' onClick={() => onArchive(id, isArchived)} />;
    } else{
        return <BiArchiveIn className='action' onClick={() => onArchive(id, isArchived)} />;
    }
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    isArchived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
