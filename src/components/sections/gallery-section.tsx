"use client";

const galleryItems = [
  { emoji: "💪", label: "ANTES/DEPOIS" },
  { emoji: "🏃", label: "ANTES/DEPOIS" },
  { emoji: "🏋️", label: "ANTES/DEPOIS" },
  { emoji: "🥇", label: "ANTES/DEPOIS" },
  { emoji: "⚡", label: "ANTES/DEPOIS" },
  { emoji: "🔥", label: "ANTES/DEPOIS" },
];

export default function GallerySection({ id }: { id?: string }) {
  const handleItemClick = (index: number) => {
    const item = document.querySelector(
      `.gallery-item-${index}`
    ) as HTMLElement;
    if (item) {
      item.style.transform = "scale(0.95)";
      setTimeout(() => {
        item.style.transform = "scale(1.05)";
      }, 150);
    }
  };

  return (
    <section id={id || "gallery"} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-red-600 drop-shadow-md">
          RESULTADOS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item-${index} h-80 w-44 bg-gradient-to-br from-red-900/40 to-red-600 rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/40 flex items-center justify-center`}
              onClick={() => handleItemClick(index)}
            >
              <div className="text-6xl text-white">{item.emoji}</div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
