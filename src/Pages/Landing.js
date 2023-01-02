import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <div class="flex flex-col bg-white text-[#00477C] m-auto p-auto">
        <h1 class="flex py-10   px-2 lg:mx-40 md:mx-20  font-bold text-4xl ">
          Our Categories
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden  shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex justify-center">
                  <div class=" shadow-lg bg-white max-w-sm">
                    <a href="#!">
                      <img
                        src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg"
                        alt=""
                      />
                    </a>
                    <div class="p-6">
                      <h5 class=" text-xl font-medium mb-2">
                        ML Optimisations
                      </h5>
                      <p class="text-gray-700 text-base mb-4">
                        Experience lightning-fast load times and seamless
                        performance with our advanced AI algorithms, optimized
                        for maximum efficiency and speed.
                      </p>
                      <Link
                        to={{
                          pathname: "/optimizations/ml_optimizations",
                        }}
                      >
                        <button
                          type="button"
                          class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden  shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex justify-center">
                  <div class=" shadow-lg bg-white max-w-sm">
                    <a href="#!">
                      <img
                        src="https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?size=626&ext=jpg&ga=GA1.2.793725447.1672671314&semt=sph"
                        alt=""
                      />
                    </a>
                    <div class="p-6">
                      <h5 class=" text-xl font-medium mb-2">
                        Database Optimizations
                      </h5>
                      <p class="text-gray-700 text-base mb-4">
                        Our optimized database structure allows for faster data
                        retrieval and improved performance, ensuring a seamless
                        user experience
                      </p>
                      <Link
                        to={{
                          pathname: "/optimizations/db_optimizations",
                        }}
                      >
                        <button
                          type="button"
                          class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden  shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex justify-center">
                  <div class=" shadow-lg bg-white max-w-sm">
                    <a href="#!">
                      <img
                        src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg"
                        alt=""
                      />
                    </a>
                    <div class="p-6">
                      <h5 class=" text-xl font-medium mb-2">
                        ML Optimisations
                      </h5>
                      <p class="text-gray-700 text-base mb-4">
                        Experience lightning-fast load times and seamless
                        performance with our advanced AI algorithms, optimized
                        for maximum efficiency and speed.
                      </p>
                      <Link
                        to={{
                          pathname: "/optimizations/ml_optimizations",
                        }}
                      >
                        <button
                          type="button"
                          class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden  shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex justify-center">
                  <div class=" shadow-lg bg-white max-w-sm">
                    <a href="#!">
                      <img
                        src="https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?size=626&ext=jpg&ga=GA1.2.793725447.1672671314&semt=sph"
                        alt=""
                      />
                    </a>
                    <div class="p-6">
                      <h5 class=" text-xl font-medium mb-2">
                        Database Optimizations
                      </h5>
                      <p class="text-gray-700 text-base mb-4">
                        Our optimized database structure allows for faster data
                        retrieval and improved performance, ensuring a seamless
                        user experience
                      </p>
                      <Link
                        to={{
                          pathname: "/optimizations/db_optimizations",
                        }}
                      >
                        <button
                          type="button"
                          class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
