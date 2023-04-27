import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const OpenvinoDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Openvino optimised models</h1>
        <p className="text-xl font-semibold mb-8">
          OpenVINO toolkit (Open Visual Inference and Neural network
          Optimization) is a free toolkit facilitating the optimization of a
          deep learning model from a framework and deployment using an inference
          engine onto Intel hardware.
        </p>
        <Accordion heading={"Prerequisite"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#prerequisite" />
        </Accordion>

        <Accordion heading={"Installing Openvino"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#installing-openvino" />
        </Accordion>

        <Accordion heading={"Handwritten Text Recognition"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#handwritten-text-recognition" />
        </Accordion>

        <Accordion heading={"Human Pose Estimation"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#human-pose-estimation" />
        </Accordion>
        <Accordion heading={"Image Retrieval"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#image-retrieval" />
        </Accordion>
        <Accordion heading={"Vehicle License plate detection"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#vehicle-license-plate-detection" />
        </Accordion>
        <Accordion heading={"Person Detection"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#person-detection" />
        </Accordion>
        <Accordion heading={"Product Detection"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#product-detection" />
        </Accordion>
        <Accordion heading={"Semantic Segmentation"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#semantic-segmentation" />
        </Accordion>
        <Accordion heading={"Instance Segmentation"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#instance-segmentation" />
        </Accordion>
        <Accordion heading={"Text-to-speech"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#text-to-speech" />
        </Accordion>
        <Accordion heading={"Vehicle Detection"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#vehicle-detection" />
        </Accordion>
        <Accordion heading={"Safety Gear Detection"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#safety-gear-detection" />
        </Accordion>
        <Accordion heading={"Intruder Detection"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#intruder-detection" />
        </Accordion>
        <Accordion heading={"GPT-2 Text Prediction"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#gpt-2-text-prediction" />
        </Accordion>
        <Accordion heading={"Stable Diffusion"}>
          <DocLink link="https://github.com/krishnashed/bash_scripts_openvino/blob/main/AI%20Optimization.md#stable-diffusion" />
        </Accordion>
      </div>
    </>
  );
};

export default OpenvinoDoc;
