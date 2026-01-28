'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Default stagger
    },
  },
};

export function AnimatedSection({
  children,
  className,
  stagger,
}: AnimatedSectionProps) {
  const visibleVariant = stagger
    ? { ...sectionVariants.visible, transition: { staggerChildren: stagger } }
    : sectionVariants.visible;

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: visibleVariant,
      }}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  el?: 'div' | 'h1' | 'p' | 'span';
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function AnimatedItem({
  children,
  className,
  el = 'div',
}: AnimatedItemProps) {
  const Component = motion[el];
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
