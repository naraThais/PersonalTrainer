"use client";

import { useState, useEffect, useCallback } from "react";

const navigationItems = [
  { name: "Início", href: "#home", icon: "🏠" },
  { name: "Serviços", href: "#services", icon: "🏋️" },
  { name: "Resultados", href: "#gallery", icon: "📸" },
  { name: "Planos", href: "#pricing", icon: "💰" },
  { name: "Contato", href: "#contact", icon: "📞" },
];

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
            ? "bg-gray-900/95 backdrop-blur-lg  border-red-600/20 shadow-xl shadow-red-600/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick("#home")}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                💪
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                  PERSONAL TRAINER
                </h1>
                <p className="text-xs text-red-400 font-medium">
                  Transformando Vidas
                </p>
              </div>
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
              <div className="pt-4 border-t border-red-600/20 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-red-500">📱</span>
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-red-500">📧</span>
                  <span className="text-sm">personal@email.com</span>
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-red-600/20">
                <p className="text-gray-400 text-sm mb-3">Siga nas redes:</p>
                <div className="flex space-x-3">
                  {["📷", "📘", "📺", "💬"].map((emoji, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:bg-red-600 hover:scale-110"
                    >
                      {emoji}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para compensar navbar fixa */}
      <div className="h-16 md:h-20" />
    </>
  );
}
