import React from "react";

const products = [
  { name: "Heavy-Duty Belt", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt" },
  { name: "Dodge® Pillow Block Bearings", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Bearings" },
  { name: "WD40® Silicone Lubricant", image: "https://placehold.co/400x400/f8f8f8/004b87?text=WD40" },
  { name: "Huskey™ Lube-O-Seal", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Lube" },
  { name: "Oil Seals", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Oil+Seals" },
  { name: "Fuel Transfer Hose", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Hose" },
];

const TopProducts = () => {
  return (
    <section className="bg-white py-7 md:py-16 px-14 md:px-0">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-[24px] md:text-[32px] font-extrabold tracking-tight text-[#004b87] text-center mb-6 md:mb-10">
          Our Top Selling Products
        </h2>
        
        <div className="relative w-full md:px-14">
          {/* Left Arrow (Desktop Only) */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#16568D] rounded-md items-center justify-center text-[#16568D] hover:bg-[#16568D] hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
            {products.map((product, index) => (
              <div key={index} className="aspect-square border border-gray-400 md:border-gray-200 md:rounded-xl rounded-2xl p-4 md:p-3 flex flex-col items-center justify-between hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-0">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-[15px] md:text-[13px] font-semibold md:font-bold text-center text-[#333] leading-tight h-[40px] md:h-[36px] flex items-center justify-center">
                  {product.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#16568D] rounded-md items-center justify-center text-[#16568D] hover:bg-[#16568D] hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
