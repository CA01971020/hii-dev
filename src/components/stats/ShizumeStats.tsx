"use client";

import { useQuery } from "@tanstack/react-query";
import type { Stats } from "@/types/stats";

export default function ShizumeStats() {
  const {
    data: stats,
    error,
    isLoading,
  } = useQuery<Stats>({
    queryKey: ["stats", "sizu"],
    queryFn: async () => {
      const res = await fetch("/api/stats?platform=sizu");
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
        miscellaneous notes
      </p>
    );
  if (error) return <p className="text-red-500 text-sm">Error loading data.</p>;

  return (
    <p className="text-sm text-gray-600">
      {stats?.articles} Article{stats && stats.articles !== 1 && "s"} /
      miscellaneous notes
    </p>
  );
}
