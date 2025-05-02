"use client";

import React from "react";

type PortfolioCardProps = {
  title: string;
  url?: string;
  description: string;
  techStackTag?: string;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  url,
  description,
  techStackTag,
}) => {
  return (
    <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-6 pb-5 pr-8 pl-8 ml-8 mr-8 rounded-2xl shadow-lg">
      <div className=" bg-black rounded-md h-60"></div>
      <h2 className="mt-4">{title}</h2>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-bold mt-4 block"
        >
          {url}
        </a>
      )}
      <p className="mt-4">{description}</p>
      <p className="mt-4 bg-gray-300">{techStackTag}</p>
    </div>
  );
};
