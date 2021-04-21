import { useLocation, Switch, Route } from 'react-router-dom';

import HolidaysPage from './components/HolidaysPage';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

export default function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/holidays" exact>
          <HolidaysPage />
        </Route>
      </Switch>
    </>
  );
}
