import React from "react"
// import ChartBlock from "./components/chartBlock/chartBlock";
import { Routes, Route, BrowserRouter, Link} from "react-router-dom";
import Servers from "./pages/Routers";
import ChartBlock from "./components/chartBlock/chartBlock";
import './App.css'

function App() {


  return (
    <BrowserRouter>
          <div className="navbar">
            <div className="navbar-navigate">
            <Link className="navbar__links" to="/servers">Server</Link>
            <Link className="navbar__links" to="/routers">Routers</Link>
            <Link className="navbar__links" to="/works">Works</Link>
            </div>
          </div>
      <Routes>
        <Route path="/servers" element={<Servers/>}></Route>
        <Route path="/ttg" element={<ChartBlock/>}></Route>
        <Route path="/works" element={<ChartBlock/>}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
