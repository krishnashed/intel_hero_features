import pandas from "./Assets/pandas.png";
import numpy from "./Assets/numpy.png";
import scipy from "./Assets/scipy.jpg";
import numba from "./Assets/numba.png";
import xgboost from "./Assets/xgboost.png";
import tflow from "./Assets/tflow.png";
import pytorch from "./Assets/pytorch.png";
import sklearn from "./Assets/sklearn.png";
import openvino from "./Assets/openvino.jpg";
import intneural from "./Assets/intneural.jpg";
import modin from "./Assets/modin.jpg";
import bigDL from "./Assets/bigdl.jpg";

const metabaseIP = "10.190.181.14";
const grafanaIP = "192.168.122.155";
const WebSSHIP = "192.168.122.71";

let workloads = {
  ml_optimizations: {
    xgboost: `http://${metabaseIP}:5842/public/question/ec7b1ac1-a8e0-4fdb-82a6-52b345eaac7c`,
    scikit_learn: {
      elastic_net: `http://${metabaseIP}:5842/public/question/3b00e983-8e0e-4f23-bd56-74db6d693cfa`,
      kmeans: `http://${metabaseIP}:5842/public/question/0974e33e-f394-41e1-bbc0-c7d600a07681`,
      knn_mnist: `http://${metabaseIP}:5842/public/question/36a9ac72-eb5f-4f96-849c-3da3c2485601`,
      lasso_regression: `http://${metabaseIP}:5842/public/question/b142f4ee-1dc1-4a47-b1df-7257850a07be`,
      linear_regression: `http://${metabaseIP}:5842/public/question/c4d1eb76-38bd-4afc-83b6-dd5afcb57448`,
      nusvr: `http://${metabaseIP}:5842/public/question/0fc739b4-4c96-4e7f-9f50-6a3f3102d9ca`,
      ridge_regression: `http://${metabaseIP}:5842/public/question/64c3192c-aaa7-40c8-9f42-a3d30ff56aba`,
      svc: `http://${metabaseIP}:5842/public/question/08a55080-7ef7-4efe-a6a4-9e6cae3418b4`,
    },
  },
};

let workloadData = [
  {
    heading: "ML & DL",
    data: [
      {
        subheading: "Intel Optimized Python",
        title: "NumPy",
        src: numpy,
      },
      {
        subheading: "Intel Optimized Python",
        title: "SciPy",
        src: scipy,
      },
      {
        subheading: "Intel Optimized Python",
        title: "Numba",
        src: numba,
      },
      {
        subheading: "Intel Optimized Python",
        title: "Pandas",
        src: pandas,
      },
      {
        subheading: "Intel Optimized Python",
        title: "Modin",
        src: modin,
      },
      {
        subheading: "Intel Optimized ML",
        title: "SciKit Learn",
        src: sklearn,
      },
      {
        subheading: "Intel Optimized ML",
        title: "XGBoost",
        src: xgboost,
      },
      {
        subheading:
          "Intel Optimized DL Frameworks, DL Optimization Tools, ML/DL OPS Tools",
        title: "TensorFlow",
        src: tflow,
      },
      {
        subheading:
          "Intel Optimized DL Frameworks, DL Optimization Tools, ML/DL OPS Tools",
        title: "Pytorch",
        src: pytorch,
      },
      {
        subheading:
          "Intel Optimized DL Frameworks, DL Optimization Tools, ML/DL OPS Tools",
        title: "OpenVino",
        src: openvino,
      },
      {
        subheading:
          "Intel Optimized DL Frameworks, DL Optimization Tools, ML/DL OPS Tools",
        title: "Intel Neural Compressor",
        src: intneural,
      },
      {
        subheading:
          "Intel Optimized DL Frameworks, DL Optimization Tools, ML/DL OPS Tools",
        title: "BigDL",
        src: bigDL,
      },
    ],
  },
];

export { workloads, metabaseIP, grafanaIP, WebSSHIP, workloadData };
