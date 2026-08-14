import React, { useState } from 'react';

const FALLBACK_IMG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">` +
    `<rect x="0" y="0" width="800" height="450" fill="#FFFFFF" stroke="#0A0A0A" stroke-width="6"/>` +
    `<circle cx="400" cy="190" r="120" fill="none" stroke="#0A0A0A" stroke-width="6"/>` +
    `<path d="M96 420 C 200 300, 320 360, 420 300 C 520 240, 640 300, 720 200" stroke="#0A0A0A" stroke-width="6" stroke-linecap="round" fill="none"/>` +
    `<text x="400" y="330" font-family="'Archivo Black','Arial Black',sans-serif" font-size="200" font-weight="900" text-anchor="middle" fill="#0A0A0A">S</text>` +
    `</svg>`
)}`;

interface SkeletonImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const current = failed ? FALLBACK_IMG : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton-loading absolute inset-0" />}
      <img
        src={current}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
};

export default SkeletonImage;
