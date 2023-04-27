import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const SparkDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Spark on Kubernetes</h1>
        <p className="text-xl font-semibold mb-8">
          This guide explains how you can deploy the spark operator for
          Kubernetes and the important configurations to know about it while
          deploying.
        </p>
        <Accordion heading={"Setup Spark Operator"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/spark#setup-of-spark-operator" />
        </Accordion>
        <Accordion heading={"Creating a Spark Application"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/spark#sparkapplication-crd" />
        </Accordion>
        <Accordion heading={"Dynamic Allocation"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/spark#dynamic-allocation" />
        </Accordion>
      </div>
    </>
  );
};

export default SparkDoc;
