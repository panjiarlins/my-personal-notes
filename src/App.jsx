import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';

function App() {
  return (
    <div className="app-container">
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/archives' element={<ArchivesPage />} />
        </Routes>
    </div>
  );
}

export default App;
