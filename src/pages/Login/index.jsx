import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// function Login() {
function Login({ authenticate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    if (username === 'a' && password === 'b') {
      authenticate(); // 調用從父組件傳進來的 authenticate 函数
      navigate('/home'); // 登入成功後導航到內頁
    } else {
      alert('帳號或密碼錯誤');
    }
  }

  return (
    <div className="card text-center m-4">
      {/* 登入表單 */}
      <div className="card-header">
        {/* <img src="/assets/images/LOGOArea.png" className="logo-area" alt="logo" /> */}
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush card-ul-reset">
          <li className="my-2 mx-2">
            <span>帳號 : </span>
            <input
              className="modal-input-reset"
              type="text"
              placeholder="請輸入帳號"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="my-2 mx-2">
            <span>密碼 : </span>
            <input
              className="modal-input-reset"
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button className='btn btn-primary' onClick={handleLogin}>登入</button>
      </div>
    </div>
  );
}
export default Login;