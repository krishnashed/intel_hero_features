import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";
import DocLink from "../Components/DocLink";

const KafkaDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Kafka on K8s using Strimzi</h1>
        <p className="text-xl font-semibold mb-8">
          Kafka can be deployed on a production level using an operator
          developed by CNCF called Strimzi. This guide's main focus is to expose
          the fundamental components of the operator and their usage to explore
          different features of Strimzi from a basic cluster to a advanced level
          while also highlighting the options available to customize them.
        </p>
        <Accordion heading={"Installing Strimzi on a K8 Cluster"}>
          <DocLink
            link={
              "https://github.com/akarX23/k8-deployments/tree/master/kafka-strimzi#installing-strimzi-on-a-k8-cluster"
            }
          />
        </Accordion>
        <Accordion heading={`Deploying a Kafka Cluster`}>
          <DocLink
            link={
              "https://github.com/akarX23/k8-deployments/tree/master/kafka-strimzi#deploying-kafka-cluster"
            }
            k
          />
        </Accordion>
        <Accordion heading={"Configuring an External Listener"}>
          <DocLink
            link={
              "https://github.com/akarX23/k8-deployments/tree/master/kafka-strimzi#adding-an-external-listener"
            }
            k
          />
        </Accordion>
        <Accordion heading={"Security Configuration with TLS"}>
          <DocLink
            link={
              "https://github.com/akarX23/k8-deployments/tree/master/kafka-strimzi#tls-configuration"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default KafkaDoc;
