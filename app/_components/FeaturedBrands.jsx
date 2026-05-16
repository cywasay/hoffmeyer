import React from "react";

const brands = [
  { name: "ASCO", url: "https://placehold.co/200x100/f5f5f5/008000?text=ASCO" },
  { name: "Continental", url: "https://placehold.co/200x100/f5f5f5/DAA520?text=Continental" },
  { name: "MAGLINER", url: "https://placehold.co/200x100/f5f5f5/000000?text=MAGLINER" },
  { name: "colson", url: "https://placehold.co/200x100/f5f5f5/FF0000?text=colson" },
  { name: "REXNORD", url: "https://placehold.co/200x100/f5f5f5/000000?text=REXNORD" },
  { name: "CARLISLE", url: "https://placehold.co/200x100/f5f5f5/0000FF?text=CARLISLE" },
  { name: "Commercial Hardware", url: "https://placehold.co/200x100/f5f5f5/5F9EA0?text=Hardware" },
  { name: "Parker", url: "https://placehold.co/200x100/f5f5f5/000000?text=Parker" },
  { name: "TSUBAKI", url: "https://placehold.co/200x100/f5f5f5/00BFFF?text=TSUBAKI" },
  { name: "SKF", url: "https://placehold.co/200x100/f5f5f5/0000CD?text=SKF" },
  { name: "Martin", url: "https://placehold.co/200x100/f5f5f5/4682B4?text=Martin" },
  { name: "FALK", url: "https://placehold.co/200x100/f5f5f5/1E90FF?text=FALK" },
];

const FeaturedBrands = () => {
  return (
    <section className="bg-[#f2f2f2] w-full py-6 md:py-20 px-13 md:px-0">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#004b87] text-center mb-8 md:mb-16">
          Brands You Know, Products You Trust
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-x-12 md:gap-y-14">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={brand.url} 
                alt={brand.name} 
                className="max-h-[36px] md:max-h-[44px] max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
