import Link from "next/link";

import { FacebookIcon } from "@/components/Icons/FacebookIcon";
import { InstagramIcon } from "@/components/Icons/InstagramIcon";
import { TwitterIcon } from "@/components/Icons/TwitterIcon";
import { TailcastLogo } from "@/components/Logos/TailcastLogo";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="radius-for-skewed bg-dark1 pt-10 lg:pt-20 lg:pb-16">
        <div className="container mx-auto w-4/5 px-4 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="mb-16 w-full lg:mb-0 lg:w-1/3">
              <div className="flex grow basis-0 items-center justify-center lg:justify-start">
                <div className="mr-2 text-6xl text-white">
                  <TailcastLogo />
                </div>
                <div className="font-['Inter'] font-bold text-white text-xl">Tailcast</div>
              </div>
              <p className="mx-auto mt-4 mb-10 text-center text-gray-400 leading-loose sm:w-[22rem] lg:mx-0 lg:w-[20rem] lg:text-left xl:w-[24rem]">
                Dashboard images were made using free Dark Admin dashboard that you can find
                <Link
                  href="https://bootstrapious.com/p/bootstrap-4-dark-admin"
                  target="_blank"
                  className="ml-1.5 text-gray-100 "
                  aria-label="Dark Admin Dashboard"
                >
                  here.
                </Link>
              </p>
              <div className="mx-auto w-36 lg:mx-0">
                <Link
                  className="outlined-button mr-2 inline-block h-10 w-10 p-2 pt-[0.55rem]"
                  href="#"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  className="outlined-button mr-2 inline-block h-10 w-10 p-2 pt-[0.55rem] pl-[0.55rem]"
                  href="#"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </Link>
                <Link
                  className="outlined-button mr-2 inline-block h-10 w-10 p-2 pt-[0.55rem] pl-[0.55rem]"
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </Link>
              </div>
            </div>
            <div className="hidden w-full flex-wrap justify-between lg:flex lg:w-2/3 lg:pl-16">
              <div className="mb-16 w-full md:mb-0 md:w-1/3 lg:w-auto">
                <h3 className="mb-6 font-bold text-2xl text-text-primary">Products</h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <Link
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-16 w-full md:mb-0 md:w-1/3 lg:w-auto">
                <h3 className="mb-6 font-bold text-2xl text-text-primary">Important Links</h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <Link
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 font-bold text-2xl text-text-primary">Company</h3>
                <ul>
                  {footerData[2].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <Link
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
