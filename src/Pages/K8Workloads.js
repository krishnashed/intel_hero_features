import React from "react";
import Header from "../Components/Header";
import K8ListItem from "../Components/K8ListItem";
import { workloadData } from "../constants";
import K8CompactListItem from "../Components/K8CompactListItem";

const K8Workloads = () => {
  const displaySubCategory = (workload) => {
    let result = [];

    for (let subCategory in workload) {
      result.push(
        <K8CompactListItem
          key={subCategory}
          heading={subCategory}
          data={workload[subCategory]}
        />
      );
    }

    return <div className="flex">{result}</div>;
  };

  return (
    <>
      <Header />
      <div className="container mx-20">
        {workloadData.map((workload) => (
          <div className="flex">
            <h1 className="bg-blue-800 inline-block h-full transform py-4 px-2 text-center text-white  my-auto -rotate-90 ">
              {workload.heading}
            </h1>
            {displaySubCategory(workload.data)}
          </div>
        ))}
      </div>
    </>
  );
};

export default K8Workloads;
