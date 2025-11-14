'use client';

import { ShoppingCart, Star, Zap } from 'lucide-react';
import { useState } from 'react';

export default function ProductsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "SkyVision Pro X",
      model: "Model: SVX-2024",
      price: "$2,499",
      image: "/drone1.png",
      rating: 4.8,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "AeroMaster Elite",
      model: "Model: AME-2024",
      price: "$3,299",
      image: "/drone2.png",
      rating: 4.9,
      badge: "Premium"
    },
    {
      id: 3,
      name: "CloudRunner Mini",
      model: "Model: CRM-2024",
      price: "$1,799",
      image: "/drone3.png",
      rating: 4.7,
      badge: "Compact"
    }
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore our cutting-edge drone technology designed for professionals and enthusiasts
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {product.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-1">
                    {product.rating}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>

                {/* Model */}
                <p className="text-gray-500 text-sm mb-4">{product.model}</p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      {product.price}
                    </p>
                  </div>
                  <button
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      hoveredCard === product.id
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white scale-105'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="hidden sm:inline">Buy Now</span>
                  </button>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              {hoveredCard === product.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}