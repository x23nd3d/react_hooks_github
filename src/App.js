import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import {AlertState} from "./context/Alert/alertState";
import {GitHubState} from "./context/GitHub/GitHubState";

function App() {
  return (
      <>
        <GitHubState>
        <AlertState>
        <Navbar/>
        <div className="container pt-4">
          <Alert alert={{
            text: "Hello"
          }}/>
      <Switch>
          <Route path="/about" component={About}/>
          <Route path="/profile/:name" component={Profile}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
      </Switch>
        </div>
        </AlertState>
        </GitHubState>
      </>
  );
}

export default withRouter(App);
