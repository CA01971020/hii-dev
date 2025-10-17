"use client";

import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/ui/button";
import Footer from "@/components/footer";
import { MdArrowOutward } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { SiZenn } from "react-icons/si";
import { FaRegHandPointUp } from "react-icons/fa6";

const texts = [
  "Hi, I'm Hii.",
  "An engineering student from Ehime,Japan.",
  "Studying at Kawahara Computer Business College.",
  "Also affiliated with Sanno University.",
  "Aspiring web developer.",
  "Passionate about beer and reading.",
];

function TypingAnimation() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, textIndex]);
  return (
    <div className="flex items-center justify-center mt-20 h-40 mr-6 ml-6 rounded-2xl lg:h-screen lg:mt-0">
      <p className="!text-lg font-mono animate-fade-in">{displayText}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className=" relative top-0 mb-20">
      <TypingAnimation></TypingAnimation>

      <div className="animate-fade-in">
        <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
          <div className="duration-200 hover:scale-103 relativ pt-4 pb-5 pr-4  pl-4 ml-4 mr-4 rounded-2xl ">
            <h2 className=" border-b-1 border-stone-200 pb-1 ">PROFILE</h2>
            <div className="mt-4">
              <p>hii / Haruto Higashimoto.</p>
              <p>Web Engineer. </p>
              <p>Ehime / Japan. | Next Tokyo.</p>
              <p>Kawahara Computer Business College. </p>
              <p>Sanno University.</p>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative bg-white pt-4 pb-5 pr-4 pl-4 ml-4 mr-4 ">
            <h2 className=" border-b-1 border-stone-200 pb-1">SKILLS</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <p>
                HTML5 <br />
                CSS3 <br />
                JavaScript <br />
                TypeScript <br />
                Python
              </p>
              <p>
                React <br />
                Next.js <br />
                FastAPI <br />
                TailwindCSS <br />
                Azure <br />
                GitHub
              </p>
            </div>
          </div>

          <div className=" duration-200 hover:scale-103 relative bg-white pt-4 pb-6 pr-4 pl-4 ml-4 mr-4">
            <h2 className=" border-b-1 border-stone-200 pb-1">BLOG</h2>
            <div className="mt-4">
              <a
                href="https://zenn.dev/aputech"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sky-500 flex gap-0.5"
              >
                <SiZenn className=" text-blue-400" />
                Zenn
                <MdArrowOutward />
              </a>

              <p>17 Article / 60 Likes / 10 Flowers</p>
            </div>
            <div className="mt-1">
              <a
                href="https://note.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sky-500 flex gap-0.5"
              >
                note
                <MdArrowOutward />
              </a>
              <p>6 Article / 69 Likes / 19000 Views</p>
            </div>
            <div className="mt-4">
              <a
                href="https://sizu.me/hii"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sky-500 flex gap-0.5"
              >
                <FaRegHandPointUp className="text-black" />
                しずかなインターネット
                <MdArrowOutward />
              </a>
              <p>6 Article / miscellaneous notes</p>
            </div>
            <div className=" mt-6 flex justify-center">
              <NextLink href="/blog">
                <CustomButton buttontext="ブログ一覧" />
              </NextLink>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative pt-4 pb-6 pr-4 pl-4 ml-4 mr-4 ">
            <h2 className=" border-b-1 border-stone-200 pb-1">PORTFOLIO</h2>
            <div className="mt-4">
              <p>
                13 Projects <br />2 active / 11 completed or paused
              </p>
              <div className=" mt-6 flex justify-center">
                <NextLink href="/portfolio">
                  <CustomButton buttontext="プロジェクト一覧" />
                </NextLink>
              </div>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative pt-4 pb-6 pr-4 pl-4 ml-4 mr-4">
            <h2 className=" border-b-1 border-stone-200 pb-1">SNS</h2>
            <div className="mt-4 space-x-4 flex">
              <a
                href="https://x.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaSquareXTwitter className="text-black text-4xl" />
              </a>
              <a
                href="https://github.com/CA01971020"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaSquareGithub className="text-black text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/hi1dev?igsh=MW1mMDB0a2xzaDFlNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaSquareInstagram className=" text-pink-600 text-4xl" />
              </a>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative pt-4 pb-6 pr-4 pl-4 ml-4 mr-4">
            <h2 className="relatived  border-b-1 border-stone-200 pb-1">
              CONTACT
            </h2>
            <div className=" flex mt-4">
              <IoMail className="text-black text-3xl" />
              <p className=" pt-0.5 pl-2">E-Mail</p>
            </div>
            <p className="break-words select-text mt-1">
              CA01971020@st.kawahara.ac.jp
            </p>
            <div className=" flex mt-4">
              <a
                href="https://x.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="text-sky-500 flex gap-0.5">
                  <FaSquareXTwitter className="text-black text-3xl" />
                  <p className="pt-0.5 pl-2 !text-sky-500">Twitter DM</p>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-40 mb-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
