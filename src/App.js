import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from './containers/Guideline/Header';
//Pages
import Login from './pages/Login';
import ProtectedRoute from './pages/Login/ProtectedRoute'; // 引入保護路由組件
import Home from './pages/Home';
import About from './pages/About';
// import logo from './logo.svg';
// import './App.css';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // 假設這個函數在某處被調用以更新登入狀態
  // const login = () => setIsAuthenticated(true);
  // const logout = () => setIsAuthenticated(false);
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); //登入成功後將狀態保存到localStorage
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false'); // 登出後，更新 localStorage 中的狀態
  };

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" exact element={<Login authenticate={login} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          {/* 只有當 isAuthenticated 為 true 時，Home 組件才可訪問 */}
          <Route element={<Header onLogout={logout} />}>
            {/* <Header onLogout={logout} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* <Header onLogout={logout} />
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
