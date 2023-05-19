import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NoteAppHeader from './components/NoteAppHeader';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import { putAccessToken, getUserLogged } from './utils/network-data';

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [authedUser, setAuthedUser] = React.useState(null);

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    })
  }, []);

  const onLoginSuccessHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const onLogoutHandler = () => {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initializing){
    return null;
  } else if (authedUser !== null){
    return (
      <div className="app-container">
        <NoteAppHeader logout={onLogoutHandler} />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archives" element={<ArchivesPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="/notes/new" element={<AddNotePage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </main>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <NoteAppHeader logout={onLogoutHandler} />
        <main>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
            </Routes>
        </main>
      </div>
    );
  }
}

export default App;
