"use client";

import { useQuery } from "@tanstack/react-query";
import type { Stats } from "@/types/stats";

export default function ZennStats() {
  const {
    data: stats,
    error,
    isLoading,
  } = useQuery<Stats>({
    queryKey: ["stats", "zenn"],
    queryFn: async () => {
      const res = await fetch("/api/stats?platform=zenn");
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });

  if (isLoading)
    return (
      <p className="text-gray-500 text-sm whitespace-nowrap">
        <span className="inline-block rounded animate-pulse">00</span> Articles
        {" / "}
        <span className="inline-block rounded animate-pulse">00</span> Likes
        {" / "}
        <span className="inline-block rounded animate-pulse">00</span> Flowers
      </p>
    );
  if (error) return <p className="text-red-500 text-sm">Error loading data.</p>;

  if (!stats) return null;

  return (
    <p className="text-sm text-gray-600">
      {stats.articles} Articles / {stats.likes} Likes / {stats.flowers} Flowers
    </p>
  );
}
