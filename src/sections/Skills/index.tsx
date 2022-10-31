import Card from "@components/Cards";
import SectionTitle from "@components/SectionTitle";
import { SkillsInterface } from "@interfaces/SkillsInterface";
import { skillsData } from "@utils/data";
import React from "react";

const Skills = () => {
  return (
    <section
      id="olympiads"
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:py-32"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <SectionTitle name="OLYMPIADS" title="Here Are My Olympiads' Stats" />
        <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2">
          {skillsData?.map((skill: SkillsInterface) => (
            <Card
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              link={skill.btnLink}
            />
          ))}
        </div>
      </div>
      <div className="absolute -rotate-90 -right-[230px] select-none hidden lg:inline-block">
        <h4 className="font-extrabold uppercase text-8xl text-sideText">
          Olympiads
        </h4>
      </div>
    </section>
  );
};

export default Skills;
