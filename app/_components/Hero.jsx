import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0062B6] py-8 md:py-32 px-6 md:px-8 flex flex-col items-center md:items-start text-center md:text-left overflow-hidden text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200 rounded-full blur-3xl -mr-32 -mt-32 opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-200 rounded-full blur-3xl -ml-32 -mb-32 opacity-20" />

      <div className="relative z-10 flex flex-col items-center md:items-start gap-4 max-w-7xl mx-auto w-full">
        <h1 className="text-[36px] md:text-[56px] font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight">
          Complete Conveyor<br />Belting Solutions
        </h1>
        
        <p className="text-[16px] md:text-[18px] font-bold md:mt-2">
          Belts, Bearings, Rollers, Motors, Seals & more
        </p>

        <button className="mt-24 md:mt-6 bg-white text-[#16568D] px-4 md:px-8 py-4 md:py-3 rounded-lg md:rounded-md font-bold text-[20px] md:text-[16px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all">
          Shop Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
