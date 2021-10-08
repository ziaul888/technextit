import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Header } from "./layout/Header";
import { MissionList } from "./component/MissionList";

function App() {
  return (
    <>
      <Header />
      <MissionList />
    </>
  );
}

export default App;
