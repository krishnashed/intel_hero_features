import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const MinioDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Minio Multi Node Multi Drive deployment on Kubernetes (using DirectPV
          as CSI)
        </h1>
        <p className="text-xl font-semibold mb-8">
          MinIO is a High Performance Object Storage released under GNU AGPL
          v3.0. It is API compatible with the Amazon S3 cloud storage service.
          It can handle unstructured data such as photos, videos, log files,
          backups, and container images with a current maximum supported object
          size of 5TB.
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Minio_on_k8s.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Minio Operator"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Minio_on_k8s.md#minio-operator" />
        </Accordion>

        <Accordion heading={"Minio Tenants"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Minio_on_k8s.md#minio-tenants" />
        </Accordion>

        <Accordion heading={"Network Encryption (TLS)"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/Minio_on_k8s.md#network-encryption-tls" />
        </Accordion>
      </div>
    </>
  );
};

export default MinioDoc;
