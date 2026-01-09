"use client";

import { useState, useMemo } from 'react';
import Header from '@/components/Layout/Header';
import CartSidebar from '@/components/Layout/CartSidebar';
import ProductCard from '@/components/ProductCard';
import {
  products,
  Product,
  Category,
  categoryNames,
  getProductsByCategory,
} from '@/lib/data';
import { Smile, Sparkles, Leaf } from 'lucide-react';

interface CartItem {
  product: Product;
  quantity: number;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all' | 'sale'>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Filter products based on category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    if (activeCategory === 'sale') {
      return products.filter((p) => p.price < 100);
    }
    return getProductsByCategory(activeCategory);
  }, [activeCategory]);

  // Get featured products for home view
  const featuredProducts = products.slice(0, 12);
  const saleProducts = products.filter((p) => p.price < 80).slice(0, 8);

  // Cart functions
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Show category view or home view
  const showCategoryView = activeCategory !== 'all';

  return (
    <main className="min-h-screen bg-white pb-20">
      <Header
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <CartSidebar
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />

      {showCategoryView ? (
        /* Category View */
        <section className="py-8 md:py-12 max-w-[1400px] mx-auto">
          <div className="px-4 mb-6">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark">
              {activeCategory === 'sale'
                ? 'Sale Items'
                : categoryNames[activeCategory as Category]}
            </h2>
            <p className="font-mono text-sm text-brand-gray-text mt-1">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      ) : (
        /* Home View */
        <>
          {/* Deals Banner */}
          <div className="relative bg-gradient-to-r from-[#e0f2f1] via-[#c8e6c9] to-[#e0f2f1] py-4 text-center overflow-hidden">
            <Sparkles className="absolute top-2 left-4 h-6 w-6 text-brand-dark opacity-20" />
            <Leaf className="absolute bottom-2 right-12 h-6 w-6 text-brand-dark opacity-20" />
            <span className="font-sans font-bold text-brand-dark">
              Today&apos;s Deals
            </span>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-yellow rounded-full p-1.5">
              <Smile className="h-6 w-6 text-brand-dark" />
            </div>
          </div>

          {/* Featured Products Section */}
          <section className="py-8 md:py-12 max-w-[1400px] mx-auto">
            <div className="px-4 mb-6 flex justify-between items-end">
              <div>
                <h2 className="font-sans font-bold text-2xl text-brand-dark flex items-center gap-2">
                  Fresh Arrivals 🌿 Premium Selection
                </h2>
                <p className="font-mono text-xs text-brand-gray-text mt-1">
                  Top quality products from our collection
                </p>
              </div>
              <button
                onClick={() => setActiveCategory('flower')}
                className="font-mono text-sm text-brand-gray-text hidden md:block hover:text-brand-dark"
              >
                ({products.length}) →
              </button>
            </div>

            {/* Mobile: Horizontal Scroll, Desktop: Grid */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:snap-none scrollbar-hide">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[160px] md:min-w-0 snap-start h-full"
                >
                  <ProductCard product={product} onAddToCart={addToCart} />
                </div>
              ))}
            </div>
          </section>

          {/* Sale Section */}
          <section className="py-8 md:py-12 max-w-[1400px] mx-auto border-t border-gray-100">
            <div className="px-4 mb-6 flex justify-between items-end">
              <div>
                <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                  🔥 Value Picks - Budget Friendly
                </h2>
                <p className="font-mono text-xs text-brand-gray-text mt-1 leading-relaxed max-w-md">
                  Quality products at great prices
                </p>
              </div>
              <button
                onClick={() => setActiveCategory('sale')}
                className="font-mono text-sm text-brand-gray-text hidden md:block hover:text-brand-dark"
              >
                ({saleProducts.length}) →
              </button>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible md:snap-none scrollbar-hide">
              {saleProducts.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[160px] md:min-w-0 snap-start h-full"
                >
                  <ProductCard product={product} onAddToCart={addToCart} />
                </div>
              ))}
            </div>
          </section>

          {/* Categories Grid */}
          <section className="py-8 md:py-12 max-w-[1400px] mx-auto border-t border-gray-100">
            <div className="px-4 mb-6">
              <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                Shop by Category
              </h2>
            </div>

            <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {(Object.keys(categoryNames) as Category[]).map((category) => {
                const count = getProductsByCategory(category).length;
                const icons: Record<Category, string> = {
                  flower: '🌿',
                  prerolls: '🚬',
                  vapes: '💨',
                  edibles: '🍪',
                  concentrates: '💎',
                  wellness: '💆',
                  drinks: '🥤',
                  accessories: '🔋',
                };

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className="bg-brand-gray hover:bg-gray-200 transition-colors rounded-lg p-6 text-left group"
                  >
                    <span className="text-4xl mb-3 block">{icons[category]}</span>
                    <h3 className="font-sans font-bold text-brand-dark group-hover:text-strain-hybrid transition-colors">
                      {categoryNames[category]}
                    </h3>
                    <p className="font-mono text-xs text-brand-gray-text">
                      {count} products
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-8 md:py-12 bg-brand-gray">
            <div className="max-w-[1400px] mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <span className="text-3xl mb-2 block">🔒</span>
                  <h4 className="font-sans font-bold text-brand-dark text-sm">
                    Secure Checkout
                  </h4>
                  <p className="font-mono text-xs text-brand-gray-text">
                    256-bit encryption
                  </p>
                </div>
                <div>
                  <span className="text-3xl mb-2 block">📦</span>
                  <h4 className="font-sans font-bold text-brand-dark text-sm">
                    Discreet Packaging
                  </h4>
                  <p className="font-mono text-xs text-brand-gray-text">
                    Plain, unmarked boxes
                  </p>
                </div>
                <div>
                  <span className="text-3xl mb-2 block">🧪</span>
                  <h4 className="font-sans font-bold text-brand-dark text-sm">
                    Lab Tested
                  </h4>
                  <p className="font-mono text-xs text-brand-gray-text">
                    Quality assured
                  </p>
                </div>
                <div>
                  <span className="text-3xl mb-2 block">🚚</span>
                  <h4 className="font-sans font-bold text-brand-dark text-sm">
                    Fast Delivery
                  </h4>
                  <p className="font-mono text-xs text-brand-gray-text">
                    Nationwide shipping
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="py-12 text-center font-mono text-xs text-brand-gray-text border-t border-gray-100 mt-8">
        <div className="max-w-[1400px] mx-auto px-4">
          <p className="font-sans font-bold text-brand-dark text-lg mb-2">
            <span className="text-strain-hybrid">ideal</span>greengrove
          </p>
          <p className="mb-4">
            Premium Cannabis Products - South Africa
          </p>
          <p className="text-red-500 font-bold">
            ⚠️ Not for sale to persons under 18
          </p>
          <p className="mt-4">© 2026 Ideal Green Grove. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
