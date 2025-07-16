"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

const FAQData = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations.",
  },
  {
    question: "How to claim your 25% discount offer?",
    answer:
      "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "How to get support for the product?",
    answer:
      "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
  },
];

interface FAQBoxProps {
  defaultOpen: boolean;
  title: string;
  content: string;
}

const FAQBox = ({ defaultOpen, title, content }: FAQBoxProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="main-border-gray-darker relative mb-4 cursor-pointer rounded-3xl bg-dark3 px-3 pt-2 pb-2 transition hover:bg-dark3-hover sm:px-8 sm:pt-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col items-start justify-center p-2">
        <h3 className=" pt-3 pr-8 content-title sm:pt-0 sm:pr-0">{title}</h3>
        <p
          className={cn("overflow-hidden pt-4 text-text-secondary transition-height duration-300", {
            "max-h-96": isOpen,
            "max-h-0": !isOpen,
          })}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("transition-all duration-300", {
            "rotate-[180deg]": isOpen,
            "rotate-[90deg]": !isOpen,
          })}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export function FAQ() {
  return (
    <section className="-mt-8 relative overflow-hidden bg-blueGray-50 pt-12 pb-16 sm:mt-0 sm:pt-16">
      <div className="-top-10 absolute" id="FAQ" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container relative z-10 mx-auto w-11/12 px-2 sm:w-full sm:px-8 lg:px-4">
          <div className="mx-auto md:max-w-4xl">
            <p className="block-subtitle mb-7 text-center">Have any questions?</p>
            <h2 className="block-big-title mb-16 text-center">Frequently Asked Questions</h2>
            <div className="-m-1 mb-11 flex flex-wrap">
              {FAQData.map((item, index) => (
                <div className="w-full p-1" key={`${item.question}-${index}`}>
                  <FAQBox
                    title={item.question}
                    content={item.answer}
                    key={`${item.question}-${item.answer}`}
                    defaultOpen={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
