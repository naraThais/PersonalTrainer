"use client";

import { useState, useEffect, useCallback } from "react";
import SportsGymnasticsRounded from "@mui/icons-material/SportsGymnasticsRounded";
import type { SVGProps } from "react";

export function Home(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
      ></path>
    </svg>
  );
}

export function GymBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="22"
      height="22"
      {...props}
    >
      <path
        fill="currentColor"
        d="M260.7 29.45c-25.7.1-51.1 2.14-73.1 5.22l10.2 37.24c41.9-8.58 85.7-5.82 129.7.1l7.8-35.94c-23-4.82-48.9-6.71-74.6-6.62m-88.4 16.28c-10.3 2.62-20.4 5.73-30 9.31c-8.2 3.05-13.3 9.6-19.1 18.13c-5.8 8.52-11.8 19.42-17.9 32.03c-12.3 25.2-25.13 57.1-36.88 88.6c-11.33 30.4-21.58 60.2-29.21 83c6.07-4.8 13.57-7.9 21.58-7.7c6.93-20.4 15.35-44.5 24.5-69c11.63-31.2 24.41-62.8 36.21-87c5.9-12.2 11.6-22.51 16.6-29.78c5-7.31 9.9-11.22 10.4-11.42c9.1-3.37 18.6-6.27 28.4-8.72zm178.2 5.23l-3.9 17.83c11.3 3.98 22 8.81 32 14.49c2.9 1.62 8.5 7.61 14.2 17.02c5.6 9.4 11.7 21.9 17.7 36.4c12.2 28.9 24.4 65.6 35.3 101.5c3.1 10.4 6.2 20.7 9.1 30.7c7.3 1 14.1 4.5 19.5 9.5c.9.8 1.7 1.6 2.5 2.5c-4.3-15.3-8.9-31.5-13.9-47.9c-10.9-36.3-23.3-73.4-35.9-103.3c-6.2-15-12.6-28.1-18.9-38.71c-6.4-10.56-12.5-18.67-20.6-23.33c-11.7-6.64-24.1-12.18-37.1-16.7M318.3 206.6L192 207.7l-.5.1c-30.3 3.2-53.4 30.5-57.7 66c6.1.3 12.1.6 18 .8c3.8-27.8 21.4-46.7 41.5-48.9l123.3-1.1c15.6 2.6 32.3 18.6 36.6 48.9c5.9-.3 11.9-.5 18-.8c-4.9-37.5-26.5-62-52.2-66zm131.9 80.1c-26.5 1.4-51.7 2.8-76 3.9c15.8 61 15.1 122.6 15 183.2c29.1-2.8 59-6.1 90-9.8c.6-.1 2.2-.7 4.5-5.1c2.3-4.3 4.5-11.4 5.9-20.2c2.9-17.6 3.2-41.5.7-65.2c-2.6-23.6-8.1-47-15.7-63.4c-3.8-8.2-8.1-14.6-12.3-18.4c-4.3-3.8-7.9-5.2-12.1-5m-390.9.4c-3.41.1-6.38 1.5-9.92 4.8c-4.05 3.7-8.29 10.1-11.99 18.3c-7.39 16.5-12.67 40.2-15.3 64.2s-2.67 48.4-.36 66.5c1.15 9 2.95 16.5 4.88 21c1.94 4.6 3.57 4.9 2.41 4.7c30.37 5.1 59.95 8.8 89.18 11.4c-5.6-58.2-3.5-119.8 11.9-186.4c-22.1-1-45.11-2.5-69.3-4.4c-.51 0-1.01-.1-1.5-.1m296.5 4.3c-70.4 3-134.8 4.1-207.5 1.1c-15.9 67-17.9 128.3-11.9 187c77.8 5.6 153.6 3.1 234.8-4.1c.1-62.6.8-124.4-15.4-184"
      ></path>
    </svg>
  );
}

export function RoundAddPhotoAlternate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.02 5H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98M16 9.01V8h-1.01c-.53 0-1.03-.21-1.41-.58c-.37-.38-.58-.88-.58-1.44c0-.36.1-.69.27-.98H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.28c-.3.17-.64.28-1.02.28A2 2 0 0 1 16 9.01M15.96 19H6a.5.5 0 0 1-.4-.8l1.98-2.63c.21-.28.62-.26.82.02L10 18l2.61-3.48c.2-.26.59-.27.79-.01l2.95 3.68c.26.33.03.81-.39.81"
      ></path>
    </svg>
  );
}

