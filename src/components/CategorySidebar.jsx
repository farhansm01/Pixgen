const categories = [
  "All",
  "Realistic",
  "Fantasy",
  "Sci-Fi",
  "Cyberpunk",
  "Minimal",
  "Steampunk",
  "Pixel Art",
];

export default function CategorySidebar({ selected, onSelect }) {
  return (
    <>
      {/* Mobile — horizontal scrollable tabs */}
      <div className="md:hidden w-full overflow-x-auto pb-2">
        <div className="flex gap-2 w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`text-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selected === cat
                  ? "bg-purple-600 text-white"
                  : "border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop — vertical sidebar */}
      <aside className="hidden md:block w-48 shrink-0">
        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sticky top-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium">
            Category
          </p>
          <ul className="flex flex-col gap-1">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onSelect(cat)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${
                    selected === cat
                      ? "bg-purple-600 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
