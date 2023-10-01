import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between w-full mb-10 pt-3 items-center">
        <img src={logo} alt="Sumz_Logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/Nakulbr/ai_summarizer.git");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize an open-source article summarizer
        that transforms lengthy articles into clear and consise summaries
      </h2>
    </header>
  );
};

export default Hero;
