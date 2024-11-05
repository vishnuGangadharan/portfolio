import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
  }: {
    items: {
      title: string;
      icon: string; // New icon field
    }[];
    className?: string;
  }) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    return (
      <div className="flex flex-col items-center px-4 py-10 md:mb-20 mb-0">
        <div className="flex">
        <span className="text-5xl font-bold mb-8 mr-3"> 
          My
        </span>
          <p className="text-5xl font-bold mb-8 text-cyan-400 "> Skills</p> </div>
        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full",
            className
          )}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-44 w-full"
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
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="h-20 w-20 mx-auto mb-2"
                />
                <CardTitle>{item.title}</CardTitle>
              </Card>
            </div>
          ))}
        </div>
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
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide text-center mt-4", className)}>
      {children}
    </h4>
  );
};
