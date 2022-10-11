
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Context } from './context/Context';
import Customers from './context/Customers';
import Login from './context/Login';
import AddCustomer from './context/AddCustomer';

function App() {
  return (
    <div className="App">
     <h1>Project Header</h1>
    <Routes>
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/customers" element={<Customers/>} ></Route>
      <Route path="/addCustomer" element={<AddCustomer/>} ></Route>
     
    </Routes>
   
    </div>
  );
}

export default App;
