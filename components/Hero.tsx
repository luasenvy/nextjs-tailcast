"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { InvitationModal } from "@/components/InvitationModal";

import dashboard from "@/public/images/dashboard.webp";

export function Hero() {
  const isModalState = useState<boolean | undefined>(false);

  const [isModalOpen, setIsModalOpen] = isModalState;

  return (
    <section
      className="hero-bg-gradient mb-[28vw] flex w-screen items-center justify-center bg-dark1 pb-24 sm:pb-32 md:mb-[18vw] md:pb-44 lg:mb-[10vw] lg:pb-0 xl:mb-[13vw] 2xl:mb-60"
      id="home"
    >
      <div className="flex w-full flex-col items-center justify-center pt-16 text-center md:w-[800px] md:pt-16 lg:pt-20 xl:w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mt-16 mb-6 font-bold text-secondary text-sm sm:mt-32 sm:text-base">
            Discover new data flow
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="px-8 font-bold text-5xl text-text-primary tracking-wide sm:px-8 sm:text-6xl md:px-20 lg:px-4 lg:text-7xl xl:text-7xl">
            <h1 className="inline md:hidden">Analytics</h1>
            <h1 className="hidden md:inline">Analytic tools suite</h1>
          </div>
          <h1 className="mt-2 px-8 font-bold text-4xl text-text-primary tracking-wide sm:mt-2 sm:px-20 sm:text-6xl md:px-24 lg:px-24 lg:text-7xl xl:text-7xl">
            for developers
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mt-10 px-12 text-sm text-text-secondary sm:px-48 sm:text-base lg:text-base xl:text-lg">
            Experience seamless business integrations and powerful insights with our cutting-edge
            analytic tools.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="mt-14 mb-24 flex flex-col justify-center gap-2 sm:mb-40 sm:flex-row">
            <button
              className="contained-button mr-0 mb-2 h-12 w-64 sm:mr-4 sm:mb-0 sm:w-52 lg:mr-6"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
            <button
              className="flex h-12 w-64 cursor-pointer items-center justify-center rounded-xl border border-primary border-solid bg-dark2 font-bold text-text-primary transition hover:bg-dark3 sm:w-52"
              onClick={() => setIsModalOpen(true)}
              aria-label="Live demo"
            >
              Live demo
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative flex w-screen justify-center">
            <Image
              src={dashboard}
              alt="Dashboard image"
              className="main-border-gray hero-dashboard-border-gradient absolute z-10 mx-auto w-4/5 rounded-xl lg:top-6 xl:top-0 2xl:w-[1200px]"
            />
          </div>
        </motion.div>
        <div className="relative flex w-screen justify-center">
          <div className="shape-divider-bottom-1665343298 mt-4 hidden sm:mt-16 md:mt-52 lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-dark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-dark1 fill-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && <InvitationModal closer={() => setIsModalOpen(false)} />}
    </section>
  );
}
