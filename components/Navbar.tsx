"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { GithubIcon } from "@/components/Icons/GithubIcon";
import { TailcastLogo } from "@/components/Logos/TailcastLogo";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "Pricing", href: "/#pricing", ariaLabel: "Pricing" },
  { label: "Feedback", href: "/#feedback", ariaLabel: "Feedback" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed z-40 flex h-20 w-full flex-col items-center justify-center bg-dark1 lg:bg-dark-transparent lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="relative flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-[1280px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <Link href="/#home" aria-label="Home">
            <div className="flex grow basis-0 items-center justify-start">
              <div className="mr-2 text-6xl text-white">
                <TailcastLogo />
              </div>
              <div className="font-['Inter'] font-bold text-white text-xl">Tailcast</div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden h-full pb-2 pl-12 lg:flex">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <Link
                className="mr-4 ml-4 h-full cursor-pointer pt-2 font-normal text-2xl text-white leading-6 transition hover:scale-110 lg:font-medium lg:text-base 2xl:mr-6 2xl:ml-6"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden grow basis-0 justify-end lg:flex">
            <Link
              className="main-border-gray flex rounded-xl border-gray-700 bg-dark2 pt-2 pr-8 pb-2 pl-6 text-sm text-white hover:bg-dark3"
              href="https://github.com/luasenvy/nextjs-tailcast"
              target="_blank"
              aria-label="source code"
            >
              <GithubIcon />
              <span className="pt-px">Source code</span>
            </Link>
          </div>
        </motion.div>
        <div
          className="flex cursor-pointer flex-col rounded-md border border-gray-600 border-solid px-2 py-3 hover:bg-dark2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="mb-1 h-0.5 w-5 bg-gray-500"></div>
          <div className="mb-1 h-0.5 w-5 bg-gray-500"></div>
          <div className="h-0.5 w-5 bg-gray-500"></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-4 left-0 z-50 mt-16 flex w-full flex-col items-center gap-10 border-dark3 border-y border-solid bg-dark1 pt-10 pb-10 lg:hidden ">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <Link
                  key={href}
                  className="mr-4 ml-4 h-full cursor-pointer pt-2 font-normal text-2xl text-white leading-6 transition duration-300 hover:scale-110 lg:font-medium lg:text-base 2xl:mr-6 2xl:ml-6"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </Link>
              ))}
              <Link
                className="outlined-button flex pt-2 pr-8 pb-2 pl-6"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
