const Hero = () => {
  return (
    <section id="hero-section" className="flex flex-col gap-6 lg:gap-16 py-28">
      <p className="font-videotype">
        0 <span className="text-whitebc">/ 3</span>
      </p>
      <h1 className="font-videotype text-3xl sm:text-4xl lg:text-7xl leading-tight">
        My name is Mo. I’m a full stack JavaScript developer.
      </h1>
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
          className="w-[30px] mr-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
