"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import NextLink from "next/link";

export function MenuState() {
  const [show, setShow] = useState(false);
  return { show, setShow };
}

export default function Menu() {
  const { show, setShow } = MenuState();
  if (show === true) {
    return (
      <div className=" fixed select-none bg-white w-full h-screen top-0 left-0 right-0 bottom-0">
        <button
          className=" absolute top-6 right-0 mr-6 pr-3 pl-3 pt-1"
          onClick={() => setShow(false)}
        >
          <IoMdClose className="duration-200 hover:scale-125 text-main select-none text-3xl" />
        </button>
        <div className=" text-center mt-24">
          <div>
            <div className=" mt-8">
              <Link href="/" onClick={() => setShow(false)}>
                <h2 className="duration-300 hover:scale-125">Home</h2>
              </Link>
            </div>
            <div className=" mt-8">
              <NextLink href="/portfolio" onClick={() => setShow(false)}>
                <h2 className="duration-300 hover:scale-125">Portfolio</h2>
              </NextLink>
            </div>
            <div className=" mt-8">
              <a
                href="https://zenn.dev/aputech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="duration-300 hover:scale-125">Zenn</h2>
              </a>
            </div>
            <div className=" mt-8">
              <a
                href="https://note.com/hii_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="duration-300 hover:scale-125">note</h2>
              </a>
            </div>
            <div className=" mt-8">
              <a
                href="https://x.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="duration-300 hover:scale-125">Twitter</h2>
              </a>
            </div>
            <div className=" mt-8">
              <a
                href="https://github.com/CA01971020"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="duration-300 hover:scale-125">GitHub</h2>
              </a>
            </div>
            <div className=" mt-8">
              <a
                href="mailto:CA01971020@st.kawahara.ac.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="duration-300 hover:scale-125">E-Mail</h2>
              </a>
            </div>
            <div className=" mt-8">
              <NextLink href="/updates" onClick={() => setShow(false)}>
                <h2 className="duration-300 hover:scale-125">Update History</h2>
              </NextLink>
            </div>
          </div>
          <div className="mt-18">
            <small className="copyright text-main font-bold text-xl">
              &copy; hii dev. 2025
            </small>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" absolute top-6 right-0 mr-6 pr-3 pl-3 pt-1">
      <button onClick={() => setShow(true)}>
        <GiHamburgerMenu className="duration-200 hover:scale-125 select-none text-white text-3xl" />
      </button>
    </div>
  );
}
