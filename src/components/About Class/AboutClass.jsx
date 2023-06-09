import React, { useEffect } from "react";
import Lottie from "lottie-react";
import option1 from "../../assets/91178-easy-to-learn.json";
import option2 from "../../assets/64508-video-meeting-video-conference.json";
import option3 from "../../assets/40650-full-conference-encounters.json";
import option4 from "../../assets/75153-business-vector.json";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutClass = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-container">
      <img
        src="https://i.ibb.co/xXYVqsV/divider.png"
        alt=""
        className="mx-auto my-10"
      />
      <h1 className="text-center text-theme-dark text-4xl font-bold">
        Come join us for our energizing
        <br />
        <span className="text-theme-1 ">foreign language classes</span>
      </h1>
      <p className="text-theme-2 text-center text-lg">
        Fun and engaging way to learn a new language, language learning camping
        in summer camp is a great option.{" "}
      </p>
      <div className="grid grid-cols-2 gap-5 mt-10 ">
        <div
          data-aos="fade-down"
          className="   my-card-1  "
        >
          <Lottie animationData={option1} className="w-36" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-theme-dark  ">
              Immersion learning
            </h3>
            <p>
              One of the best ways to learn a new language is to immerse
              yourself in it. Language learning camps provide a great
              opportunity for students to do just that.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className=" my-card-1 "
        >
          <Lottie animationData={option2} className="w-36" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-theme-dark">
              Increase cultural awareness
            </h3>
            <p>
              Learning about a new language and culture can help you to become
              more aware of the world around you. This can be a valuable asset
              in todays globalized society.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="  my-card-1"
        >
          <Lottie animationData={option3} className="w-36" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-theme-dark">
              Improve communication skills
            </h3>
            <p>
              Learning a new language can help you to improve your communication
              skills in your native language as well. This is because you will
              need to learn how to think in a different way in order to express
              yourself in a new language.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className=" my-card-1"
        >
          <Lottie animationData={option4} className="w-36" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-theme-dark">
              Boost your confidence
            </h3>
            <p>
              Learning a new language can be a challenging but rewarding
              experience. When you succeed in learning a new language, it can
              boost your confidence and self-esteem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClass;
