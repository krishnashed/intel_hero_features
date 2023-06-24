import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const QATDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          QAT Setup for Intel Xeon 4th Gen
        </h1>
        <p className="text-xl font-semibold mb-8">
          This guide will server as a single document for installation and setup
          of Intel QAT Drivers and their usage with libraries like openssl,
          NGINX, and HA Proxy. We will be only going through the steps for the
          Hardware Installation of QAT. Our system has an Intel® Xeon® Scalable
          Processor family with Intel® QAT Gen4/Gen4m which requires Hardware
          v2.0 and the OS is Ubuntu 22.04.{" "}
        </p>
        <Accordion heading={"Install the QAT Driver"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/QAT-SPR#install-the-qat-driver"
            }
          />
        </Accordion>
        <Accordion heading={"Install QAT Engine for OpenSSL"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/QAT-SPR#install-qat-engine-for-openssl"
            }
          />
        </Accordion>
        <Accordion heading={"Install NGINX with QAT support"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/QAT-SPR#install-nginx-with-qat-support"
            }
          />
        </Accordion>
        <Accordion heading={"Benchmark NGINX with wrk"}>
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/tree/master/QAT-SPR#benchmarking-process"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default QATDoc;
