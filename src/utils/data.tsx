import { AboutInterface } from "@interfaces/AboutInterface";
import { AcademicsInterface } from "@interfaces/AcademicsInterface";
import { iconProps } from "@interfaces/IconProps";
import { SkillsInterface } from "@interfaces/SkillsInterface";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const profile = {
  name: "Divyansh Garg",
  age: 17,
  email: "divyanshdg05@gmail.com",
  phone: "+91 81144 96883",
  address: "A-221, Malviya Nagar, Jaipur, Rajasthan.",
  country: "India",
  website: "https://divyanshcodes.com",
  languages: ["English", "Hindi"],
  image:
    "https://res.cloudinary.com/manavkaushal/image/upload/v1667202987/profile_pic_graumu.jpg",
  social: [
    {
      id: 1,
      title: "facebook",
      link: "https://www.facebook.com/mansi.singla.391",
      icon: <FaFacebookF {...iconProps} style={{ color: "#4267B2" }} />,
    },
    {
      id: 2,
      title: "linkedIn",
      link: "https://www.linkedin.com/in/maansi-aggarwal-03a1271b8/",
      icon: <FaLinkedinIn {...iconProps} style={{ color: "#0072b1" }} />,
    },
    {
      id: 3,
      title: "instagram",
      link: "https://www.instagram.com/maansingla/",
      icon: <FaInstagram {...iconProps} style={{ color: "#bc2a8d" }} />,
    },
  ],
};

export const menuItems = [
  { id: 1, title: "Home", triggerBy: "home" },
  // { id: 2, title: "Research", triggerBy: "research" },
  { id: 3, title: "Academics", triggerBy: "academics" },
  { id: 4, title: "Olympiads", triggerBy: "olympiads" },
  { id: 5, title: "Courses", triggerBy: "courses" },
  { id: 6, title: "Experience", triggerBy: "experience" },
  { id: 6, title: "Activities", triggerBy: "activities" },
  { id: 7, title: "Contact", triggerBy: "contact" },
];

export const AboutData: AboutInterface[] = [
  { key: "Age", value: profile.age },
  {
    key: "Phone",
    value: profile.phone,
    link: true,
    linkTo: `tel: ${profile.phone}`,
  },
  { key: "Residence", value: profile.country },
  {
    key: "Email",
    value: profile.email,
    link: true,
    linkTo: `mailTo: ${profile.email}`,
  },
];

export const academicsData: AcademicsInterface[] = [
  {
    id: 1,
    row: {
      dates: "2022-Present",
      title: "Grade 12",
      text: "Subjects: Physics, Chemistry, Mathematics, English, and Information Practices",
      organization:
        "Bharatiya Vidya Bhavan Vidyashram, Sector-26, Pratap Nagar, Jaipur.",
    },
  },
  {
    id: 2,
    row: {
      dates: "2021-2022",
      title: "Grade 11",
      percentage: 81,
      organization:
        "Bharatiya Vidya Bhavan Vidyashram, Sector-26, Pratap Nagar, Jaipur.",
    },
  },
  {
    id: 3,
    row: {
      dates: "2020-2021",
      title: "Grade 10",
      percentage: 89,
      organization:
        "Bharatiya Vidya Bhavan Vidyashram, Sector-26, Pratap Nagar, Jaipur.",
    },
  },
];

export const skillsData: SkillsInterface[] = [
  {
    id: 1,
    icon: null,
    title: "National Level Science Talent Search Examination (NSTSE)",
    description: (
      <p>
        <ul className="pl-4 list-disc">
          <li>Organized by the Unified Council</li>
          <li>In 2017 secured</li>
          <ul className="pl-4 list-decimal">
            <li>
              <b>481</b> state rank (Rajasthan)
            </li>
            <li>
              <b>5738/1,000,000+</b> Physics
            </li>
            <li>
              <b>11,583/1,000,000+</b> overall (Mathematics, Physics, Chemistry,
              Biology, General Questions)
            </li>
          </ul>
        </ul>
      </p>
    ),
    btnText: "",
    btnLink: "",
  },
  {
    id: 2,
    icon: null,
    title: "International Mathematics Olympiad (IMO)",
    description: (
      <p>
        <ul className="pl-4 list-disc">
          <li>Organized by the Science Olympiad Foundation</li>
          <li>Received appreciation certificate for years:</li>
          <ul className="pl-4 list-decimal">
            <li>November - December 2015</li>
            <li>December 2014</li>
            <li>December 2013</li>
          </ul>
        </ul>
      </p>
    ),
    btnText: "",
    btnLink: "",
  },
  {
    id: 3,
    icon: null,
    title: "National Science Olympiad (NSO)",
    description: (
      <p>
        <ul className="pl-4 list-disc">
          <li>Organized by the Science Olympiad Foundation</li>
          <li>Received appreciation certificate for years:</li>
          <ul className="pl-4 list-decimal">
            <li>November 2016</li>
            <li>October - November 2015</li>
            <li>December 2013</li>
          </ul>
        </ul>
      </p>
    ),
    btnText: "",
    btnLink: "",
  },
  {
    id: 4,
    icon: null,
    title: "International English Olympiad (IEO)",
    description: (
      <p>
        <ul className="pl-4 list-disc">
          <li>Organized by the Science Olympiad Foundation</li>
          <li>Received appreciation certificate for years:</li>
          <ul className="pl-4 list-decimal">
            <li>January 2017</li>
            <li>January 2016</li>
          </ul>
        </ul>
      </p>
    ),
    btnText: "",
    btnLink: "",
  },
  {
    id: 5,
    icon: null,
    title: "National Astronomy and Science Olympiad (NASO)",
    description: (
      <p>
        <ul className="pl-4 list-disc">
          <li>Organized by the NAVARS EDUTECH in 9 countries</li>
          <li>Received appreciation certificate for years:</li>
          <ul className="pl-4 list-decimal">
            <li>2017-2018</li>
          </ul>
        </ul>
      </p>
    ),
    btnText: "",
    btnLink: "",
  },
];
