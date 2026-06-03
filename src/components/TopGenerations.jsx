import PhotoCard from "./PhotoCard";

export default async function TopGenerations() {
  const res = await fetch("https://pixgen-roan.vercel.app/data.json");
  const data = await res.json();
  const topData = data.slice(0, 8);

  return (
    <div>
      <h2 className="font-bold text-2xl my-6 text-center">Top Generations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {topData.map((photo) => {
          return <PhotoCard key={photo.id} photo={photo} />;
        })}
      </div>
    </div>
  );
}
