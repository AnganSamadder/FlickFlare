"use client";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const MovieGrid = ({
  items,
  className,
}: {
  items: {
    title: string;
    img: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          // href={item?.link}
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardImg src={item.img}></CardImg>
            <CardDescription>{item.description}</CardDescription>
            <CardButtons trailerLink={item.link} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-30">
        <div className="px-4 justify-center">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 text-center align-middle font-bold text-4xl tracking-wide mt-4 pb-4",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardImg = ({
  className,
  src,
  // alt,
}: {
  className?: string;
  src: string;
  // alt: string;
}) => {
  return (
    <div className="items-center">
      <img
        className={cn("rounded-2xl text-center mx-auto", className)}
        src={src}
        // alt={alt}
        width={323}
        height={404}
      />
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardButtons = ({
  className,
  trailerLink,
}: {
  className?: string;
  trailerLink: string;
}) => {
  const router = useRouter();

  return (
    <div className={cn("flex justify-center mt-8", className)}>
      <button
        className="p-[3px] relative"
        onClick={() => router.push(trailerLink)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-l-full" />
        <div className="px-8 py-2  bg-black rounded-[6px] rounded-l-full relative group transition duration-200 text-white hover:bg-transparent">
          View Trailer
        </div>
      </button>
      <div className="w-2" />
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-r-full" />
        <div className="px-8 py-2  bg-black rounded-[6px] rounded-r-full relative group transition duration-200 text-white hover:bg-transparent">
          More info
        </div>
      </button>
    </div>
  );
};
