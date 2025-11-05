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
    <div className="duration-200 hover:scale-103 relative bg-stone-100 pt-6 pb-4 px-4 mx-4 border border-gray-200 rounded">
      {/* 画像 */}
      <div className="relative w-full h-52 rounded-md overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        ) : (
          <div className="bg-gray-300 w-full h-full rounded-md" />
        )}
      </div>

      {/* タイトル */}
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>

      {/* URL */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-bold mt-2 block truncate hover:underline"
        >
          {url}
        </a>
      )}

      {/* 概要 */}
      {period && (
        <p className="mt-2 text-sm text-gray-500">開発期間：{period}</p>
      )}
      <p className="mt-3 text-gray-700 text-sm leading-relaxed">
        {description}
      </p>

      {/* 技術タグ */}
      {techStackTag && techStackTag.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 mb-2">
          {techStackTag.map((tag, index) => (
            <span
              key={index}
              className="bg-stone-300 text-sm text-gray-800 px-2 py-1 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