export function MobileContactsOutlined(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="220"
      height="202"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1.2.2v17.6h13.6V3.2zm9.71 10.106l1.742.655a.58.58 0 0 1 .347.508c.008.092-.038.2-.046.223a1.965 1.965 0 0 1-2.36 1.224a8.67 8.67 0 0 1-4.195-2.325A8.65 8.65 0 0 1 8.07 9.402C8.062 9.348 8 9.125 8 8.886c0-.847.54-1.563 1.296-1.84c.023-.008.13-.046.223-.046a.56.56 0 0 1 .51.339l.655 1.74c.03.085.015.13-.031.216c-.155.269-.525.947-.733 1.355a.67.67 0 0 0 .015.678a7.7 7.7 0 0 0 1.173 1.547c.455.462.987.847 1.55 1.178a.67.67 0 0 0 .678.015a70 70 0 0 0 1.357-.731c.085-.046.124-.062.216-.03z"
      ></path>
    </svg>
  );
}

const navigationItems = [
  { name: "Início", href: "#home", icon: <Home className="w-5 h-5" /> },
  { name: "Serviços", href: "#services", icon: <GymBag className="w-5 h-5" /> },
  {
    name: "Resultados",
    href: "#gallery",
    icon: <RoundAddPhotoAlternate className="w-5 h-5" />,
  },
  {
    name: "Planos",
    href: "#pricing",
    icon: <MoneyCashierTagCodesTagsTagProductLabel className="w-5 h-5" />,
  },
  {
    name: "Contato",
    href: "#contact",
    icon: <MobileContactsOutlined className="w-6 h-6" />,
  },
];

export function MoneyCashierTagCodesTagsTagProductLabel(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="22"
      height="22"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13.25 9.36l-3.89 3.89a.75.75 0 0 1-1.06 0L1.79 6.74a.36.36 0 0 1-.11-.29l.59-3.84a.37.37 0 0 1 .34-.34l3.84-.59a.36.36 0 0 1 .29.11l6.51 6.51a.75.75 0 0 1 0 1.06ZM4.03 4.03L.53.53"
      ></path>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Função otimizada para detectar scroll
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    // Atualizar estado de scroll da navbar
    setIsScrolled(scrollPosition > 50);

    // Detectar seção ativa
    const sections = [
      { id: "hero", name: "home" },
      { id: "services", name: "services" },
      { id: "gallery", name: "gallery" },
      { id: "pricing", name: "pricing" },
      { id: "contact", name: "contact" },
    ];

    // Encontrar a seção ativa baseada na posição do scroll
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section.id);

      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;

        // Se estamos na seção ou passamos dela
        if (scrollPosition >= elementTop - 100) {
          setActiveSection(section.name);
          break;
        }
      }
    }

    // Se estamos no topo da página, definir como home
    if (scrollPosition < 100) {
      setActiveSection("home");
    }
  }, []);

  // Effect para scroll com throttle
  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Adicionar listener
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Chamar uma vez para definir estado inicial
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Compensar altura da navbar
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fechar menu mobile ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? " backdrop-blur-lg  border-red-600/20 shadow-xl shadow-red-600/10"
            : "bg-transparent"
        }`}
        style={{ backgroundColor: "#111010" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick("#home")}
            >
              <span
                className="text-white transition-transform duration-300 group-hover:scale-125"
                style={{ fontSize: "3rem", lineHeight: 1 }}
              >
                <SportsGymnasticsRounded fontSize="inherit" />
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                PERSONAL TRAINER
              </h1>
              <p className="text-xs text-red-400 font-medium">
                Transformando Vidas
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "") ||
                  (item.href === "#home" && activeSection === "home");

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                        : "text-gray-300 hover:text-white hover:bg-red-600/20 hover:scale-105"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 rounded-lg hover:bg-red-600/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out top-3 ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[500px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="bg-gray-900/98 backdrop-blur-lg border-t border-red-600/20">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "") ||
                  (item.href === "#home" && activeSection === "home");

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg transform scale-105"
                        : "text-gray-300 hover:text-white hover:bg-red-600/20 hover:transform hover:scale-105"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}

              {/* Mobile Contact Info */}

              {/* Mobile Social Links */}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para compensar navbar fixa */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
