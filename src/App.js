import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [links, setLinks] = useState({
    elastic_net:
      "http://13.232.215.175:3000/public/question/b66501cd-5054-456a-adad-1ce145d615a5",
    kmeans:
      "http://13.232.215.175:3000/public/question/b999b3fd-d2e5-4613-a0d5-144b734351b2",
    knn_mnist:
      "http://13.232.215.175:3000/public/question/9e19c0f7-85d8-42aa-a31a-e440c32aa259",
    lasso_regression:
      "http://13.232.215.175:3000/public/question/9596eb07-4152-480b-a370-8f325ab4c6ba",
    linear_regression:
      "http://13.232.215.175:3000/public/question/88ba816b-3a8f-4f76-8ad5-ac1f9a6d6bbb",
    nusvr:
      "http://13.232.215.175:3000/public/question/7f3bd829-e2af-4242-8a9d-bd2793dc068a",
    ridge_regression:
      "http://13.232.215.175:3000/public/question/315465a6-e17d-4ce9-aa07-b196220b9e27",
    svc: "http://13.232.215.175:3000/public/question/ebc66054-4c97-4783-b489-07b1da68963b",
    xgboost:
      "http://13.232.215.175:3000/public/question/d4fc31d2-3f67-4e83-8410-e1aea4b27594",
  });

  const [showModal, setShowModal] = useState(true);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    if (selectedModel) setShowModal(false);
  }, [selectedModel]);

  const displayModal = () => {
    return (
      <>
        <div className="justify-center font-Montserrat items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-6xl bg-gray-300 ">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-custom-black outline-none focus:outline-none">
              <div className="flex justify-between text-2xl m-4 ">
                <h2 className="px-4 font-bold">Select Optimizations</h2>
                <button
                  className="font-bold hover:bg-red-500 rounded-md hover:text-white px-4 background-transparent  "
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  x
                </button>
              </div>
              <hr />

              <button
                className="px-2 my-2 text-center mx-auto rounded-md hover:bg-gray-500 w-2/3 "
                type="button"
                onClick={() => setSelectedModel(links.xgboost)}
              >
                XGBoost
              </button>

              <h2 className="mx-8 mb-2 font-bold">
                SciKit Learn Optimizations
              </h2>

              <div class="w-2/3 mx-auto px-3 mb-6 ">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
                    id="grid-state"
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option>--Select Model--</option>
                    <option value={links.elastic_net}>Elastic Net</option>
                    <option value={links.kmeans}>Kmeans</option>
                    <option value={links.knn_mnist}>Knn Mnist</option>
                    <option value={links.lasso_regression}>
                      Lasso Regression
                    </option>
                    <option value={links.linear_regression}>
                      Linear Regression
                    </option>
                    <option value={links.nusvr}>Nusvr</option>
                    <option value={links.ridge_regression}>
                      Ridge Regression
                    </option>
                    <option value={links.svc}>Svc</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-10 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  };

  return (
    <>
      <nav class=" border-gray-200 px-2  py-1 bg-gray-300">
        <div class="container flex flex-wrap items-center justify-between px-6 mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            {/* <img src="#" class="h-6 mr-3 sm:h-9" /> */}
            <span class="self-center font-bold text-xl font-semibold whitespace-nowrap dark:text-white">
              Optimizations
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li onClick={() => setShowModal(!showModal)}>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Optimizations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {selectedModel ? (
        <div className="w-full h-[100vh]">
          <div className="flex justify-between h-[70%] ">
            <iframe
              src="http://3.111.35.80:3000/d/rYdddlPWk/node-exporter-full?orgId=1&from=now-5m&to=now&kiosk&refresh=5s"
              frameborder="0"
              width="50%"
              // height="70%"
              allowtransparency
            ></iframe>

            <iframe
              src={selectedModel}
              frameborder="0"
              width="50%"
              // height="70%"
              allowtransparency
            ></iframe>
          </div>
          <iframe
            src="http://15.206.164.94:2222/ssh/host/15.206.164.94"
            frameborder="0"
            width="100%"
            height="30%"
            className="mt-1 hide-scroll"
            allowTransparency
          ></iframe>
        </div>
      ) : (
        displayModal()
      )}
      {showModal ? displayModal() : null}
    </>
  );
}

export default App;
