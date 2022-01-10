import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import LoginComponant from './pages/LoginComponant';
import DashboardComponant from './pages/DashboardComponant';
import AuthService from './services/AuthService';

function App() {
  return (
    <BrowserRouter>
          <Switch>
            <Route path='/login' component={LoginComponant} exact/>
            <PrivateRoute path="/wallet/" component={DashboardComponant} />
          </Switch>
          {!AuthService.isLoggedIn() &&
              <Redirect to={{pathname: 'login'}}/>
          }
      </BrowserRouter>
  );
}

export default App;
