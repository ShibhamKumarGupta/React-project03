import React from "react";

const ColorOptions = ({ colorProps }) => {
  return (
       <>
      <p className="product-colors">
        Available Colors:
        {colorProps.map((element, index) => (
          <span
            key={index}
            className={element.colorName}
            data-color-primary={element.primaryColor}
            data-color-sec={element.secColor}
            data-pic={element.dataPic}
          ></span>
        ))}
      </p>
      <h3>Rs. 12,800</h3>
      <button>Buy Now</button>
      </>
  );
};

export default ColorOptions;
