"use client";
import Image from "next/image";

const galleryItems = [
  { src: "/mulher-jovem-ficar-branco_25030-39532.png", alt: "Antes/Depois 1" },
  { src: "/mulher-jovem-ficar-branco_25030-39543.png", alt: "Antes/Depois 2" },
  { src: "/mulher-jovem-ficar-branco_25030-39535.png", alt: "Antes/Depois 3" },
  { src: "/mulher-jovem-ficar-branco_25030-39532.png", alt: "Antes/Depois 4" },
  { src: "/mulher-jovem-ficar-branco_25030-39543.png", alt: "Antes/Depois 5" },
  { src: "/mulher-jovem-ficar-branco_25030-39535.png", alt: "Antes/Depois 6" },
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
    <section id={id || "gallery"} className="py-32 bg-gray-900">
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
              <Image
                src={item.src}
                alt={item.alt}
                width={176}
                height={320}
                className="object-cover w-full h-full"
                loading="lazy"
                quality={100}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
