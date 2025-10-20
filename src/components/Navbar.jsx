import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [showLogo, setShowLogo] = useState(false);

  // Single useEffect for all intersection observers
  useEffect(() => {
    const bannerElement = document.getElementById("banner");
    const sectionElements = [
      { id: "home", tab: "home" },
      { id: "about", tab: "about" },
      { id: "contact", tab: "contact" },
    ];

    // Banner observer for logo show/hide
    const bannerObserver = new IntersectionObserver(
      ([entry]) => {
        setShowLogo(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    // Section observer for active tab
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sectionElements.find(
              (s) => s.id === entry.target.id,
            );
            if (section) {
              setActiveTab(section.tab);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px", // Triggers when 20% of section is visible
      },
    );

    // Observe banner
    if (bannerElement) {
      bannerObserver.observe(bannerElement);
    }

    // Observe all sections
    sectionElements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (bannerElement) {
        bannerObserver.unobserve(bannerElement);
      }
      sectionElements.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          sectionObserver.unobserve(element);
        }
      });
    };
  }, []); // Empty dependency array since we don't depend on activeTab anymore

  // Navigation items configuration for cleaner JSX
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-2 text-2xl shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className={`${!showLogo && "opacity-0"} duration-500`}
        />
        <h1
          className={`${!showLogo && "-translate-x-20"} transition-transform duration-400`}
        >
          J.CRUZ GOODHEALTH GYM
        </h1>
      </div>

      <ul className="flex items-center gap-8 text-xl uppercase">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative cursor-pointer"
            onClick={() => {
              setActiveTab(item.id);
              // Optional: scroll to section
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <a href={`#${item.id}`} onClick={(e) => e.preventDefault()}>
              {item.label}
            </a>
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 bg-[#fedc33] duration-200 ${
                activeTab === item.id && "w-full"
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}