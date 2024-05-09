'use client';
import { motion } from 'framer-motion';

export default function Transition({
  children,
  state,
}: {
  children: React.ReactNode;
  state: number;
}) {
  return (
    <motion.div
      key={state}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
