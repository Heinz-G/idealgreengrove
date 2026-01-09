"use client";

import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Product } from '@/lib/data';
import { ProductImage } from './ui-custom/ProductImage';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  open,
  onOpenChange,
  onAddToCart,
}) => {
  if (!product) return null;

  const typeColor =
    product.type === 'indica'
      ? 'text-strain-indica'
      : product.type === 'sativa'
      ? 'text-strain-sativa'
      : product.type === 'cbd'
      ? 'text-strain-cbd'
      : 'text-strain-hybrid';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-4xl w-[95vw] md:w-full overflow-hidden bg-white gap-0 border-none rounded-none md:rounded-lg md:flex">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative bg-brand-gray flex items-center justify-center p-8">
          <div className="w-3/4 h-full relative">
            <ProductImage
              type={product.type}
              category={product.category}
              name={product.name}
              className="bg-transparent drop-shadow-2xl rounded-md"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col max-h-[60vh] md:max-h-[85vh] overflow-y-auto relative">
          {/* Scrollable Content */}
          <div className="p-6 flex-grow">
            {/* Type Header */}
            <div className={cn("font-mono text-sm mb-2 flex items-center capitalize", typeColor)}>
              {product.type} <span className="ml-1 text-lg">☽</span>
            </div>

            {/* Title & Brand */}
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark leading-tight mb-1">
              {product.name}
            </h2>
            <p className="font-mono text-brand-gray-text text-sm underline mb-4">
              {product.brand}
            </p>

            {/* Price */}
            <div className="font-sans font-bold text-2xl text-brand-dark mb-6">
              R {product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="font-mono text-sm text-brand-dark leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="font-mono text-xs italic text-brand-gray-text mb-4">
              {product.size}
            </p>

            {/* THC/CBD Info */}
            {(product.thc || product.cbd) && (
              <div className="flex gap-4 mb-6">
                {product.thc && (
                  <div className="border border-gray-200 rounded px-4 py-2 text-center">
                    <p className="font-mono text-xs text-brand-gray-text">THC</p>
                    <p className="font-sans font-bold text-brand-dark">{product.thc.replace(' THC', '').replace('% THC', '%')}</p>
                  </div>
                )}
                {product.cbd && (
                  <div className="border border-gray-200 rounded px-4 py-2 text-center">
                    <p className="font-mono text-xs text-brand-gray-text">CBD</p>
                    <p className="font-sans font-bold text-brand-dark">{product.cbd}</p>
                  </div>
                )}
              </div>
            )}

            {/* Effects */}
            {product.effects && product.effects.length > 0 && (
              <div>
                <h3 className="font-sans font-bold text-base mb-3">Effects</h3>
                <div className="flex flex-wrap gap-2">
                  {product.effects.map((effect) => (
                    <span
                      key={effect}
                      className="font-mono text-xs bg-brand-dark text-white px-3 py-1.5 lowercase"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="h-24"></div>
          </div>

          {/* Sticky Bottom Button */}
          <div className="sticky bottom-0 left-0 w-full p-0">
            <Button
              className="w-full rounded-none bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-sans font-bold h-16 flex justify-between items-center px-6"
              onClick={() => {
                onAddToCart(product);
                onOpenChange(false);
              }}
            >
              <div className="flex flex-col items-start">
                <span className="text-sm">ADD TO BAG</span>
                <span>R {product.price.toFixed(2)}</span>
              </div>
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
