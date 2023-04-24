import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";
import DocLink from "../Components/DocLink";

const RabbitMQDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Rabbit MQ on Kubernetes</h1>
        <p className="text-xl font-semibold mb-8">
          RabbitMQ is lightweight and easy to deploy on premises and in the
          cloud. It supports multiple messaging protocols. RabbitMQ can be
          deployed in distributed and federated configurations to meet
          high-scale, high-availability requirements.
        </p>
        <Accordion heading={"Features"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/rabbitmq#features" />
        </Accordion>
        <Accordion heading={"Install the Cluster Operator"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/rabbitmq#setup-the-operator" />
        </Accordion>
        <Accordion heading={"Setup a RabbitMQ Cluster"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/rabbitmq#setup-rabbitmq-cluster" />
        </Accordion>
        <Accordion heading={"Monitoring our cluster"}>
          <p className="text-lg">
            Be default, the <b>rabbitmq-prometheus plugin</b> is installed which
            exposes a lot of metrics for our cluster on port 15692 of the pods.
            To view these metris we will set up a serviceMonitor which will be
            picked up by the Prometheus Operator installed in our cluster.
          </p>
          <p className="text-lg">Add this to the origional cluster file:</p>
          <CodeRenderer
            language="yaml"
            value={`
---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: akarx-rabbit-cluster
  namespace: rabbitmq-test-app
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: akarx-rabbit-cluster
  endpoints:
    - interval: 10s
      port: prometheus
  namespaceSelector:
    matchNames:
      - rabbitmq-test-app
          `}
          />
        </Accordion>
        <Accordion heading={"Performance Test"}>
          <DocLink
            link={
              "https://github.com/akarX23/k8-deployments/tree/master/rabbitmq#performance-testing-our-cluster"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default RabbitMQDoc;
