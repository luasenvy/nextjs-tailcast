"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { CheckArrowIcon } from "@/components/Icons/CheckArrowIcon";

import feature5 from "@/public/images/feature5.webp";
import feature6 from "@/public/images/feature6.webp";

export function Features2() {
  return (
    <section className="mt-12 mb-12 w-full bg-dark2 pt-4 sm:mt-24 lg:my-20 lg:mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pr-16 xl:pl-16 2xl:w-[1450px]">
          <div className="lg:-mx-4 order-last mx-auto flex w-11/12 flex-wrap justify-center sm:w-3/4 sm:pr-8 lg:order-first lg:w-1/2">
            <div className="mb-8 flex w-full flex-col justify-center px-2 md:pl-8 lg:mb-0 lg:pl-16">
              <div className="mb-4 rounded-sm py-3 md:pr-20 md:pl-3 lg:pr-12">
                <Image
                  src={feature5}
                  alt="Feature image 5"
                  className="main-border-gray rounded-xl"
                />
              </div>
              <div className="rounded-sm py-3 md:pr-2 md:pl-20 lg:pl-12">
                <Image
                  src={feature6}
                  alt="Feature image 6"
                  className="main-border-gray rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mb-12 w-full lg:mb-0 lg:w-1/2 xl:pl-8">
            <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto lg:w-unset">
              <span className="block-subtitle">Make Data-Driven Decisions</span>
              <h2 className="block-big-title mt-6 mb-8 text-4xl lg:text-5xl">
                Issue tracking you’ll enjoy using
              </h2>
              <p className="mb-12 text-text-secondary leading-loose">
                Monitor and track data issues with ease using our intuitive and efficient issue
                tracking system. Stay ahead of potential problems and improve your workflow.
              </p>
              <ul className="mb-6 text-text-primary">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Collaborative environment</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Smart issue categorization</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Customizable notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
