"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
