"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

interface Props {
  products: Product[];
  collegeName?: string;
}

export function ProductGrid({ products, collegeName }: Props) {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      {products.length === 0 ? (
        <p className="col-span-full py-16 text-center text-slate-500">
          No hay productos disponibles en este momento.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard
              key={`${product.image}-${i}`}
              product={product}
              onClick={() => setSelected(product)}
            />
          ))}
        </div>
      )}

      {selected && (
        <ProductModal
          product={selected}
          collegeName={collegeName}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
