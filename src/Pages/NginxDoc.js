import React from "react";
import Accordion from "../Components/Accordion";
import Header from "../Components/Header";
import CodeRenderer from "../Components/CodeRenderer";
import DocLink from "../Components/DocLink";

const NginxDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          K8 Cluster behind an HA-Proxy and NGINX Ingress Controller
        </h1>
        <p className="text-xl font-semibold mb-8">
          Developing a Highly Available Kubernetes Cluster is a big requirements
          for things to work smoothly. In this guide we will discuss how does HA
          Proxy and NGINX Ingress Controller help us in developing a highly
          available K8 cluster.
        </p>
        <Accordion heading={"Install HA Proxy on Server"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/ha-nginx-ingress#install-ha-proxy-on-server" />
        </Accordion>
        <Accordion heading={"Install NGINX Ingress Controller"}>
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/ha-nginx-ingress#install-ha-proxy-on-server" />
        </Accordion>
        <Accordion heading="Configure">
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/ha-nginx-ingress#create-the-custom-values-file" />
        </Accordion>
        <Accordion heading="Accessing the service through HA Proxy">
          <DocLink link="https://github.com/akarX23/k8-deployments/tree/master/ha-nginx-ingress#accessing-the-service-through-ha-proxy" />
        </Accordion>
      </div>
    </>
  );
};

export default NginxDoc;
