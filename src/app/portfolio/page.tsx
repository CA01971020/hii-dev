import { portfoliosdata } from "@/data/portfoliosData";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import Footer from "@/components/footer";

export default function Portfolios() {
  return (
    <div className=" relative top-32">
      <h1 className="relative text-center">Portfolios</h1>

      <div>
        {portfoliosdata.map((portfoliosdata) => (
          <PortfolioCard
            key={portfoliosdata.id}
            title={portfoliosdata.title}
            url={portfoliosdata.url}
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
