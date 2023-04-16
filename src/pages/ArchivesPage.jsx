import React from 'react';
import PropTypes from 'prop-types';
import NoteAppBody from '../components/NoteAppBody';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function ArchivesPageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    const onSearch = keyword => {
        setSearchParams({ keyword });
    }

    return <ArchivesPage defaultKeyword={keyword} onSearch={onSearch} />;
}

class ArchivesPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword){
        this.setState({ keyword });
        this.props.onSearch(keyword);
    }

    render(){
        return (
            <NoteAppBody
            isArchived={true}
            notes={this.state.notes}
            keyword={this.state.keyword}
            onSearch={this.onSearchHandler}
            showFormattedDate={showFormattedDate}
            />
        );
    }
}

ArchivesPage.propTypes = {
    defaultKeyword: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default ArchivesPageWrapper;
