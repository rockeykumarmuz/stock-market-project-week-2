export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;       // dollar change
  changePct: number;    // percentage change
  volume: number;
  marketCap: number;
  sector: string;
}
 
export interface Trade {
  id: string;
  stockId: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  date: string;
}
 
export interface Portfolio {
  totalValue: number;
  totalCost: number;
  gainLoss: number;
  holdings: Stock[];
}

export interface Position {
  symbol: string;
  quantity: number;
  ltp: number;      // Last Traded Price
  avgPrice: number;
  pnl: number;      // Profit & Loss (Absolute)
  pnlPercent: number;
}

export interface Column<T> {
  key: keyof T;
  header: string;
  // This ensures 'value' matches the type of the specific property 'key'
  render?: <K extends keyof T>(value: T[K], row: T) => React.ReactNode;
  width?: number;
}