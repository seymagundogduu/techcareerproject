import {useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Button, Table } from 'antd';

import React from 'react'
import confirm from 'antd/lib/modal/confirm';
import { ExclamationCircleOutlined } from '@ant-design/icons';


function Customers() {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  

  useEffect(() =>{
    axios("https://northwind.vercel.app/api/customers")
    .then((res)=> {
      setUser(res.data)
      setLoading(false)
    })
    
  },[]);
  const gotocustomerDetail = (id) => {
    navigate(`/customers/${id}`);
  }
  const updateItem = (id) => {
    navigate("/customers/update/" + id);
  };
  const deleteItem = (id) => {
    confirm({
      title: 'Are you sure delete this customer?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
          setLoading(true)
          axios.delete(`https://northwind.vercel.app/api/customers/${id}`)
              .then(res => {
                  setUser(res.data);
              })
      },

      onCancel() {
          console.log('Cancel');
      },
  });



}
  let columns = [
    {
      title: "Id",
      dataIndex: 'id'
    },
    {
      title: "Company Name",
      dataIndex: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName)
    },
    {
      title: "Contact Name",
      dataIndex: 'contactName'
    },
    {
      title: "Contact Title",
      dataIndex: 'contactTitle'
    },
    {
      title: " Detail",
      dataIndex: 'id',
      render:(id) => <Button onClick={() => gotocustomerDetail(id)} type="dashed">Customer Detail</Button>
    },
    {
      title: "Update",
      dataIndex: "id",
      render: (id) =>  <Button onClick={() => updateItem(id)} type="primary">  Update </Button>
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) =>  <Button onClick={() => deleteItem(id)} type="danger">  Delete </Button>
    }
  
    
  ]

 

  return (
 <>
 <Table pagination={{pageSize:8}} bordered={true}   columns={columns} dataSource={user} loading ={loading}>
 </Table>
 
 </>
  )
}

export default Customers;
