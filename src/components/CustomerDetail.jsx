import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function CustomerDetail() {
    const [detail, setDetail] = useState([{}]);
   const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/customers/${id}`)
    .then(res =>  { setDetail(res.data);
    } );
    }, [id]);
    

  
    return (
    < >

    <div style={{display:"flex"}}>  <h1>Id: {detail.id}</h1> </div>
   <div   style={{display:"flex"}}>   <h1>contactName: {detail.contactName}</h1></div>
   <div style={{display:"flex"}}>   <h1>contactTitle: {detail.contactTitle}</h1> </div>
  
    <button onClick={() => navigate(-1)}>Back</button>

    
    </>
  )
}

export default CustomerDetail;