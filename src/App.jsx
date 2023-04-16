import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoteAppHeader from './components/NoteAppHeader';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
        <NoteAppHeader />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/archives' element={<ArchivesPage />} />
            <Route path='/notes/:id' element={<DetailPage />} />
        </Routes>
    </div>
  );
}

export default App;
