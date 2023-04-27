import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const LonghornDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Installing Longhorn on Kubernetes using kubectl
        </h1>
        <p className="text-xl font-semibold mb-8">
          Cloud native distributed block storage for Kubernetes
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Longhorn.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Installing Longhorn"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Longhorn.md#installing-longhorn" />
        </Accordion>

        <Accordion heading={"Accessing the Longhorn UI"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Longhorn.md#accessing-the-longhorn-ui" />
        </Accordion>

        <Accordion heading={"Create Longhorn Volumes"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Longhorn.md#create-longhorn-volumes" />
        </Accordion>

        <Accordion heading={"Deleting Volumes Through Kubernetes"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Longhorn.md#deleting-volumes-through-kubernetes" />
        </Accordion>

        <Accordion heading={"Create a Snapshot"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Longhorn.md#create-a-snapshot" />
        </Accordion>
      </div>
    </>
  );
};

export default LonghornDoc;
