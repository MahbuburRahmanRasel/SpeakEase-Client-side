import React, { useEffect, useState } from "react";

import ModalVideo from "react-modal-video";
import "../../../src/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className=" mx-auto text-center ">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="eiwToWhlkWM"
        onClose={() => setOpen(false)}
      />
      <img
        src="https://i.ibb.co/xXYVqsV/divider.png"
        alt=""
        className="mx-auto my-10"
      />

      <div className=" bg-img-4 p-10 ">
        <div data-aos="fade-left" className="my-container">
          <h1 className="text-center text-neutral-50 text-4xl font-bold">
            We are thrilled to host an upcoming
            <br />
            <span className="text-theme-1 ">language Classes</span>
          </h1>
          <p className="text-neutral-50 text-center text-lg my-5">
            I encourage you to do your research and find a camp that is a good
            fit for your kid needs and interests
          </p>
        </div>
       <div>
       <img
          src="https://i.ibb.co/hWBH3mM/Black-and-Red-Futuristic-Tech-Review-Youtube-Banner-1.png"
          alt=""
          data-aos="fade-right"
          className="w-1/2 mx-auto cursor-pointer mb-5"
          onClick={() => setOpen(true)}
        />
       </div>
      </div>
    </div>
  );
};

export default VideoSection;
