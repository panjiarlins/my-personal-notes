import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import LocaleContext from '../contexts/LocaleContext';

function NoteItemDate({ createdAt }){
    const { locale } = React.useContext(LocaleContext);
    return <p className="note-item__createdAt">{showFormattedDate(createdAt, locale === 'id' ? 'id-ID' : 'en-US')}</p>;
}

NoteItemDate.propTypes = {
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemDate;
