import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FrontPage from './FrontPage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to="/measures" />;
  }
  return (
    <>
      <FrontPage />
    </>
  );
}

export default App;
