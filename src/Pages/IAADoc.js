import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const IAADoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          IAA Setup for Intel Xeon 4th Gen
        </h1>
        <p className="text-xl font-semibold mb-8">
          This guide will server as a single document for installation and setup
          of Intel IAA and its usage with RocksDB, Clickhousem and Cassandra. We
          will be only going through the steps for the Hardware Installation of
          IAA. Our system has an Intel® Xeon® Scalable Processor family and the
          OS is Ubuntu 22.04.{" "}
        </p>
        <Accordion heading={"Setup Dependencies"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/IAA#setting-up-the-softwares"
            }
          />
        </Accordion>
        <Accordion heading={"Setup the IAA Devices"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/IAA#configuring-iaa-devices"
            }
          />
        </Accordion>
        <Accordion heading={"Benchmark Process for RocksDB"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/blob/master/IAA/benchmark-rocksDB.md"
            }
          />
        </Accordion>
        <Accordion heading={"Benchmark Process for Clickhouse"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/Clickhouse/benchmark.md"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default IAADoc;
