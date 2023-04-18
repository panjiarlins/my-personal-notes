import React from 'react';
import PropTypes from 'prop-types';
import NoteAppBody from '../components/NoteAppBody';
import NewNoteButton from '../components/NewNoteButton';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    const onSearch = keyword => {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} onSearch={onSearch} />;
}

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getActiveNotes(),
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
            <>
            <NoteAppBody
            isArchived={false}
            notes={this.state.notes}
            keyword={this.state.keyword}
            onSearch={this.onSearchHandler}
            showFormattedDate={showFormattedDate}
            />
            <div className="homepage__action">
                <NewNoteButton />
            </div>
            </>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default HomePageWrapper;
