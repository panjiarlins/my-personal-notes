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
import ThemeContext from './contexts/ThemeContext';
import usePrevious from './hooks/usePrevious';

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [authedUser, setAuthedUser] = React.useState(null);
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');
  const prevTheme = usePrevious(theme);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  }

  const contextTheme = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    }
  }, [theme]);

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    })
  }, []);

  React.useEffect(() => {
    if (prevTheme !== theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [prevTheme, theme]);

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
      <ThemeContext.Provider value={contextTheme}>
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
      </ThemeContext.Provider>
    );
  } else {
    return (
      <ThemeContext.Provider value={contextTheme}>
        <div className="app-container">
          <NoteAppHeader logout={onLogoutHandler} />
          <main>
              <Routes>
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
              </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
