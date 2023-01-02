import React from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import MLOptimization from "./MLOptimization";
import DBOptimization from "./DBOptimization";

const CategoryOptimizations = () => {
  let { category } = useParams();

  return (
    <>
      <Header />
      {category == "ml_optimizations" ? <MLOptimization /> : <DBOptimization />}
    </>
  );
};

export default CategoryOptimizations;
