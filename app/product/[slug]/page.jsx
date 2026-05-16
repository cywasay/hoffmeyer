import Header from "../../_components/Header";
import Newsletter from "../../_components/Newsletter";
import React from "react";

const ProductDetail = ({ params }) => {
  const productName = params.slug?.replace(/-/g, " ") || "Premium Industrial Product";

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 pt-8">
        <nav className="flex text-[12px] text-gray-400 font-bold uppercase tracking-widest">
          <a href="/" className="hover:text-[#004b87]">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-[#004b87]">Categories</a>
          <span className="mx-2">/</span>
          <span className="text-[#004b87] truncate">{productName}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-square bg-[#f8f8f8] border border-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-8">
              <img 
                src="https://placehold.co/800x800/f8f8f8/004b87?text=Product+Hero" 
                alt={productName} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#f8f8f8] border border-gray-100 rounded-xl cursor-pointer hover:border-[#004b87] transition-colors p-2">
                  <img src={`https://placehold.co/200x200/f8f8f8/004b87?text=V${i}`} alt="Thumb" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <span className="text-[14px] font-extrabold text-[#16568D] uppercase tracking-wider mb-2">SKU: HOFF-29384-BELT</span>
            <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#333] leading-tight mb-6 capitalize">
              {productName}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[36px] font-black text-[#004b87]">$129.00</span>
              <span className="text-[16px] text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">In Stock</span>
            </div>

            <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-10">
              Our premium {productName} is engineered for high-demand industrial environments. Featuring reinforced construction and superior material quality, it ensures long-lasting performance and minimal downtime for your operations.
            </p>

            {/* Config Options Placeholder */}
            <div className="flex flex-col gap-6 mb-10">
              <div>
                <h4 className="font-bold text-[14px] uppercase tracking-wide text-gray-400 mb-3">Select Size</h4>
                <div className="flex gap-3">
                  {['12"', '24"', '36"', '48"'].map(size => (
                    <button key={size} className="border-2 border-gray-100 px-6 py-2 rounded-lg font-bold hover:border-[#004b87] transition-colors">{size}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden h-[56px]">
                <button className="px-4 hover:bg-gray-100 text-[20px] font-bold">-</button>
                <input type="text" value="1" className="w-12 text-center font-bold text-[18px] outline-none" readOnly />
                <button className="px-4 hover:bg-gray-100 text-[20px] font-bold">+</button>
              </div>
              <button className="flex-1 bg-[#16568D] text-white font-bold text-[18px] h-[56px] rounded-lg shadow-lg hover:bg-[#124570] transition-all">
                Add to Cart
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-8 border-t pt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004b87" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-tighter text-gray-500">Secure Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004b87" strokeWidth="2.5"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-tighter text-gray-500">Fast Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-20">
          <h2 className="text-[24px] font-extrabold text-[#333] mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              ['Material', 'Reinforced Synthetic Rubber'],
              ['Tensile Strength', '3500 PSI'],
              ['Max Temperature', '250°F (121°C)'],
              ['Industry Standards', 'ISO 9001, ASTM-D'],
              ['Country of Origin', 'USA'],
              ['Weight per foot', '2.4 lbs']
            ].map(([key, val]) => (
              <div key={key} className="flex bg-white p-4 md:p-6 items-center justify-between">
                <span className="font-bold text-gray-400 uppercase text-[12px] tracking-wide">{key}</span>
                <span className="font-bold text-[#333] text-[15px]">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
};

export default ProductDetail;
