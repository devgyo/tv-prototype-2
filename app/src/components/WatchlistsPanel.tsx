'use client';

import { ReactLenis } from 'lenis/react';
import type { WatchlistItem } from '@/data/watchlists';
import { Icon } from '@/components/ui/Icon';
import { asideStyle, WATCHLIST_BG } from '@/constants/nav-theme';
import {
  VIEW_PANEL_CONTAINER_BASE_CLASS,
  VIEW_PANEL_CONTAINER_CLASS,
  VIEW_PANEL_TITLE_CLASS,
  VIEW_PANEL_TITLE_FONT,
  VIEW_PANEL_SCROLL_CLASS,
  VIEW_PANEL_NAV_ITEM_CLASS,
  VIEW_PANEL_LIST_GAP_CLASS,
  VIEW_PANEL_LENIS_OPTIONS,
} from '@/constants/view-panel-style';

type WatchlistsPanelProps = {
  watchlists: WatchlistItem[];
  selectedWatchlist: string | null;
  onSelectWatchlist: (label: string) => void;
  onClearTopNav: () => void;
  /** 点击「Create Watchlist」时调用 */
  onCreateWatchlist?: () => void;
  /** 外边框颜色 */
  borderColor?: string;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 面板宽度（可拖拽时传入，不传则固定 280px） */
  width?: number;
};

export function WatchlistsPanel({
  watchlists,
  selectedWatchlist,
  onSelectWatchlist,
  onClearTopNav,
  onCreateWatchlist,
  borderColor,
  backgroundColor,
  width,
}: WatchlistsPanelProps) {
  const panelStyle: React.CSSProperties = {
    ...asideStyle,
    backgroundColor: backgroundColor ?? WATCHLIST_BG,
  };
  const containerClass = width != null ? VIEW_PANEL_CONTAINER_BASE_CLASS : VIEW_PANEL_CONTAINER_CLASS;
  const containerStyle = width != null ? { ...panelStyle, width } : panelStyle;
  return (
    <div
      className={containerClass}
      style={containerStyle}
      aria-label="Watchlists"
    >
      <div className="flex shrink-0 items-center justify-between gap-2 px-3 pt-3 pb-3">
        <h2 className="shrink-0 text-[13px] font-semibold text-[#F2F2F7]" style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}>
          Watchlists
        </h2>
        <button
          type="button"
          onClick={onCreateWatchlist}
          className="shrink-0 rounded-lg px-2 py-1 text-[12px] font-medium text-[#A1A1AA] outline-none transition-colors duration-200 hover:bg-white/10 hover:text-[#F2F2F7] focus-visible:ring-2 focus-visible:ring-[#444444] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1E]"
          style={{ fontFamily: VIEW_PANEL_TITLE_FONT }}
        >
          Create Watchlist
        </button>
      </div>
      <ReactLenis
        className={VIEW_PANEL_SCROLL_CLASS}
        options={VIEW_PANEL_LENIS_OPTIONS}
      >
        <div className={VIEW_PANEL_LIST_GAP_CLASS}>
          {watchlists.map((item) => (
            <button
              key={item.label}
              type="button"
              data-nav-item
              data-selected={selectedWatchlist === item.label ? 'true' : 'false'}
              onClick={() => {
                onClearTopNav();
                onSelectWatchlist(item.label);
              }}
              className={VIEW_PANEL_NAV_ITEM_CLASS}
            >
              <span className="shrink-0" style={{ color: item.color }}>
                <Icon name="bookmark" className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">{item.label}</span>
              <Icon name="dots" className="nav-item-dots h-4 w-4 shrink-0 text-[#F2F2F7]" />
            </button>
          ))}
        </div>
      </ReactLenis>
    </div>
  );
}
