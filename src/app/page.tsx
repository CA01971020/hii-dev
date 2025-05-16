"use client";

import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/ui/button";
import Footer from "@/components/footer";

const texts = [
  "Hi, I'm Hii.",
  "An engineering student from Ehime,Japan.",
  "Studying at Kawahara Computer Business College.",
  "Also affiliated with Sanno University.",
  "Aspiring web developer.",
  "Passionate about beer and reading.",
];

export function TypingAnimation() {
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
    <div className="flex items-center justify-center h-20 m-8 rounded-2xl">
      <p className="!text-xl font-mono">{displayText}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className=" relative top-32 mb-20">
      <h1 className="relative text-center">Home</h1>

      <TypingAnimation></TypingAnimation>

      <div className="animate-fade-in">
        <div className="lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
          <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-5 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg shadow-black/50 border-1 border-gray">
            <h2>Profile</h2>
            <p className="mt-4">
              21 years old. <br />
              Web Engineer. <br />
              Ehime / Japan. | Next Tokyo. <br />
              Kawahara Computer Business College. <br />
              Sanno University.
            </p>
          </div>

          <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-5 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg shadow-black/50 border-1 border-gray">
            <h2>Skills</h2>
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

          <div className=" duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg shadow-black/50 border-1 border-gray">
            <h2>Blog</h2>
            <p className="mt-4">Zenn / 15 Article / 46 Likes / 5 Flowers</p>
            <a
              href="https://zenn.dev/aputech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton buttontext="Visit Zenn" />
            </a>
            <p className="mt-1">note / 4 Article / 23 Likes / 6600 Views</p>
            <a
              href="https://note.com/h1idev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton buttontext="Visit note" />
            </a>
          </div>

          <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg shadow-black/50 border-1 border-gray">
            <h2>Portfolio</h2>
            <div className="mt-4">
              <p>
                11 Projects <br />2 active / 9 completed or paused
              </p>
              <NextLink href="/portfolio">
                <CustomButton buttontext="My Portfolios" />
              </NextLink>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg shadow-black/50 border-1 border-gray">
            <h2>SNS</h2>
            <div className="grid grid-cols-2 mt-4">
              <div className="space-y-4">
                <p>Twitter</p>
                <p>GitHub</p>
              </div>
              <div className=" space-y-4">
                <a
                  href="https://x.com/h1idev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <CustomButton buttontext="Follow us on Twitter" />
                </a>
                <a
                  href="https://github.com/CA01971020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <CustomButton buttontext="View on GitHub" />
                </a>
              </div>
            </div>
          </div>
          <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg shadow-black/50 border-1 border-gray">
            <h2 className="relatived">Contact</h2>
            <p className="mt-4">E-Mail</p>
            <p className="break-words select-text bg-gray text-center rounded-xl">
              CA01971020@st.kawahara.ac.jp
            </p>
            <p className="mt-1">Twitter DM</p>
            <a
              href="https://x.com/h1idev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton buttontext="Contact via Twitter DM" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-20 mb-44">
        <Footer />
      </div>
    </div>
  );
}
