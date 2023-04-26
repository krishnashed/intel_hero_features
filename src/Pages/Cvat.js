import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";

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
        <Accordion heading={"Prerequisites"}></Accordion>

        <Accordion heading={"Installing CVAT"}></Accordion>

        <Accordion heading={"Nuclio Serverless Functions"}></Accordion>

        <Accordion heading={"Annotation using CVAT UI"}></Accordion>
      </div>
    </>
  );
};

export default Cvat;
