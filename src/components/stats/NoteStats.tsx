"use client";

import { useQuery } from "@tanstack/react-query";
import type { Stats } from "@/types/stats";

export default function NoteStats() {
  const {
    data: stats,
    error,
    isLoading,
  } = useQuery<Stats>({
    queryKey: ["stats", "note"],
    queryFn: async () => {
      const res = await fetch("/api/stats?platform=note");
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading)
    return (
      <p className="text-gray-500 text-sm whitespace-nowrap">
        <span className="inline-block rounded animate-pulse">00</span> Articles
        {" / "}
        <span className="inline-block rounded animate-pulse">00</span> Likes
        {" / "}
        <span className="inline-block rounded animate-pulse">00000</span> Views
      </p>
    );
  if (error) return <p className="text-red-500 text-sm">Error loading data.</p>;

  return (
    <p className="text-sm text-gray-600">
      {stats?.articles} Articles / {stats?.likes} Likes / {stats?.views} Views
    </p>
  );
}
