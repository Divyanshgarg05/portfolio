import SectionTitle from "@components/SectionTitle";
import React from "react";

type Props = {};

const ExtraActivities = (props: Props) => {
  return (
    <section
      id="activities"
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:min-h-screen lg:py-0"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <SectionTitle name="Outdoor Activities" />
        <div className="grid grid-cols-1 gap-4 mb-12 sm:gap-12 sm:grid-cols-2">
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p className="text-xs text-gray-400">(2012-2016)</p>
            <p>
              Been on trips to Punjab, Maharashtra, West Bengal, Sikkim, Goa,
              Kerala, Madhya Pradesh, Himachal Pradesh, and Uttarakhand
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p className="text-xs text-gray-400">(2017-2018)</p>
            <p>
              Certificate of Participation in the Adventure Capsule Program
              (2-day camping trip in Himalayan Ranges), organized by{" "}
              <a
                href="https://rocksport.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bluePrimary"
              >
                Great Rocksport Private Limited
              </a>
            </p>
          </div>
        </div>
        <SectionTitle name="Hobbies" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p>Reading Books</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p>Traveling</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p>Playing Badminton</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p>Exploring Computer Science</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p>Listening to Music</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-200 bg-white/75">
            <p>Volunteering / Helping Others</p>
          </div>
        </div>
      </div>
      <div
        className="absolute hidden -rotate-90 select-none -right-32 -z-1 lg:block"
        style={{ zIndex: -1 }}
      >
        <h4 className="font-extrabold uppercase text-9xl text-sideText">
          Extra
        </h4>
      </div>
    </section>
  );
};

export default ExtraActivities;
