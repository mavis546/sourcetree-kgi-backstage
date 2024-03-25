import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "../../components/react-datepicker/react-datepicker.css";

function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("9999/12/31"));
  return (

    <div>
      <div className="container">
        <div className="mb-3">
          <div className='col-sm labels-area me-3'>
            <label>身份證字號:</label>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="請輸入身份證字號" />
              <label for="floatingInput">請輸入身份證字號</label>
            </div>
          </div>
          <div className='col-sm labels-area me-3'>
            <label>手機號碼:</label>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="請輸入手機號碼" />
              <label for="floatingInput">請輸入手機號碼</label>
            </div>
          </div>
          <div className='col-sm labels-area'>
            <label>客戶姓名:</label>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="請輸入客戶姓名" />
              <label for="floatingInput">請輸入客戶姓名</label>
            </div>
          </div>
        </div>

        <div className="labels-list">
          <div className='labels-area me-3'>
            <label>查詢起始日期:</label>
            <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="請輸入起始日期" />
            {/*  showIcon */}
            <i class="fa-regular fa-calendar-check calendar-icon-area" style={{}}></i>
            {/* < DatePicker
              selected={date}
              onSelect={handleDateSelect}  //點擊日期時
              onChange={handleDateChange}  //僅當值改變時
            /> */}
          </div>
          <div className='labels-area me-3'>
            <label>查詢結束日期:</label>
            <DatePicker dateFormat="yyyy/MM/dd" selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="請輸入結束日期" />
            <i class="fa-regular fa-calendar-check calendar-icon-area"></i>
          </div>
          <button type="button" class="btn btn-primary">
            <i class="fa-solid fa-magnifying-glass"></i>&nbsp;
            <span>查詢</span>
          </button>
        </div>

        <h6 className='mt-5 flex-row-between'>
          <div>
            <i class="fa-solid fa-list-check me-1"></i>
            <span className='me-1'>查詢時間 : 2023/01/01 - 2024/01/01</span>
          </div>
        </h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">身份證字號</th>
              <th scope="col">是否綁定身份證字號</th>
              <th scope="col">遠傳FETUID</th>
              <th scope="col">客戶姓名</th>
              <th scope="col">手機號碼</th>
              <th scope="col">E-mail</th>
              <th scope="col">建立時間</th>
              <th scope="col">更新時間</th>
              <th scope="col">草稿筆數</th>
              <th scope="col">進行中筆數</th>
              <th scope="col">已完成筆數</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">A123456565</th>
              <td>是</td>
              <td>AAA02331</td>
              <td>王小明</td>
              <td>0911111222</td>
              <td>WangYu@gmail.com</td>
              <td>2024/1/1 09:00</td>
              <td>2024/1/19 15:10</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <div className="flex-row-between-alignitems-content">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <button type="button" class="btn btn-light me-1">重置</button>
            <button type="button" class="btn btn-success">匯出</button>
          </div>
        </div>

      </div>
    </div>

  );
}
export default Home;