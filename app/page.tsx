"use client";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import "slick-carousel/slick/slick.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

const poppins = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function CarouselCustomNavigation() {
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
    const darkSwitch = document.getElementById("switch");

    if (burgerMenu && navbarMenu) {
      const toggleMenu = () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
      };

      burgerMenu.addEventListener("click", toggleMenu);

      // Cleanup on unmount
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

      // Cleanup on unmount
      return () => link.removeEventListener("click", handleLinkClick);
    });

    // Fixed Navbar Menu on Window Resize
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        if (navbarMenu?.classList.contains("is-active")) {
          navbarMenu.classList.remove("is-active");
          overlayMenu?.classList.remove("is-active");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Dark and Light Mode on Switch Click
    const toggleDarkMode = () => {
      document.documentElement.classList.toggle("darkmode");
      document.body.classList.toggle("darkmode");
    };

    darkSwitch?.addEventListener("click", toggleDarkMode);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      darkSwitch?.removeEventListener("click", toggleDarkMode);
    };
  }, []);

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
      <header className="header" id="header">
        <nav className="navbar container">
          <a href="#" className="brand">
            LOGO
          </a>
          <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  About Us
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Success Stories
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
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

      <div className="main">
        <section className="section banner banner-section">
          <div className="container banner-column flex flex-col md:flex-row lg:gap-24">
            <Image
              className="banner-image rounded"
              width={380}
              height={380}
              alt="connect"
              src={"/hero-img.png"}
            />
            <div className="banner-inner">
              <h1 className="heading-xl font-extrabold text-base-content">
                Connecting Talent with Opportunity
              </h1>
              <p className={`${poppins.className} paragraph text-black/50`}>
                Discover Ghana&apos;s premier recruitment agency. We specialize
                in matching exceptional talent with leading employers.
                Experience the difference with our personalized approach and
                commitment to excellence.
              </p>
              <button className="btn btn-darken btn-inline mt-3">
                Get Started &rarr;
              </button>
            </div>
          </div>
        </section>
      </div>

      <section id="counter" className="mt-20 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row max-w-7xl gap-5">
          <div className="flex flex-col lg:flex-1 lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-5 px-5 col-span-2 row-start-1 row-end-2">
            <div className="lg:col-span-2">
              <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black my-4">
                About Talent Pool
              </h1>
              <p className={`${poppins.className} text-black`}>
                Talent Pool is dedicated to connecting top talent with premier
                employers in Ghana. Our mission is to create successful
                partnerships that drive growth and innovation, ensuring a
                perfect match every time.
              </p>
            </div>
            <div
              className={`${poppins.className} lg:col-span-1 mt-10 md:mt-0 `}
            >
              <div className="flex gap-2">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="30px"
                  height="30px"
                  viewBox="0 0 47.001 47.001"
                  xmlSpace="preserve"
                >
                  <g>
                    <g id="Layer_1_65_">
                      <g>
                        <path
                          d="M46.907,20.12c-0.163-0.347-0.511-0.569-0.896-0.569h-2.927C41.223,9.452,32.355,1.775,21.726,1.775
				C9.747,1.775,0,11.522,0,23.501C0,35.48,9.746,45.226,21.726,45.226c7.731,0,14.941-4.161,18.816-10.857
				c0.546-0.945,0.224-2.152-0.722-2.699c-0.944-0.547-2.152-0.225-2.697,0.72c-3.172,5.481-9.072,8.887-15.397,8.887
				c-9.801,0-17.776-7.974-17.776-17.774c0-9.802,7.975-17.776,17.776-17.776c8.442,0,15.515,5.921,17.317,13.825h-2.904
				c-0.385,0-0.732,0.222-0.896,0.569c-0.163,0.347-0.11,0.756,0.136,1.051l4.938,5.925c0.188,0.225,0.465,0.355,0.759,0.355
				c0.293,0,0.571-0.131,0.758-0.355l4.938-5.925C47.018,20.876,47.07,20.467,46.907,20.12z"
                        />
                        <path
                          d="M21.726,6.713c-1.091,0-1.975,0.884-1.975,1.975v11.984c-0.893,0.626-1.481,1.658-1.481,2.83
				c0,1.906,1.551,3.457,3.457,3.457c0.522,0,1.014-0.125,1.458-0.334l6.87,3.965c0.312,0.181,0.65,0.266,0.986,0.266
				c0.682,0,1.346-0.354,1.712-0.988c0.545-0.943,0.222-2.152-0.724-2.697l-6.877-3.971c-0.092-1.044-0.635-1.956-1.449-2.526V8.688
				C23.701,7.598,22.816,6.713,21.726,6.713z M21.726,24.982c-0.817,0-1.481-0.665-1.481-1.48c0-0.816,0.665-1.481,1.481-1.481
				s1.481,0.665,1.481,1.481C23.207,24.317,22.542,24.982,21.726,24.982z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span
                  className="text-black text-2xl font-bold mb-4 count"
                  data-count="14"
                >
                  0
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  years
                </span>
              </div>
              <p className={`text-black/50 text-md ${poppins.className}`}>
                Since our founding in 2010, we have successfully placed
                thousands of candidates, adapting to the evolving job market to
                meet the unique needs of both candidates and companies.
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
                          style={{ fill: "#090509" }}
                          d="M10.461,1.079L9.598,4.294L9.809,0.23c-1.193-0.517-2.236,0-2.236,0l0.211,4.064L6.923,1.079
				C4.526,1.746,3.007,3.698,3.007,6.307h11.372C14.379,3.698,12.859,1.746,10.461,1.079z"
                        />
                        <path
                          style={{ fill: "#090509" }}
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
                  className="text-black text-2xl font-bold mb-4 count"
                  data-count="5000"
                >
                  0
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  candidates
                </span>
              </div>

              <p className={`text-black/50 text-md ${poppins.className}`}>
                Our personalized approach and commitment to excellence have made
                us a trusted name in the recruitment industry, helping
                businesses thrive with the right talent.
              </p>
            </div>
            <div className={`col-span-1 ${poppins.className}`}>
              <div className="flex gap-1">
                <svg
                  fill="#000000"
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
                  className="text-black text-2xl font-bold mb-4 count"
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
            <div className={`col-start-2 ${poppins.className}`}>
              <div className="flex gap-1">
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
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
                  className="text-black text-2xl font-bold mb-4 count"
                  data-count="3"
                >
                  0
                </span>{" "}
                <span className="text-black text-2xl font-bold mb-4">
                  team members
                </span>
              </div>

              <p className={`text-black/50 text-md ${poppins.className}`}>
                Our dedicated team consists of experienced professionals like
                John Doe, our CEO, who leads with a passion for connecting
                talent with opportunity, and Jane Smith, our Recruitment
                Specialist, who excels in understanding client needs.
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
                Talent Pool offers a range of recruitment services tailored to
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
            <div className="mb-10">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9C94F"
          fillOpacity="1"
          d="M0,192L24,186.7C48,181,96,171,144,176C192,181,240,203,288,213.3C336,224,384,224,432,240C480,256,528,288,576,282.7C624,277,672,235,720,192C768,149,816,107,864,122.7C912,139,960,213,1008,250.7C1056,288,1104,288,1152,277.3C1200,267,1248,245,1296,240C1344,235,1392,245,1416,250.7L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>

      <section className="bg-[#F9C94F] mt-0 flex flex-col justify-center items-center">
        <div className="max-w-7xl mb-10 px-5">
          <div className="flex flex-col md:flex-row gap-4 mb-16 ">
            <div>
              <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black">
                Why Choose Talent Pool for Your Recruitment Needs
              </h1>
            </div>
            <div className={`text-black ${poppins.className}`}>
              Talent Pool is your trusted partner in recruitment, offering
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
                <strong className="text-black font-semibold text-xl">
                  Access to Top Talent Across Industries
                </strong>
                <p className="my-4 text-black">
                  Our extensive network connects you with highly qualified
                  candidates, ensuring you find the perfect fit for your
                  organization.
                </p>
                <button className=" px-5 py-3 hover:bg-black rounded-md text-black hover:text-white">
                  Learn more
                </button>
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
                <strong className="text-black font-semibold text-lg">
                  Efficient and Streamlined Hiring Process
                </strong>
                <p className="my-4 text-black">
                  We utilize innovative strategies to make the hiring process
                  efficient, saving you valuable time and resources.
                </p>
                <button className=" px-5 py-3 hover:bg-black rounded-md text-black hover:text-white">
                  Learn more
                </button>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <Image
                  src={"/evangeline-shaw.jpg"}
                  width={400}
                  height={500}
                  alt="brainstorming group image"
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div>
                <strong className="text-black font-semibold text-xl">
                  Personalized Recruitment Solutions
                </strong>
                <p className="my-4 text-black">
                  Our dedicated team tailors solutions to meet your specific
                  needs, providing expert guidance throughout your recruitment
                  journey.
                </p>
                <button className=" px-5 py-3 hover:bg-black rounded-md text-black hover:text-white">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10 px-5 mb-20">
        <div className=" mb-6">
          <h1 className="text-3xl md:text-5xl text-black font-extrabold">
            Client Success Stories
          </h1>
        </div>
        <div>
          <p className={`text-black/50 ${poppins.className}`}>
            <span className="font-semibold">
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
                alt="five stars rating"
              />
              <p className="text-sm">
                Talent Pool helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/lucas-gouvea.jpg"}
                  width={40}
                  height={40}
                  alt="client image"
                  className="rounded-full w-10 h-1w-10"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4>HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                alt="five stars rating"
              />
              <p className="text-sm">
                Talent Pool helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/erik-lucatero.jpg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-10 h-1w-10"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4>HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                alt="five stars rating"
              />
              <p className="text-sm">
                Talent Pool helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/headshot.jpg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-10 h-1w-10"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4>HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                alt="five stars rating"
              />
              <p className="text-sm">
                Talent Pool helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/prince-akach.jpg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-10 h-1w-10"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4>HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                alt="five stars rating"
              />
              <p className="text-sm">
                Talent Pool helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/ludvig-wiese.jpg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-10 h-1w-10"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4>HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 rounded-md p-4">
              <Image
                src={"/rating.png"}
                width={120}
                height={0}
                alt="five stars rating"
              />
              <p className="text-sm">
                Talent Pool helped us find the right talent quickly and
                efficiently. Their understanding of our needs was impressive!
              </p>
              <div className="flex gap-3">
                <Image
                  src={"/ayo.jpg"}
                  width={60}
                  height={60}
                  alt="client image"
                  className="rounded-full w-10 h-1w-10"
                />
                <div className="flex flex-col gap-1">
                  <strong
                    className={`text-extrabold text-white ${poppins.className}`}
                  >
                    Kwame Asante
                  </strong>
                  <h4>HR manager at Fintech Gh</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-5">
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
                Top Recruitment Trends in 2023
              </strong>

              <p
                className={`text-black/50 text-xs md:text-lg ${poppins.className}`}
              >
                Explore the latest trends shaping the recruitment landscape this
                year.
              </p>
              <p className="text-black text-sm">Read more</p>
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
              <p className="text-black text-sm">Read more</p>
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
              <p className="text-black text-sm">Read more</p>
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
              <p className="text-black text-sm">Read more</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FAQ />
      </section>
      <section className="flex justify-center items-center px-5 lg:grid lg:grid-cols-10">
        <div className="max-w-7xl items-start flex flex-col gap-4 lg:col-start-3 lg:col-end-8">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black">
            Get Started Today
          </h1>
          <p className={`text-black/50 ${poppins.className}`}>
            Connect with us to find the best talent for your organization.
          </p>
          <button
            className={`${poppins.className} px-5 py-3 bg-[#F9C94F] rounded`}
          >
            Contact Us
          </button>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9C94F"
          fillOpacity="1"
          d="M0,288L26.7,293.3C53.3,299,107,309,160,304C213.3,299,267,277,320,250.7C373.3,224,427,192,480,181.3C533.3,171,587,181,640,170.7C693.3,160,747,128,800,144C853.3,160,907,224,960,256C1013.3,288,1067,288,1120,288C1173.3,288,1227,288,1280,293.3C1333.3,299,1387,309,1413,314.7L1440,320L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>

      <Footer />
    </>
  );
}
