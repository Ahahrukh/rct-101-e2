import "./App.css";
import React, { useState } from "react";
import AddProduct from "./components/AddProduct";
import axios from "axios";
import Product from './components/Product';


const App = () => {
  const [formData, setFormData] = useState({});
  const [clickme, setClickme] = useState(false);

  const handleChange = (e) => {
    let { type, name, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const postTodos = async () => {
    let res = await axios.post(`http://localhost:8080/products`, {
      ...formData,
    });
    let data = await res.data;
    console.log(data);
    addData(data);
  };

  const addData = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div>
      {/* TODO: Code here */}
      <button onClick={() => setClickme(!clickme)}>{clickme ? "Add New Product" : "Product"}</button>
      {clickme ? (
        <AddProduct postTodos={postTodos} handleChange={handleChange} />
      ) : (
        <div>
          <Product />
        </div>
      )}
    </div>
  );
};

export default App;