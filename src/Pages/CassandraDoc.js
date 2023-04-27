import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const CassandraDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Installing K8ssandra in a Single-cluster install with helm
        </h1>
        <p className="text-xl font-semibold mb-8">
          K8ssandra is a cloud native distribution of Apache Cassandra® that
          runs on Kubernetes. K8ssandra provides an ecosystem of tools to
          provide richer data APIs and automated operations alongside Cassandra.
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Cassandra_on_k8s.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Deploy K8ssandra Operator"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Cassandra_on_k8s.md#deploying-k8ssandra" />
        </Accordion>

        <Accordion heading={"Deploy the K8ssandraCluster"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Cassandra_on_k8s.md#deploy-the-k8ssandracluster" />
        </Accordion>

        <Accordion heading={"Connecting to Cassandra Database"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Cassandra_on_k8s.md#connecting-to-cassandra-database" />
        </Accordion>

        <Accordion heading={"Scaling k8ssandra"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Cassandra_on_k8s.md#scaling-k8ssandra" />
        </Accordion>
      </div>
    </>
  );
};

export default CassandraDoc;
