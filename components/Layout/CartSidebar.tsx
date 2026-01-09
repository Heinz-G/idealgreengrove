"use client";

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/data';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  open,
  onOpenChange,
  items,
  onUpdateQuantity,
  onRemove,
}) => {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-sans text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Bag ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="h-16 w-16 text-brand-gray-text mb-4" />
            <p className="font-mono text-brand-gray-text mb-4">
              Your bag is empty
            </p>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-bold"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-brand-gray rounded-lg"
                >
                  <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                    <span className="text-3xl">
                      {item.product.category === 'flower' ? '🌿' :
                       item.product.category === 'vapes' ? '💨' :
                       item.product.category === 'edibles' ? '🍪' :
                       item.product.category === 'prerolls' ? '🚬' :
                       item.product.category === 'concentrates' ? '💎' :
                       item.product.category === 'drinks' ? '🥤' : '💆'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans font-bold text-sm text-brand-dark line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="font-mono text-xs text-brand-gray-text">
                      {item.product.brand}
                    </p>
                    <p className="font-sans font-bold text-brand-dark mt-1">
                      R {item.product.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="font-mono text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-red-500 hover:text-red-600"
                        onClick={() => onRemove(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-brand-gray-text">Subtotal</span>
                <span className="font-sans font-bold text-xl text-brand-dark">
                  R {total.toFixed(2)}
                </span>
              </div>
              <Button className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-bold h-14 text-lg">
                Checkout
              </Button>
              <p className="font-mono text-xs text-brand-gray-text text-center">
                Delivery calculated at checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
