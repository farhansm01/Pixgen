"use client";
import CategorySidebar from "@/components/CategorySidebar";
import PhotoCard from "@/components/PhotoCard";
import { useEffect, useState } from "react";

export default function AllPhotosPage() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    fetch("https://pixgen-roan.vercel.app/data.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const filtered =
    selected === "All" ? data : data.filter((p) => p.category === selected);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="font-bold text-2xl mb-6 text-center">All Photos</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <CategorySidebar selected={selected} onSelect={setSelected} />

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}
