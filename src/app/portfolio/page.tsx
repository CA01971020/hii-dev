import { portfoliosdata } from "@/data/portfoliosData";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import Footer from "@/components/footer";

export default function Portfolios() {
  return (
    <div className=" relative top-32 animate-fade-in">
      <h1 className="relative text-center">Portfolios</h1>

      <div className="mt-16 grid gap-y-20 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
        {portfoliosdata.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            title={portfolio.title}
            period={portfolio.period}
            url={portfolio.url}
            imageUrl={portfolio.imageUrl}
            description={portfolio.description}
            techStackTag={portfolio.techStackTag}
            status={portfolio.status}
          />
        ))}
      </div>

      <div className="relative mt-20 pb-16">
        <Footer />
      </div>
    </div>
  );
}
