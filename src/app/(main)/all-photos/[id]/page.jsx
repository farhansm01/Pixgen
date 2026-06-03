import { ArrowDownToLine, Heart } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default async function PhotoDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("https://pixgen-roan.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);

  if (!photo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-gray-500 mb-6">Photo not found</p>
          <Link
            href="/all-photos"
            className="border px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link
        href="/all-photos"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 mb-8 transition-colors"
      >
        ← Back to Gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full">
              {photo.category}
            </span>
            <h1 className="text-3xl font-bold mt-3">{photo.title}</h1>
          </div>

          {/* Prompt */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              Prompt
            </p>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 italic">
              &ldquo;{photo.prompt}&rdquo;
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-400 mb-1">Likes</p>
              <p className="text-2xl font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" /> {photo.likes}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-400 mb-1">Downloads</p>
              <p className="text-2xl font-semibold flex items-center gap-2">
                <ArrowDownToLine className="w-5 h-5 text-blue-500" />{" "}
                {photo.downloads}
              </p>
            </div>
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Model
              </p>
              <p className="font-medium">{photo.model}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Resolution
              </p>
              <p className="font-medium">{photo.resolution}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Created
              </p>
              <p className="font-medium">
                {new Date(photo.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {photo.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
