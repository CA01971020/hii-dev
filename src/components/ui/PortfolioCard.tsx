"use client";

import React from "react";
import Image from "next/image";
import type { PortfolioStatus } from "@/types/PortfolioStatus";

type PortfolioCardProps = {
  title: string;
  period?: string;
  url?: string;
  imageUrl?: string;
  description: string;
  techStackTag?: string[];
  status?: PortfolioStatus;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  period,
  url,
  imageUrl,
  description,
  techStackTag,
  status,
}) => {
  const statusKey: "ongoing" | "completed" | "paused" = status || "paused";

  const statusInfo = {
    ongoing: { label: "開発中", color: "bg-amber-600 text-white" },
    completed: { label: "公開中", color: "bg-green-600 text-white" },
    paused: { label: "開発終了", color: "bg-stone-600 text-white" },
  }[statusKey];

  return (
    <div className="duration-200 hover:scale-103 relative bg-stone-100 pt-6 pb-4 pr-4 pl-4 ml-4 mr-4 border-1 border-gray rounded">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-md h-50 w-full object-cover"
        />
      ) : (
        <div className="bg-gray-300 w-full h-full rounded-md" />
      )}

      {/* タイトル */}
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>

      {/* 概要・ステータス */}
      {period && (
        <div className="mt-2 flex items-center flex-wrap">
          <p className="text-sm text-gray-500">開発期間：{period}</p>
          <span
            className={`ml-2 mt-1 mb-1 text-xs pt-1 pb-1 pr-2 pl-2 rounded-xl ${statusInfo.color}`}
          >
            {statusInfo.label}
          </span>
        </div>
      )}

      {/* URL */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-bold mt-2 block hover:underline break-all"
        >
          {url}
        </a>
      )}

      {/* 説明 */}
      <p className="mt-2 text-gray-700 text-sm leading-relaxed">
        {description}
      </p>

      {/* 技術タグ */}
      {techStackTag && techStackTag.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
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
