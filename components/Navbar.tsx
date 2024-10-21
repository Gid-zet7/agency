"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [hamburgerBtn, setHamburgerBtn] = useState<HTMLElement | null>(null);
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    setHamburgerBtn(hamburgerBtn);
    const mobileMenu = document.getElementById("mobile-menu");
    setMobileMenu(mobileMenu);
  }, []);

  const toggleMenu = () => {
    mobileMenu?.classList.toggle("hidden");
    mobileMenu?.classList.toggle("flex");
    hamburgerBtn?.classList.toggle("toggle-btn");
  };

  return (
    <header className="sticky top-0 z-10 bg-slate-100">
      <section>
        <div className="flex justify-between py-5 px-8 gap-4 md:hidden ">
          <h1 className="text-xl lg:text-3xl md:hidden">
            <Link href="/">SofLogistics</Link>
          </h1>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-0.5 w-5 rounded bg-black transition-all duration-500 before:absolute before:h-0.5 before:w-8 before:-translate-x-4 before:-translate-y-2 before:rounded before:bg-black dark:before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-8 after:-translate-x-4 after:translate-y-2 after:rounded after:bg-black dark:after:bg-black after:transition-all after:duration-500 after:content-['']"></div>
          </button>
        </div>
        <nav
          aria-label="main"
          className="py-5 px-8 border-b border-blue-50 gap-4 sticky top-0 z-10 hidden space-x-8 text-sm md:block nav-links"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <h1 className="text-xl">
              <Link href="/">SofLogistics</Link>
            </h1>

            <ul className="flex gap-5 cursor-pointer">
              <a href="/">
                <li>Home</li>
              </a>

              <a href="/about">
                <li>About Us</li>
              </a>
              <a href="/services">
                <li>Services</li>
              </a>

              <a href="/contact">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
        </nav>
      </section>

      <section
        id="mobile-menu"
        className="top-68 justify-center absolute hidden w-full origin-top animate-open-menu flex-col bg-gray-400 text-5xl"
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8 text-gray-300 "
          aria-label="mobile"
        >
          <a href="/" className="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a href="/about" className="w-full py-6 text-center hover:opacity-90">
            About Us
          </a>
          <a
            href="/services"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Services
          </a>

          <a
            href="/contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact Us
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
