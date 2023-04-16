import React from "react";
import Header from "../Components/Header";
import K8ListItem from "../Components/K8ListItem";
import { workloadData, libraries, optimizations, silicon } from "../constants";
import K8CompactListItem from "../Components/K8CompactListItem";

const K8Workloads = () => {
  const displaySubCategory = (workload) => {
    let result = [];

    for (let subCategory in workload) {
      result.push(
        <K8CompactListItem
          showTitle={true}
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
            <h1 className="bg-blue-800 inline-block h-full w-28 font-bold transform py-4 px-auto text-center text-white  my-auto -rotate-90 ">
              {workload.heading}
            </h1>
            {displaySubCategory(workload.data)}
          </div>
        ))}

        <div className="flex mt-4">
          <h1 className="bg-blue-800 inline-block w-28 font-bold h-full transform py-4 px-auto text-center text-white  my-auto -rotate-90 ">
            {libraries.heading}
          </h1>
          <K8CompactListItem
            showTitle={false}
            key={libraries.heading}
            heading={libraries.heading}
            data={libraries.data}
          />
        </div>

        <div className="flex mt-6 mb-2 ml-28">
          {optimizations.map((entity) => (
            <span className="bg-[#009FE0] text-white text-bold text-2xl mx-4 px-4  h-8	">
              {entity}
            </span>
          ))}
        </div>

        <div className="flex">
          <h1 className="bg-blue-800 inline-block h-full w-28 font-bold transform py-4 px-auto text-center text-white  my-auto -rotate-90 ">
            {silicon.heading}
          </h1>

          <K8CompactListItem
            showTitle={false}
            key={silicon.heading}
            heading={silicon.heading}
            data={silicon.data}
          />
        </div>
      </div>
    </>
  );
};

export default K8Workloads;
