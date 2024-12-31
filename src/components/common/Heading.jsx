import React from "react";

const Heading = ({ title, subTitle }) => {
  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </>
  );
};

export default Heading;
