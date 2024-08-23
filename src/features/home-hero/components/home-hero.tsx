"use client";

import { AuroraBackground } from "@/shared/components/ui/aurora-background";
import { motion } from "framer-motion";

export function HomeHero() {
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
          <div className="h-[100px]"></div>
          <div className="flex items-center flex-col">
            <div className="text-3xl text-violet-500 md:text-7xl font-bold dark:text-white text-center">
              Food and Fashion Hub
            </div>
            <div className="text-3xl font-bold md:text-4xl dark:text-neutral-200 py-4">
              Coming Soon
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              See more
            </button>
          </div>
          <div className="h-[200px] flex items-end">
            &copy; Food and Fashion Hub
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
