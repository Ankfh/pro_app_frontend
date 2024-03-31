import React from "react";
import CardContainer from "../../shared/Card/container/CardContainer";
import MuiButton from "../../shared/Button/UI/MuiButton";
import ModalWrapper from "../../shared/ModalWrapper/view/ModalWrapper";
import ProductContainer from "../../Products/container/ProductContainer";

const HomeUI = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div>
        <ProductContainer />
        <MuiButton
          variant="contained"
          type="text"
          title={"Add product"}
          size={"small"}
          onClick={""}
        />
      </div>
    </div>
  );
};

export default HomeUI;
