import React, { useState } from "react";
import { Link } from "react-router-dom";

const MLOptimization = () => {
  const [list, setList] = useState(["XGBoost", "Scikit Learn"]);

  const makeSlug = (data) => {
    return data.toLowerCase().split(" ").join("_");
  };

  const cards = () => {
    return list.map((item) => (
      <Link
        to={{
          pathname: `/ml_optimizations/demo/${makeSlug(item)}`,
        }}
        className="flex my-8 justify-between w-[80%]"
      >
        <div className="bg-[#0071C5]  py-12 px-6 w-1/5"></div>
        <h2 className="w-4/5 bg-[#E3EFED]  py-12 px-6 text-[#00477C] font-bold text-4xl">
          {item}
        </h2>
      </Link>
    ));
  };

  return (
    <>
      <div className="bg-[#0071C5] pt-20 pb-8 text-6xl font-bold text-white px-32">
        ML Optimizations
      </div>
      <div className="w-[100%] mt-16 mx-40">{cards()}</div>
    </>
  );
};

export default MLOptimization;
