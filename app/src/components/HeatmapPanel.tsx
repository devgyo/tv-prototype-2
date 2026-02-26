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

type HeatmapPanelProps = {
  /** 面板标题，默认 "Heatmap" */
  title?: string;
  /** 外边框颜色 */
  borderColor?: string;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 面板宽度（不传则固定 280px，传数字则固定宽度，'fill' 则填满剩余空间） */
  width?: number | 'fill';
};

export function HeatmapPanel({
  title = 'Heatmap',
  borderColor,
  backgroundColor,
  width = undefined,
}: HeatmapPanelProps) {
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
      aria-label="Heatmap"
    >
      <h2 className={VIEW_PANEL_TITLE_CLASS} style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}>
        {title}
      </h2>
      <ReactLenis
        className={`${VIEW_PANEL_SCROLL_CLASS} flex items-center justify-center`}
        options={VIEW_PANEL_LENIS_OPTIONS}
      >
        <span
          className="text-[13px] font-medium text-white/50"
          style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
        >
          Stock Cards
        </span>
      </ReactLenis>
    </div>
  );
}
