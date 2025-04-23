"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export function MenuState() {
  const [show, setShow] = useState(false);
  return { show, setShow };
}

export default function Menu() {
  const { show, setShow } = MenuState();
  if (show === true) {
    return (
      <div className=" fixed bg-white w-full h-screen top-0 left-0 right-0 bottom-0">
        <button
          className=" absolute top-6 right-0 mr-6 pr-3 pl-3 pt-1"
          onClick={() => setShow(false)}
        >
          <IoMdClose className=" text-main select-none text-3xl" />
        </button>
        <div className=" text-center mt-32">
          <div>
            <div className=" mt-8">
              <h2>Home</h2>
            </div>
            <div className=" mt-8">
              <h2>Profile</h2>
            </div>
            <div className=" mt-8">
              <h2>Skills</h2>
            </div>
            <div className=" mt-8">
              <h2>Portfolio</h2>
            </div>
            <div className=" mt-8">
              <h2>Zenn</h2>
            </div>
            <div className=" mt-8">
              <h2>note</h2>
            </div>
            <div className=" mt-8">
              <h2>Twitter</h2>
            </div>
            <div className=" mt-8">
              <h2>GitHub</h2>
            </div>
            <div className=" mt-8">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" absolute top-6 right-0 mr-6 pr-3 pl-3 pt-1">
      <button onClick={() => setShow(true)}>
        <GiHamburgerMenu className=" select-none text-white text-3xl" />
      </button>
    </div>
  );
}
