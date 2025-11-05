"use client";

import React from "react";
import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  period?: string;
  url?: string;
  imageUrl?: string;
  description: string;
  techStackTag?: string[];
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  period,
  url,
  imageUrl,
  description,
  techStackTag,
}) => {
  return (
    <div className="duration-200 hover:scale-103 relative bg-stone-100 pt-6 pb-4 pr-4 pl-4 ml-4 mr-4 border-1 border-gray rounded">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-md h-50 w-full object-cover"
        />
      ) : (
        <div className="bg-black rounded-md h-50 w-full" />
      )}
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
      <p className="mt-4">開発期間：{period}</p>
      <p className="mt-4">{description}</p>
      {techStackTag && (
        <div className="mt-4 flex flex-wrap gap-2 mb-2">
          {techStackTag.map((tag, index) => (
            <span
              key={index}
              className=" bg-stone-300 text-sm text-gray-800 px-2 py-1 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
