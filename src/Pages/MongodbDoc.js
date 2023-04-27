import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const MongodbDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          MongoDB on Kubernetes with the MongoDB Kubernetes Operator
        </h1>
        <p className="text-xl font-semibold mb-8">
          MongoDB Enterprise Kubernetes Operator manages the typical lifecycle
          events for a MongoDB cluster: provisioning storage and computing
          power, configuring network connections, setting up users, and changing
          these settings as needed. It accomplishes this using the Kubernetes
          API and tools. It works together with MongoDB Cloud Manager or Ops
          Manager, which further configures to MongoDB clusters. When MongoDB is
          deployed and running in Kubernetes, you can manage MongoDB tasks using
          Cloud Manager or Ops Manager.
        </p>
        <Accordion heading={"Deploying MongoDB Operator"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/MongoDB_on_K8s.md#deploying-mongodb-operator-through-helm" />
        </Accordion>

        <Accordion heading={"Deploying Ops Manager"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/MongoDB_on_K8s.md#deploying-ops-manager-resource" />
        </Accordion>

        <Accordion heading={"Deploying MongoDB Sharded Cluster"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/MongoDB_on_K8s.md#deploying-mongodb-sharded-cluster" />
        </Accordion>

        <Accordion heading={"Deploying MongoDB Replica Set"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/MongoDB_on_K8s.md#deploying-mongodb-replica-set" />
        </Accordion>

        <Accordion heading={"Deploying MongoDB Standalone"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/MongoDB_on_K8s.md#deploying-mongodb-standalone" />
        </Accordion>

        <Accordion heading={"Enable TLS for a Deployment"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/MongoDB_on_K8s.md#enable-tls-for-a-deployment" />
        </Accordion>
      </div>
    </>
  );
};

export default MongodbDoc;
