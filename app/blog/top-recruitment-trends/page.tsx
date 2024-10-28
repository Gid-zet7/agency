import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { BlogPostRecruitment } from "@/constant";

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

      <section className="bg-[url('/estee-janssens.jpg')] bg-cover blog_-hero_height w-screen'"></section>

      <section className="flex flex-col justify-center items-center mt-10 md:mt-20 px-5">
        <div className="max-w-7xl">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black my-4">
            Top Recruitment Trends in 2024: Shaping the Future of Hiring
          </h1>
          <div className="flex gap-3">
            <Image
              src={"/my-image.jpeg"}
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
                As 2024 unfolds, the recruitment landscape continues to evolve,
                driven by technological advancements, shifting workforce
                expectations, and the demand for diverse, agile talent. To stay
                competitive in this dynamic market, companies must adapt their
                hiring strategies. Here are the top recruitment trends in 2024
                that are transforming the hiring process:
              </em>
            </h4>
          </div>
          <div>
            {BlogPostRecruitment.map((post, i) => (
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
                The recruitment trends of 2024 reflect a growing emphasis on
                agility, diversity, and technology. As companies navigate this
                evolving landscape, they must remain adaptable, prioritize
                candidate experience, and leverage innovative tools to stay
                ahead in the competitive talent market. Embracing these trends
                will be essential for businesses seeking to attract and retain
                the best talent in the years to come. By incorporating these
                trends into your recruitment strategy, your organization can
                build a future-ready workforce that drives success and growth.
              </em>
            </p>
          </div>
          <p className="text-black text-xs mt-4">#RecruitmentTrends</p>
        </div>
      </section>
    </>
  );
}
