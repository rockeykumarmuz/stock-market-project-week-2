import { holdings } from "../data/stockData"
import type { Column, Holding } from "../types/stockType"
import DataTable from "./DataTable"

export const columnsData: Column<Holding>[] = [
{key: 'symbol', header: 'Symbol'},
{key: 'qty', header: 'Quantity'},
{key: 'investedValue', header: 'Invested Value'},
{key: 'currentValue', header: 'Current Value'},
{key: 'totalReturn', header: 'Total Return'},
]

const HoldingTable = () => {
  return (
    <div>
      <DataTable data={holdings} columns={columnsData} rowKey={"symbol"} />
    </div>
  )
}

export default HoldingTable
