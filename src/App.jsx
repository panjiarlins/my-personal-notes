import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NoteAppHeader from './components/NoteAppHeader';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import { putAccessToken, getUserLogged } from './utils/network-data';
import usePrevious from './hooks/usePrevious';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import IsLoadingContext from './contexts/IsLoadingContext';

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [authedUser, setAuthedUser] = React.useState(null);

  ////////// Theme Context
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
    };
  }, [theme]);

  React.useEffect(() => {
    if (prevTheme !== theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [prevTheme, theme]);
  //////////

  ////////// Locale Context
  const [locale, setLocale] = React.useState(() => localStorage.getItem('locale') || 'id');

  const toggleLocale = () => {
    setLocale(prevLocale => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  }

  const contextLocale = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);
  //////////

  ////////// Loading Context
  const [isLoading, setIsLoading] = React.useState(() => Boolean(localStorage.getItem('isLoading')) || false);

  const toggleIsLoading = value => {
    setIsLoading(() => {
      localStorage.setItem('isLoading', value);
      return value;
    });
  }

  const contextIsLoading = React.useMemo(() => {
    return {
      isLoading,
      toggleIsLoading,
    };
  }, [isLoading]);
  //////////

  React.useEffect(() => {
    toggleIsLoading(true)
    getUserLogged()
      .then(({ data }) => setAuthedUser(data))
      .finally(() => {
        toggleIsLoading(false);
        setInitializing(false);
      });
  }, []);

  const onLoginSuccessHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    toggleIsLoading(true)
    let userData = null;
    try {
      const { data } = await getUserLogged();
      userData = data;
    } finally {
      toggleIsLoading(false);
    }
    setAuthedUser(userData);
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
        <LocaleContext.Provider value={contextLocale}>
          <IsLoadingContext.Provider value={contextIsLoading}>
            <div className="app-container">
              <NoteAppHeader name={authedUser.name} logout={onLogoutHandler} />
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
          </IsLoadingContext.Provider>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  } else {
    return (
      <ThemeContext.Provider value={contextTheme}>
        <LocaleContext.Provider value={contextLocale}>
          <IsLoadingContext.Provider value={contextIsLoading}>
            <div className="app-container">
              <NoteAppHeader />
              <main>
                <Routes>
                  <Route path="/" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </div>
          </IsLoadingContext.Provider>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
