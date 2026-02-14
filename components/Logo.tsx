import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  // IMPORTANT: Since I cannot upload files directly, you must save your logo image
  // as 'logo.png' in your project's public folder for this to work.
  // I have set the path to '/logo.png'.
  const logoUrl = "/logo.png";
  
  return (
    <img 
      src={logoUrl}
      alt="DSTL - Data Space Technologies" 
      className={`object-contain ${className}`}
      onError={(e) => {
        // Fallback if image is missing
        e.currentTarget.src = "https://placehold.co/240x80/020617/22d3ee/png?text=DSTL+DATA+SPACE&font=montserrat";
      }}
    />
  );
};