"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const PrivacyPolicy = () => {
  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const overlayMenu = document.querySelector(".overlay");

    if (burgerMenu && navbarMenu) {
      const toggleMenu = () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
      };

      burgerMenu.addEventListener("click", toggleMenu);

      return () => burgerMenu.removeEventListener("click", toggleMenu);
    }

    // Close Navbar Menu on Click Links
    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach((link) => {
      const handleLinkClick = () => {
        burgerMenu?.classList.remove("is-active");
        navbarMenu?.classList.remove("is-active");
      };

      link.addEventListener("click", handleLinkClick);

      return () => link.removeEventListener("click", handleLinkClick);
    });

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        if (navbarMenu?.classList.contains("is-active")) {
          navbarMenu.classList.remove("is-active");
          overlayMenu?.classList.remove("is-active");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="navbar container">
          <a href="/" className="brand">
            <Image src={"/billo-logo.jpeg"} width={60} height={60} alt="logo" />
          </a>
          <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  About Us
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Services
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Success Stories
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <button className="switch" id="switch">
            <i className="switch-light bx bx-sun"></i>
            <i className="switch-dark bx bx-moon"></i>
          </button>
        </nav>
      </header>
      {/* -----------------------------------------------------------End of Header--------------------------------------------------------------------- */}

      <main className="flex flex-col justify-center items-center">
        <div
          style={{ padding: "20px", maxWidth: "800px" }}
          className="text-sm mt-20"
        >
          <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black my-4">
            Privacy Policy
          </h1>
          <p className="my-6 text-sm text-black">
            <strong>
              Last updated: <em>27th October, 2024</em>
            </strong>
          </p>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              1. Information Collection
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We collect personal information from clients and candidates,
              including contact details, employment history, and professional
              qualifications, to provide efficient recruitment services.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              2. Use of Information
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              Collected information is used solely for recruitment purposes,
              such as candidate matching and employment communications.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              3. Data Sharing
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We share personal data only with potential employers or candidates
              as necessary, maintaining confidentiality and ensuring data
              security.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              4. Data Security
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We implement strict measures to protect all personal information
              from unauthorized access and maintain compliance with data privacy
              laws.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              5. User Rights
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              Users can request access, modification, or deletion of their data
              by contacting us.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              6. Policy Updates
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We may update this policy periodically. Continued use of our
              services implies acceptance of any changes.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              7. Termination
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              Either party may terminate services upon written notice. Fees for
              services rendered prior to termination remain due.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              8. Contact Us
            </h2>
            <p className="text-black">
              For inquiries or to exercise data rights, reach us at
              billoempire@gmail.com.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
