'use client';

import { ReactLenis } from 'lenis/react';
import { WATCHLIST_BORDER, WATCHLIST_BG } from '@/constants/nav-theme';
import {
  getViewPanelStyle,
  VIEW_PANEL_CONTAINER_BASE_CLASS,
  VIEW_PANEL_CONTAINER_CLASS,
  VIEW_PANEL_TITLE_CLASS,
  VIEW_PANEL_TITLE_FONT,
  VIEW_PANEL_SCROLL_CLASS,
  VIEW_PANEL_LENIS_OPTIONS,
} from '@/constants/view-panel-style';

type EventPanelProps = {
  borderColor?: string;
  backgroundColor?: string;
  width?: number | 'fill';
  toolbarBgColor?: string;
  onToolbarBgColorChange?: (value: string) => void;
  toolbarOpacity?: number;
  toolbarBlur?: number;
  onToolbarOpacityChange?: (value: number) => void;
  onToolbarBlurChange?: (value: number) => void;
  toolbarBorderBrightness?: number;
  onToolbarBorderBrightnessChange?: (value: number) => void;
  toolbarHighlight?: number;
  onToolbarHighlightChange?: (value: number) => void;
  toolbarHighlightHeight?: number;
  onToolbarHighlightHeightChange?: (value: number) => void;
  toolbarAccentOpacity?: number;
  onToolbarAccentOpacityChange?: (value: number) => void;
  toolbarAccentGradientStop?: number;
  onToolbarAccentGradientStopChange?: (value: number) => void;
  accentHighlightVisible?: boolean;
  onAccentHighlightVisibleChange?: (value: boolean) => void;
  toolbarShadowStrength?: number;
  onToolbarShadowStrengthChange?: (value: number) => void;
  toolbarBorderWidth?: number;
  onToolbarBorderWidthChange?: (value: number) => void;
  toolbarBorderGradientContrast?: number;
  onToolbarBorderGradientContrastChange?: (value: number) => void;
};

