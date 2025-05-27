import { portfoliosdata } from "@/data/portfoliosData";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import Footer from "@/components/footer";

export default function Portfolios() {
  return (
    <div className=" relative top-32 animate-fade-in">
      <h1 className="relative text-center">Portfolios</h1>

      <div className="grid gap-y-20 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
        {portfoliosdata.map((portfoliosdata) => (
          <PortfolioCard
            key={portfoliosdata.id}
            title={portfoliosdata.title}
            period={portfoliosdata.period}
            url={portfoliosdata.url}
            imageUrl={portfoliosdata.imageUrl}
            description={portfoliosdata.description}
            techStackTag={portfoliosdata.techStackTag}
          />
        ))}
      </div>

      <div className="relative mt-40 mb-20">
        <Footer />
      </div>
    </div>
  );
}
