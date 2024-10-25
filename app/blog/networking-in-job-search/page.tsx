import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { BlogPostNetworking } from "@/constant";

const poppins = localFont({
  src: "../../fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function TopRecruitmentTrends() {
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

      <section className="bg-[url('/erika-giraud.jpg')] bg-cover blog_-hero_height w-screen'"></section>

      <section className="flex flex-col justify-center items-center mt-10 md:mt-20 px-5">
        <div className="max-w-7xl">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black my-4">
            The Importance of Networking in Job Search: Unlocking Career
            Opportunities
          </h1>
          <div className="flex gap-3">
            <Image
              src={"/ludvig-wiese.jpg"}
              width={60}
              height={60}
              alt="client image"
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col gap-1">
              <strong className={` text-black/50 ${poppins.className}`}>
                Written by{" "}
                <span className="text-black text-extrabold">
                  Gideon Adonteng
                </span>
              </strong>
              <h4 className="text-sm text-black/50">Recruitment specialist</h4>
              <p className="text-black/50 text-xs mt-2">
                <em>Updated: Oct 23, 2024, 10:01am</em>
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h4 className={` text-black/50 ${poppins.className}`}>
              <em>
                In today&apos;s competitive job market, networking has become a
                crucial element for success. While resumes and online
                applications are important, building connections through
                networking can significantly enhance your job search efforts.
                Whether you&apos;re a recent graduate or an experienced
                professional, expanding your network can open doors to new
                opportunities that may not be available through traditional
                job-hunting methods. Here&apos;s why networking is essential for
                your job search:
              </em>
            </h4>
          </div>
          <div>
            {BlogPostNetworking.map((post, i) => (
              <div key={i}>
                <h3 className="sm:text-xl text-lg font-extrabold text-base-content text-black my-10">
                  {" "}
                  {i + 1}. {post.title}
                </h3>
                <p className="text-black">{post.text}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="sm:text-lg text-sm font-bold text-base-content text-black mt-10 mb-2">
              <em>Conclusion</em>
            </h4>
            <p className={`${poppins.className} text-black/50`}>
              <em>
                Networking is a vital component of a successful job search in
                today&apos;s market. It offers access to hidden opportunities,
                builds trust and credibility, and provides valuable insights
                into your industry. By connecting with the right people, you can
                gain career guidance, boost your confidence, and expand your
                long-term prospects. Remember, networking is a continuous
                process that requires effort, but the benefits it brings to your
                job search and overall career growth are undeniable. Start
                building meaningful connections today to unlock the doors to
                your next opportunity.
              </em>
            </p>
          </div>
          <p className="text-black text-xs mt-4">#CareerDevelopment</p>
        </div>
      </section>
    </>
  );
}
