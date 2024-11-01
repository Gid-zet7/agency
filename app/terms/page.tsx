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

const TermsAndConditions = () => {
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
            Terms and Conditions
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
              1. Overview
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              These Terms of Service (&quot;Terms&quot;) govern the use of Billo
              Empire recruitment services. By accessing or using our services,
              clients and candidates agree to these Terms
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              2. Services Offered
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We provide candidate sourcing, screening, placement, and
              onboarding support. We cater to both employers seeking talent and
              candidates seeking employment.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              3. Candidate and Client Obligations
            </h2>
            <ul>
              <li className={` ${poppins.className}  text-black`}>
                Clients must provide accurate job descriptions and details.
              </li>
              <li className={` ${poppins.className}  text-black`}>
                Candidates must submit truthful information in their
                applications.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              4. Confidentiality and Data Protection
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We prioritize data security and comply with privacy laws to
              protect client and candidate information. Personal information
              will not be shared without consent, except as required by law
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              5. Service Fees and Payment
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              Agreed-upon fees for services, including retainer, placement, and
              contingency fees, must be paid promptly upon candidate placement
              or as specified in individual agreements.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              6. Limitations and Liability
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              While we ensure diligent vetting, we are not liable for any
              employment decisions made by clients or candidates. Both parties
              should conduct independent assessments where needed.
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
              8. Dispute Resolution
            </h2>
            <p className="text-black">
              Disputes arising from these Terms will be resolved through
              mediation, arbitration, or as agreed by both parties.
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              9. Privacy Policy
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              Your privacy is important to us. We collect personal information
              to process your orders and improve your shopping experience. We
              will not share your personal information with third parties except
              as necessary to fulfill your order or as required by law. For more
              details, please review our{" "}
              <a className="text-blue-300" href="/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              10. Amendments
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              We reserve the right to amend these Terms at any time, and
              continued use of our services signifies acceptance of the updated
              Terms
            </p>
          </div>

          <div>
            <h2
              className={` ${poppins.className} sm:text-xl text-lg font-bold text-base-content text-black my-4`}
            >
              11. Contact Us
            </h2>
            <p className={` ${poppins.className}  text-black`}>
              For questions or clarifications, contact us at
              billoempire@gmail.com. This Terms of Service is intended to guide
              users of our recruitment services and clarify obligations, data
              use, and payment details.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsAndConditions;
