import {useState, useEffect} from 'react'
import axios from "axios"
import { Link, Route, Routes ,useNavigate } from "react-router-dom";

function Customers() {

  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    axios("https://northwind.vercel.app/api/customers")
    .then((res)=> setUser(res.data))
    
  },[]);

  const gotocd = (id) => {
    navigate('/customers/' + id)
  }

  return (
 <>
 <ul>
 {
    user &&  user.map((user) => {return <li key={user.id}> <Link to={'/customers/' + user.id}>{user.companyName} <br/> <button onClick={() => gotocd(user.id)}>Go To Customer Detail</button></Link></li>
    
    
  })
  }
 
 </ul>
 

 </>
  )
}

export default Customers;
