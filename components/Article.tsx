import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

export interface ArticleData {
  title: string;
  subtitle: string;
  date: string;
  image: StaticImageData;
  content: string;
  footer: string;
}

export interface ArticleProps {
  articleData: ArticleData;
}

export function Article({ articleData }: ArticleProps) {
  const { title, subtitle, date, image, content, footer } = articleData;
  return (
    <div className="relative flex justify-center bg-dark2 pt-2">
      <div className="px-2 sm:px-4">
        <article className="mt-16 mb-24 w-full rounded-3xl p-8 text-center sm:mt-24 lg:w-[1200px] 2xl:w-[1400px]">
          <header className="mb-12">
            <div className="my-4 text-sm text-text-secondary">{date}</div>
            <h1 className="mb-4 font-bold text-[2rem] text-text-primary xs:text-[2.8rem] lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="mb-4 text-lg text-text-secondary">{subtitle}</p>
          </header>
          <Image
            src={image}
            alt={title}
            className="mx-auto mt-8 mb-8 w-10/12 rounded-3xl md:w-3/4"
            aria-label={title}
          />
          <section
            className="!leading-8 sm:!leading-10 mx-auto mt-16 w-full text-left text-text-secondary sm:text-justify sm:text-xl md:w-10/12 lg:w-2/3"
            aria-labelledby="content-title"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mx-auto mt-8 w-4/5 text-right text-text-primary text-xl lg:w-2/3">
            {footer}
          </div>
        </article>
      </div>
    </div>
  );
}
