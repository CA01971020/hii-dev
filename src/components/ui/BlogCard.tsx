"use client";

import React from "react";

type BlogCardProps = {
  title: string;
  date?: string;
  description?: string;
  url?: string;
  platform: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  url,
  description,
  platform,
}) => {
  return (
    <div className="duration-200 hover:scale-103 relative pt-6 pb-4 pr-4 pl-4 ml-4 mr-4 border-1 border-gray rounded">
      <p className="!text-stone-500">{date}</p>
      <h2>{title}</h2>
      <p className="mt-4">{description}</p>
      <div className="text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-bold mt-4 block"
        >
          {platform}の記事を読む
        </a>
      </div>
    </div>
  );
};
