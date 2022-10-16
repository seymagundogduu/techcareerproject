import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Customers from './Customers';
import CustomerDetail from './CustomerDetail';
import AddCustomer from './AddCustomer';
import CustomerUpdate from './CustomerUpdate';

function Anasayfa() {
    const items = [
      // { label: <Link to='/'>Login</Link>, key: '1' },
      { label: <Link to="/customers">Customers</Link>, key: "2" },
      { label: <Link to="/customers/:id">Customer Detail</Link>, key: "3" },
      { label: <Link to="/addCustomer">Add Customer</Link>, key: "4" },
      { label: <Link to="/customers/update/:id">Customer Update</Link>, key: "5" },
    ];
  
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
            />
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              <h1>Techcareer Project</h1>
              <Routes>
                <Route path="/" element={<Anasayfa></Anasayfa>}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/customers/:id" element={<CustomerDetail />}></Route>
                <Route path="/addCustomer" element={<AddCustomer />}></Route>
               
                <Route
              path="/customers/update/:id"
              element={<CustomerUpdate />}
            ></Route>
               
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            © - 2022 - ŞEYMA GÜNDOĞDU
          </Footer>
        </Layout>
      </div>
    );
  }
  
  export default Anasayfa;