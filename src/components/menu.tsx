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
              <h2 className="duration-300 hover:scale-125">Home</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">Profile</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">Skills</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">Portfolio</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">Zenn</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">note</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">Twitter</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">GitHub</h2>
            </div>
            <div className=" mt-8">
              <h2 className="duration-300 hover:scale-125">Contact</h2>
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
