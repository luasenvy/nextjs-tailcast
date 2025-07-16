"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import Link from "next/link";

import blog1 from "@/public/images/blog1.webp";
import blog2 from "@/public/images/blog2.webp";
import blog3 from "@/public/images/blog3.webp";

const blogData = [
  {
    title: "AI and Machine Learning",
    subtitle:
      "Discover insights and trends in the world of data analytics. Delve into how AI and machine learning are revolutionizing industries",
    image: blog1,
  },
  {
    title: "Data-Driven Analytics",
    subtitle: "Explore the impact of AI and ML on data analytics.",
    image: blog2,
  },
  {
    title: "Real-Time Data Processing",
    subtitle: "Learn about the importance of processing real-time.",
    image: blog3,
  },
];

export function Blog() {
  return (
    <section className="relative flex w-screen justify-center bg-dark2">
      <div className="-top-16 absolute" id="blog" />
      <div className="bg-dark2 pt-4 pb-0 lg:w-[1000px] xl:w-[1150px] 2xl:w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mb-20 px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center lg:mr-0 lg:ml-0 lg:text-left">
              <span className="block-subtitle">Our Blog</span>
              <h2 className="mt-6 mb-6 font-bold font-heading text-4xl text-text-primary lg:text-5xl">
                Latest Insights
              </h2>
              <p className="mb-6 text-text-secondary">
                Stay updated with the latest trends and insights in our industry.
              </p>
            </div>
            <div className="-mx-4 flex h-auto flex-wrap items-start sm:h-[30rem] lg:h-[31rem] lg:w-[1000px] xl:h-[35rem] xl:w-[1150px] 2xl:w-[1200px]">
              <div className="mx-auto mb-8 flex h-full w-11/12 px-4 sm:mr-0 sm:ml-0 sm:hidden lg:mb-0 lg:flex lg:w-1/2 xl:w-3/5">
                <Link href="/blog/article">
                  <div className="h-full cursor-pointer rounded-3xl bg-dark3 p-6 transition hover:bg-dark3-hover sm:p-10">
                    <Image
                      src={blogData[0].image}
                      alt={blogData[0].title}
                      className="mb-6 w-full rounded-3xl"
                      aria-label={blogData[0].title}
                    />
                    <h3 className="mb-4 font-bold font-heading text-2xl text-text-primary">
                      {blogData[0].title}
                    </h3>
                    <p className="text-text-secondary leading-loose">{blogData[0].subtitle}</p>
                  </div>
                </Link>
              </div>
              <div className="mx-auto hidden h-full w-11/12 flex-col justify-between px-4 sm:flex sm:w-4/5 lg:mr-0 lg:ml-0 lg:w-1/2 xl:w-2/5">
                {blogData.slice(1).map((post, index) => (
                  <Link
                    href="/blog/article"
                    key={`${post.title}-${index}`}
                    className=" flex h-[47%] cursor-pointer gap-4 rounded-3xl bg-dark3 p-10 transition hover:bg-dark3-hover"
                  >
                    <div className="pt-2">
                      <h3 className="mb-4 font-bold font-heading text-text-primary text-xl">
                        {post.title}
                      </h3>
                      <p className="text-text-secondary leading-loose">{post.subtitle}</p>
                    </div>
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="mb-6 h-[9rem] w-[9rem] rounded-3xl lg:h-auto lg:w-auto xl:w-full"
                      aria-label={post.title}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
