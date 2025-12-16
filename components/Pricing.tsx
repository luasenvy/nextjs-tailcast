"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { CheckArrowIcon } from "@/components/Icons/CheckArrowIcon";
import { InvitationModal } from "@/components/InvitationModal";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="relative flex w-screen justify-center bg-dark2">
      <div className="absolute -top-16" id="pricing" />
      <div className="bg-dark2 pt-12 pb-20 md:w-4/5 lg:w-[1050px] 2xl:w-[1150px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="block-subtitle">Find Your Perfect Fit</span>
              <h2 className="mt-6 mb-6 font-bold font-heading text-4xl text-text-primary lg:text-5xl">
                Choose your best plan
              </h2>
              <p className="mb-6 text-text-secondary">
                Select the plan that suits your needs and benefit from our analytics tools.
              </p>
              <label className="group relative mx-auto flex h-12 w-44 cursor-pointer items-center justify-between rounded-lg bg-dark3 pr-36 pl-1 text-xl">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="flex h-8 w-[5.5rem] cursor-pointer items-center bg-dark3 pr-2 duration-300 ease-in-out after:h-10 after:w-[30rem] after:rounded-lg after:bg-primary after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem]"></span>
                <div className="absolute flex font-bold text-sm text-text-primary">
                  <div className={isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"}>Monthly</div>
                  <div className={isMonthly ? "text-gray-400" : ""}>Yearly</div>
                </div>
              </label>
            </div>
            <div className="-mx-4 mt-20 flex flex-col flex-wrap items-center lg:flex-row">
              <div className="mb-8 w-[350px] px-4 sm:w-[380px] lg:mb-0 lg:w-1/3">
                <div className="rounded-3xl bg-dark3 p-8">
                  <h3 className="mb-2 text-left font-bold font-heading text-text-primary text-xl">
                    Beginner
                  </h3>
                  <div className="flex items-end justify-start">
                    <div className="mt-4 mr-2 text-left font-bold text-4xl text-text-primary sm:text-5xl">
                      $0
                    </div>
                    <div className="text-gray-500">{isMonthly ? "/ month" : "/ year"}</div>
                  </div>
                  <p className="mt-4 mb-6 text-left text-gray-500 leading-loose 2xl:mb-10">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-2 text-text-primary 2xl:mb-6">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="contained-button mt-16 inline-block w-full rounded-xl rounded-t-xl px-4 py-2 text-center font-bold leading-loose"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="mb-8 w-[350px] px-4 sm:w-[380px] lg:mb-0 lg:w-1/3">
                <div className="rounded-3xl bg-dark3 px-8 py-8">
                  <h3 className="mb-2 text-left font-bold font-heading text-2xl text-text-primary 2xl:mb-4">
                    Standard
                  </h3>
                  <div className="flex items-end justify-start">
                    <div className="mt-4 mr-2 text-left font-bold text-4xl text-text-primary sm:text-5xl">
                      {isMonthly ? "$19" : "$180"}
                    </div>
                    <div className="text-gray-500">{isMonthly ? "/ month" : "/ year"}</div>
                  </div>
                  <p className="mt-8 mb-8 text-left text-gray-500 leading-loose 2xl:mb-12">
                    Unlock more features and elevate your data analysis.
                  </p>
                  <ul className="mb-14 text-text-primary">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="contained-button mt-20 inline-block w-full px-4 py-2 text-center leading-loose transition duration-200"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="mb-8 w-[350px] px-4 sm:w-[380px] lg:mb-0 lg:w-1/3">
                <div className="rounded-3xl bg-dark3 p-8">
                  <h3 className="mb-2 text-left font-bold font-heading text-text-primary text-xl">
                    Premium
                  </h3>
                  <div className="flex items-end justify-start">
                    <div className="mt-4 mr-2 text-left font-bold text-4xl text-text-primary sm:text-5xl">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-500">{isMonthly ? "/ month" : "/ year"}</div>
                  </div>
                  <p className="mt-4 mb-6 text-left text-gray-500 leading-loose 2xl:mb-10">
                    Experience the full power of our analytic platform
                  </p>
                  <ul className="mb-2 text-text-primary 2xl:mb-6">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="contained-button mt-16 inline-block w-full rounded-xl rounded-t-xl px-4 py-2 text-center font-bold leading-loose"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && <InvitationModal closer={() => setIsModalOpen(false)} />}
    </section>
  );
}
