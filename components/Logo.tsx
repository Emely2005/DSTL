import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  const logoImage = new URL('./LOGO.png', import.meta.url).href;

  return (
    <div className="rounded-2xl p-1.5 bg-dstl-navy/65 border border-dstl-accent/25 shadow-[0_0_22px_rgba(98,227,245,0.25),0_8px_30px_rgba(46,105,255,0.25)]">
      <img
        src={logoImage}
        alt="DSTL - Data Space Technologies"
        className={`w-auto object-contain rounded-xl ${className}`}
      />
    </div>
  );
};
