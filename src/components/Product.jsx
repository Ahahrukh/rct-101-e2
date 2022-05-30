import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [alldata, setAllData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const getTodos = async () => {
      let res = await axios.get(
        `http://localhost:8080/products?_page=${pageNum}&_limit=${limit}`
      );
      let data = await res.data;
      console.log(data);
      setAllData(data);
    };
    getTodos();
  }, [pageNum, limit]);

  return (
    <>
      <div>
        <div>
          {pageNum}
          <button
            onClick={() => {
              if (pageNum > 1) {
                setPageNum(pageNum - 1);
              }
            }}
          >{`<`}</button>
          <select onChange={(e) => setLimit(Number(e.target.value))}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <button onClick={() => setPageNum(pageNum + 1)}>{`>`}</button>
        </div>
        <div>
          {alldata.map((data) => (
            <div key={data.id} data-cy="product">
              <img src={data.imageSrc} data-cy="product-image" alt="" />
              <div data-cy="product-category">{data.category}</div>
              <div>
                <p data-cy="product-gender">{data.gender}</p>
              </div>
              <h1 data-cy="product-title">{data.title}</h1>
              <h3 data-cy="product-price">{data.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
