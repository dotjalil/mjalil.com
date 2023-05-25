import Link from "next/link";
import Image from "next/image";
import downloadIcon from "../../public/download.svg";
import emailIcon from "../../public/email.svg";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  const [animated, setAnimated] = useState(false);

  return (
    <section id="hero-section" className="flex flex-col gap-6 lg:gap-16 py-28">
      <p className="font-videotype">
        0 <span className="text-whitebc">/ 2</span>
      </p>

      {!props.animated && (
        <h1
          className={`${
            animated ? "after-animation" : "before-animation"
          } font-videotype text-3xl sm:text-4xl lg:text-7xl leading-tight intro-title`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "My name is Mo. I’m a full stack JavaScript developer."
                )
                .start()
                .callFunction((instance) => {
                  instance.elements.cursor.style.display = "none";
                  props.stopAnimation();
                  setAnimated(true);
                });
            }}
            options={{ delay: 40 }}
          />
        </h1>
      )}
      {props.animated && (
        <h1 className="font-videotype text-3xl sm:text-4xl lg:text-7xl leading-tight intro-title">
          My name is Mo. I’m a full stack JavaScript developer.
        </h1>
      )}

      <div className="flex justify-between flex-col gap-[45px] items-start sm:flex-row sm:gap-0 sm:items-center">
        <p className="max-w-3xl text-white94">
          With a passion for creating dynamic and engaging web experiences. I am
          committed to delivering high-quality solutions that meet the needs of
          my clients. I look forward to bringing my expertise and creativity to
          your next project.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] mr-10 hidden md:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </div>
      <div className="flex gap-3 lg:gap-7">
        <Link
          className="w-[198px] h-16 flex items-center justify-center h-full py-4 lg:py-5 bg-[#E3E3E3] text-[#3A3A3A] border rounded-lg border-gray-200 text-base gap-4"
          target="_blank"
          href="https://drive.google.com/file/d/1xUhJ6FxSVxMa5AAD5rkZkVR-eVv2EM-R/view?usp=sharing"
        >
          Download CV
          <Image
            src={downloadIcon}
            alt="download icon"
            width={24}
            height={24}
          />
        </Link>
        <Link
          className="w-[198px] h-16 flex items-center justify-center h-full py-4 lg:py-5 bg-[#3A3A3A] text-[#E3E3E3] border rounded-lg border-[#3A3A3A] text-base gap-4"
          href="mailto:mo@mjalil.com"
        >
          Contact Me
          <Image src={emailIcon} alt="download icon" width={24} height={24} />
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[30px] mr-10 block md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
        />
      </svg>
    </section>
  );
};

export default Hero;
