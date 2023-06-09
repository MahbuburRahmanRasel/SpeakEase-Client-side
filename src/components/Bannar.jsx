import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import language from "../assets/146204-translation-language.json";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <div className="carousel w-full lg:h-[600px] mt-4 bg-img-3 flex flex-col  md:flex-row  justify-between p-20">
        <div data-aos="fade-right" className="w-1/2  text-center ">
          <div className=" mx-auto">
            <h1 className="text-neutral-50 text-5xl font-bold  leading-snug">
              {" "}
              Learn a New Language and Explore a New Culture
              <br />
              <span className="text-theme-1 text-4xl  ">
                <Typewriter
                  words={["Summer Camp for Global Kid"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-neutral-50 text-xl font-bold mt-9 ">
              Our language learning camps are the perfect way to immerse
              yourself in a new language and culture. With our experienced staff
              and fun activities, you will be speaking like a native in no time!
            </p>
          </div>
        </div>

        <div className="w-1/2">
          <Lottie
            animationData={language}
            className="  "
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
