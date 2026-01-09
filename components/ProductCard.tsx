"use client";

import React, { useState } from 'react';
import { Product } from '@/lib/data';
import { MonoTag, TypeTag } from './ui-custom/ProductTags';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import ProductModal from './ProductModal';
import { ProductImage } from './ui-custom/ProductImage';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full relative group">
        {/* Image Container - Click triggers modal */}
        <div
          className="relative bg-brand-gray aspect-square p-4 mb-3 cursor-pointer overflow-hidden rounded-sm"
          onClick={() => setIsModalOpen(true)}
        >
          <ProductImage
            type={product.type}
            category={product.category}
            name={product.name}
            className="transition-transform duration-300 group-hover:scale-105"
          />

          {/* Quick View Overlay (Desktop) */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
            <span className="font-mono text-white text-xs bg-black/60 px-3 py-1">
              Quick View
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-1 mb-1 flex-wrap">
          <TypeTag type={product.type} />
          <MonoTag>{product.size}</MonoTag>
        </div>

        {/* THC Info */}
        {product.thc && (
          <p className="font-mono text-[10px] text-brand-gray-text mb-1">
            {product.thc}
          </p>
        )}

        {/* Brand & Name */}
        <p className="font-mono text-xs text-brand-gray-text mb-1 truncate">
          {product.brand}
        </p>
        <h3
          className="font-sans font-bold text-brand-dark text-[15px] leading-tight mb-3 line-clamp-2 flex-grow cursor-pointer hover:text-brand-gray-text transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          {product.name}
        </h3>

        {/* Price Button */}
        <Button
          className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-sans font-bold flex justify-between items-center rounded-sm h-11 px-4 mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          <span>R {product.price.toFixed(2)}</span>
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <ProductModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        product={product}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default ProductCard;
