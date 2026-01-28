// NOTE: This component has been refactored to remove framer-motion.
// By removing the "use client" directive and motion logic, any component
// using AnimatedSection can now be a Server Component, improving performance.

export function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export function AnimatedItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
