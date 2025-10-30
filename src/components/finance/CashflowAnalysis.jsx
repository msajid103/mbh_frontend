import React, { useState } from 'react';

// Redux Slice Data (cashflowSlice.js)
const initialState = {
  cashflowData: [
    { month: 'Jul', balance: -45000, expenses: 45000 },
    { month: 'Aug', balance: -130000, expenses: 85000 },
    { month: 'Sep', balance: -205000, expenses: 75000 },
    { month: 'Oct', balance: -300000, expenses: 95000 },
    { month: 'Nov', balance: -420000, expenses: 120000 },
    { month: 'Dec', balance: -505000, expenses: 85000 }
  ],
  monthlyBreakdown: [
    { month: 'Jul', expenses: 45000, net: -45000, runningBalance: -45000 },
    { month: 'Aug', expenses: 85000, net: -85000, runningBalance: -130000 },
    { month: 'Sep', expenses: 75000, net: -75000, runningBalance: -205000 },
    { month: 'Oct', expenses: 95000, net: -95000, runningBalance: -300000 },
    { month: 'Nov', expenses: 120000, net: -120000, runningBalance: -420000 },
    { month: 'Dec', expenses: 85000, net: -85000, runningBalance: -505000 }
  ]
};

// CashflowChart Component
const CashflowChart = ({ data }) => {
  const width = 800;
  const height = 300;
  const padding = { top: 40, right: 40, bottom: 60, left: 80 };
  
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate scales
  const maxExpenses = Math.max(...data.map(d => d.expenses));
  const minBalance = Math.min(...data.map(d => d.balance));
  const maxY = Math.ceil(maxExpenses / 100000) * 100000;
  const minY = Math.floor(minBalance / 100000) * 100000;
  const yRange = maxY - minY;

  const xScale = (index) => padding.left + (index / (data.length - 1)) * chartWidth;
  const yScale = (value) => padding.top + ((maxY - value) / yRange) * chartHeight;

  // Generate paths
  const balancePath = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.balance)}`
  ).join(' ');

  const expensesPath = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.expenses)}`
  ).join(' ');

  // Y-axis ticks
  const yTicks = [];
  for (let i = minY; i <= maxY; i += 200000) {
    yTicks.push(i);
  }

  // Zero line position
  const zeroY = yScale(0);

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Cashflow Analysis</h3>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid lines */}
        {yTicks.map((tick, idx) => (
          <g key={idx}>
            <line
              x1={padding.left}
              y1={yScale(tick)}
              x2={width - padding.right}
              y2={yScale(tick)}
              stroke="#e5e7eb"
              strokeDasharray="2,2"
            />
            <text
              x={padding.left - 10}
              y={yScale(tick)}
              textAnchor="end"
              alignmentBaseline="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {tick / 1000}
            </text>
          </g>
        ))}

        {/* Zero line (stronger) */}
        <line
          x1={padding.left}
          y1={zeroY}
          x2={width - padding.right}
          y2={zeroY}
          stroke="#9ca3af"
          strokeWidth="1"
        />

        {/* Balance line */}
        <path
          d={balancePath}
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2.5"
        />

        {/* Expenses line */}
        <path
          d={expensesPath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2.5"
        />

        {/* Data points */}
        {data.map((d, i) => (
          <g key={i}>
            {/* Balance point */}
            <circle
              cx={xScale(i)}
              cy={yScale(d.balance)}
              r="4"
              fill="#06b6d4"
              stroke="white"
              strokeWidth="2"
            />
            
            {/* Expenses point */}
            <circle
              cx={xScale(i)}
              cy={yScale(d.expenses)}
              r="4"
              fill="#ef4444"
              stroke="white"
              strokeWidth="2"
            />

            {/* X-axis labels */}
            <text
              x={xScale(i)}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {d.month}
            </text>
          </g>
        ))}

        {/* Y-axis label */}
        <text
          x={padding.left - 60}
          y={height / 2}
          textAnchor="middle"
          fontSize="12"
          fill="#6b7280"
          transform={`rotate(-90, ${padding.left - 60}, ${height / 2})`}
        >
          Amount (Thousands)
        </text>
      </svg>

      {/* Legend */}
      <div className="flex justify-center items-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
          <span className="text-sm text-gray-600">Balance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600">Expenses</span>
        </div>
      </div>
    </div>
  );
};

// MonthlyBreakdown Component
const MonthlyBreakdown = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Monthly Breakdown</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Month
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Expenses
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Net
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Running Balance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{row.month}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-red-600">
                    ${row.expenses.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    -${Math.abs(row.net).toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-red-600">
                    -${Math.abs(row.runningBalance).toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main CashflowAnalysis Component
const CashflowAnalysis = () => {
  const [data] = useState(initialState);

  return (
    <div className="bg-gray-50">
      <div className="space-y-6">
        {/* Cashflow Chart */}
        <CashflowChart data={data.cashflowData} />

        {/* Monthly Breakdown Table */}
        <MonthlyBreakdown data={data.monthlyBreakdown} />
      </div>
    </div>
  );
};

export default CashflowAnalysis;