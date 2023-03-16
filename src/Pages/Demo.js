import React, { useState, useEffect } from "react";
import Split from "react-split";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { workloads, grafanaIP, WebSSHIP } from "../constants";

const Demo = () => {
  let { workload, category } = useParams();
  const [selectedWorkload, setSelectedWorkload] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [subCategories, setSubCategories] = useState(null);

  useEffect(() => {
    console.log("workloads = ", workload);
    console.log("category = ", category);
    if (typeof workloads[category][workload] == "string")
      setSelectedWorkload(workloads[category][workload]);
    else {
      setShowModal(true);
      setSubCategories(workloads[category][workload]);
    }
  }, []);

  useEffect(() => {
    if (selectedWorkload) setShowModal(false);
  }, [selectedWorkload]);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const presentableTitle = (name) => {
    return capitalize(name.split("_").join(" "));
  };

  const listDropdown = () => {
    let template = [];
    for (const key in subCategories) {
      console.log(`${key} ${subCategories[key]}`);
      template.push(
        <option value={subCategories[key]}>{presentableTitle(key)}</option>
      );
    }
    return template;
  };

  const displayModal = () => {
    return (
      <>
        <Header />
        <div className="justify-center font-Montserrat items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-6xl bg-gray-300 ">
            {/*content*/}
            <div className="border-0  shadow-lg relative flex flex-col w-full bg-custom-black outline-none focus:outline-none">
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
              <h2 className="mx-8 my-4 font-bold">
                {presentableTitle(workload)} Optimizations
              </h2>

              <div class="w-2/3 mx-auto px-3 mb-6 ">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
                    id="grid-state"
                    onChange={(e) => setSelectedWorkload(e.target.value)}
                  >
                    <option>--Select Model--</option>
                    {listDropdown()}
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
      <Header />
      <Split
        sizes={[65, 35]}
        style={{ height: `calc(100vh - 2.8rem)` }}
        direction="vertical"
      >
        <Split sizes={[55, 45]} className="flex">
          <div className="bg-gray-300">
            <iframe
              src={`http://${grafanaIP}:3000/d/rYdddlPWk/node-exporter-full?orgId=1&from=now-5m&to=now&kiosk&refresh=5s`}
              width="100%"
              height="100%"
              allowtransparency
            ></iframe>
          </div>
          <div className="bg-gray-300">
            <iframe
              src={selectedWorkload}
              width="100%"
              height="100%"
              allowtransparency
            ></iframe>
          </div>
        </Split>
        <div className="bg-gray-300">
          <iframe
            src={`http://10.190.181.14:5844/ssh/host/192.168.122.71`}
            width="100%"
            height="100%"
            frameborder="0"
            allowTransparency
          ></iframe>
        </div>
      </Split>
      {showModal ? displayModal() : null}
    </>
  );
};

export default Demo;
