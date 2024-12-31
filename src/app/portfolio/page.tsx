"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);


  const skillRef = useRef<HTMLDivElement | null>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement | null>(null);

  const educationRef = useRef<HTMLDivElement | null>(null);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-1/1 lg:pr-0 xl:w-1/1">
          <div className="flex flex-col gap-12 justify-center ">
            <h1 className="font-bold text-2xl">ReactJs - NextJs Projects</h1>
            <div className="flex md:flex-row md:justify-between md:flex-wrap flex-col justify-center items-center gap-8 ">
              <div className="max-w-sm min-w-1/3 bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                <a
                  href="https://github.com/furkanislek/rixit-service"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <img className="rounded-t-lg" src="/rixit.png" alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Rixit Service One Page
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 ">
                    This project is one page made using nextjs and tailwindcss.
                    Pixcel perfect work was done with Figma design. Suitable for
                    responsive design. You can look at the details for demo and
                    source code.
                  </p>
                  <a
                    href="https://github.com/furkanislek/rixit-service"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Source Code
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                <a
                  href="https://github.com/furkanislek/rixit-service"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <img className="rounded-t-lg" src="/rixit.png" alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Rixit Service One Page
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This project is one page made using nextjs and tailwindcss.
                    Pixcel perfect work was done with Figma design. Suitable for
                    responsive design. You can look at the details for demo and
                    source code.
                  </p>
                  <a
                    href="https://github.com/furkanislek/rixit-service"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Source Code
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                <a
                  href="https://github.com/furkanislek/rixit-service"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <img className="rounded-t-lg" src="/rixit.png" alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Rixit Service One Page
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This project is one page made using nextjs and tailwindcss.
                    Pixcel perfect work was done with Figma design. Suitable for
                    responsive design. You can look at the details for demo and
                    source code.
                  </p>
                  <a
                    href="https://github.com/furkanislek/rixit-service"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Source Code
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                <a
                  href="https://github.com/furkanislek/rixit-service"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <img className="rounded-t-lg" src="/rixit.png" alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Rixit Service One Page
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This project is one page made using nextjs and tailwindcss.
                    Pixcel perfect work was done with Figma design. Suitable for
                    responsive design. You can look at the details for demo and
                    source code.
                  </p>
                  <a
                    href="https://github.com/furkanislek/rixit-service"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Source Code
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              <div className="flex flex-col gap-12 justify-center ">
                <h1 className="font-bold text-2xl">Flutter - React Native</h1>
                <div className="flex lg:flex-row md:justify-around md:flex-wrap flex-col justify-center items-center ">
                  <div className="max-w-sm min-w-1/3 bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                    <a
                      href="https://github.com/furkanislek/rixit-service"
                      className="cursor-pointer"
                      target="_blank"
                    >
                      <img className="rounded-t-lg" src="/rixit.png" alt="" />
                    </a>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Rixit Service One Page
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 ">
                        This project is one page made using nextjs and
                        tailwindcss. Pixcel perfect work was done with Figma
                        design. Suitable for responsive design. You can look at
                        the details for demo and source code.
                      </p>
                      <a
                        href="https://github.com/furkanislek/rixit-service"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Source Code
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                    <a
                      href="https://github.com/furkanislek/rixit-service"
                      className="cursor-pointer"
                      target="_blank"
                    >
                      <img className="rounded-t-lg" src="/rixit.png" alt="" />
                    </a>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Rixit Service One Page
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This project is one page made using nextjs and
                        tailwindcss. Pixcel perfect work was done with Figma
                        design. Suitable for responsive design. You can look at
                        the details for demo and source code.
                      </p>
                      <a
                        href="https://github.com/furkanislek/rixit-service"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Source Code
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                    <a
                      href="https://github.com/furkanislek/rixit-service"
                      className="cursor-pointer"
                      target="_blank"
                    >
                      <img className="rounded-t-lg" src="/rixit.png" alt="" />
                    </a>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Rixit Service One Page
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This project is one page made using nextjs and
                        tailwindcss. Pixcel perfect work was done with Figma
                        design. Suitable for responsive design. You can look at
                        the details for demo and source code.
                      </p>
                      <a
                        href="https://github.com/furkanislek/rixit-service"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Source Code
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20">
                    <a
                      href="https://github.com/furkanislek/rixit-service"
                      className="cursor-pointer"
                      target="_blank"
                    >
                      <img className="rounded-t-lg" src="/rixit.png" alt="" />
                    </a>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Rixit Service One Page
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This project is one page made using nextjs and
                        tailwindcss. Pixcel perfect work was done with Figma
                        design. Suitable for responsive design. You can look at
                        the details for demo and source code.
                      </p>
                      <a
                        href="https://github.com/furkanislek/rixit-service"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Source Code
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
