import React from 'react';
import { cn } from '@/lib/utils';
import { ProductType, Category } from '@/lib/data';

interface ProductImageProps {
  type: ProductType;
  category: Category;
  name: string;
  className?: string;
}

const typeColors = {
  indica: ['#1a1a2e', '#0f3460'],
  sativa: ['#ff9a44', '#fc6767'],
  hybrid: ['#11998e', '#38ef7d'],
  cbd: ['#9c27b0', '#e040fb'],
};

const categoryIcons: Record<Category, string> = {
  flower: '🌿',
  prerolls: '🚬',
  vapes: '💨',
  edibles: '🍪',
  concentrates: '💎',
  wellness: '💆',
  drinks: '🥤',
  accessories: '🔋',
};

export const ProductImage: React.FC<ProductImageProps> = ({
  type,
  category,
  name,
  className,
}) => {
  const [startColor, endColor] = typeColors[type] || typeColors.hybrid;
  const icon = categoryIcons[category] || '🌿';

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center overflow-hidden bg-brand-gray p-6",
        className
      )}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={`grad-${type}-${category}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
          </linearGradient>
          <pattern id="product-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="#ffffff33" />
          </pattern>
        </defs>

        {/* Product Shape */}
        <rect
          x="30"
          y="20"
          width="140"
          height="160"
          rx="12"
          fill={`url(#grad-${type}-${category})`}
        />
        <rect
          x="30"
          y="20"
          width="140"
          height="160"
          rx="12"
          fill="url(#product-pattern)"
        />

        {/* Category Icon */}
        <text
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="48"
          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
        >
          {icon}
        </text>

        {/* Brand Text */}
        <text
          x="50%"
          y="70%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontFamily="monospace"
          fontSize="14"
          fontWeight="bold"
          letterSpacing="2px"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
        >
          IDEAL
        </text>
        <text
          x="50%"
          y="80%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontFamily="monospace"
          fontSize="10"
          letterSpacing="3px"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
        >
          GREEN GROVE
        </text>
      </svg>
    </div>
  );
};
