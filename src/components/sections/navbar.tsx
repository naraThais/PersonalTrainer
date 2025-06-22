"use client";

import { useState, useEffect, useCallback } from "react";
import SportsGymnasticsRounded from "@mui/icons-material/SportsGymnasticsRounded";
import type { SVGProps } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { GrContact } from "react-icons/gr";

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

const navigationItems = [
  { name: "Início", href: "#home", icon: <Home className="w-5 h-5" /> },
  {
    name: "Serviços",
    href: "#services",
    icon: <GiGymBag className="w-5 h-5" />,
  },
  {
    name: "Resultados",
    href: "#gallery",
    icon: <MdOutlineAddPhotoAlternate className="w-5 h-5" />,
  },
  {
    name: "Planos",
    href: "#pricing",
    icon: <MoneyCashierTagCodesTagsTagProductLabel className="w-5 h-5" />,
  },
  {
    name: "Contato",
    href: "#contact",
    icon: <GrContact className="w-5 h-5" />,
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
