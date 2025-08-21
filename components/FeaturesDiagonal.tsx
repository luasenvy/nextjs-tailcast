"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { InvitationModal } from "@/components/InvitationModal";

import featuresdiagonal from "@/public/images/featuresdiagonal.webp";

export function FeaturesDiagonal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex w-full flex-col items-center justify-center bg-dark1 lg:mb-16">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-dark2 fill-dark2"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="bg-dark1 fill-dark1"></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mx-auto flex flex-col justify-center bg-dark1 pt-12 pb-8 md:w-4/5 lg:flex-row lg:pt-24 lg:pb-20 xl:w-[1050px] 2xl:w-[1150px]">
          <div className="mx-auto flex w-3/4 flex-col lg:mx-unset lg:w-1/2">
            <span className="block-subtitle">Accelerate Your Success</span>
            <h2 className="block-big-title mt-10 mb-8 text-4xl lg:text-5xl">
              Build &amp; Launch without problems
            </h2>
            <p className="mb-16 text-text-secondary leading-loose">
              Our platform enables you to launch your data-driven projects with ease. Boost
              productivity and achieve better results. Empower your decision-making with advanced
              analytics
            </p>
            <button
              className="contained-button mr-10 h-12 w-[210px]"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
          </div>
          <div className="mx-auto flex w-4/5 justify-center pt-16 lg:w-1/2 lg:pt-0 lg:pl-16">
            <Image
              src={featuresdiagonal}
              alt="Feature image"
              className="main-border-gray rounded-xl"
            />
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-dark2 fill-dark2"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="bg-dark1 fill-dark1"></path>
        </svg>
      </div>
      {isModalOpen && <InvitationModal closer={() => setIsModalOpen(false)} />}
    </section>
  );
}
