"use client"; // Mark the file as a Client Component

import { useState } from "react";
import VideoThumb from "@/public/images/thumb-2.png";
import BlockchainThumb from "@/public/images/web3_thumbnail.jpg";
import MsalThumbnail from "@/public/images/msal_thumbnail.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  // State to handle which tab is active
  const [activeTab, setActiveTab] = useState("api-demo");

  // Tab content object for each demo video
  const tabs = {
    "api-demo": "API",
    "codebase-demo": "Codebase",
    "web3-demo": "Web3",
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              GenAI for Technical Content Creation
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Create technical content, tutorials, and onboarding courses from
                your codebase with digital humans, tailored for developers and
                teams.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/signup"
                  >
                    <span className="relative inline-flex items-center">
                      Start Generating
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://calendly.com/chiragagrawal774/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

         {/* New Heading for video tabs */}
<div className="pb-8 text-center">
  <h2
    className="text-3xl font-small bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 md:text-4xl"
    data-aos="fade-up"
  >
   Generate Tech Content with Digital Humans
  </h2>
</div>


          {/* Tabs for different demos */}
          <div className="flex justify-center space-x-6 mb-8">
            {Object.keys(tabs).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-6 py-3 text-lg rounded-full transition-all ${
                  activeTab === tabKey
                    ? "bg-indigo-600 text-white"
                    : "bg-gradient-to-b from-gray-800 to-gray-800/60 text-white-800"
                }`}
              >
                {tabs[tabKey]}
              </button>
            ))}
          </div>

          {/* Animated video content */}
          <div
            className="relative overflow-hidden"
            data-aos="fade-in"
            data-aos-duration="500"
          >
            <div className="transition-transform duration-500">
              {activeTab === "api-demo" && (
                <ModalVideo
                  thumb={VideoThumb}
                  thumbWidth={1104}
                  thumbHeight={576}
                  thumbAlt="API Demo"
                  videoUrl="https://player.elai.io/66ffd233f86d7c90e96888c5"
                  videoTitle="CrozAI API Usecase Video Demo"
                />
              )}
              {activeTab === "codebase-demo" && (
                <ModalVideo
                  thumb={MsalThumbnail}
                  thumbWidth={1104}
                  thumbHeight={576}
                  thumbAlt="Codebase Demo"
                  videoUrl="https://player.elai.io/67029454f86d7c90e970d42d"
                  videoTitle="CrozAI Codebase Explanation Video Demo"
                />
              )}
              {activeTab === "web3-demo" && (
                <ModalVideo
                  thumb={BlockchainThumb}
                  thumbWidth={1104}
                  thumbHeight={576}
                  thumbAlt="Web3 Demo"
                  videoUrl="https://player.elai.io/67059a1aa77c073ddc32195b"
                  videoTitle="CrozAI Web3 Usecase Video Demo"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
