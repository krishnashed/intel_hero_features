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

export { workloads, metabaseIP, grafanaIP, WebSSHIP };
