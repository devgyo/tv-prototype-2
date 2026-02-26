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
};

export function EventPanel({
  borderColor,
  backgroundColor,
  width = undefined,
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
        className={`${VIEW_PANEL_SCROLL_CLASS} flex items-center justify-center`}
        options={VIEW_PANEL_LENIS_OPTIONS}
      >
        <span
          className="text-[13px] font-medium text-white/50"
          style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
        >
          Event List
        </span>
      </ReactLenis>
    </div>
  );
}
