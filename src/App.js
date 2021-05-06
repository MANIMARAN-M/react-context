import NavBar from "./Components/NavBar";
import HomePage from "./Containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/style.css";
import { UserProvider } from "./Store/ContextStore/UserData";
import Sampl from "./Containers/Sampl";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sample" component={Sampl} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
