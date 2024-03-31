import React, { useState } from "react";
import ProductUI from "../view/ProductUI";

const ProductContainer = () => {
  const [showAddForm, setshowAddForm] = useState(false);
  const formClose = () => {
    setshowAddForm(false);
  };
  return <ProductUI closeModal={formClose} openModal={showAddForm} />;
};

export default ProductContainer;
