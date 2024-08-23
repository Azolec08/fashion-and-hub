"use client";

import { AuroraBackground } from "@/shared/components/ui/aurora-background";
import { FlipWords } from "@/shared/components/ui/flip-words";
import { motion } from "framer-motion";
import Image from "next/image";
export function HomeHero() {
  const words = ["Soon", "Stylish", "Trendy", "Tasty", "Modern", "Savory"];
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative  flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="h-[150px]">
            <Image
              src="/logo3.webp"
              height={130}
              width={130}
              alt="logo"
              className="rounded-full"
            />
          </div>
          <div className="flex items-center flex-col">
            <div className="text-3xl text-violet-500 md:text-7xl font-bold dark:text-white text-center">
              Food and Fashion Hub
            </div>
            <div className="text-3xl flex font-bold md:text-4xl dark:text-neutral-200 py-4">
              Coming
              <span className=" w-[100px]">
                <FlipWords words={words} />
              </span>
            </div>

            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              See more
            </button>
          </div>
          <div className="h-[150px] flex items-end">
            &copy; 2024 Food and Fashion Hub
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
