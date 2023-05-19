import React from 'react';
import PropTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

function ArchiveButton({ onArchive, isArchived }){
    if (isArchived){
        return <BiArchiveOut className='action' onClick={onArchive} />;
    } else{
        return <BiArchiveIn className='action' onClick={onArchive} />;
    }
}

ArchiveButton.propTypes = {
    onArchive: PropTypes.func.isRequired,
    isArchived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
