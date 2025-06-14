"use client";

import CirclePhotoCard from "@/components/ui/CirclePhotoCard";
import Menu from "./menu";

export default function Header() {
  return (
    <div className="flex items-center pt-1 pb-1 border-b-1 border-stone-200 backdrop-blur-md">
      <a
        href="https://github.com/CA01971020"
        target="_blank"
        rel="noopener noreferrer"
        className=" select-none pt-1 pl-4 pb-1 duration-200 hover:scale-110"
      >
        <CirclePhotoCard
          src="/hii-pf-icon.jpg"
          altText="プロフィール写真"
          imgWrapperStyle={{
            padding: "4px",
            backgroundColor: "#eee",
            borderRadius: "50%",
          }}
          imgStyle={{
            width: "44px",
            height: "44px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </a>
      <h1 className=" relative left-6 select-none !text-black">hii</h1>
      <Menu />
    </div>
  );
}
