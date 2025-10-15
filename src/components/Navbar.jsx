import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  // State to track if the banner is out of view
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const bannerElement = document.getElementById("banner");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          // Show the logo when the banner is out of sight
          setShowLogo(true);
        } else {
          // Hide the logo when the banner is in sight
          setShowLogo(false);
        }
      },
      {
        threshold: 0.2, // Trigger as soon as any part of the banner is out of view
      },
    );

    if (bannerElement) {
      observer.observe(bannerElement);
    }

    // Cleanup observer when the component is unmounted
    return () => {
      if (bannerElement) {
        observer.unobserve(bannerElement);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 flex items-center justify-between bg-white px-4 py-2 text-2xl shadow-md">
      <div className="flex items-center gap-4">
        {
          <img
            src={logo}
            alt="logo"
            className={`${!showLogo && "opacity-0"} duration-500`}
          />
        }
        <h1 className={`${!showLogo && "-translate-x-20"} duration-400`}>
          J.CRUZ GOODHEALTH GYM
        </h1>
      </div>
      <ul className="flex items-center gap-8 text-xl uppercase">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
