import React from "react";


const AddProduct = ({ postTodos, handleChange }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    postTodos();
  };

  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <form onSubmit={handleSubmit} my={4} data-cy="add-product-button">
        <div pb={6}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            data-cy="add-product-title"
          />
          <br />

          <label>Category</label>
          <select
            name="category"
            data-cy="add-product-category"
            onClick={handleChange}
          >
            <option value="shirt" data-cy="add-product-category-shirt">
              Shirt
            </option>
            <option value="pant" data-cy="add-product-category-pant">
              Pant
            </option>
            <option value="jeans" data-cy="add-product-category-jeans">
              Jeans
            </option>
          </select>

          <br />

          <label>Gender</label>
          <div data-cy="add-product-gender" onChange={handleChange}>
            <input
              type="radio"
              value="female"
              onChange={handleChange}
              data-cy="add-product-gender-male"
            />
            <label>Male</label>

            <input
              type="radio"
              value="male"
              onChange={handleChange}
              data-cy="add-product-gender-female"
            />
            <label>Female</label>

            <input
              type="radio"
              value="unisex"
              onChange={handleChange}
              data-cy="add-product-gender-unisex"
            />
            <label>Unisex</label>
          </div>

          <br />

          <label>Price</label>
          <input
            type="number"
            name="price"
            data-cy="add-product-price"
            onChange={handleChange}
          />

          <br />

          <button type="submit" data-cy="add-product-submit-button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};


export default AddProduct;
