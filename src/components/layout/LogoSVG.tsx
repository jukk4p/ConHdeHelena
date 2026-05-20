import React from 'react';

export default function LogoSVG({ className = "", width = 56, height = 56 }: { className?: string, width?: number, height?: number }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ConhdeHelena Logo"
    >
      <title>ConhdeHelena Logo</title>
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c5a059" />
          <stop offset="50%" stopColor="#e2c28a" />
          <stop offset="100%" stopColor="#b38f4d" />
        </linearGradient>
      </defs>
      
      {/* Elegance & Artisan path for 'C' and 'H' interwoven */}
      <path 
        d="M38 70C28 70 20 62 20 50C20 38 28 30 38 30C43 30 48 32 52 36" 
        stroke="url(#goldGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      <path 
        d="M50 30L50 70M75 30L75 70M50 50L75 50" 
        stroke="url(#goldGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      
      <circle cx="50" cy="50" r="46" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  );
}
