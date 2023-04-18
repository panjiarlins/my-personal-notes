import React from 'react';
import { Link } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';

function NewNoteButton(){
    return <Link to={'/notes/new'} className="action"><GrAddCircle /></Link>;
}

export default NewNoteButton;
