"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const projects = [
  {
    href: "https://github.com/furkanislek/mars-explorer/",
    imgSrc: "/mars.png",
    title: "Mars Explorer One Page",
    description:
      "This project is one page made using nextjs and tailwindcss. Pixcel perfect work was done with Figma design. Suitable for responsive design. You can look at the details for demo and source code.",
  },
  {
    href: "https://github.com/furkanislek/rixit-service",
    imgSrc: "/rixit.png",
    title: "Rixit Service One Page",
    description:
      "This project is one page made using nextjs and tailwindcss. Pixcel perfect work was done with Figma design. Suitable for responsive design. You can look at the details for demo and source code.",
  },
  {
    href: "https://github.com/furkanislek/admin-dashboard",
    imgSrc: "/admin-dashboard.png",
    title: "Admin Dashboard",
    description:
      "Admin Dashboard is a modern and dynamic management panel built with Next.js, Tailwind CSS, Redux Toolkit, Framer Motion, and Recharts. It features a user-friendly interface with smooth animations and interactive charts. Optimized for performance, it offers real-time data visualization and efficient state management. ",
  },
  {
    href: "https://github.com/furkanislek/Fimple-Credit-Calculate",
    imgSrc:
      "https://user-images.githubusercontent.com/76527169/190879487-948d6e29-1e1d-4658-9106-8659ed414c3f.png ",
    title: "Credit Calculate",
    description:
      "React Credit Calculator application. In this project, by using ReactJs, it is possible to determine the monthly installment amount and the total repayment amount based on the credit amount, the number of installments, the monthly interest rate and the installment interval.",
  },
  {
    href: "https://github.com/furkanislek/Portfolio-React",
    imgSrc: "/old.png",
    title: "Old Portfolio Site",
    description:
      "Old and First portfolio site created with React and Redux Toolkit. Multiple language definitions and theme mode were set with Redux toolkit.",
  },
  {
    href: "https://github.com/furkanislek/Tic-Tac-Toe",
    imgSrc:
      "https://user-images.githubusercontent.com/76527169/192136695-376d1b2f-9427-4d80-a63a-de3d0559b5ae.png",
    title: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe or XOX game. This game was made only by using javascript. I got the opportunity to participate in the React Practicum by creating this game. You can try the game for fun.",
  },
  {
    href: "https://github.com/furkanislek/Quiz-App/",
    imgSrc:
      "https://user-images.githubusercontent.com/76527169/212535326-7a9122a0-979a-44e3-b47f-8aa26674954e.png",
    title: "Quiz App",
    description:
      "In this project I made using React, you can answer the questions in order and see your correct number at the end of the test. You can add or remove as many questions as you want.",
  },
];
const projectsMobile = [
  {
    href: "https://github.com/furkanislek/PocketPath",
    imgSrc: "/pocketpath.jpg",
    title: "PocketPath",
    description:
      "It was written with Flutter. You can track your money in this application. By setting yourself a timed goal, you can add spending and income. You can also see your future, old and active goals.",
  },
  {
    href: "https://github.com/furkanislek/students-control-app",
    imgSrc: "/tudora.png",
    title: "TUDORA",
    description:
      "Written with Flutter. You can get help from other students if you get stuck.You can earn points if your answers are correct. You can earn points by solving weekly quizzes on time. You can make daily plans and check their completion status. With Focus mode, you can focus only on the lesson and earn points when the time is up. You can also follow other students and see your ranking among those you follow and among all users.",
  },
  {
    href: "https://github.com/furkanislek/weather-react-native",
    imgSrc: "/weather.png",
    title: "Weather App",
    description:
      "You can check the weather in this application made with React native. With your location permission, you can look at your personal location or other locations with search. ",
  },
  {
    href: "https://github.com/furkanislek/todo-react-native",
    imgSrc: "/todo.jpg",
    title: "To Do App",
    description:
      "In this application made with React native, multiple language and theme selections can be made with redux toolkit. You can access the project source code.",
  },
  {
    href: "https://github.com/furkanislek/patikastore",
    imgSrc: "/patikastore.png",
    title: "PatikaStore",
    description:
      "The application made to develop react native within the scope of the pathway.",
  },
];

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const skillRef = useRef<HTMLDivElement | null>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

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
            <div className="flex md:flex-row md:justify-evenly md:flex-wrap flex-col justify-center items-center gap-4 ">
              {projects.map((project: any, index: any) => (
                <div
                  className="max-w-sm min-w-1/3 bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20 "
                  key={index}
                >
                  <a
                    href={project.href}
                    className="cursor-pointer"
                    target="_blank"
                  >
                    <img
                      className="rounded-t-lg h-52 w-full object-cover"
                      src={project.imgSrc}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {project.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 h-48 text-justify">
                      {project.description}
                    </p>
                    <a
                      href={project.href}
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
              ))}
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
                <div className="flex md:flex-row md:justify-evenly md:flex-wrap flex-col justify-center items-center gap-4  ">
                  {projectsMobile.map((project: any, index: any) => (
                    <div
                      className="max-w-sm min-w-1/3 bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 p-2 mb-20 "
                      key={index}
                    >
                      <a
                        href={project.href}
                        className="cursor-pointer"
                        target="_blank"
                      >
                        <img
                          className="rounded-t-lg h-120 w-full object-cover"
                          src={project.imgSrc}
                          alt=""
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {project.title}
                        </h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 h-48 text-justify">
                          {project.description}
                        </p>
                        <a
                          href={project.href}
                          target="_blank"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
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
                  ))}
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
