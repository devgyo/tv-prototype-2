'use client';

import React from 'react';

export type GlassBarProps = {
  backgroundColor: string;
  borderColor: string;
  opacity: number;
  blur: number;
  borderBrightness: number;
  borderWidth: number;
  borderGradientContrast: number;
  highlightOpacity: number;
  highlightHeight: number;
  shadowStrength: number;
  /** 整个 Bar 的目标高度（px），默认 42 */
  height?: number;
  role?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
};

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace('#', '');
  if (value.length !== 6) return hex;
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  const a = Math.min(1, Math.max(0, alpha));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function adjustBorderColor(hex: string, level: number) {
  const value = hex.replace('#', '');
  if (value.length !== 6) return hex;
  let r = parseInt(value.slice(0, 2), 16);
  let g = parseInt(value.slice(2, 4), 16);
  let b = parseInt(value.slice(4, 6), 16);
  const cl = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const l = Math.max(-1, Math.min(1, level));
  if (l < 0) {
    const f = 1 + l;
    r *= f;
    g *= f;
    b *= f;
  } else if (l > 0) {
    const f = l;
    r = r + (255 - r) * f;
    g = g + (255 - g) * f;
    b = b + (255 - b) * f;
  }
  return `rgb(${cl(r)}, ${cl(g)}, ${cl(b)})`;
}

export function GlassBar({
  backgroundColor,
  borderColor,
  opacity,
  blur,
  borderBrightness,
  borderWidth,
  borderGradientContrast,
  highlightOpacity,
  highlightHeight,
  shadowStrength,
  height,
  role,
  ariaLabel,
  className,
  children,
}: GlassBarProps) {
  const topColor = adjustBorderColor(
    borderColor,
    borderBrightness + 0.25 * borderGradientContrast,
  );
  const midColor = adjustBorderColor(borderColor, borderBrightness);
  const bottomColor = adjustBorderColor(
    borderColor,
    borderBrightness - 0.15 * borderGradientContrast,
  );

  const shadowAlpha = Math.max(
    0,
    Math.min(1, 0.2 + 0.4 * shadowStrength),
  );

  const barHeight = height ?? 40;

  const currentAlpha = Math.min(1, Math.max(0, opacity));

  return (
    <div
      className={`relative rounded-full ${className ?? ''}`}
      style={{
        padding: borderWidth,
        backgroundImage: `linear-gradient(to bottom, ${topColor}, ${midColor}, ${bottomColor})`,
      }}
    >
      <div
        className="relative flex items-center gap-2 rounded-full bg-white/5 p-1"
        style={{
          backgroundColor: hexToRgba(backgroundColor, currentAlpha),
          backdropFilter: blur > 0 ? `blur(${blur}px)` : 'none',
          boxShadow: `0 18px 45px rgba(0,0,0,${shadowAlpha})`,
          height: barHeight,
          minHeight: barHeight,
        }}
        role={role}
        aria-label={ariaLabel}
      >
        {highlightOpacity > 0 && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[999px] bg-gradient-to-b from-white/55 via-white/15 to-transparent mix-blend-screen"
            style={{
              opacity: highlightOpacity,
              transform: `scaleY(${highlightHeight})`,
              transformOrigin: 'center',
            }}
            aria-hidden
          />
        )}
        {/* children 自己决定内部布局 */}
        <div className="relative flex items-center gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}

