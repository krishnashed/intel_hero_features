import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const Cvat = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">CVAT using Docker Compose</h1>
        <p className="text-xl font-semibold mb-8">
          Computer Vision Annotation Tool (CVAT) is an interactive video and
          image annotation tool for computer vision.
        </p>
        <Accordion heading={"Prerequisites"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/CVAT.md#prerequisites" />
        </Accordion>

        <Accordion heading={"Installing CVAT"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/CVAT.md#installing-cvat" />
        </Accordion>

        <Accordion heading={"Nuclio Serverless Functions"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/CVAT.md#nuclio-serverless-functions" />
        </Accordion>

        <Accordion heading={"Annotation using CVAT UI"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/CVAT.md#annotation-using-cvat-ui" />
        </Accordion>

        <Accordion heading={"Exporting the annotations"}>
          <DocLink link="https://github.com/krishnashed/data-pipeline/blob/main/Installation%20Docs/CVAT.md#exporting-the-annotations" />
        </Accordion>
      </div>
    </>
  );
};

export default Cvat;
