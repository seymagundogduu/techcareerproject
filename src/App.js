
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Customers from './context/Customers';
import Login from './context/Login';
import AddCustomer from './context/AddCustomer';
import CustomerDetail from './context/CustomerDetail';

function App() {
  return (
    <div className="App">
     <h1>Project Header</h1>
     <ul style={{display:'flex' , justifyContent:'space-between'}}>
      <li><Link to='/'>Login</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/addCustomer'>Add Customer</Link></li>
   
     
     </ul>
    <Routes>
      <Route path="/" element={<Login></Login>} ></Route>
      <Route path="/customers" element={<Customers/>}></Route>
      <Route path="/customers/:id" element={<CustomerDetail/>} ></Route>
      <Route path="/addCustomer" element={<AddCustomer/>} ></Route>
      
     
    </Routes>

    <h6> © ~ ŞEYMA GÜNDOĞDU </h6>
   
    </div>
  );
}

export default App;
