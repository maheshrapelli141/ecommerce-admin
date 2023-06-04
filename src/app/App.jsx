import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import { AuthProvider } from './contexts/JWTAuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';
import store from 'redux/store';
import { Provider } from 'react-redux';

const App = () => {
  const content = useRoutes(routes);

  return (
    <Provider store={store}>
      <SettingsProvider>
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>
      </SettingsProvider>
    </Provider>
  );
};

export default App;
