import { positionData } from "../data/stockData"
import type { Column, Position } from "../types/stockType"
import DataTable from "./DataTable"

export const columnsData: Column<Position>[] = [
{key: 'symbol', header: 'Symbol'},
{key: 'quantity', header: 'Quantity'},
{key: 'ltp', header: 'LTP'},
{key: 'avgPrice', header: 'Avg. Price'},
{key: 'pnl', header: 'P&L', render: (row) => {
  const pnlVal = Number(row)
  return <strong style={{ color: (pnlVal >= 0) ? 'green' : 'red' }}>{row}</strong>
}},
{key: 'pnlPercent', header: 'P&L %', render: (row) => {
  const pnlPercent = Number(row)
  return <strong style={{ color: (pnlPercent >= 0) ? 'green' : 'red' }}>{row}</strong>
}}
]

const PositionTable = () => {
  return (
    <div>
      <DataTable data={positionData} columns={columnsData} rowKey="quantity" />
    </div> 
  )
}

export default PositionTable
