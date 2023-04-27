import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const XGBoostDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Benchmarking Intel® Python XGBoost
        </h1>
        <p className="text-xl font-semibold mb-8">
          XGBoost* is a widely used gradient boosting library in the classical
          ML area. Designed for flexibility, performance, and portability,
          XGBoost* includes optimized distributed gradient boosting frameworks
          and implements Machine Learning algorithms underneath. Starting with
          0.9 version of XGBoost, Intel has been up streaming optimizations
          through the hist histogram tree-building method. Starting with 1.3.3
          version of XGBoost and beyond, Intel has also begun up streaming
          inference optimizations to XGBoost as well.
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/ML-Benchmarking/blob/main/XGBoost.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Installing various versions of XGBoost"}>
          <DocLink link="https://github.com/krishnashed/ML-Benchmarking/blob/main/XGBoost.md#installing-various-versions-of-xgboost" />
        </Accordion>

        <Accordion heading={"Running XGBoost against dataset"}>
          <DocLink link="https://github.com/krishnashed/ML-Benchmarking/blob/main/XGBoost.md#running-xgboost-against-dataset" />
        </Accordion>

        <Accordion heading={"Installing various versions of XGBoost"}>
          <DocLink link="https://github.com/krishnashed/ML-Benchmarking/blob/main/XGBoost.md#installing-various-versions-of-xgboost" />
        </Accordion>

        <Accordion heading={"Results"}>
          <DocLink link="https://github.com/krishnashed/ML-Benchmarking/blob/main/XGBoost.md#results" />
        </Accordion>
      </div>
    </>
  );
};

export default XGBoostDoc;
