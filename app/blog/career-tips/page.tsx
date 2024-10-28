import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { BlogPostCareerTips } from "@/constant";

const poppins = localFont({
  src: "../../fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function CareerTips() {
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

      <section className="bg-[url('/marielle-ursua.jpg')] bg-cover blog_-hero_height w-screen'"></section>

      <section className="flex flex-col justify-center items-center mt-10 md:mt-20 px-5">
        <div className="max-w-7xl">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-base-content text-black my-4">
            How to Write an Effective CV
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
                A Curriculum Vitae (CV) is a vital tool in the job search
                process. It serves as your first introduction to potential
                employers, highlighting your skills, experience, and
                qualifications. Crafting a well-organized and impactful CV is
                essential to stand out from the competition and land an
                interview. Here&apos;s a guide on how to write an effective CV
                that grabs attention and communicates your value clearly.
              </em>
            </h4>
          </div>
          <div>
            {BlogPostCareerTips.map((post, i) => (
              <div key={i}>
                <h3 className="sm:text-xl text-lg font-extrabold text-base-content text-black my-10">
                  {" "}
                  {i + 1}. {post.title}
                </h3>
                <p className="text-black">{post.text}</p>
                <ul>
                  {post.steps
                    ? post?.steps.map((step, i) => (
                        <li key={i} className="text-black list-disc my-2">
                          {step}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h4 className="sm:text-lg text-sm font-bold text-base-content text-black mt-10 mb-2">
              <em>Conclusion</em>
            </h4>
            <p className={`${poppins.className} text-black/50`}>
              <em>
                Proper preparation is the foundation of a successful interview.
                By researching the company, practicing common questions, and
                focusing on your non-verbal cues, you can confidently showcase
                your qualifications and make a positive impression on potential
                employers. Remember, an interview is not just an assessment of
                your skills but also an opportunity to show your enthusiasm and
                fit for the company. With these tips, you&apos;ll be
                well-prepared to excel and secure the job you want
              </em>
            </p>
          </div>
          <p className="text-black text-xs mt-4">#CareerTips</p>
        </div>
      </section>
    </>
  );
}
