import React from "react";

const ImageBox = ({imageProps}) => {
  return (
    <div className="imgBx">
      <img
        src= {imageProps.imageSrc}
        alt= {imageProps.altImg}
      />
    </div>
  );
};

export default ImageBox;
