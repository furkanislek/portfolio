"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Navlink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
      backgroundColor: "#000000",
    },
    opened: {
      rotate: 45,
      backgroundColor: "#FFFFFF",
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
      backgroundColor: "#000000",
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
      backgroundColor: "#000000",
    },
    opened: {
      rotate: -45,
      backgroundColor: "#FFFFFF",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 text-xl">
      <div className="hidden md:flex gap-4 w-1/2">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      <div className="flex gap-8 w-1/2 lg:w-1/4 justify-start md:justify-end">
        <Link href={"https://github.com/furkanislek"} target="_blank">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"https://www.linkedin.com/in/furkanislek/"} target="_blank">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"https://leetcode.com/u/furkanislek/"} target="_blank">
          <Image src="/leetcode.png" alt="" width={24} height={24} />
        </Link>
        <Link
          href={"https://www.hackerrank.com/profile/furkanislek/"}
          target="_blank"
        >
          <Image src="/hackerrank.png" alt="" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden z-50">
        <button
          className="w-10 h-8 flex flex-col z-50 justify-between relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 z-50 h-1  rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 z-50 h-1  rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 z-50 h-1  rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl "
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
