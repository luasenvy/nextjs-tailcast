"use client";

import { AnimatePresence, motion } from "framer-motion";

import { CheckArrowIcon } from "@/components/Icons/CheckArrowIcon";
import { CloseIcon } from "@/components/Icons/CloseIcon";
import { TailcastLogo } from "@/components/Logos/TailcastLogo";

interface InvitationModalProps {
  closer: () => void;
}

export function InvitationModal({ closer }: InvitationModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-dark-transparent-darker"
        onClick={closer}
      >
        <div
          className="main-border-gray-darker fixed z-50 mx-auto h-screen w-full bg-dark-transparent-lighter px-8 py-12 backdrop-blur-xl sm:mb-8 sm:h-auto sm:w-3/4 sm:rounded-2xl sm:px-16 md:w-3/5 lg:w-[1000px] xl:w-[1100px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex">
            <div className="hidden w-1/2 lg:inline">
              <h2 className="mt-6 mb-2 font-bold text-5xl text-text-primary tracking-normal">
                Subscribe Now
              </h2>
              <h2 className="font-bold text-5xl text-secondary tracking-normal">
                Winter is coming
              </h2>

              <ul className="mt-12 mb-6 text-text-primary">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Vestibulum viverra</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Morbi mollis metus pretium</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Etiam lectus nunc, commodo</span>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-center justify-center pt-24 sm:pt-0 lg:w-1/2">
              <div className="mb-8 inline flex grow basis-0 items-center justify-start pr-6 lg:hidden">
                <div className="mr-2 text-8xl text-white">
                  <TailcastLogo />
                </div>
                <div className="font-['Inter'] font-bold text-3xl text-white">Tailcast</div>
              </div>

              <h3 className="mb-7 text-center font-bold text-2xl text-text-primary leading-snug">
                Join 3,953 other developers
              </h3>
              <div className="-m-2 flex flex-wrap">
                <div className="mx-auto w-full p-2 sm:w-4/5">
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-300 px-4 py-4 text-center font-medium text-gray-500 placeholder-gray-500 outline-none focus:ring focus:ring-indigo-300"
                    id="newsletterInput3-1"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mx-auto mt-4 w-full p-2 sm:w-4/5">
                  <button
                    className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-text-primary shadow-4xl transition duration-200 ease-in-out hover:bg-[#7274f3] focus:ring focus:ring-indigo-300"
                    type="button"
                    aria-label="Join now"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="fixed top-6 right-6 z-50 h-5 w-5 cursor-pointer text-[rgb(255,255,255,0.7)] transition hover:text-white"
              onClick={closer}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
