"use client";

import { motion } from "framer-motion";

import { AmazonLogo } from "@/components/Logos/AmazonLogo";
import { DropboxLogo } from "@/components/Logos/DropboxLogo";
import { NetflixLogo } from "@/components/Logos/NetflixLogo";
import { SlackLogo } from "@/components/Logos/SlackLogo";
import { SpotifyLogo } from "@/components/Logos/SpotifyLogo";
import { StripeLogo } from "@/components/Logos/StripeLogo";

export function Brands() {
  return (
    <section className="mb-8 w-full bg-dark1 py-12 sm:py-24 lg:mt-16 lg:mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:w-4/5 lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]">
          <div className="-mx-4 flex flex-col items-center justify-center text-center lg:flex-row lg:text-left">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="flex flex-col">
                <h2 className="mb-2 font-bold text-4xl text-text-primary tracking-normal sm:text-5xl 2xl:text-6xl">
                  Trusted by brands
                </h2>
                <h2 className=" font-bold text-4xl text-secondary tracking-normal sm:text-5xl 2xl:text-6xl">
                  all over the world
                </h2>
              </div>
            </div>
            <div className="mx-auto w-2/3 sm:w-[620px] lg:mx-0 lg:w-1/2 lg:pl-10">
              <div className="-m-4 flex flex-wrap">
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <AmazonLogo />
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <DropboxLogo />
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <NetflixLogo />
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <StripeLogo />
                </div>

                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <SpotifyLogo />
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <SlackLogo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
