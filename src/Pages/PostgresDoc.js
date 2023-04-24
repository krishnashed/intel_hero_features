import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";
import DocLink from "../Components/DocLink";

const PostgresDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Postgres on Kubernetes </h1>
        <p className="text-xl font-semibold mb-8">
          In this guide we will go through the setup and usage of Postgres on
          K8s using PGO, the Postgres Operator by Crunchy Data. It is a highly
          customizable operator with a features like backup and disaster
          recovery built into it.
        </p>
        <Accordion heading={"Installing the Operator"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/pgsql#installing-the-operator" />
        </Accordion>
        <Accordion heading={"Configuring a Cluster"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/pgsql#running-a-basic-postgres-cluster" />
        </Accordion>
        <Accordion heading={"Connect to a cluster"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/pgsql#connecting-to-our-cluster" />
        </Accordion>
        <Accordion heading={"Setup HA Cluster"}>
          PGO protects our cluster from downtime in case anything goes wrong by
          having multiple instances of a postgres instance.
          <div className="mt-2" />
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/pgsql#setting-up-a-high-availability-cluster" />
        </Accordion>
        <Accordion heading={"TLS/SSL Configuration"}>
          <DocLink
            link={
              "https://github.com/akarX23/k8-deployments/tree/master/pgsql#tlsssl"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default PostgresDoc;
