import React from "react";
import Header from "../Components/Header";
import K8ListItem from "../Components/K8ListItem";
import { workloadData } from "../constants";
import K8CompactListItem from "../Components/K8CompactListItem";

const K8Workloads = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        {workloadData.map((workload) => (
          <K8CompactListItem
            key={workload.heading}
            heading={workload.heading}
            data={workload.data}
          />
        ))}
      </div>
    </>
  );
};

export default K8Workloads;
