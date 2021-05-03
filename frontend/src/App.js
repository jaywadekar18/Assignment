import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Privateroute from './PrivateRoute/PrivateRoute'
import Home from './Home/Home'
import Login from "./Authentication/Login";
import Crud from './CRUD/Crud'
import Add from './CRUD/Add'

function App() {
  return (
    <div>


      <Router>
        <Switch>
          <Privateroute exact path="/Crud" component={Crud} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Privateroute exact path="/Add" component={Add} />
          
          <Redirect from="/" to="/Home" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
