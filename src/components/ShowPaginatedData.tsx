import { useEffect, useMemo, useState } from "react"
import DataTable from "./DataTable"
import { marketData } from "../data/stockData"
import type { Column, MarketData } from "../types/stockType"
import Pagination from "./Pagination"

const DATA_PER_PAGE = 5

 const columnsData: Column<MarketData>[] = [
    { header: "Symbol", key: "symbol" },
    { header: "Name", key: "name" },
    { header: "Price", key: "price", render: () => {
      return 
    } },
    { header: "Change", key: "change" },
    { header: "Change %", key: "changePercent" },
    { header: "Volume", key: "volume" },
  ]

const ShowPaginatedData = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  // ✅ FILTER FIRST (returns full data if search is empty)
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return marketData

    return marketData.filter(item =>
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  // ✅ Recalculate total pages after filtering
  const totalPage = Math.ceil(filteredData.length / DATA_PER_PAGE)

  // ✅ If page goes out of range after filtering, reset it
  useEffect(() => {
    if (pageIndex > totalPage - 1) {
      setPageIndex(0)
    }
  }, [filteredData, totalPage, pageIndex])

  // ✅ PAGINATE AFTER FILTERING
  const startIndex = pageIndex * DATA_PER_PAGE
  const endIndex = startIndex + DATA_PER_PAGE

  const currentData = filteredData.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(prev => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (pageIndex < totalPage - 1) {
      setPageIndex(prev => prev + 1)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPageIndex(0) // reset to first page when searching
  }

  return (
    <div>
      {/* 🔎 Search Input */}
      <input
        type="text"
        placeholder="Search by symbol..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          marginBottom: "16px",
          padding: "8px",
          width: "250px"
        }}
      />
      <DataTable data={currentData} columns={columnsData} rowKey={"symbol"} />
      <Pagination pageIndex={pageIndex}
        totalPage={totalPage}
        startIndex={startIndex}
        endIndex={endIndex}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage} />
    </div>
  )
}

export default ShowPaginatedData


