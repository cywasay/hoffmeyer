import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col font-sans select-none">
      {/* Top Banner */}
      <div className="bg-[#333333] w-full">
        <div className="max-w-7xl mx-auto text-white py-1.5 text-center text-[12px]">
          Have a Project? <span className="font-semibold underline">Request a Quote!</span>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="bg-white w-full border-b border-gray-200 md:border-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-6">
          
          {/* Brand Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Hoffmeyer" className="h-[38px] md:h-[50px] object-contain" />
              <span className="hidden md:block text-[#333] italic font-bold text-[15px] ml-2 tracking-tight">
                We keep your products moving{'\uFF01'}
              </span>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-[#004b87]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </button>
            <div className="w-12 h-12 bg-[#e2e2e2] rounded-full flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
            <button className="text-[#004b87]">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>

          {/* Desktop Links & Phone */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8 text-[15px] font-bold text-[#333]">
              <a href="#" className="hover:text-[#004b87] transition-colors">Locations</a>
              <a href="#" className="hover:text-[#004b87] transition-colors">Resources</a>
              <a href="#" className="hover:text-[#004b87] transition-colors">About Us</a>
              <a href="#" className="hover:text-[#004b87] transition-colors">Sign In {'\uFF5C'} Register</a>
            </nav>
            <div className="text-[32px] font-extrabold text-[#16568D] tracking-tight whitespace-nowrap">
              {'\uFF08'}800{'\uFF09'} 350-2358
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search & Cart */}
      <div className="flex md:hidden items-center gap-4 px-4 pb-5 bg-white">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by item or keyword..."
            className="w-full bg-[#E7E7E7] rounded-xl py-3 px-3 text-[16px] font-medium text-zinc-500 placeholder:text-[#D4D4D4] outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4D4D4]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
        </div>
        <button className="text-[#004b87] relative">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
        </button>
      </div>

      {/* Desktop Blue Bar */}
      <div className="hidden md:block w-full bg-[#16568D] py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-8 text-white font-bold text-[16px]">
            <button className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              Products <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <button className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              Brands <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
          
          <div className="flex-1 max-w-4xl mx-8 relative">
            <input
              type="text"
              placeholder="Search by item or keyword..."
              className="w-full bg-white rounded-lg py-2.5 px-4 text-[15px] font-medium text-[#333] placeholder:text-[#ccc] outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ccc]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
          </div>

          <div className="flex items-center gap-8 text-white font-bold text-[16px]">
            <button className="hover:text-gray-200 transition-colors">Quick Order</button>
            <button className="relative hover:text-gray-200 transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
