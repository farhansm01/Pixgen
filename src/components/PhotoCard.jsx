import { ArrowDownToLine, Heart } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className="relative overflow-hidden">
        <Image
          src={photo.imageUrl}
          height={300}
          width={400}
          alt={photo.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {photo.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-base truncate">{photo.title}</h2>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4" /> {photo.likes}
          </span>
          <span className="flex items-center gap-1">
            <ArrowDownToLine className="w-4 h-4" /> {photo.downloads}
          </span>
        </div>

        <Link href={`/all-photos/${photo.id}`}>
          <button className="mt-2 w-full text-sm border border-gray-300 dark:border-gray-600 rounded-xl py-2 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default PhotoCard;
