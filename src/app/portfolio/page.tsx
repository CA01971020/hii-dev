import { portfoliosdata } from "@/data/portfoliosData";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import Footer from "@/components/footer";

export default function Portfolios() {
  return (
    <div className=" relative top-32 animate-fade-in">
      <h1 className="relative text-center">Portfolios</h1>

      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
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

      <div className="relative mt-20 mb-44">
        <Footer />
      </div>
    </div>
  );
}
