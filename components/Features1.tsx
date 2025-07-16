"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { CheckArrowIcon } from "@/components/Icons/CheckArrowIcon";

import feature1 from "@/public/images/feature1.webp";
import feature2 from "@/public/images/feature2.webp";
import feature3 from "@/public/images/feature3.webp";
import feature4 from "@/public/images/feature4.webp";

export function Features1() {
  return (
    <section
      className="-mt-8 sm:-mt-8 xl:-mt-8 mb-8 w-full bg-dark2 pt-24 sm:mb-24 md:pt-[12vw] lg:pt-16 2xl:mt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pr-16 xl:pl-16 2xl:w-[1450px]">
          <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
            <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto lg:w-unset">
              <span className="block-subtitle">Embrace Innovation</span>
              <h2 className="block-big-title mt-6 mb-8 text-4xl lg:text-5xl">
                Unlike any tool you used before
              </h2>
              <p className="mb-10 text-text-secondary leading-loose">
                Discover a new level of data analysis with our innovative and user-friendly
                platform. Transform your business needs with actionable insights.
              </p>
              <ul className="mb-6 text-text-primary">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Real-time data visualization</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Advanced predictive analytics</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Seamless integration with APIs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:-mx-4 mx-auto flex w-3/4 flex-wrap justify-center sm:pr-8 lg:w-1/2 lg:pt-10 lg:pl-4 xl:px-8">
            <div className="mb-8 w-full px-2 sm:w-1/2 lg:mb-0 lg:px-0">
              <div className="mb-4 rounded-sm py-3 pr-2 pl-3">
                <Image
                  src={feature1}
                  alt="Feature image 1"
                  className="main-border-gray mx-auto rounded-xl sm:mx-unset"
                  aria-label="Feature image 1"
                />
              </div>
              <div className="rounded-sm py-3 pr-2 pl-3">
                <Image
                  src={feature2}
                  alt="Feature image 2"
                  className="main-border-gray mx-auto rounded-xl sm:mx-unset"
                  aria-label="Feature image 2"
                />
              </div>
            </div>
            <div className="hidden w-1/2 px-2 pt-12 sm:inline-block lg:mt-20 lg:pt-0">
              <div className="mb-4 rounded-lg py-3 pr-2 pl-3">
                <Image
                  src={feature3}
                  alt="Feature image 3"
                  className="main-border-gray rounded-xl"
                  aria-label="Feature image 3"
                />
              </div>
              <div className="rounded-lg py-3 pr-2 pl-3">
                <Image
                  src={feature4}
                  alt="Feature image 4"
                  className="main-border-gray rounded-xl"
                  aria-label="Feature image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
