import Header from "../../_components/Header";
import Newsletter from "../../_components/Newsletter";
import React from "react";

const CategoryDetail = ({ params }) => {
  const categoryName = params.slug?.replace(/-/g, " ") || "Category";

  const products = [
    { name: "Heavy-Duty Conveyor Belt", price: "$120.00", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt+1" },
    { name: "Cleated Conveyor Belt", price: "$150.00", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt+2" },
    { name: "Heat Resistant Belt", price: "$180.00", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt+3" },
    { name: "Oil Resistant Belt", price: "$140.00", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt+4" },
    { name: "Chevron Belt", price: "$160.00", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt+5" },
    { name: "Food Grade Belt", price: "$110.00", image: "https://placehold.co/400x400/f8f8f8/004b87?text=Belt+6" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      
      {/* Category Header */}
      <div className="bg-[#f2f2f2] py-8 md:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav className="flex text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
            <a href="/" className="hover:text-[#004b87]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#004b87]">Categories</span>
          </nav>
          <h1 className="text-[28px] md:text-[42px] font-extrabold text-[#004b87] capitalize leading-tight">
            {categoryName}
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl text-[16px] md:text-[18px]">
            High-performance {categoryName} solutions designed for maximum durability and efficiency in industrial applications.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <h3 className="text-[18px] font-bold text-[#333] mb-6 border-b pb-2">Filter By</h3>
            
            <div className="mb-8">
              <h4 className="font-bold text-[14px] uppercase tracking-wide text-gray-400 mb-4">Material</h4>
              <div className="flex flex-col gap-3 text-[15px] text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> Rubber</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> PVC</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> Synthetic</label>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-[14px] uppercase tracking-wide text-gray-400 mb-4">Price Range</h4>
              <div className="flex flex-col gap-3 text-[15px] text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> Under $100</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> $100 - $200</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> Over $200</label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="text-gray-500 font-medium">{products.length} Products Found</span>
              <select className="border border-gray-200 rounded-md py-1.5 px-3 text-[14px] font-bold text-[#333] outline-none">
                <option>Sort By: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square bg-[#f8f8f8] border border-gray-100 rounded-2xl overflow-hidden relative mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    <button className="absolute bottom-4 left-4 right-4 bg-white text-[#004b87] py-2.5 rounded-lg font-bold text-[13px] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      Quick View
                    </button>
                  </div>
                  <h3 className="font-bold text-[#333] text-[16px] mb-1 group-hover:text-[#004b87] transition-colors">{product.name}</h3>
                  <p className="text-[#004b87] font-extrabold text-[15px]">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
};

export default CategoryDetail;
