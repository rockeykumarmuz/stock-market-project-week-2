import type { Position, Stock, Trade } from '../types/stockType';
 
export const stocks: Stock[] = [
  { id: '1', symbol: 'AAPL', name: 'Apple Inc.',
    price: 189.30, change: 2.15, changePct: 1.15,
    volume: 54_200_000, marketCap: 2_950_000_000_000, sector: 'Technology' },
  { id: '2', symbol: 'GOOGL', name: 'Alphabet Inc.',
    price: 141.80, change: -0.95, changePct: -0.67,
    volume: 22_300_000, marketCap: 1_770_000_000_000, sector: 'Technology' },
  { id: '3', symbol: 'MSFT', name: 'Microsoft Corp.',
    price: 378.90, change: 4.20, changePct: 1.12,
    volume: 19_600_000, marketCap: 2_810_000_000_000, sector: 'Technology' },
  { id: '4', symbol: 'TSLA', name: 'Tesla Inc.',
    price: 248.50, change: -7.30, changePct: -2.85,
    volume: 98_700_000, marketCap: 791_000_000_000, sector: 'Automotive' },
  { id: '5', symbol: 'JPM',  name: 'JPMorgan Chase',
    price: 196.40, change: 1.05, changePct: 0.54,
    volume: 8_900_000, marketCap: 568_000_000_000, sector: 'Finance' },
];
 
export const trades: Trade[] = [
  { id: 't1', stockId: '1', symbol: 'AAPL', type: 'BUY',
    quantity: 10, price: 175.00, date: '2024-01-15' },
  { id: 't2', stockId: '3', symbol: 'MSFT', type: 'BUY',
    quantity: 5,  price: 360.00, date: '2024-02-20' },
  { id: 't3', stockId: '4', symbol: 'TSLA', type: 'SELL',
    quantity: 8,  price: 265.00, date: '2024-03-10' },
];

export const positionData: Position[] = [
  {
    symbol: "AAPL",
    quantity: 10,
    ltp: 192.45,
    avgPrice: 185.20,
    pnl: 72.50,
    pnlPercent: 3.91
  },
  {
    symbol: "TSLA",
    quantity: 5,
    ltp: 175.20,
    avgPrice: 190.00,
    pnl: -74.00,
    pnlPercent: -7.79
  },
  {
    symbol: "BTC/USD",
    quantity: 0.5,
    ltp: 63450.00,
    avgPrice: 58200.00,
    pnl: 2625.00,
    pnlPercent: 9.02
  },
  {
    symbol: "NVDA",
    quantity: 15,
    ltp: 875.30,
    avgPrice: 450.00,
    pnl: 6379.50,
    pnlPercent: 94.51
  },
  {
    symbol: "MSFT",
    quantity: 8,
    ltp: 415.10,
    avgPrice: 420.50,
    pnl: -43.20,
    pnlPercent: -1.28
  }
];