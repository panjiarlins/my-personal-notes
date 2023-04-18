import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoteAppHeader from './components/NoteAppHeader';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPage from './pages/DetailPage';
import AddNewPage from './pages/AddNewPage';

function App() {
  return (
    <div className="app-container">
        <NoteAppHeader />
        <main>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/archives' element={<ArchivesPage />} />
                <Route path='/notes/:id' element={<DetailPage />} />
                <Route path='/notes/new' element={<AddNewPage />} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
