import { useEffect, useRef, useState } from "react";
import type { VirtualListOptions } from "../types/dropDownType";

export function useVirtualList<T>(items: T[], options: VirtualListOptions) {
  const rowHeight = options.rowHeight;
  const visibleRows = options.visibleRows
  const overScan = options.overScan

  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(function() {
    const container = containerRef.current;
    if (!container) return
 
    function handleScroll() {
      setScrollTop(container?.scrollTop ?? 0);
    }
 
    container.addEventListener('scroll', handleScroll);

    return function() {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const firstRow   = Math.floor(scrollTop / rowHeight);
  const startIndex = Math.max(0, firstRow - overScan);
  const endIndex   = Math.min(items.length, firstRow + visibleRows + overScan);
  const spacerAbove = startIndex * rowHeight;
  const spacerBelow = (items.length - endIndex) * rowHeight;
 
  // --- Piece 5 ---
  return {
    visibleItems: items.slice(startIndex, endIndex),
    containerRef,
    spacerAbove,
    spacerBelow,
    startIndex,
  };


}

