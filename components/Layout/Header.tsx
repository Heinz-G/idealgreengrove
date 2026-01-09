"use client";

import React from 'react';
import { MapPin, Search, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Category, categoryNames } from '@/lib/data';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  activeCategory: Category | 'all' | 'sale';
  onCategoryChange: (category: Category | 'all' | 'sale') => void;
}

const categories: (Category | 'all' | 'sale')[] = [
  'all',
  'sale',
  'flower',
  'prerolls',
  'vapes',
  'edibles',
  'concentrates',
  'wellness',
  'drinks',
];

const Header: React.FC<HeaderProps> = ({
  cartCount,
  onCartClick,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Address Bar */}
      <div className="flex items-center px-4 py-2 border-b border-gray-100 bg-white">
        <MapPin className="h-4 w-4 mr-2 text-brand-dark" />
        <span className="font-mono text-sm text-brand-gray-text">
          Delivering across South Africa
        </span>
      </div>

      {/* Main Nav Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden -ml-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 mt-8 font-mono uppercase">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`text-xl text-left ${
                    activeCategory === cat ? 'font-bold text-brand-dark' : 'text-brand-gray-text'
                  }`}
                >
                  {cat === 'all' ? 'All Products' : cat === 'sale' ? 'Sale' : categoryNames[cat as Category]}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-brand-dark absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mr-8">
          <span className="text-strain-hybrid">ideal</span>greengrove
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-4 flex-grow font-mono text-[11px] uppercase tracking-wider font-bold overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-2 lg:px-3 py-1 whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? cat === 'sale'
                    ? 'bg-brand-yellow text-brand-dark'
                    : 'border-b-2 border-brand-dark text-brand-dark'
                  : 'text-brand-gray-text hover:text-brand-dark'
              }`}
            >
              {cat === 'all' ? 'Home' : cat === 'sale' ? 'Sale' : categoryNames[cat as Category]}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2 -mr-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-brand-yellow text-brand-dark text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
