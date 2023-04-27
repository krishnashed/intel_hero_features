import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const KubernetesDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Kubernetes Workloads</h1>
        <p className="text-xl font-semibold mb-8">
          Kubernetes, also known as K8s, is an open-source system for automating
          deployment, scaling, and management of containerized applications.
        </p>
        <Accordion heading={"Kubespray Deployment"}>
          <DocLink
            link={
              "https://medium.com/@akarX23/multi-node-kubernetes-cluster-deployment-with-kubespray-and-ansible-c83c2c3c8f7f"
            }
          />
          <br />
          <DocLink link="https://github.com/akarX23/intel-scripts/tree/master/kubernetes" />
        </Accordion>
        <Accordion heading={"Monitoring and AutoScaling setup"}>
          <DocLink link="https://medium.com/@akarX23/deploying-prometheus-and-grafana-in-a-multi-node-kubernetes-cluster-and-auto-scaling-with-keda-eccecfbd8950" />
        </Accordion>
        <Accordion heading={"Workloads Deployment"}>
          <DocLink link="https://github.com/akarX23/k8-deployments" />
        </Accordion>
      </div>
    </>
  );
};

export default KubernetesDoc;
