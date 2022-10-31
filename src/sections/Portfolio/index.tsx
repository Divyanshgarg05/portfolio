import PortfolioCard from "@components/Cards/PortfolioCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const portfolioData = [
  {
    id: 1,
    title: "Java Programming: Arrays, Lists, and Structured Data",
    desc: "Exploring the role of ultrathin 2D graphitic carbon nitride (g-C3N4)” by Maansi Aggarwal, Soumen Basu, Nagaraj P.Shetti, Mallikarjuna, N.Nadagouda, Eilhann, E.Kwon, Young-Kwon Park, Tejraj M.Aminabhavi",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1667205693/certi_1_ib7ff4.png",
    link: "https://coursera.org/share/c2416d2127a3b4d9c85c680b8753f78f",
    ctaText: "Know More",
  },
  {
    id: 2,
    title: "Programming Foundations with JavaScript, HTML and CSS",
    desc: "A step towards sustainability” by Maansi Aggarwal, Soumen Basu, Nagaraj P Shetti, Mallikarjuna N Nadagouda, Tejraj M Aminabhavi",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1667206225/certi_2_cmgmc4.png",
    link: "https://coursera.org/share/9cb1994cbb48d96e9f21d19b55be93ab",
    ctaText: "Know More",
  },
  // {
  //   id: 3,
  //   title: "Introduction to Statistics",
  //   desc: "Performing exploratory data analysis, understanding key principles of sampling, and selecting appropriate tests of significance for multiple contexts.",
  //   image:
  //     "https://res.cloudinary.com/manavkaushal/image/upload/v1661904925/publication_3_vvoian.png",
  //   link: "https://coursera.org/share/e7b74495200c30efc3f31c9ba34a0d2a",
  //   ctaText: "Know More",
  // },
];

const Portfolio = () => {
  return (
    <section
      id="courses"
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:py-52"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <SectionTitle
          name="COURSES/CERTIFICATIONS"
          title="My Courses"
          description="The courses from Duke University helped me understand the importance of remarkable faculties and state-of-the-art facilities. I am very thankful to Dr. Susan H. Rodger, Dr. Owen Astrachan, Dr. Andrew D. Hilton, and Dr. Robert Duvall. "
        />

        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 justify-items-center">
          {portfolioData.map((portfolio) => (
            <PortfolioCard key={portfolio.id} data={portfolio} />
          ))}
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-[175px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="inline-block font-extrabold text-gray-100 uppercase text-8xl">
          Courses
        </span>
      </div>
    </section>
  );
};

export default Portfolio;
