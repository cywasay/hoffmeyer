import React from "react";

const categories = [
  { name: "Conveyor Belts", image: "https://placehold.co/400x400/fff/004b87?text=Belt" },
  { name: "Industrial Hose", image: "https://placehold.co/400x400/fff/004b87?text=Ind+Hose" },
  { name: "Hydraulic Hose", image: "https://placehold.co/400x400/fff/004b87?text=Hyd+Hose" },
  { name: "Hose Fittings &\nAdapters", image: "https://placehold.co/400x400/fff/004b87?text=Fittings" },
  { name: "Rubber & Gaskets", image: "https://placehold.co/400x400/fff/004b87?text=Rubber" },
  { name: "Conveyor\nComponents", image: "https://placehold.co/400x400/fff/004b87?text=Components" },
  { name: "Bearings", image: "https://placehold.co/400x400/fff/004b87?text=Bearings" },
  { name: "Motors & Control", image: "https://placehold.co/400x400/fff/004b87?text=Motors" },
  { name: "Pipe Valves &\nFittings", image: "https://placehold.co/400x400/fff/004b87?text=Valves" },
  { name: "Adhesives &\nLubricants", image: "https://placehold.co/400x400/fff/004b87?text=Adhesives" },
  { name: "Packing & Sealing", image: "https://placehold.co/400x400/fff/004b87?text=Packing" },
  { name: "Safety Gear &\nSupplies", image: "https://placehold.co/400x400/fff/004b87?text=Safety" },
];

const ShopByCategory = () => {
  return (
    <section className="bg-white py-10 md:py-20 px-10 md:px-0">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#004b87] text-center mb-8 md:mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:px-14">
          {categories.map((cat, index) => (
            <div key={index} className="aspect-square border border-gray-300 md:border-gray-200 rounded-2xl md:rounded-xl p-3 flex flex-col items-center justify-between hover:shadow-md transition-shadow overflow-hidden">
              <div className="flex-1 w-full flex items-center justify-center min-h-0">
                <img src={cat.image} alt={cat.name} className="max-h-full max-w-full object-contain opacity-50" />
              </div>
              <p className="text-[15px] md:text-[13px] font-semibold md:font-bold text-center text-[#333] leading-tight h-[40px] md:h-[36px] flex items-center justify-center whitespace-pre-wrap">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <button className="bg-[#16568D] md:bg-white text-white md:text-[#16568D] md:border md:border-[#16568D] px-6 md:px-8 py-3.5 md:py-2.5 rounded-lg md:rounded-md font-semibold md:font-bold text-[18px] md:text-[15px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
