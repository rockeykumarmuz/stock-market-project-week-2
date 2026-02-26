import React from 'react';
import type { Stock } from '../types/stockType';
import { useStockStore } from '../hooks/useStockStore';
 
// 1️⃣  Define a Props interface
interface StockCardProps {
  stock: Stock;                          // required object
  onSelect?: (stock: Stock) => void;     // optional callback
  isSelected?: boolean;                  // optional flag
}
 
// 2️⃣  Annotate the component parameter
const StockCard: React.FC<StockCardProps> = ({
  stock,
  onSelect,
  isSelected = false,
}) => {
  const isPositive = stock.change >= 0;
  const {compareList} = useStockStore()

  const handleToggle = () => {
    // need to add the stock to the stockList
    // click again it shoud be removed
    compareList: () => set(stock)
  }
 
  return (
    <div
      onClick={() => onSelect?.(stock)}
      style={{
        border: isSelected ? '2px solid #1E40AF' : '1px solid #D1D5DB',
        borderRadius: 8, padding: 16, cursor: 'pointer',
        background: isSelected ? '#DBEAFE' : '#fff',
        position: 'relative'
      }}
    >
      {stock.isAddedToCompare && <button style={{position: 'absolute', right: '1rem', outline: 'none', border: 'none', background: 'none', fontSize: '1.2rem', cursor: 'pointer'}}>❌</button>}
      <h3>{stock.symbol} — {stock.name}</h3>
      <p>Price: ${stock.price.toFixed(2)}</p>
      <p style={{ color: isPositive ? 'green' : 'red' }}>
        {isPositive ? '+' : ''}{stock.change.toFixed(2)}
        ({stock.changePct.toFixed(2)}%)
      </p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <small>Sector: {stock.sector}</small> 
        <button onClick={handleToggle}> + Compare </button>
      </div>
    </div>
  );
};
 
export default StockCard;
