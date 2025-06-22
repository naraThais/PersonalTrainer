"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MdOutlineAddPhotoAlternate,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

const galleryItems = [
  { src: "/mulher-jovem-ficar-branco_25030-39532.png", alt: "Antes/Depois 1" },
  { src: "/mulher-jovem-ficar-branco_25030-39543.png", alt: "Antes/Depois 2" },
  { src: "/mulher-jovem-ficar-branco_25030-39535.png", alt: "Antes/Depois 3" },
  { src: "/mulher-jovem-ficar-branco_25030-39532.png", alt: "Antes/Depois 4" },
  { src: "/mulher-jovem-ficar-branco_25030-39543.png", alt: "Antes/Depois 5" },
  { src: "/mulher-jovem-ficar-branco_25030-39535.png", alt: "Antes/Depois 6" },
];

export default function GallerySection({ id }: { id?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsivo - define quantos itens mostrar por tela
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item (sempre carrossel)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 itens
      } else {
        setItemsPerView(4); // Desktop: 4 itens
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = galleryItems.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const nextSlide = () => {
    const maxIndex = galleryItems.length - itemsPerView;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = galleryItems.length - itemsPerView;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Imagem anterior"
          >
            <MdChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próxima imagem"
          >
            <MdChevronRight className="text-2xl" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl mx-4 sm:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
                width: `${(galleryItems.length / itemsPerView) * 100}%`,
              }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-item-${index} flex-shrink-0 h-96 w-64 bg-gradient-to-br from-red-900/40 to-red-600 rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/40 flex items-center justify-center mx-auto`}
                  style={{
                    width:
                      itemsPerView === 1
                        ? "calc(100% - 2rem)"
                        : `${100 / itemsPerView}%`,
                    maxWidth: "256px",
                  }}
                  onClick={() => handleItemClick(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={256}
                    height={384}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    quality={100}
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: galleryItems.length - itemsPerView + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-red-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
