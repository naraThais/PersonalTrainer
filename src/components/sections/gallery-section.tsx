"use client";
import Image from "next/image";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

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
    <section
      id={id || "gallery"}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#111010" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6">
            <span className="text-4xl">
              <MdOutlineAddPhotoAlternate />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            RESULTADOS <span className="text-red-500">REAIS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Transformações reais de pessoas reais. Veja como nossos alunos
            alcançaram seus objetivos
          </p>
        </div>
        {/* Gallery Items */}
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
