"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Menu() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* ハンバーガーアイコン */}
      <div className="absolute top-6 right-0 mr-6 pr-3 pl-3 pt-1 z-40">
        <button onClick={() => setVisible(true)}>
          <GiHamburgerMenu className="duration-200 hover:scale-125 select-none text-white text-3xl" />
        </button>
      </div>

      {/* メニュー本体 */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-white z-40
          transition-all duration-500 ease-in-out
          ${
            visible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        {/* 閉じるボタン */}
        <button
          className="absolute top-6 right-0 mr-6 pr-3 pl-3 pt-1"
          onClick={() => setVisible(false)}
        >
          <IoMdClose className="duration-200 hover:scale-125 text-main select-none text-3xl z-50" />
        </button>

        {/* メニュー項目 */}
        <div className="text-center mt-24 lg:mt-12">
          {[
            { href: "/", label: "Home" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/updates", label: "Update History" },
          ].map((item) => (
            <div key={item.href} className="mt-8">
              <Link href={item.href} onClick={() => setVisible(false)}>
                <h2 className="duration-300 hover:scale-125">{item.label}</h2>
              </Link>
            </div>
          ))}

          {/* 外部リンク */}
          {[
            { href: "https://zenn.dev/aputech", label: "Zenn" },
            { href: "https://note.com/h1idev", label: "note" },
            { href: "https://x.com/h1idev", label: "Twitter" },
            { href: "https://github.com/CA01971020", label: "GitHub" },
            {
              href: "mailto:CA01971020@st.kawahara.ac.jp",
              label: "E-Mail",
            },
          ].map((item) => (
            <div key={item.href} className="mt-8">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="duration-300 hover:scale-125">{item.label}</h2>
              </a>
            </div>
          ))}

          {/* コピーライト */}
          <div className="mt-16">
            <small className="text-main font-bold text-xl">
              &copy; hii dev. 2025
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
