import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const Cvat = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Deploying Redis on Kubernetes using Redis® Cluster Bitnami helm chart
        </h1>
        <p className="text-xl font-semibold mb-8">
          Redis is an open source, in-memory data store used by millions of
          developers as a database, cache, streaming engine, and message broker.
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Redis_on_K8s.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Installing the Chart"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Redis_on_K8s.md#installing-the-chart" />
        </Accordion>

        <Accordion heading={"Connecting to Redis Cluster"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Redis_on_K8s.md#connecting-to-redis-cluster" />
        </Accordion>

        <Accordion heading={"Scaling Up/Down the Redis Cluster"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Redis_on_K8s.md#scaling-updown-the-redis-cluster" />
        </Accordion>

        <Accordion heading={"Securing traffic using TLS"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Redis_on_K8s.md#securing-traffic-using-tls" />
        </Accordion>
      </div>
    </>
  );
};

export default Cvat;
