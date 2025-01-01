"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
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
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="/pp.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg text-justify italic">
              Hi, I'm Furkan. I used to work in a different sector, but I've
              switched to this one because it's my dream job. I've been working
              on non-code for years. This year, I started working as a web
              developer and I am now a full stack developer in the finance
              sector. We redesign and code legacy codes with DDD, working in
              accordance with microservice architecture. The technologies I use
              are .netcore, nextjs, reactjs, mssql, kubernates, redux, elk, figma etc. I
              also write my own mobile applications with Flutter and React
              Native. I have some applications in the testing phase.
            </p>
            <span className="italic">
              Software Developer
            </span>
            <div className="self-end">
              <svg
                width="200"
                height="70"
                viewBox="0 0 768 599"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M130 286C130 282.286 132.067 280.911 135.444 279.222C143.054 275.418 153.13 268.577 161.778 268C169.517 267.484 168 295.052 168 299.222C168 316.942 165.071 333.386 158.444 349.778C155.998 355.831 152.86 350.255 150 346.778C145.752 341.614 143.247 332.51 137 329.222C131.065 326.098 122.768 333.865 119 337C107.398 346.651 95.9934 358.271 87.4444 370.778C85.9946 372.899 79.3485 381.585 82.2222 384.778C82.9236 385.557 86.6763 385.032 87.4444 385C95.0297 384.684 102.142 380.656 108.889 377.556C159.702 354.202 196.709 311.359 232 269.222C287.133 203.394 335.844 132.672 381.333 59.8889C381.358 59.849 393.352 38.5003 387.556 42.8889C377.858 50.2312 371.243 63.3376 366 73.8889C353.616 98.8101 345.574 125.722 334.778 151.333C322.943 179.407 309.817 206.967 296.444 234.333C287.703 252.222 278.452 269.666 268.889 287.111C268.478 287.861 262.663 297.458 264.222 298.778C266.654 300.835 275.552 297.68 278 297C286.184 294.727 294.478 292.003 302.333 288.778C308.736 286.149 315.57 283.095 321.333 279.222C322.844 278.207 325.899 275.395 322.333 278.111C314.352 284.192 308.176 292.755 301.333 300C291.68 310.221 282.312 320.409 273.444 331.333C272.201 332.865 256.429 350.512 265.333 348.556C276.908 346.012 287.063 339.274 296.444 332.333C308.73 323.244 321.023 313.557 331.333 302.222C335.374 297.78 340.931 292.408 343.778 287C343.994 286.589 339.596 289.837 339 290.444C334.57 294.958 329.94 301.288 331 308C331.585 311.704 341.993 307.348 343.333 306.778C355.5 301.599 365.808 290.197 375.333 281.444C442.897 219.365 503.162 150.784 556 75.7778C572.325 52.6042 589.258 28.9128 603.111 4.11111C607.801 -4.28548 594.596 14.4214 594.333 14.8889C573.056 52.7703 557.55 95.2012 544.444 136.444C522.701 204.868 510.353 275.65 494.556 345.556C480.867 406.128 464.596 465.992 449.111 526.111C443.358 548.446 437.446 570.93 433.444 593.667C433.218 594.952 433.164 598.67 431.778 595.667C429.618 590.986 427.934 586.219 425.444 581.667C410.314 553.999 390.076 527.827 368 505.444C332.665 469.619 291.299 441.074 245.444 420.444C194.65 397.592 140.362 381.992 86.2222 369.333C59.7372 363.141 32.9066 358.364 5.77777 356.222C-5.66366 355.319 13.0485 350.372 15.5556 349.556C66.2707 333.047 119.513 323.523 172.333 317.111C272.688 304.929 374.544 299.713 475.556 297.111C572.316 294.619 669.21 296 766 296"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
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
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
