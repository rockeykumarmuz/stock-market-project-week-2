import { useMemo, useState } from "react"

type SortDirection = "asc" | "desc"

interface SortConfig<T> {
  key: keyof T
  direction: SortDirection
}

export function useSortableData<T>(data: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null)

  const sortedData = useMemo(() => {
    if (!sortConfig) return data

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue === bValue) return 0

      if (aValue === null || aValue === undefined) return -1
      if (bValue === null || bValue === undefined) return 1

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1
      }

      return sortConfig.direction === "asc" ? 1 : -1
    })

    return sorted
  }, [data, sortConfig])

  const requestSort = (key: keyof T) => {
    let direction: SortDirection = "asc"

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc"
    }

    setSortConfig({ key, direction })
  }

  return { sortedData, requestSort, sortConfig }
}