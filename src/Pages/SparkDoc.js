import React from "react";
import Header from "../Components/Header";
import CodeRenderer from "../Components/CodeRenderer";
import Accordion from "../Components/Accordion";

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
          <p className="text-lg">
            The operator is installed using helm. We pass a custom-values.yml
            file to helm to configure the Operator with the available options.
          </p>
          <p className="text-lg">Add the repository:</p>
          <CodeRenderer
            value={`helm repo add spark-operator https://googlecloudplatform.github.io/spark-on-k8s-operator`}
          />
          <p className="text-lg mt-3">
            Create a <b>custom-values.yml</b> file with this content:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
sparkJobNamespace: "spark-jobs"

logLevel: 4

podMonitor:
  # -- If enabled, a pod monitor for operator's pod will be submitted. Note that prometheus metrics should be enabled as well.
  enable: true
  # -- Pod monitor labels
  labels:
    spark-monitor: prometheus`}
          />
          <p className="text-lg mt-3">Install the operator using:</p>
          <CodeRenderer
            value={`helm install --create-namespace -n spark-operator my-release spark-operator/spark-operator -f custom-values.yaml`}
          />
        </Accordion>
        <Accordion heading={"Creating a Spark Application"}>
          <p className="text-lg">
            The operator installs a custom resource definition (CRD) called
            SparkApplication. This is what we will use to submit a spark
            application to the operator. The operator keeps on listening to see
            if a new SparkApplication has been initiated or not. The spark
            application needs to be deployed in the namespace specified in the
            sparkJobNamespace for the spark operator to pick it up and process
            it. It's very important to understand all the configuration provided
            by the SparkApplication CRD .
          </p>
          <p className="text-lg mt-4">
            Here is a simple SparkApplication configuration:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
apiVersion: "sparkoperator.k8s.io/v1beta2"
kind: SparkApplication
metadata:
  name: pyspark-pi
  namespace: spark-jobs
spec:
  type: Python
  pythonVersion: "3"
  mode: cluster
  image: "gcr.io/spark-operator/spark-py:v3.1.1"
  imagePullPolicy: Always
  mainApplicationFile: local:///opt/spark/examples/src/main/python/pi.py
  sparkVersion: "3.1.1"
  restartPolicy:
    type: OnFailure
    onFailureRetries: 3
    onFailureRetryInterval: 10
    onSubmissionFailureRetries: 5
    onSubmissionFailureRetryInterval: 20
  driver:
    cores: 1
    coreLimit: "1200m"
    memory: "512m"
    labels:
      version: 3.1.1
    serviceAccount: spark
  executor:
    cores: 1
    instances: 1
    memory: "512m"
    labels:
      version: 3.1.1`}
          />
        </Accordion>
        <Accordion heading={"Dynamic Allocation"}>
          <p className="text-xl">
            Spark Operator provides configuration for scaling the workload on
            multiple executor pods based on the load. This can be enabled via
            the dynamicAllocation key in the SparkApplication yaml file.
          </p>
          <CodeRenderer
            language="yaml"
            value={`
spec:
  dynamicAllocation:
    enabled: true
    initialExecutors: 2
    minExecutors: 2
    maxExecutors: 10`}
          />
        </Accordion>
      </div>
    </>
  );
};

export default SparkDoc;
