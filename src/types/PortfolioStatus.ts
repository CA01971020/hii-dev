export type PortfolioStatus = "ongoing" | "completed" | "paused";

export type PortfolioData = {
  id: string;
  title: string;
  period?: string;
  url?: string;
  imageUrl?: string;
  description: string;
  techStackTag?: string[];
  status?: PortfolioStatus;
};
