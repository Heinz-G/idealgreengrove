import React from 'react';
import { cn } from '@/lib/utils';
import { ProductType } from '@/lib/data';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const MonoTag: React.FC<TagProps> = ({ children, className }) => (
  <span
    className={cn(
      "inline-block font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-brand-gray text-brand-gray-text",
      className
    )}
  >
    {children}
  </span>
);

export const TypeTag: React.FC<{ type: ProductType }> = ({ type }) => {
  const colorMap = {
    indica: "text-strain-indica border-strain-indica",
    sativa: "text-strain-sativa border-strain-sativa",
    hybrid: "text-strain-hybrid border-strain-hybrid",
    cbd: "text-strain-cbd border-strain-cbd",
  };

  return (
    <span
      className={cn(
        "inline-block font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 border bg-transparent",
        colorMap[type]
      )}
    >
      {type}
    </span>
  );
};
