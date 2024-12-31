"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36">
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/pp.png"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Software Developer</h1>
          <p className="md:text-xl">
            Hello, my name is Furkan. I am a Software Developer. If you want to
            work with innovative architectures based on Microservice
            foundations, you can contact me.
          </p>
          <div className="flex gap-4 w-full">
            <a href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </a>
            <a href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
