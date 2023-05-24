import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, 
  Route, Redirect, BrowserRouter, Routes,} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="App">Tatvasoft Summer Industrial Project</div>&nbsp;&nbsp;&nbsp;&nbsp;
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
