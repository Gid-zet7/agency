"use client";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import "slick-carousel/slick/slick.css";
import localFont from "next/font/local";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("counter");
      if (!counterElement) return;

      const oTop = counterElement.offsetTop - window.innerHeight;

      if (!counted && window.scrollY > oTop) {
        const counters = document.querySelectorAll<HTMLElement>(".count");

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-count")!;
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
              counter.innerText = `${Math.ceil(count + increment)}`;
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = `${target}`;
            }
          };

          updateCount();
        });

        setCounted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [counted]);

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

  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLElement;
      const targetId = target.getAttribute("href");
      if (targetId) {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const scrollLinks = document.querySelectorAll(".menu-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  // useEffect(() => {
  //   // <iframe
  //   //   src="//www.highperformanceformat.com/2149326cc3a61e5fce28f723b8784ee7/invoke.js"
  //   //   key="2149326cc3a61e5fce28f723b8784ee7"
  //   //   width="468"
  //   //   height="60"
  //   //   style={{ border: 0 }}
  //   //   loading="lazy"
  //   //   // className="w-full"
  //   //   // referrerPolicy="no-referrer-when-downgrade"
  //   // ></iframe>;
  //   const loadAdiframe = () => {
  //     const adiframe = document.createElement("iframe");
  //     adiframe.width = "468";
  //     adiframe.height = "60";
  //     adiframe.src =
  //       "//www.highperformanceformat.com/2149326cc3a61e5fce28f723b8784ee7/invoke.js";
  //     adiframe.loading = "lazy";
  //     document.getElementById("ad-container")?.appendChild(adiframe);
  //   };

  //   // Lazy load the ad iframe
  //   loadAdiframe();
  // }, []);

  // const settings: Settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1200,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1,
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   draggable: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: true,
  // };

  return (
    <>
      {/* --------------------------------------------------------------------Start of Header---------------------------------------------------- */}
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
                <a href="#home" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#counter" className="menu-link">
                  About Us
                </a>
              </li>
              <li className="menu-item">
                <a href="#services" className="menu-link">
                  Services
                </a>
              </li>
              <li className="menu-item">
                <a href="#success-stories" className="menu-link">
                  Success Stories
                </a>
              </li>
              <li className="menu-item">
                <a href="#blog" className="menu-link">
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

      {/* -----------------------------------------------------------Start of Hero Section------------------------------------------------------------- */}
      <div className="main">
        <section id="home" className="section banner banner-section">
          <div className="container banner-column flex flex-col md:flex-row lg:gap-24">
            <Image
              className="banner-image rounded justify-self-center"
              width={380}
              height={380}
              alt="connect"
              src={"/hero-img.png"}
            />
            <div className="banner-inner">
              <h1 className="heading-xl font-extrabold text-base-content">
                Bridging Talent and Opportunity for a Brighter Future.
              </h1>
              <p
                className={`${poppins.className} paragraph text-sm md:text-lg text-black/50`}
              >
                Discover Ghana&apos;s premier recruitment agency. We specialize
                in matching exceptional talent with leading employers.
                Experience the difference with our personalized approach and
                commitment to excellence.
              </p>
              <Link href={"/contact-us"}>
                <button className="btn btn-darken btn-inline mt-3">
                  Send us a message <span className="arrow">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* --------------------------------------------------------End of Hero Section------------------------------------------------------------------- */}

      {/* --------------------------------------------------------Start of About Section---------------------------------------------------------------- */}
      <section id="counter" className="mt-20 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row max-w-7xl gap-5">
          <div className="flex flex-col lg:flex-1 lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-5 px-5 col-span-2 row-start-1 row-end-2">
            <div className="lg:col-span-2">
              <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black my-4">
                About Billo Empire
              </h1>
              <p className={`${poppins.className} text-black`}>
                Billo Empire is dedicated to connecting top talent with premier
                employers in Ghana and around the globe. Our mission is to
                create successful partnerships that drive growth and innovation,
                ensuring a perfect match every time.
              </p>
            </div>
            <div
              className={`${poppins.className} lg:col-span-1 mt-10 md:mt-0 `}
            >
              <div className="flex gap-2">
                <svg
                  fill="#F9C94F"
                  version="1.1"
                  id="Layer_1"
                  width={50}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 496 496"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M432,336h-10.84c16.344-13.208,26.84-33.392,26.84-56v-32c0-30.872-25.128-56-56-56h-32c-2.72,0-5.376,0.264-8,0.64V48
				h16V0H0v48h16v232H0v48h187.056l40,80H304v88h192v-96C496,364.712,467.288,336,432,336z M422.584,371.328l-32.472,13.92
				L412.28,352h5.472L422.584,371.328z M358.944,352h34.112L376,377.576L358.944,352z M361.872,385.248l-32.472-13.92L334.24,352
				h5.472L361.872,385.248z M432.008,280C432,310.872,406.872,336,376,336s-56-25.128-56-56h37.424
				c14.12,0,27.392-5.504,37.368-15.48l4.128-4.128c8.304,10.272,20.112,16.936,33.088,18.92V280z M48,192v72h107.176
				c0.128,0.28,0.176,0.584,0.312,0.856L163.056,280H32V48h304v149.48c-18.888,9.008-32,28.24-32,50.52v32h-65.064l-24.816-46.528
				C208.368,222.696,197.208,216,185,216c-10.04,0-18.944,4.608-25,11.712V192H48z M144,208v40H64v-40H144z M360,208h32
				c22.056,0,40,17.944,40,40v15.072c-9.168-2.032-17.32-7.48-22.656-15.48l-8.104-12.152l-17.768,17.768
				c-6.96,6.96-16.208,10.792-26.048,10.792H320v-16C320,225.944,337.944,208,360,208z M16,16h336v16H16V16z M16,312v-16h155.056
				l8,16H16z M256,392h-19.056L169.8,257.712c-1.176-2.36-1.8-4.992-1.8-7.608V249c0-9.376,7.624-17,17-17c6.288,0,12.04,3.456,15,9
				l56,104.992V392z M247.464,296h58.392c1.28,5.616,3.232,10.968,5.744,16H256L247.464,296z M264.536,328h57.952
				c2.584,2.872,5.352,5.568,8.36,8H268.8L264.536,328z M480,480h-32v-32h32V480z M480,432h-32v-32h-16v80H320v-88h-48v-40h45.76
				l-7.168,28.672L376,408.704l65.416-28.032l-7.144-28.56C459.68,353.312,480,374.296,480,400V432z"
                        />
                        <path
                          d="M160,128v-16h-16.808c-1.04-5.096-3.072-9.832-5.856-14.024l11.92-11.92l-11.312-11.312l-11.92,11.92
				c-4.192-2.784-8.928-4.816-14.024-5.856V64H96v16.808c-5.096,1.04-9.832,3.072-14.024,5.856l-11.92-11.92L58.744,86.056
				l11.92,11.92c-2.784,4.192-4.816,8.928-5.856,14.024H48v16h16.808c1.04,5.096,3.072,9.832,5.856,14.024l-11.92,11.92
				l11.312,11.312l11.92-11.92c4.192,2.784,8.928,4.816,14.024,5.856V176h16v-16.808c5.096-1.04,9.832-3.072,14.024-5.856
				l11.92,11.92l11.312-11.312l-11.92-11.92c2.784-4.192,4.816-8.928,5.856-14.024H160z M104,144c-13.232,0-24-10.768-24-24
				s10.768-24,24-24s24,10.768,24,24S117.232,144,104,144z"
                        />
                        <polygon points="244.28,80 272,80 272,64 235.72,64 203.72,112 176,112 176,128 212.28,128 			" />
                        <rect x="288" y="64" width="32" height="16" />
                        <path d="M224,144h-48v48h48V144z M208,176h-16v-16h16V176z" />
                        <rect x="240" y="160" width="32" height="16" />
                        <rect x="288" y="160" width="32" height="16" />
                      </g>
                    </g>
                  </g>
                </svg>
                <span
                  className="text-[#F9C94F] text-2xl font-bold mb-4 count"
                  data-count="1500"
                >
                  0
                </span>
                <span className="text-2xl font-bold ml-0 text-[#F9C94F]">
                  +
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  candidates
                </span>
              </div>
              <p className={`text-black/50 text-md ${poppins.className}`}>
                Our training center equips over 1,500 professionals yearly with
                practical skills in key industries such as catering, mechanics,
                electricians, solar technology, HVAC (air conditioning &
                refrigeration), and cosmetology.
              </p>
            </div>
            <div className={`col-start-2 ${poppins.className}`}>
              <div className="flex gap-1">
                <svg
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 17.52 17.52"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          style={{ fill: "#F9C94F" }}
                          d="M10.461,1.079L9.598,4.294L9.809,0.23c-1.193-0.517-2.236,0-2.236,0l0.211,4.064L6.923,1.079
				C4.526,1.746,3.007,3.698,3.007,6.307h11.372C14.379,3.698,12.859,1.746,10.461,1.079z"
                        />
                        <path
                          style={{ fill: "#F9C94F" }}
                          d="M15.491,6.773H2.03v1.076h1.477L3.5,8.209c0,0.001,0.001,0.126,0,0.201
				c-0.089,0.275-0.064,0.45,0.179,1.737c-0.027,0.027-0.053,0.056-0.077,0.088c-0.349,0.464-0.176,1.339-0.036,1.839
				c0.073,0.442,0.241,0.733,0.4,0.915c0.403,2.429,2.531,4.531,4.618,4.531c2.219,0,4.428-2.058,4.887-4.523
				c0.16-0.183,0.33-0.467,0.399-0.9c0.167-0.604,0.294-1.399-0.015-1.842c0.101-0.392,0.203-0.914,0.232-1.49
				c0.041-0.094,0.045-0.202,0.008-0.303c0-0.055,0-0.106-0.002-0.145l0.004-0.063c0.002-0.031,0-0.062-0.006-0.093l-0.056-0.312
				h1.454L15.491,6.773L15.491,6.773z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span
                  className="text-[#F9C94F] text-2xl font-bold mb-4 count"
                  data-count="800"
                >
                  0
                </span>
                <span className="text-2xl font-bold ml-0 text-[#F9C94F]">
                  +
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  candidates
                </span>
              </div>

              <p className={`text-black/50 text-md ${poppins.className}`}>
                Our forklift and crane department trains over 800 professionals
                annually, delivering practical, safety-focused skills to meet
                global operational and industry demands.
              </p>
            </div>
            <div className={`col-start-2 ${poppins.className}`}>
              <div className="flex gap-1">
                <svg
                  fill="#F9C94F"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 290.142 290.142"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      id="circle22336"
                      d="M144.995,0.001c-2.759,0.042-4.963,2.311-4.924,5.07v25.115C80.592,32.739,32.74,80.592,30.186,140.071
		H5.071C2.31,140.032,0.04,142.239,0.001,145c-0.039,2.761,2.168,5.032,4.929,5.071c0.047,0.001,0.094,0.001,0.141,0h25.115
		c2.553,59.479,50.405,107.332,109.885,109.885v25.115c-0.039,2.761,2.168,5.032,4.929,5.071c2.761,0.039,5.032-2.168,5.071-4.929
		c0.001-0.047,0.001-0.094,0-0.141v-25.115c59.479-2.553,107.332-50.405,109.885-109.885h25.115
		c2.761,0.039,5.032-2.168,5.071-4.929c0.039-2.761-2.168-5.032-4.929-5.071c-0.047-0.001-0.094-0.001-0.141,0h-25.115
		c-2.553-59.479-50.405-107.332-109.885-109.885V5.071c0.039-2.761-2.168-5.032-4.93-5.07C145.093,0,145.044,0,144.995,0.001z
		 M140.071,40.192v99.879H40.192C42.72,86.008,86.008,42.72,140.071,40.192z M150.071,40.192
		c54.064,2.527,97.352,45.815,99.879,99.879h-99.879V40.192z M175.395,53.413c-1.38,0.051-2.457,1.211-2.406,2.591
		c0.038,1.029,0.703,1.929,1.675,2.268c27.688,10.078,49.188,32.342,58.293,60.365c0.426,1.314,1.836,2.033,3.15,1.607
		c1.314-0.426,2.033-1.836,1.607-3.15c0-0.001-0.001-0.003-0.001-0.004c-9.58-29.483-32.209-52.915-61.34-63.518
		C176.062,53.455,175.729,53.4,175.395,53.413z M40.192,150.071h99.879v99.879C86.008,247.423,42.72,204.135,40.192,150.071z
		 M150.071,150.071h99.879c-2.527,54.064-45.815,97.352-99.879,99.879V150.071z M55.837,169.745c-1.38,0.04-2.466,1.192-2.426,2.572
		c0.007,0.25,0.052,0.497,0.133,0.734c9.58,29.483,32.207,52.915,61.338,63.518c1.298,0.471,2.732-0.199,3.204-1.497
		c0.471-1.297-0.197-2.73-1.493-3.203c-27.688-10.078-49.188-32.342-58.293-60.365C57.967,170.431,56.96,169.711,55.837,169.745z"
                    />
                  </g>
                </svg>
                <span
                  className="text-[#F9C94F] text-2xl font-bold mb-4 count"
                  data-count="4"
                >
                  0
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  core values
                </span>
              </div>
              <p className={`text-black/50 text-md ${poppins.className}`}>
                Our core values include Integrity, Excellence, Collaboration,
                and Innovation, which guide our operations and interactions with
                clients and candidates.
              </p>
            </div>
            <div className={`col-span-1 row-start-3 ${poppins.className}`}>
              <div className="flex gap-1">
                <svg
                  fill="#F9C94F"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45px"
                  height="45px"
                  viewBox="0 0 100 100"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M57,44h-6h-6c-3.3,0-6,2.7-6,6v9c0,1.1,0.5,2.1,1.2,2.8c0.7,0.7,1.7,1.2,2.8,1.2v9c0,3.3,2.7,6,6,6h2h2
			c3.3,0,6-2.7,6-6v-9c1.1,0,2.1-0.4,2.8-1.2c0.7-0.7,1.2-1.7,1.2-2.8v-9C63,46.7,60.3,44,57,44z"
                      />
                    </g>
                    <g>
                      <circle cx="51" cy="33" r="7" />
                    </g>
                    <g>
                      <path
                        d="M36.6,66.7c-0.2-0.2-0.5-0.4-0.7-0.6c-1.9-2-3-4.5-3-7.1v-9c0-3.2,1.3-6.2,3.4-8.3c0.6-0.6,0.1-1.7-0.7-1.7
			c-1.7,0-3.6,0-3.6,0h-6c-3.3,0-6,2.7-6,6v9c0,1.1,0.5,2.1,1.2,2.8c0.7,0.7,1.7,1.2,2.8,1.2v9c0,3.3,2.7,6,6,6h2h2
			c0.9,0,1.7-0.2,2.4-0.5c0.4-0.2,0.6-0.5,0.6-0.9c0-1.2,0-4,0-5.1C37,67.2,36.9,66.9,36.6,66.7z"
                      />
                    </g>
                    <g>
                      <circle cx="32" cy="29" r="7" />
                    </g>
                    <g>
                      <path
                        d="M76,40h-6c0,0-1.9,0-3.6,0c-0.9,0-1.3,1-0.7,1.7c2.1,2.2,3.4,5.1,3.4,8.3v9c0,2.6-1,5.1-3,7.1
			c-0.2,0.2-0.4,0.4-0.7,0.6c-0.2,0.2-0.4,0.5-0.4,0.8c0,1.1,0,3.8,0,5.1c0,0.4,0.2,0.8,0.6,0.9c0.7,0.3,1.5,0.5,2.4,0.5h2h2
			c3.3,0,6-2.7,6-6v-9c1.1,0,2.1-0.4,2.8-1.2c0.7-0.7,1.2-1.7,1.2-2.8v-9C82,42.7,79.3,40,76,40z"
                      />
                    </g>
                    <g>
                      <circle cx="70" cy="29" r="7" />
                    </g>
                  </g>
                </svg>
                <span
                  className="text-[#F9C94F] text-2xl font-bold mb-4 count"
                  data-count="3"
                >
                  0
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  team members
                </span>
              </div>

              <p className={`text-black/50 text-md ${poppins.className}`}>
                Our team is led by CEO Nicholas Agbelordzi, who is committed to
                connecting talent with opportunity. Recruitment Specialist
                Gideon Adonteng who delivers customized, effective talent
                acquisition solutions, and Consultant Pastor Chris Bashiru
                offers expert guidance for both employers and job seekers.
              </p>
            </div>
          </div>
          <div className="lg:w-full lg:flex-1">
            <Image
              src={"/nicholas.jpeg"}
              height={500}
              width={500}
              alt="candidates image"
              className="h-full w-full rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col md:flex-row justify-center items-center my-20">
        <div className="flex flex-col md:flex-row gap-4 max-w-7xl px-5">
          <div>
            <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black">
              Comprehensive Recruitment Solutions
            </h1>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className=" col-span-2">
              <p className={`text-black ${poppins.className}`}>
                Billo Empire offers a range of recruitment services tailored to
                connect top talent with leading employers. Our personalized
                approach ensures a perfect match for every client.{" "}
              </p>
            </div>
            <div className="col-span-1">
              <strong className="text-black font-semibold text-xl">
                Candidate Access
              </strong>
              <p className={`text-black/50 text-md ${poppins.className} mt-4`}>
                Gain access to a vast pool of qualified candidates ready to meet
                your business needs.
              </p>
            </div>
            <div className="md:mb-10">
              <strong className="text-black font-semibold text-xl ">
                Streamlined Process
              </strong>
              <p className={`text-black/50 text-md ${poppins.className} mt-4`}>
                Experience a hiring process that saves time and resources,
                ensuring efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------End of About Section-------------------------------------------------------------------- */}
      {/* <section className="flex flex-col  justify-center items-center mt-10 lg:mt-40"> */}
      {/* Ad container */}
      {/* <iframe
          src="https://www.highperformanceformat.com/2149326cc3a61e5fce28f723b8784ee7/invoke.js"
          key="2149326cc3a61e5fce28f723b8784ee7"
          width="468"
          height="60"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe> */}
      {/* </section> */}

      {/* ------------------------------------------------------End of Events Section-------------------------------------------------------------------- */}
      <section className="flex flex-col  justify-center items-center mt-10 lg:mt-40">
        <h1
          className={`sm:text-4xl text-3xl font-extrabold text-base-content text-black mb-16 md:mb-8`}
        >
          Events
        </h1>
        <div className=" max-w-7xl flex gap-8 flex-col md:flex-row">
          <div className="mb-10 px-5 items-center justify-center flex gap-4 border-r border-black/10">
            <div className="flex flex-col rounded-md py-2 px-5 bg-blue-400 mt-10">
              <h1 className={`text-black text-2xl ${poppins.className}`}>11</h1>
              <h3 className={`text-black ${poppins.className}`}>Nov</h3>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 items-center mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
                </span>
                <h3 className={`text-black ${poppins.className}`}>Ended</h3>
              </div>
              <h1 className={`text-black text-xl mb-3 ${poppins.className}`}>
                Rigging Training
              </h1>
              <div className="flex gap-1 items-center">
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>time1</title>
                  <path d="M16 3.5c-7.181 0-13 5.82-13 13s5.819 13 13 13c7.179 0 13-5.82 13-13s-5.82-13-13-13zM15.895 27.027c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5c5.798 0 10.5 4.701 10.5 10.5s-4.702 10.5-10.5 10.5zM18.93 17.131h-2.98v-5.032c0-0.546-0.443-0.99-0.989-0.99s-0.99 0.443-0.99 0.99v6.021c0 0.547 0.443 0.989 0.99 0.989h3.969c0.547 0 0.99-0.442 0.99-0.989 0-0.546-0.443-0.989-0.99-0.989z"></path>
                </svg>
                <p className={`text-black mb-1 ${poppins.className}`}>
                  9:00 AM, Mon <span className="text-blue-400">11th Nov</span> -
                  Sat <span className="text-blue-400">16th Nov</span>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="-4 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>location</title>
                  <desc>Created with Sketch Beta.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set"
                      transform="translate(-104.000000, -411.000000)"
                      fill="#000000"
                    >
                      <path
                        d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                        id="location"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className={`text-black ${poppins.className}`}>
                  Halleluyah Junction, Afienya-Mataheko Rd.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10 px-5 items-center justify-center flex gap-4">
            <div className="flex flex-col rounded-md py-2 px-5 bg-blue-400 mt-10">
              <h1 className={`text-black text-2xl ${poppins.className}`}>2</h1>
              <h3 className={`text-black ${poppins.className}`}>Dec</h3>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 items-center mb-6">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="6"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="#000000"
                  />
                  <rect
                    x="10.5"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="#000000"
                  />
                  <rect
                    x="15"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="#000000"
                  />
                </svg>
                <h3 className={`text-black ${poppins.className}`}>
                  Upcoming event
                </h3>
              </div>
              <h1 className={`text-black text-xl mb-3 ${poppins.className}`}>
                Rigging Training 2
              </h1>
              <div className="flex gap-1 items-center">
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>time1</title>
                  <path d="M16 3.5c-7.181 0-13 5.82-13 13s5.819 13 13 13c7.179 0 13-5.82 13-13s-5.82-13-13-13zM15.895 27.027c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5c5.798 0 10.5 4.701 10.5 10.5s-4.702 10.5-10.5 10.5zM18.93 17.131h-2.98v-5.032c0-0.546-0.443-0.99-0.989-0.99s-0.99 0.443-0.99 0.99v6.021c0 0.547 0.443 0.989 0.99 0.989h3.969c0.547 0 0.99-0.442 0.99-0.989 0-0.546-0.443-0.989-0.99-0.989z"></path>
                </svg>
                <p className={`text-black mb-1 ${poppins.className}`}>
                  9:30 AM, Every
                  <span className="text-blue-400"> Saturday</span> throughout
                  the month
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="-4 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>location</title>
                  <desc>Created with Sketch Beta.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set"
                      transform="translate(-104.000000, -411.000000)"
                      fill="#000000"
                    >
                      <path
                        d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                        id="location"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className={`text-black ${poppins.className}`}>
                  Halleluyah Junction, Afienya-Mataheko Rd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------Start of Services Section--------------------------------------------------------------- */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9C94F"
          fillOpacity="1"
          d="M0,192L24,186.7C48,181,96,171,144,176C192,181,240,203,288,213.3C336,224,384,224,432,240C480,256,528,288,576,282.7C624,277,672,235,720,192C768,149,816,107,864,122.7C912,139,960,213,1008,250.7C1056,288,1104,288,1152,277.3C1200,267,1248,245,1296,240C1344,235,1392,245,1416,250.7L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>

      <section
        id="services"
        className="bg-[#F9C94F] mt-0 flex flex-col justify-center items-center"
      >
        <div className="max-w-7xl mb-10 px-5">
          <div className="flex flex-col md:flex-row gap-4 mb-16 ">
            <div>
              <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black">
                Why Choose Billo Empire for Your Recruitment Needs
              </h1>
            </div>
            <div className={`text-black ${poppins.className}`}>
              Billo Empire is your trusted partner in recruitment, offering
              unparalleled access to top talent and a personalized approach to
              meet your unique needs. Our streamlined hiring process saves time
              and resources, ensuring a perfect match every time.
            </div>
          </div>
          <div className="flex flex-col gap-20 md:flex-row md:gap-10 justify-center items-center">
            <div>
              <div className="mb-4">
                <Image
                  src={"/talent.jpeg"}
                  width={400}
                  height={500}
                  alt="brainstorming group image"
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div>
                <strong className="text-black font-extrabold text-base-content text-xl">
                  Access to Top Talent Across Industries
                </strong>
                <p className="my-4 text-black">
                  Our extensive network connects you with highly qualified
                  candidates, ensuring you find the perfect fit for your
                  organization.
                </p>
                {/* <button className=" px-5 py-3 hover:bg-black rounded-md text-black hover:text-white">
                  Learn more
                </button> */}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <Image
                  src={"/hiring.jpeg"}
                  width={400}
                  height={500}
                  alt="brainstorming group image"
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div>
                <strong className="text-black font-extrabold text-base-content text-xl">
                  Efficient and Streamlined Hiring Process
                </strong>
                <p className="my-4 text-black">
                  We utilize innovative strategies to make the hiring process
                  efficient, saving you valuable time and resources.
                </p>
                {/* <button className=" px-5 py-3 hover:bg-black rounded-md text-black hover:text-white">
                  Learn more
                </button> */}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <Image
                  src={"/group.jpeg"}
                  width={400}
                  height={500}
                  alt="brainstorming group image"
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div>
                <strong className="text-black font-extrabold text-base-content text-xl">
                  Personalized Recruitment Solutions
                </strong>
                <p className="my-4 text-black">
                  Our dedicated team tailors solutions to meet your specific
                  needs, providing expert guidance throughout your recruitment
                  journey.
                </p>
                {/* <button className=" px-5 py-3 hover:bg-black rounded-md text-black hover:text-white">
                  Learn more
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------End of Services Section-------------------------------------------------- */}

      {/* --------------------------------------------------------------Start of Success Stories Section----------------------------------------- */}
      <section
        id="success-stories"
        className="flex flex-col justify-center items-center py-10 px-5 mb-20"
      >
        <div className=" mb-6">
          <h1 className="text-3xl md:text-5xl text-black font-extrabold">
            Client Success Stories
          </h1>
        </div>
        <div>
          <p className={`text-black/50 ${poppins.className}`}>
            <span className="font-semibold text-blue-500">
              Hear from our satisfied clients
            </span>{" "}
            who found their perfect match through our dedicated services.
          </p>
        </div>
        <div
          className={`${poppins.className} flex justify-center items-center my-10`}
        >
          <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-5 max-w-7xl">
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                className="h-10"
                alt="five stars rating"
              />
              <p className="text-sm mb-3">
                I am Pastor Matthew, a proud graduate of Billow Empire and an
                ordained minister of the Gospel Of Our Lord Jesus Christ. With
                their training, I became a certified forklift and crane
                operator, now working successfully in Saudi Arabia. Thanks to
                Billow Empire!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/pastor.jpeg"}
                  width={40}
                  height={40}
                  alt="client image"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Pastor Matthew
                  </strong>
                  <h4 className="text-sm">
                    Minister of the Gospel Of Our Lord Jesus Christ
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                className="h-10"
                alt="five stars rating"
              />
              <p className="text-sm mb-3">
                I&apos;m thrilled to share that I, Wisdom Anyomi, have secured
                an exciting opportunity in Europe, Australia thanks to my
                training in Crane and Forklift Operations from BILLO EMPIRE in
                collaboration with BON BOSCO TRAINING INSTITUTE!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/wisdom-1.jpeg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Wisdom Anyomi
                  </strong>
                  <h4 className="text-sm">@wisdomanyomi</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                className="h-10"
                alt="five stars rating"
              />
              <p className="text-sm mb-3">
                I&apos;m Nana Boateng; a crane operator in Bin Quraya Holdings
                Saudi Arabia. Through the help of BILLO EMPIRE training and
                assistance of interview and recruitment, I was able to gain
                employment in Saudi Arabia. Currently working with BQ holdings
                in Dammam, Saudi Arabia. Thank you BILLO EMPIRE 😘
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/boateng.jpeg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Nana Boateng
                  </strong>
                  <h4 className="text-sm">@nanaboateng</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                className="h-10"
                alt="five stars rating"
              />
              <p className="text-sm mb-3">
                My name is Clement Tetteh Noye, and I&apos;m a proud alumnus of
                Billo Global Empire. I&apos;m excited to share my success story
                and the opportunities that await you at Billo Global Empire.
                Thanks to Billo Global Empire, I secured a lucrative contract as
                a Crane Operator with BIN QURAYA under Saudi Aramco in Saudi
                Arabia.
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/clement.jpeg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Clement Tetteh Noye
                  </strong>
                  <h4 className="text-sm">@ClementNoye</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                className="h-10"
                alt="five stars rating"
              />
              <p className="text-sm mb-3">
                My name is Elikem Goka, through the help of BILLO EMPIRE
                training, assistance, and their recruitment I was able to get a
                job in BIN QURAYA CO LTD, Saudi Arabia. I feel like words
                aren&apos;t enough to express my gratitude for all their effort
                and guidance for helping me. I appreciate everything
                they&apos;ve done just for me to achieve my goals. God bless
                BILLO EMPIRE. 🙏
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/elikem.jpeg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Elikem Goka
                  </strong>
                  <h4 className="text-sm">@ElikemGoka</h4>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                className="h-10"
                alt="five stars rating"
              />
              <p className="text-sm mb-3">
                Billo Empire helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/rylan.jpg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4 className="text-sm">HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------End of Success Stories Section------------------------------------------------- */}

      {/* ---------------------------------------------------------Start of Blog Section------------------------------------------------- */}
      <section
        id="blog"
        className="flex flex-col justify-center items-center px-5"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:.latest-insights_grid gap-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between col-span-2">
            <div className="flex flex-col gap-4">
              <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black">
                Latest Insights
              </h1>
              <p className={`text-black/50 ${poppins.className}`}>
                Stay updated with the latest trends and tips in recruitment.
              </p>
            </div>
            <div className="mt-10 md:mt-0">
              <button
                className={`${poppins.className} text-black px-5 py-3 hover:bg-slate-200 rounded-md`}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 bg-[url('/estee-janssens.jpg')] bg-cover rounded-l-md"></div>
            <div className="flex-1 flex flex-col gap-2 md:gap-5 bg-slate-300 p-2 md:p-8 rounded-r-md">
              <p className="text-black/50 text-xs">Recruitment Trends</p>
              <strong
                className={`${poppins.className} text-black font-extrabold text-md md:text-3xl`}
              >
                Top Recruitment Trends in 2024
              </strong>

              <p
                className={`text-black/50 text-xs md:text-lg ${poppins.className}`}
              >
                Explore the latest trends shaping the recruitment landscape this
                year.
              </p>
              <Link href={"/blog/top-recruitment-trends"}>
                <p className="text-black text-sm cursor-pointer">
                  Read more &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 bg-[url('/grad.jpeg')] bg-cover rounded-l-md"></div>
            <div className="flex-1 flex flex-col gap-2 md:gap-5 bg-slate-300 p-2 md:p-8 rounded-r-md">
              <p className="text-black/50 text-xs">Career Development</p>
              <strong
                className={`${poppins.className} text-black font-extrabold text-md md:text-3xl`}
              >
                The Importance of Networking in Job Search
              </strong>

              <p
                className={`text-black/50 text-xs md:text-lg ${poppins.className}`}
              >
                Discover why networking is a vital component of a successful job
                search.
              </p>
              <Link href={"/blog/networking-in-job-search"}>
                <p className="text-black text-sm cursor-pointer">
                  Read more &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 bg-[url('/hiring.jpeg')] bg-cover rounded-l-md"></div>
            <div className="flex-1 flex flex-col gap-2 md:gap-5 bg-slate-300 p-2 md:p-8 rounded-r-md">
              <p className="text-black/50 text-xs">Interview Tips</p>
              <strong
                className={`${poppins.className} text-black font-extrabold text-md md:text-3xl`}
              >
                Interview Preparation: Tips for Success
              </strong>

              <p
                className={`text-black/50 text-xs md:text-lg ${poppins.className}`}
              >
                Get ready for your next interview with these essential
                preparation tips.
              </p>
              <Link href={"/blog/interview-tips"}>
                <p className="text-black text-sm cursor-pointer">
                  Read more &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 bg-[url('/marielle-ursua.jpg')] bg-cover rounded-l-md"></div>
            <div className="flex-1 flex flex-col gap-2 md:gap-5 bg-slate-300 p-2 md:p-8 rounded-r-md">
              <p className="text-black/50 text-xs">Career Tips</p>
              <strong
                className={`${poppins.className} text-black font-extrabold text-md md:text-3xl`}
              >
                How to Write an Effective CV
              </strong>

              <p
                className={`text-black/50 text-xs md:text-lg ${poppins.className}`}
              >
                Explore the latest trends shaping the recruitment landscape this
                year.
              </p>
              <Link href={"/blog/career-tips"}>
                <p className="text-black text-sm cursor-pointer">
                  Read more &rarr;
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* ---------------------------------------------------------End of Blog Section------------------------------------------------- */}

        {/* ---------------------------------------------------------Start of FAQ Section------------------------------------------------- */}
        <FAQ />
        {/* ---------------------------------------------------------End of FAQ Section------------------------------------------------- */}
      </section>
      <section className="flex justify-center items-center px-5 lg:grid lg:grid-cols-10">
        <div className="max-w-7xl items-start flex flex-col gap-4 lg:col-start-3 lg:col-end-8">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black">
            Get Started Today
          </h1>
          <p className={`text-black/50 ${poppins.className}`}>
            Connect with us to find the best talent for your organization.
          </p>
          <a href="/contact-us">
            <button
              className={`${poppins.className} px-5 py-3 bg-[#F9C94F] rounded hover:bg-[#f7c037]`}
            >
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
