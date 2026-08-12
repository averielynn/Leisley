"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-stone-50">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Taste ID
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Your taste, made visible.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-300">
          A fresh Next.js foundation with TypeScript, Tailwind CSS, and Framer
          Motion—ready for what comes next.
        </p>
      </motion.section>
    </main>
  );
}
