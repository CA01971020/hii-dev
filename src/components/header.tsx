import CirclePhotoCard from "@/components/ui/CirclePhotoCard";

export default function Header() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <CirclePhotoCard
        src="/hii-pf-icon.jpg"
        altText="プロフィール写真"
        imgWrapperStyle={{
          padding: "4px",
          backgroundColor: "#eee",
          borderRadius: "50%",
        }}
        imgStyle={{
          width: "62px",
          height: "62px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <h1 className=" pl-4 ">hii</h1>
    </div>
  );
}
