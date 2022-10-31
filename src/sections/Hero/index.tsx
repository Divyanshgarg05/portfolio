import { useStateContext } from "@contexts/ContextProvider";
import { AboutInterface } from "@interfaces/AboutInterface";
import { AboutData, profile } from "@utils/data";
import React from "react";

const Hero = () => {
  const { isMobile } = useStateContext();
  return (
    <section
      id={!isMobile ? "home" : ""}
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:min-h-screen lg:py-0"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <h1 className="text-5xl font-bold">{profile.name}</h1>
        <p className="text-sm text-primary">Intro here</p>
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-8 gap-y-2">
          {AboutData.map((about: AboutInterface) => (
            <p key={about.key}>
              <span className="font-bold">{about.key}:</span>&nbsp;
              {about.link ? (
                <a
                  href={about.linkTo}
                  target={!isMobile ? "_blank" : ""}
                  className="text-textPrimary hover:text-[#c57653]"
                  rel="noreferrer"
                >
                  {about.value}
                </a>
              ) : (
                <span className="text-textPrimary">{about.value}</span>
              )}
            </p>
          ))}
          <p className="col-span-1 sm:col-span-2">
            <span className="font-bold">Languages:</span>&nbsp;
            <span className="text-textPrimary">
              {profile.languages.join(", ")}
            </span>
          </p>
          <p className="col-span-1 sm:col-span-2">
            <span className="font-bold">Address:</span>&nbsp;
            <span className="text-textPrimary">{profile.address}</span>
          </p>
        </div>
        <ul className="flex items-center mt-8 space-x-6">
          {profile.social.map((social) => (
            <li key={social.id} className="icon hover:-mt-2">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute hidden -rotate-90 select-none -right-64 -z-1 lg:block"
        style={{ zIndex: -1 }}
      >
        <h4 className="font-extrabold uppercase text-9xl text-sideText">
          {profile.name.split(" ")[0]}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
