import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Header } from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route to="./" exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
