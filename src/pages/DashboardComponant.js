import {Link, Route, Switch, useHistory } from "react-router-dom"
import AuthService from "../services/AuthService"
import SendMoneyComponant from "./SendMoneyComponant";
import WalletComponant from "./WalletComponant";

function DashboardComponant(){

    const history = useHistory();

    const logout = () => {
        AuthService.logout();
        history.push('/login');
    }

    return (
        <div className="container">
            <div c>

            </div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
                <Link to="/wallet" className="navbar-brand">Wallet App</Link>
                    
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/wallet" className="nav-link">Wallet</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/wallet/send-money" className="nav-link">Send Money</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{cursor:'pointer'}} onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
            <Switch>
                <Route path='/wallet/' component={WalletComponant} exact/>
                <Route path='/wallet/send-money' component={SendMoneyComponant} exact/>
            </Switch>
            </div>
            
        </div>
    )
}

export default DashboardComponant