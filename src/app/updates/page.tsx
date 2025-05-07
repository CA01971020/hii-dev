import { data } from "@/data/updatesData";
import { UpdatesCard } from "@/components/ui/updatesCard";
import Footer from "@/components/footer";

export default function UpdateHistory() {
  return (
    <div className=" relative top-32">
      <h1 className="relative text-center">Update History</h1>

      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {data.map((data) => (
          <UpdatesCard
            key={data.id}
            title={data.title}
            date={data.date}
            description={data.description}
            techStack={data.techStack}
            githubLink={data.githubLink}
          />
        ))}
      </div>

      <div className="relative mt-20 mb-44">
        <Footer />
      </div>
    </div>
  );
}