export function EventPanel({
  borderColor,
  backgroundColor,
  width = undefined,
  toolbarBgColor,
  onToolbarBgColorChange,
  toolbarOpacity,
  toolbarBlur,
  onToolbarOpacityChange,
  onToolbarBlurChange,
  toolbarBorderBrightness,
  onToolbarBorderBrightnessChange,
  toolbarHighlight,
  onToolbarHighlightChange,
  toolbarHighlightHeight,
  onToolbarHighlightHeightChange,
  toolbarAccentOpacity,
  onToolbarAccentOpacityChange,
  toolbarAccentGradientStop,
  onToolbarAccentGradientStopChange,
  accentHighlightVisible = true,
  onAccentHighlightVisibleChange,
  toolbarShadowStrength,
  onToolbarShadowStrengthChange,
  toolbarBorderWidth,
  onToolbarBorderWidthChange,
  toolbarBorderGradientContrast,
  onToolbarBorderGradientContrastChange,
}: EventPanelProps) {
  const panelStyle = getViewPanelStyle({
    borderColor: borderColor ?? WATCHLIST_BORDER,
    backgroundColor: backgroundColor ?? WATCHLIST_BG,
  });
  const fill = width === 'fill';
  const containerClass = fill
    ? `${VIEW_PANEL_CONTAINER_BASE_CLASS} min-w-0 flex-1`
    : VIEW_PANEL_CONTAINER_CLASS;
  const containerStyle =
    typeof width === 'number' ? { ...panelStyle, width } : panelStyle;

  return (
    <div
      className={containerClass}
      style={containerStyle}
      aria-label="Event"
    >
      <h2 className={VIEW_PANEL_TITLE_CLASS} style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}>
        Event
      </h2>
      <ReactLenis
        className={`${VIEW_PANEL_SCROLL_CLASS} flex flex-col gap-3`}
        options={VIEW_PANEL_LENIS_OPTIONS}
      >
        <div className="px-1 pt-1">
          <span
            className="text-[11px] font-semibold text-white/40"
            style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
          >
            背景
          </span>
        </div>
        {onToolbarBgColorChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              Bar 背景颜色
            </span>
            <input
              type="color"
              value={toolbarBgColor ?? '#ffffff'}
              onChange={(e) => onToolbarBgColorChange?.(e.target.value)}
              className="h-7 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
            />
          </div>
        ) : null}
        {onToolbarOpacityChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              Bar 透明度
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={toolbarOpacity ?? 0.9}
              onChange={(e) => onToolbarOpacityChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
          </div>
        ) : null}
        {onToolbarBlurChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              Bar Blur
            </span>
            <input
              type="range"
              min={0}
              max={24}
              step={1}
              value={toolbarBlur ?? 12}
              onChange={(e) => onToolbarBlurChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
          </div>
        ) : null}
        <div className="px-1 pt-2">
          <span
            className="text-[11px] font-semibold text-white/40"
            style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
          >
            边框
          </span>
        </div>
        {onToolbarBorderBrightnessChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              Bar 边框亮度
            </span>
            <input
              type="range"
              min={-0.6}
              max={0.6}
              step={0.05}
              value={toolbarBorderBrightness ?? 0}
              onChange={(e) => onToolbarBorderBrightnessChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-14 text-right text-[11px] text-white/60">
              {(toolbarBorderBrightness ?? 0).toFixed(2)}
            </span>
          </div>
        ) : null}
        {onToolbarBorderWidthChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              边框厚度
            </span>
            <input
              type="range"
              min={0}
              max={4}
              step={0.25}
              value={toolbarBorderWidth ?? 1}
              onChange={(e) => onToolbarBorderWidthChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-12 text-right text-[11px] text-white/60">
              {(toolbarBorderWidth ?? 1).toFixed(1)}px
            </span>
          </div>
        ) : null}
        {onToolbarBorderGradientContrastChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              渐变对比度
            </span>
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              value={toolbarBorderGradientContrast ?? 1}
              onChange={(e) =>
                onToolbarBorderGradientContrastChange?.(parseFloat(e.target.value))
              }
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-12 text-right text-[11px] text-white/60">
              {(toolbarBorderGradientContrast ?? 1).toFixed(2)}
            </span>
          </div>
        ) : null}
        <div className="px-1 pt-2">
          <span
            className="text-[11px] font-semibold text-white/40"
            style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
          >
            高光
          </span>
        </div>
        {onToolbarHighlightChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              Bar 高光条
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={toolbarHighlight ?? 0.6}
              onChange={(e) => onToolbarHighlightChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-12 text-right text-[11px] text-white/60">
              {(toolbarHighlight ?? 0.6).toFixed(2)}
            </span>
          </div>
        ) : null}
        {onToolbarHighlightHeightChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              高光高度
            </span>
            <input
              type="range"
              min={0.2}
              max={1}
              step={0.05}
              value={toolbarHighlightHeight ?? 1}
              onChange={(e) => onToolbarHighlightHeightChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-10 text-right text-[11px] text-white/60">
              {Math.round((toolbarHighlightHeight ?? 1) * 100)}%
            </span>
          </div>
        ) : null}
        {onToolbarAccentOpacityChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              彩色高光 透明度
            </span>
            <input
              type="range"
              min={0}
              max={0.5}
              step={0.02}
              value={toolbarAccentOpacity ?? 0.22}
              onChange={(e) => onToolbarAccentOpacityChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-10 text-right text-[11px] text-white/60">
              {((toolbarAccentOpacity ?? 0.22) * 100).toFixed(0)}%
            </span>
          </div>
        ) : null}
        {onToolbarAccentGradientStopChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              彩色高光 渐变结束
            </span>
            <input
              type="range"
              min={0.2}
              max={1}
              step={0.05}
              value={toolbarAccentGradientStop ?? 0.6}
              onChange={(e) => onToolbarAccentGradientStopChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-10 text-right text-[11px] text-white/60">
              {((toolbarAccentGradientStop ?? 0.6) * 100).toFixed(0)}%
            </span>
          </div>
        ) : null}
        {onAccentHighlightVisibleChange ? (
          <div className="flex items-center justify-between gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              显示彩色高光
            </span>
            <button
              type="button"
              onClick={() => onAccentHighlightVisibleChange?.(!accentHighlightVisible)}
              className={`rounded-lg px-2.5 py-1 text-[12px] font-medium outline-none transition-colors ${
                accentHighlightVisible
                  ? 'bg-white/15 text-[#F2F2F7] hover:bg-white/20'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
              }`}
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              {accentHighlightVisible ? '开' : '关'}
            </button>
          </div>
        ) : null}
        <div className="px-1 pt-2">
          <span
            className="text-[11px] font-semibold text-white/40"
            style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
          >
            阴影
          </span>
        </div>
        {onToolbarShadowStrengthChange ? (
          <div className="flex items-center gap-2 px-1">
            <span
              className="shrink-0 text-[12px] text-white/60"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              阴影强度
            </span>
            <input
              type="range"
              min={0}
              max={1.5}
              step={0.05}
              value={toolbarShadowStrength ?? 1}
              onChange={(e) => onToolbarShadowStrengthChange?.(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-[#F2F2F7]"
            />
            <span className="w-12 text-right text-[11px] text-white/60">
              {(toolbarShadowStrength ?? 1).toFixed(2)}
            </span>
          </div>
        ) : null}
        {(toolbarBgColor ??
          toolbarOpacity ??
          toolbarBlur ??
          toolbarBorderBrightness ??
          toolbarBorderWidth ??
          toolbarBorderGradientContrast ??
          toolbarHighlight ??
          toolbarHighlightHeight ??
          toolbarAccentOpacity ??
          toolbarAccentGradientStop ??
          toolbarShadowStrength) != null && (
          <div className="mt-2 px-1 pb-1">
            <span
              className="block text-[11px] font-semibold text-white/40"
              style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
            >
              Debug 数值
            </span>
            <div className="mt-1 space-y-[2px] text-[10px] text-white/45">
              {toolbarBgColor != null && <div>bgColor: {toolbarBgColor}</div>}
              {toolbarOpacity != null && <div>opacity: {toolbarOpacity.toFixed(2)}</div>}
              {toolbarBlur != null && <div>blur: {toolbarBlur.toFixed(1)}px</div>}
              {toolbarBorderBrightness != null && (
                <div>borderBrightness: {toolbarBorderBrightness.toFixed(2)}</div>
              )}
              {toolbarBorderWidth != null && (
                <div>borderWidth: {toolbarBorderWidth.toFixed(2)}px</div>
              )}
              {toolbarBorderGradientContrast != null && (
                <div>borderGradientContrast: {toolbarBorderGradientContrast.toFixed(2)}</div>
              )}
              {toolbarHighlight != null && (
                <div>highlight: {toolbarHighlight.toFixed(2)}</div>
              )}
              {toolbarHighlightHeight != null && (
                <div>highlightHeight: {toolbarHighlightHeight.toFixed(2)}</div>
              )}
              {toolbarAccentOpacity != null && (
                <div>accentOpacity: {toolbarAccentOpacity.toFixed(2)}</div>
              )}
              {toolbarAccentGradientStop != null && (
                <div>accentGradientStop: {toolbarAccentGradientStop.toFixed(2)}</div>
              )}
              {toolbarShadowStrength != null && (
                <div>shadowStrength: {toolbarShadowStrength.toFixed(2)}</div>
              )}
            </div>
          </div>
        )}
      </ReactLenis>
    </div>
  );
}
