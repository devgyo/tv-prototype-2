'use client';

import { ReactLenis } from 'lenis/react';
import type { Stock } from '@/data/stocks';
import { TickerList } from '@/components/TickerList';
import { Icon } from '@/components/ui/Icon';
import { WATCHLIST_BORDER, WATCHLIST_BG } from '@/constants/nav-theme';
import {
  getViewPanelStyle,
  VIEW_PANEL_CONTAINER_BASE_CLASS,
  VIEW_PANEL_TITLE_CLASS,
  VIEW_PANEL_TITLE_FONT,
  VIEW_PANEL_SCROLL_CLASS,
  VIEW_PANEL_LENIS_OPTIONS,
} from '@/constants/view-panel-style';

type TickerListPanelProps = {
  stocks: Stock[];
  /** 面板标题，默认 "Tickers" */
  title?: string;
  /** 点击某只 ticker 时回调（用于切换中间为 Chart 并显示该代码） */
  onTickerClick?: (stock: Stock) => void;
  /** 外边框颜色 */
  borderColor?: string;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 面板宽度（不传则填满剩余空间，传数字则固定宽度） */
  width?: number | 'fill';
};

export function TickerListPanel({
  stocks,
  title = 'Tickers',
  onTickerClick,
  borderColor,
  backgroundColor,
  width = 'fill',
}: TickerListPanelProps) {
  const panelStyle = getViewPanelStyle({
    borderColor: borderColor ?? WATCHLIST_BORDER,
    backgroundColor: backgroundColor ?? WATCHLIST_BG,
  });
  const fill = width === 'fill';
  const containerClass = fill ? `${VIEW_PANEL_CONTAINER_BASE_CLASS} min-w-0 flex-1` : VIEW_PANEL_CONTAINER_BASE_CLASS;
  const containerStyle = typeof width === 'number' ? { ...panelStyle, width } : panelStyle;
  return (
    <div
      className={containerClass}
      style={containerStyle}
      aria-label={title}
    >
      <div
        className={`${VIEW_PANEL_TITLE_CLASS} flex items-center justify-between`}
        style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
      >
        <h2 className="font-semibold">{title}</h2>
        <button
          type="button"
          className="-mr-1 flex h-6 w-fit items-center justify-center rounded-lg text-[#F2F2F7] outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#444444] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1E]"
          aria-label="Add"
        >
          <Icon name="plus" className="h-4 w-4" />
        </button>
      </div>
      <ReactLenis
        className={VIEW_PANEL_SCROLL_CLASS}
        options={VIEW_PANEL_LENIS_OPTIONS}
      >
        <TickerList stocks={stocks} onTickerClick={onTickerClick} />
      </ReactLenis>
    </div>
  );
}
