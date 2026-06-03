import PhotoCard from "@/components/PhotoCard";

export default async function AllPhotosPage() {
  const res = await fetch("https://pixgen-roan.vercel.app/data.json");
  const data = await res.json();

  return (
    <div>
      <h2 className="font-bold text-2xl my-6 text-center">All Photos</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((photo) => {
          return <PhotoCard key={photo.id} photo={photo} />;
        })}
      </div>
    </div>
  );
}
