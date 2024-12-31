"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement | null>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement | null>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef<HTMLDivElement | null>(null);
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-1/1 lg:pr-0 xl:w-1/1">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">ReactJs - NextJs Projects</h1>
            <div className= "flex justify-center flex-row">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
              <a
                href="https://github.com/furkanislek/rixit-service"
                className="cursor-pointer"
                target="_blank"
              >
                <img className="rounded-t-lg" src="/rixit.png" alt="" />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
              <a
                href="https://github.com/furkanislek/rixit-service"
                className="cursor-pointer"
                target="_blank"
              >
                <img className="rounded-t-lg" src="/rixit.png" alt="" />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
              <a
                href="https://github.com/furkanislek/rixit-service"
                className="cursor-pointer"
                target="_blank"
              >
                <img className="rounded-t-lg" src="/rixit.png" alt="" />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Flutter
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Native
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MSSql
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Cypress
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                XUnit
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Jira
              </div>
            </motion.div>
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
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-120">
                <div className="w-3/5">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    <ul>
                      <li>
                        - I have experience working at Intertech in the field of
                        software services for banks as a software developer in
                        the Campaign Management team from CRM teams. We are
                        creating decision-making infrastructure and screens with
                        JSON logic for the decision mechanism in our project.
                      </li>
                      <li>
                        - I worked on the microservice transformation of the
                        project containing personnel scorecard information. I
                        saved time by using a multiple condition and table
                        structure with a mapping method and mapping in a single
                        table. I used backend netcore, rabbitmq, kubernetes
                        technologies, nextjs, antd, and redux toolkit
                        technologies for the frontend.{" "}
                      </li>
                      <li>
                        - During this time, I worked with technologies such as
                        Net Core, MsSQL, NextJs, ReactJs, Entity Framework, and
                        Kubernetes.
                      </li>
                      <li>
                        - On the backend side, I wrote SOLID compatible services
                        using Net Core and Entity Framework.
                      </li>
                      <li>
                        - On the frontend side, connect to NextJs with Gateway
                        to develop user-friendly screens.{" "}
                      </li>
                      <li>
                        - Additionally, use auxiliary tools like Jira and
                        Jenkins.
                      </li>
                      <li>
                        - Using the Ant Design (antd) library for React with
                        TypeScript{" "}
                      </li>
                      <li>
                        - Most of the projects used the Git version control
                        system, while a few opted for the TFS control system.
                      </li>
                    </ul>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2023 - Present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Intertech Bilgi Islem ve Paz. A.S
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-3/5 "></div>
              </div>
              <div className="flex justify-between h-96">
                <div className="w-3/5 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-3/5 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Software Intern
                  </div>
                  <div className="p-3 text-sm italic">
                    - At Workintech, we collaborate with sectoral companies on
                    joint projects and provide comprehensive training in the
                    software industry. We have successfully completed
                    approximately 85 projects using ReactJS, NodeJS, Python,
                    PostgreSQL and ExpressJS. Additionally, I served as a
                    support instructor for other trainees and interns on various
                    projects for four months.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Oct 2022 - Apr 2023{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Workintech
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  <div className="p-3 text-sm italic">
                    <ul>
                      <li>
                        - Upwork - Container Dashboard, Intraday Reporting
                        Dashboard
                      </li>
                      <li>
                        - R10 - Web Site Speed Optimization, Web Site Seo
                        Application
                      </li>
                    </ul>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Education
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-100">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer Course
                  </div>
                  <div className="p-3 text-sm italic">
                    At Workintech, we collaborate with sectoral companies on
                    joint projects and provide comprehensive training in the
                    software industry. We have successfully completed
                    approximately 85 projects using ReactJS, NodeJS, Python,
                    PostgreSQL and ExpressJS. Additionally, I served as a
                    support instructor for other trainees and interns on various
                    projects for four months.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Oct 2022 - Apr 2023
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Workintech
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 pt-10 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Civil Engineering
                  </div>
                  <div className="p-3 text-sm italic">
                    Civil Engineering (B.Sc).{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016 - 2020{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Cukurova University
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
