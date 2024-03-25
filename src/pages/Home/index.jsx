import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "../../components/react-datepicker/react-datepicker.css";
import { useForm } from "react-hook-form";
function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  console.log("errors", errors);
  // useEffect(() => {
  //   reset()
  // }, [prod_name]);
  const [isModalVisible, setIsModalVisible] = useState(false); // 新增商品 Modal
  // const [isProductListModalVisible, setIsProductListModalVisible] = useState(false); // 商品列表 Modal
  const [isVisible, setIsVisible] = useState(false);
  const [isFileInputMessage, setIsFileInputMessage] = useState(false);
  const [imageSrc, setImageSrc] = useState('/assets/images/diamond.svg');
  const [isHandleUploadMessage, setIsHandleUploadMessage] = useState(false);
  let modalSetTimeOut = setTimeout(() => {
    setIsVisible(false); // 2 秒後設置為隱藏
  }, 2000);
  const isAdd = () => {
    setIsVisible(true); // 設置為顯示
    clearTimeout(modalSetTimeOut);
  }
  function closeModal(event) {
    if (isVisible || isModalVisible) {
      if (event.target.id === "close-modal") {
        setIsVisible(false);
        setIsModalVisible(false);
        // setIsProductListModalVisible(false);
      }
    }
  }
  function openModal() {
    setIsModalVisible(true);
  }
  // function openProductListModal() {
  //   setIsProductListModalVisible(true);
  // }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("9999/12/31"));
  return (
    <div>

      {/* <!-- 新增商品 Modal --> */}
      {isModalVisible && (
        // <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div
          className="fullScreenBlack"
          onClick={(event) => closeModal(event)}
          id="close-modal"
        >
          <div className="modal-dialog modal-area-set">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">新增 { }ex:商品</h5>
                <button type="button" className="btn-close-set" onClick={(event) => closeModal(event)} id="close-modal"> × </button>
              </div>
              <form onSubmit={handleSubmit((onSubmit) => { })} autoComplete="off">
                <div className="modal-body">
                  <ul className="list-group list-group-flush">
                    <li className="mb-3">
                      <div className='labels-area me-3'>
                        <label>權重:</label>
                        <div class="form-floating">
                          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>請選擇權重</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                            <option value="3">7</option>
                            <option value="3">8</option>
                            <option value="3">9</option>
                            <option value="3">10</option>
                          </select>
                          <label for="floatingSelect">商品上下架狀態</label>
                        </div>
                      </div>
                      <div className='labels-area'>
                        <label>商品名稱:</label>
                        <div class="form-floating">
                          <input type="email" class="form-control" id="floatingInput" placeholder="請輸入商品名稱" />
                          <label for="floatingInput">請輸入商品名稱</label>
                        </div>
                      </div>
                    </li>
                    <li className='labels-area mb-3'>
                      <div className='labels-area me-3'>
                        <label>上/下架時間:</label>
                        <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="請輸入起始日期" />
                        <i class="fa-regular fa-calendar-check calendar-icon-area" style={{}}></i>
                      </div>
                      <div className='labels-area me-3'>
                        <label>至</label>
                        <DatePicker dateFormat="yyyy/MM/dd" selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="請輸入結束日期" />
                        <i class="fa-regular fa-calendar-check calendar-icon-area"></i>
                      </div>
                    </li>
                    <li className="labels-area mb-3">
                      <div className='labels-area me-3'>
                        <label>預設投資金額:</label>
                        <div class="form-floating">
                          <input type="email" class="form-control" id="floatingInput" placeholder="請輸入預設投資金額" />
                          <label for="floatingInput">請輸入預設投資金額</label>
                        </div>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        {/*  checked */}
                        <label class="form-check-label" for="flexCheckChecked">
                          可修改商品金額
                        </label>
                      </div>
                    </li>
                    <li className="flex-alignitems-center mb-3">
                      <div className='flex-column'>
                        <span>
                          預覽目標圖片 / APP贖回圖片:
                        </span>
                        <span className='word-warning'>
                          (建立計畫時的小圖片)
                        </span>
                      </div>
                      {/*  onChange={handleFileChange} */}
                      {/* {!isFileInputMessage && (<div className="word-danger">必填欄位-請選擇圖片</div>)} */}
                      {imageSrc && (
                        <div className="upload-button me-1">
                          <img src={imageSrc} alt="Preview" />
                        </div>
                      )}
                      <div className='flex-column-center-alignitems-start' style={{ width: '30%' }}>
                        <input type="file" id="fileInput" className="custom-file-input" />
                        <button type="button" className="btn btn-secondary mt-1">上傳</button>
                      </div>
                      {errors.fileInput && <p>{errors.fileInput.message}</p>}
                      {/*  onClick={handleUpload} */}
                      {/* {!isHandleUploadMessage && (<div className="word-danger">請按上傳</div>)} */}
                      <div className='word-gray' style={{ width: '51%' }}>
                        <span>● svg檔尺寸: 80×80</span><br />
                        <span>● png檔尺寸: 240×240解析度: 216×216</span>
                      </div>
                    </li>
                    <li className="flex-alignitems-center mb-3">
                      <div className='flex-column'>
                        <span>
                          目標BANNER圖片:
                        </span>
                        <span className='word-warning'>
                          (設定計畫時的BANNER大圖片)
                        </span>
                      </div>
                      {imageSrc && (
                        <div className="upload-button2 me-1">
                          <img src={imageSrc} alt="Preview" />
                        </div>
                      )}
                      <div className='flex-column-center-alignitems-start' style={{ width: '30%' }}>
                        <input type="file" id="fileInput" className="custom-file-input" />
                        <button type="button" className="btn btn-secondary mt-1">上傳</button>
                      </div>
                      {errors.fileInput && <p>{errors.fileInput.message}</p>}
                      {/*  onClick={handleUpload} */}
                      {/* {!isHandleUploadMessage && (<div className="word-danger">請按上傳</div>)} */}
                      <div className='word-gray' style={{ width: '51%' }}>
                        <span>● svg檔尺寸: 375×220</span><br />
                        <span>● png檔尺寸: 1125×660解析度: 216×216</span>
                      </div>
                    </li>
                    <li className="flex-alignitems-center mb-3">
                      <div className='flex-column'>
                        <span>
                          APP計劃詳情圖片:
                        </span>
                      </div>
                      {imageSrc && (
                        <div className="upload-button3 me-1">
                          <img src={imageSrc} alt="Preview" />
                        </div>
                      )}
                      <div className='flex-column-center-alignitems-start' style={{ width: '30%' }}>
                        <input type="file" id="fileInput" className="custom-file-input" />
                        <button type="button" className="btn btn-secondary mt-1">上傳</button>
                      </div>
                      {errors.fileInput && <p>{errors.fileInput.message}</p>}
                      {/*  onClick={handleUpload} */}
                      {/* {!isHandleUploadMessage && (<div className="word-danger">請按上傳</div>)} */}
                      <div className='word-gray' style={{ width: '51%' }}>
                        <span>● svg檔尺寸: 200×100</span><br />
                        <span>● png檔尺寸: 600×300解析度: 216×216</span>
                      </div>
                    </li>
                    {/* <li className="my-2 mx-2">
                      <span>標題 : </span>
                      <input {...register("prod_name", { required: "必填欄位" })} value={prod_name} onChange={NameAdd} id="prod_name" className="input-reset" type="text" placeholder="請輸入標題文字" />
                      {errors.prod_name && <p className="word-danger">{errors.prod_name.message}</p>}
                      {!isProdNameMessage && (<div className="word-danger">必填欄位</div>)}
                    </li> */}
                    {/* <li className="my-2 mx-2">
                      <span>單元圖示連結 : </span>
                      <div className="">{prod_images}</div>
                      <div className="my-2 mx-2 ">
                        <div>單元圖示 : 圖片尺寸 1920×750 (解析度 72×72) 限制上傳檔案類型為pdf、png、jpg、jpeg、gif</div>
                        <input type="file" id="fileInput" className="custom-file-input" onChange={handleFileChange} />
                        {!isFileInputMessage && (<div className="word-danger">必填欄位-請選擇圖片</div>)}
                        {imageSrc && (
                          <div className="upload-button">
                            <img src={imageSrc} alt="Preview" />
                            <button type="button" className="btn btn-secondary my-2" onClick={handleUpload}>上傳</button>
                          </div>
                        )}
                        {errors.fileInput && <p>{errors.fileInput.message}</p>}
                        {!isHandleUploadMessage && (<div className="word-danger">請按上傳</div>)}
                      </div>
                    </li> */}
                  </ul>
                </div>
              </form>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary mx-2" >重置</button>
                {/* onClick={() => { setAddName(""); setSelectedFile(null); setImageSrc(""); document.getElementById('fileInput').value = ''; setAddProdImages(""); }} */}
                <button type="submit" className="btn btn-outline-success">確認</button>
                {/*  onClick={addItem}  */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- 商品列表 Modal --> */}
      <div class="modal fade" id="productListModal" tabindex="-1" aria-labelledby="productListModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-phone-area-set">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="productListModalLabel">商品列表</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body phone-area">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <h6>育兒基金</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                    <td>
                      <h6>育兒基金2</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>育兒基金</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                    <td>
                      <h6>育兒基金2</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>育兒基金</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                    <td>
                      <h6>育兒基金2</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>育兒基金</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                    <td>
                      <h6>育兒基金2</h6>
                      <img src="/assets/images/product/Kid.svg" alt="logo" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-light" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 檢視圖片 Modal --> */}
      <div class="modal fade" id="viewPicModal" tabindex="-1" aria-labelledby="viewPicModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-phone-area-set">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewPicModalLabel">檢視圖片</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mt-3 phone-area">
              <li className="flex-alignitems-center mb-3">
                <div className='flex-column me-2'>
                  <span>
                    預覽目標圖片 / APP贖回圖片:
                  </span>
                  <span className='word-warning'>
                    (建立計畫時的小圖片)
                  </span>
                </div>
                {imageSrc && (
                  <div className="upload-button me-1">
                    <img src={imageSrc} alt="Preview" />
                  </div>
                )}
              </li>
              <li className="flex-alignitems-center mb-3">
                <div className='flex-column me-2'>
                  <span>
                    目標BANNER圖片:
                  </span>
                  <span className='word-warning'>
                    (設定計畫時的BANNER大圖片)
                  </span>
                </div>
                {imageSrc && (
                  <div className="upload-button2 me-1">
                    <img src={imageSrc} alt="Preview" />
                  </div>
                )}
              </li>
              <li className="flex-alignitems-center mb-3">
                <div className='flex-column me-2'>
                  <span>
                    APP計劃詳情圖片:
                  </span>
                </div>
                {imageSrc && (
                  <div className="upload-button3 me-1">
                    <img src={imageSrc} alt="Preview" />
                  </div>
                )}
              </li>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-light" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="mb-3">
          <div className='col-sm labels-area me-3'>
            <label>商品上下架狀態:</label>
            <div class="form-floating">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>請選擇狀態</option>
                <option value="1">上架中</option>
                <option value="2">下架中</option>
                <option value="3">所有商品</option>
              </select>
              <label for="floatingSelect">商品上下架狀態</label>
            </div>
          </div>
          <div className='col-sm labels-area'>
            <label>商品名稱:</label>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="請輸入商品名稱" />
              <label for="floatingInput">請輸入商品名稱</label>
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
            <i class="fa-solid fa-arrow-up-wide-short me-1"></i>
            <span className='me-1'>商品排序</span>
            <span className='font-size-sub-08 word-warning'>註: 權重 (數字越大排越前面)</span>
          </div>
          <div>
            <button data-bs-toggle="modal" data-bs-target="#productListModal" type="button" class="btn btn-primary me-1">商品列表</button>
            <button onClick={(event) => openModal(event)} id="open-modal" type="button" className="btn btn-primary">新增商品</button>
          </div>
        </h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">權重</th>
              <th scope="col">商品名稱</th>
              <th scope="col">上/下架</th>
              <th scope="col">上/下架時間</th>
              <th scope="col">預設投資金額</th>
              <th scope="col">可修改商品金額</th>
              <th scope="col">商品圖片</th>
              <th scope="col">功能列</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <a data-bs-toggle="modal" data-bs-target="#viewPicModal">
                  <img className="product-area me-2" src="/assets/images/product/dyson-supersonic.png" alt="product" />
                  <i class="fa-regular fa-eye"></i>
                </a>
              </td>
              <td><button onClick={(event) => openModal(event)} id="open-modal" type="button" class="btn btn-info">編輯</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              {/* <td colspan="2">Larry the Bird</td> */}
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
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
          <button type="button" class="btn btn-light">重置</button>
        </div>

      </div>

    </div>
  );
}
export default Home;