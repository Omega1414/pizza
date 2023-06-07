import React from "react";
import Image from "next/image";

const SizeSelection = ({pizza, size, setSize}) => {
  return <div className="mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
    <div className="flex gap-x-2 xs:gap-x-12 items-baseline mb-10 font-medium">
    {/* Small */}
      <label className="flex flex-col items-center gap-x-2 cursor-pointer ">
        <Image className={`${size === 'kiçik' ? 'border-2 rounded-full border-orange p-[2px]' : 'border-transparent filter saturate-[.1]'}mb-1`} src={pizza.image} width={60} height={60} alt='' />
        <input type="radio" name="size" value="kiçik" checked={size === 'kiçik'} onChange={(e) => setSize(e.target.value)} className="appearance-none" />
        Kiçik
      </label>
      {/* Medium */}
      <label className="flex flex-col items-center gap-x-2 cursor-pointer">
        <Image className={`${size === 'orta' ? 'border-2 rounded-full border-orange p-[2px] ' : 'border-transparent filter saturate-[.1]'}mb-1`} src={pizza.image} width={70} height={70} alt='' />
        <input type="radio" name="size" value="orta" checked={size === 'medium'} onChange={(e) => setSize(e.target.value)} className="appearance-none" />
        Orta
      </label>
      {/* Big */}
      <label className="flex flex-col items-center gap-x-2 cursor-pointer">
        <Image className={`${size === 'böyük' ? 'border-2 rounded-full border-orange p-[2px] ' : 'border-transparent filter saturate-[.1]'}mb-1`} src={pizza.image} width={80} height={80} alt='' />
        <input type="radio" name="size" value="böyük" checked={size === 'böyük'} onChange={(e) => setSize(e.target.value)} className="appearance-none" />
        Böyük
      </label>
    </div>
  </div>;
};

export default SizeSelection;
