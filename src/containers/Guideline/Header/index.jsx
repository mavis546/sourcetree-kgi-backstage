// import { useState, useEffect } from "react";
// import { API_GET_DATA } from '../../global/constants'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useState, useEffect } from "react";
// import './header.scss';


function Header({ onLogout }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof onLogout === 'function') { // 確保 onLogout 是一個函數
      onLogout();
      navigate('/login');
    }
  };

  return (
    <div>
      <header className="header">
        <div className="container-fluid top-bg-white">
          <a href="#" >
            <img className="logo-area" src="/assets/images/LOGOArea.svg" alt="logo" />
          </a>
          <button className='btn logout-button' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
        {/* <a href="#" >
            <img src="/assets/images/LOGOArea.svg" className="logo-area" alt="logo" />
          </a> */}
        <nav className="navbar navbar-expand-md" role="navigation">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-div" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <button type="button" className="btn"><Link to={`/home`}>商品管理</Link></button>
                </li>
                {/* <li className="nav-item">
                  <button type="button" className="btn">報表查詢</button>
                </li> */}
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">報表查詢</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown01">
                    <li><Link to={`/about`}><a class="dropdown-item" href="#">客戶RSP存錢罐資料</a></Link></li>
                    <li><a class="dropdown-item" href="#">統計資料</a></li>
                    <li><a class="dropdown-item" href="#">顧客滿意度(NPS)統計</a></li>
                    <li><a class="dropdown-item" href="#">新增商品審核歷史記錄</a></li>
                    <li><a class="dropdown-item" href="#">網站管理審核歷史記錄</a></li>
                    <li><a class="dropdown-item" href="#">管理者權限審核歷史記錄</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">網站管理</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">管理者權限</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">審核管理</button>
                </li>
              </ul>
            </div>
          </div>

        </nav>

        <nav aria-label="breadcrumb" style={{ margin: '0 0 0 21%' }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-font">商品管理</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="breadcrumb-position">.</span>
            </li>
          </ol>
        </nav>
      </header>
      <wrapper className="wrapper col-md-7 col-lg-8">
        <Outlet />
      </wrapper>
    </div>
  );
}
export default Header;