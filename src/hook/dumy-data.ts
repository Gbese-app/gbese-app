export type Header = {
  name: string
  date: string
  amount: string
  status: string
  action: string
}

export type DashboardEntry = {
  name: string
  date: string // e.g., "2025/04/25"
  Amount: string // e.g., "$1,200.00"
  Status: string
  Action: string
}

export const DashboardTH = [
  { key: 'name', label: 'Name', width: '200px' },
  { key: 'date', label: 'Date', width: '300px' },
  { key: 'Amount', label: 'Amount', width: '300px' },
  { key: 'Status', label: 'Status', width: '300px' },
  { key: 'Action', label: 'Action', width: '300px' },
]

export const DashboardData = [
  {
    name: 'Alice Johnson',
    date: '2025/04/25',
    Amount: '$1,200.00',
    Status: 'Completed',
    Action: 'View',
  },
  {
    name: 'Bob Smith',
    date: '2025/04/28',
    Amount: '$450.50',
    Status: 'Pending',
    Action: 'Approve',
  },
  {
    name: 'Charlie Lee',
    date: '2025/04/30',
    Amount: '$980.00',
    Status: 'Failed',
    Action: 'Retry',
  },
]

export const BarChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]
