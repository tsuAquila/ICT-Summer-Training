import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewEmployee />}></Route>
          <Route path="/add" element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
