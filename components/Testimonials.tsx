"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { QuoteIcon } from "@/components/Icons/QuoteIcon";
import testimonial1 from "@/public/images/testimonial1.webp";
import testimonial2 from "@/public/images/testimonial2.webp";
import testimonial3 from "@/public/images/testimonial3.webp";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial2,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
  },
];

export function Testimonials() {
  return (
    <section className="relative mb-16 flex w-full justify-center bg-dark2 pt-16 lg:mb-32">
      <div className="-top-16 absolute" id="feedback" />
      <div className="flex w-full flex-col justify-center lg:w-[1150px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="block-subtitle mb-6 text-center">Testimonials</div>
          <div className="block-big-title mb-20 px-8 text-center sm:px-24 md:px-48">
            People like you love Tailcast
          </div>

          <div className="flex flex-col items-center gap-8 px-6 lg:flex-row lg:gap-5 xl:gap-10 xl:px-0">
            {testimonialsData.map((testimonial, index) => (
              <div
                className="main-border-gray-darker flex w-11/12 flex-col rounded-xl bg-dark3 px-6 py-4 sm:w-4/5 md:w-[560px] lg:w-1/3"
                key={`${testimonial.customerName}-${index}`}
              >
                <div className="mb-2 flex">
                  <QuoteIcon />
                </div>
                <div className="content-text-white">"{testimonial.content}"</div>
                <div className="mt-4 mb-2 flex xl:mt-8 xl:mb-4">
                  <div>
                    <Image
                      src={testimonial.image}
                      alt="Customer avatar"
                      width={45}
                      height={5}
                      aria-label={testimonial.customerName}
                    />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <div className="font-medium content-text-white">{testimonial.customerName}</div>
                    <div className="content-text-gray">{testimonial.customerTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
