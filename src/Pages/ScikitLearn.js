import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const ScikitLearnDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Intel(R) Extension for Scikit-learn
        </h1>
        <p className="text-xl font-semibold mb-8">
          Intel(R) Extension for Scikit-learn is a seamless way to speed up your
          Scikit-learn application
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Installing scikit-learn-intelex"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#setup" />
        </Accordion>

        <Accordion heading={"Linear Regression"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#linear-regression" />
        </Accordion>

        <Accordion heading={"Lasso Regression"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#lasso-regression" />
        </Accordion>
        <Accordion heading={"KMeans"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#kmeans" />
        </Accordion>
        <Accordion heading={"KNeighborsClassifier"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#kneighborsclassifier" />
        </Accordion>
        <Accordion heading={"Ridge Regression"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#ridge-regression" />
        </Accordion>
        <Accordion heading={"SVC"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#svc" />
        </Accordion>
        <Accordion heading={"ElasticNet"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#elasticnet" />
        </Accordion>
        <Accordion heading={"NuSVR"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Scikit-Learn.md#nusvr" />
        </Accordion>
      </div>
    </>
  );
};

export default ScikitLearnDoc;
