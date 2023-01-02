const metabaseIP = "43.204.212.97";
const grafanaIP = "52.66.236.160";
const WebSSHIP = "3.110.223.13";

let workloads = {
  ml_optimizations: {
    xgboost: `http://${metabaseIP}:3000/public/question/d4fc31d2-3f67-4e83-8410-e1aea4b27594`,
    scikit_learn: {
      elastic_net: `http://${metabaseIP}:3000/public/question/b66501cd-5054-456a-adad-1ce145d615a5`,
      kmeans: `http://${metabaseIP}:3000/public/question/b999b3fd-d2e5-4613-a0d5-144b734351b2`,
      knn_mnist: `http://${metabaseIP}:3000/public/question/9e19c0f7-85d8-42aa-a31a-e440c32aa259`,
      lasso_regression: `http://${metabaseIP}:3000/public/question/9596eb07-4152-480b-a370-8f325ab4c6ba`,
      linear_regression: `http://${metabaseIP}:3000/public/question/88ba816b-3a8f-4f76-8ad5-ac1f9a6d6bbb`,
      nusvr: `http://${metabaseIP}:3000/public/question/7f3bd829-e2af-4242-8a9d-bd2793dc068a`,
      ridge_regression: `http://${metabaseIP}:3000/public/question/315465a6-e17d-4ce9-aa07-b196220b9e27`,
      svc: `http://${metabaseIP}:3000/public/question/ebc66054-4c97-4783-b489-07b1da68963b`,
    },
  },
};

export { workloads, metabaseIP, grafanaIP, WebSSHIP };
