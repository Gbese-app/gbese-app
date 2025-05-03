import { DashboardEntry } from "../../hook/dumy-data";

type Column = {
  key: string;
  label: string;
  width?: string;
};

export type FixedTableProps = {
  columns: Column[];
  data: DashboardEntry[];
};

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
                  style={{ width: col.width || "auto" }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
                <tr key={i} className="even:bg-gray-50 hover:bg-gray-100">
                {columns.map((col, j) => {
                    const value = row[col.key as keyof DashboardEntry];
                    let cellClass = "px-4 py-2 border-none";

                    // Conditional styling for 'Status'
                    if (col.key === "Status") {
                    switch (value) {
                        case "Completed":
                        cellClass += " text-green-600 font-medium";
                        break;
                        case "Pending":
                        cellClass += " text-yellow-600 font-medium";
                        break;
                        case "Failed":
                        cellClass += " text-red-600 font-medium";
                        break;
                        default:
                        cellClass += " text-gray-600";
                    }
                    }

                    return (
                    <td key={j} className={cellClass}>
                        {value}
                    </td>
                    );
                })}
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default FixedTable;