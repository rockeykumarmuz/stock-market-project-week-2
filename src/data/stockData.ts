import type { Holding, MarketData, Position, Stock, Trade } from '../types/stockType';
 
export const stocks: Stock[] = [
  { id: '1', symbol: 'AAPL', name: 'Apple Inc.',
    price: 189.30, change: 2.15, changePct: 1.15,
    volume: 54_200_000, marketCap: 2_950_000_000_000, sector: 'Technology', isAddedToCompare: false },
  { id: '2', symbol: 'GOOGL', name: 'Alphabet Inc.',
    price: 141.80, change: -0.95, changePct: -0.67,
    volume: 22_300_000, marketCap: 1_770_000_000_000, sector: 'Technology', isAddedToCompare: false },
  { id: '3', symbol: 'MSFT', name: 'Microsoft Corp.',
    price: 378.90, change: 4.20, changePct: 1.12,
    volume: 19_600_000, marketCap: 2_810_000_000_000, sector: 'Technology', isAddedToCompare: false },
  { id: '4', symbol: 'TSLA', name: 'Tesla Inc.',
    price: 248.50, change: -7.30, changePct: -2.85,
    volume: 98_700_000, marketCap: 791_000_000_000, sector: 'Automotive', isAddedToCompare: false },
  { id: '5', symbol: 'JPM',  name: 'JPMorgan Chase',
    price: 196.40, change: 1.05, changePct: 0.54,
    volume: 8_900_000, marketCap: 568_000_000_000, sector: 'Finance', isAddedToCompare: false },
];
 
export const trades: Trade[] = [
  { id: 't1', stockId: '1', symbol: 'AAPL', type: 'BUY',
    quantity: 10, price: 175.00, date: '2024-01-15' },
  { id: 't2', stockId: '3', symbol: 'MSFT', type: 'BUY',
    quantity: 5,  price: 360.00, date: '2024-02-20' },
  { id: 't3', stockId: '4', symbol: 'TSLA', type: 'SELL',
    quantity: 8,  price: 265.00, date: '2024-03-10' },
    { id: 't4', stockId: '1', symbol: 'AAPL', type: 'BUY',
    quantity: 10, price: 175.00, date: '2024-01-15' },
  { id: 't5', stockId: '3', symbol: 'MSFT', type: 'BUY',
    quantity: 5,  price: 360.00, date: '2024-02-20' },
  { id: 't6', stockId: '4', symbol: 'TSLA', type: 'SELL',
    quantity: 8,  price: 265.00, date: '2024-03-10' },
    { id: 't7', stockId: '1', symbol: 'AAPL', type: 'BUY',
    quantity: 10, price: 175.00, date: '2024-01-15' },
  { id: 't8', stockId: '3', symbol: 'MSFT', type: 'BUY',
    quantity: 5,  price: 360.00, date: '2024-02-20' },
  { id: 't9', stockId: '4', symbol: 'TSLA', type: 'SELL',
    quantity: 8,  price: 265.00, date: '2024-03-10' },
    { id: 't10', stockId: '3', symbol: 'MSFT', type: 'BUY',
    quantity: 5,  price: 360.00, date: '2024-02-20' },
  { id: 't11', stockId: '4', symbol: 'TSLA', type: 'SELL',
    quantity: 8,  price: 265.00, date: '2024-03-10' },
    { id: 't12', stockId: '1', symbol: 'AAPL', type: 'BUY',
    quantity: 10, price: 175.00, date: '2024-01-15' },
  { id: 't13', stockId: '3', symbol: 'MSFT', type: 'BUY',
    quantity: 5,  price: 360.00, date: '2024-02-20' },
  { id: 't14', stockId: '4', symbol: 'TSLA', type: 'SELL',
    quantity: 8,  price: 265.00, date: '2024-03-10' }
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

export const holdings: Holding[] = [
  {
    symbol: "AAPL",
    qty: 50,
    investedValue: 7500,
    currentValue: 9200,
    totalReturn: 1700,
  },
  {
    symbol: "GOOGL",
    qty: 10,
    investedValue: 12000,
    currentValue: 13500,
    totalReturn: 1500,
  },
  {
    symbol: "TSLA",
    qty: 15,
    investedValue: 9000,
    currentValue: 8400,
    totalReturn: -600,
  },
  {
    symbol: "AMZN",
    qty: 8,
    investedValue: 10000,
    currentValue: 11200,
    totalReturn: 1200,
  },
  {
    symbol: "MSFT",
    qty: 20,
    investedValue: 6000,
    currentValue: 7800,
    totalReturn: 1800,
  },
];

export const marketData: MarketData[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 192.34, change: 1.24, changePercent: 0.65, volume: 74235621 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 410.12, change: -2.15, changePercent: -0.52, volume: 31245678 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 145.67, change: 0.89, changePercent: 0.61, volume: 21547896 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.45, change: -1.34, changePercent: -0.75, volume: 28765432 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 238.91, change: 3.56, changePercent: 1.51, volume: 65432109 },
  { symbol: "META", name: "Meta Platforms Inc.", price: 502.78, change: 4.21, changePercent: 0.84, volume: 19876543 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 721.44, change: -5.67, changePercent: -0.78, volume: 45678912 },
  { symbol: "NFLX", name: "Netflix Inc.", price: 612.33, change: 2.89, changePercent: 0.47, volume: 14325678 },
  { symbol: "AMD", name: "Advanced Micro Devices", price: 168.54, change: -0.98, changePercent: -0.58, volume: 24567891 },
  { symbol: "INTC", name: "Intel Corp.", price: 42.76, change: 0.34, changePercent: 0.80, volume: 37894561 },
  { symbol: "ORCL", name: "Oracle Corp.", price: 129.88, change: -1.12, changePercent: -0.85, volume: 16789432 },
  { symbol: "IBM", name: "IBM Corp.", price: 189.45, change: 1.56, changePercent: 0.83, volume: 11234567 },
  { symbol: "BABA", name: "Alibaba Group", price: 82.34, change: -0.76, changePercent: -0.91, volume: 29876543 },
  { symbol: "UBER", name: "Uber Technologies", price: 71.29, change: 1.03, changePercent: 1.47, volume: 25678901 },
  { symbol: "LYFT", name: "Lyft Inc.", price: 18.92, change: -0.21, changePercent: -1.10, volume: 9876543 },
  { symbol: "SHOP", name: "Shopify Inc.", price: 78.56, change: 2.45, changePercent: 3.22, volume: 13456789 },
  { symbol: "SQ", name: "Block Inc.", price: 69.14, change: -1.45, changePercent: -2.05, volume: 15678943 },
  { symbol: "PYPL", name: "PayPal Holdings", price: 63.87, change: 0.67, changePercent: 1.06, volume: 17654329 },
  { symbol: "ADBE", name: "Adobe Inc.", price: 563.22, change: -3.78, changePercent: -0.67, volume: 12345678 },
  { symbol: "CRM", name: "Salesforce Inc.", price: 287.90, change: 1.89, changePercent: 0.66, volume: 14567890 },
];