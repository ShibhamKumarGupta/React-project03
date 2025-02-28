import React from "react";

const ColorOptions = ({ colorProps }) => {
  return (
    <div>
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
    </div>
  );
};

export default ColorOptions;
