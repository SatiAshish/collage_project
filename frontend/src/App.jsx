import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Register from './pages/Register';
import Login from './pages/Login';
import AddUser from './pages/AddUser';
import AddAnniversy from './pages/AddAnniversary';
import List from './pages/List';
import Error from './pages/Error';
import { Logout } from './pages/Logout';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { AdminLayout } from './components/layouts/Admin-layout';
import { AdminUsers } from './pages/Admin-Users';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/addUser" element={<AddUser />} />
          <Route path="/addAnniversary" element={<AddAnniversy />} /> */}
          <Route path="/list" element={<List />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error/>} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path="addBirthday" element={<AddUser />} />
            <Route path="addAnniversary" element={<AddAnniversy />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
