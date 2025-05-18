import { DashboardEntry } from '../../hook/dumy-data'
import { convertDate, getCurrentUserAccount } from '../../lib/helpers'

type Column = {
  key: string
  label: string
  width?: string
}

export type FixedTableProps = {
  columns: Column[]
  data: DashboardEntry[]
}

function FixedTable({ columns, data }: FixedTableProps) {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className=" rounded-lg shadow-md max-h-96 overflow-y-auto">
        <table className="min-w-full table-fixed border-collapse text-xs">
          <thead className="sticky top-0 z-10">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="text-left px-4 py-2 font-medium border-b border-gray-300"
                  style={{ width: col.width || 'auto' }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="even:bg-gray-50 hover:bg-gray-100">
                <td className='px-4 py-2 border-none'>
                  {row.category}
                </td>
                <td className='px-4 py-2 border-none'>
                  {convertDate(row.createdAt)}
                </td>
                <td className='px-4 py-2 border-none'>
                  {getCurrentUserAccount(row.balanceAfter - row.balanceBefore)}
                </td>
                <td
                  className={`px-4 py-2 font-medium ${
                    row.status === 'success'
                      ? 'text-green-600'
                      : row.status === 'pending'
                      ? 'text-yellow-600'
                      : row.status === 'failed'
                      ? 'text-red-600'
                      : 'text-gray-600'
                  }`}
                >
                  {row.status}
                </td>
                <td className='px-4 py-2 border-none'>
                  {row.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FixedTable
