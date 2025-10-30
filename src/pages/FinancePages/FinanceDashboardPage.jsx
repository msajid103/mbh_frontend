

import React from 'react';
import {
  DollarSign, FileText, TrendingUp, Clock,
  Download, Plus, Eye, ChevronDown, Filter,
  Pencil,
  Trash2
} from 'lucide-react';

// Redux Slice (financialSlice.js)
const initialState = {
  budgetMetrics: {
    totalBudget: 1250000,
    totalBudgetChange: 2.5,
    fec: 1180500,
    fecChange: -1.2,
    costToDate: 892350,
    costToDateChange: 8.3,
    remainingBudget: 357650,
    remainingBudgetChange: -5.1
  },
  cashflowData: [
    { month: 'Jan', planned: 45000, actual: 42000 },
    { month: 'Feb', planned: 55000, actual: 62000 },
    { month: 'Mar', planned: 48000, actual: 38000 },
    { month: 'Apr', planned: 75000, actual: 68000 },
    { month: 'May', planned: 70000, actual: 65000 },
    { month: 'Jun', planned: 85000, actual: 78000 },
    { month: 'Jul', planned: 65000, actual: 58000 },
    { month: 'Aug', planned: 55000, actual: 48000 },
    { month: 'Sep', planned: 60000, actual: 52000 },
    { month: 'Oct', planned: 70000, actual: 0 },
    { month: 'Nov', planned: 65000, actual: 0 },
    { month: 'Dec', planned: 72000, actual: 0 }
  ],
  cumulativeData: [
    { month: 'Jan', cfc: 180000, actual: 175000 },
    { month: 'Feb', cfc: 220000, actual: 215000 },
    { month: 'Mar', cfc: 280000, actual: 268000 },
    { month: 'Apr', cfc: 350000, actual: 335000 },
    { month: 'May', cfc: 425000, actual: 408000 },
    { month: 'Jun', cfc: 505000, actual: 485000 },
    { month: 'Jul', cfc: 580000, actual: 558000 },
    { month: 'Aug', cfc: 650000, actual: 625000 },
    { month: 'Sep', cfc: 720000, actual: 695000 },
    { month: 'Oct', cfc: 795000, actual: 735000 },
    { month: 'Nov', cfc: 880000, actual: 820000 },
    { month: 'Dec', cfc: 965000, actual: 892350 }
  ],
  costBreakdown: [
    { category: 'Labour', amount: 325000, percentage: 36 },
    { category: 'Materials', amount: 285000, percentage: 32 },
    { category: 'Equipment', amount: 165000, percentage: 19 },
    { category: 'Subcontractors', amount: 117350, percentage: 14 }
  ],
  claimsPayments: {
    lastClaim: { amount: 125000, date: 'Sep 15, 2024' },
    nextClaim: { amount: 118000, date: 'Oct 15, 2024' },
    totalClaimed: 892350
  },
  variations: {
    pendingReview: { count: 8, amount: 45200 },
    approved: { count: 12, amount: 68500 },
    rejected: { count: 3, amount: 12800 },
    total: { count: 23, amount: 126500 }
  },
  invoices: [
    {
      id: 'INV-2024-045',
      vendor: 'ABC Construction',
      description: 'Structural work - Phase 2',
      category: 'Labour',
      amount: 45000,
      dueDate: '2024-05-15',
      status: 'pending'
    },
    {
      id: 'INV-2024-046',
      vendor: 'Steel Suppliers Co',
      description: 'Steel materials delivery',
      category: 'Materials',
      amount: 32000,
      dueDate: '2024-05-18',
      status: 'pending'
    },
    {
      id: 'INV-2024-047',
      vendor: 'Equipment Hire Ltd',
      description: 'Crane rental - May',
      category: 'Equipment',
      amount: 12500,
      dueDate: '2024-05-20',
      status: 'overdue'
    },
    {
      id: 'INV-2024-048',
      vendor: 'Electrical Contractors',
      description: 'Electrical installation',
      category: 'Subcontractors',
      amount: 28000,
      dueDate: '2024-05-22',
      status: 'pending'
    }
  ]
};

// MetricCard Component
const MetricCard = ({ icon: Icon, title, amount, change, color }) => {
  const isPositive = change > 0;
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
  const bgColor = color || 'bg-blue-500';

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div className={`${bgColor} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center text-sm ${changeColor}`}>
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>{isPositive ? '+' : ''}{change}%</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold mt-1">
          ${amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

// CashflowChart Component
const CashflowChart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.planned, d.actual)));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Cashflow Analysis (Monthly)</h3>
      <div className="flex items-end justify-between h-64 gap-1">
        {data.map((item, idx) => {
          const plannedHeight = (item.planned / maxValue) * 100;
          const actualHeight = (item.actual / maxValue) * 100;

          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex justify-center items-end h-56 gap-0.5">
                {item.actual > 0 && (
                  <div
                    className="bg-blue-500 w-full rounded-t"
                    style={{ height: `${actualHeight}%` }}
                  />
                )}
                {item.planned > 0 && item.actual === 0 && (
                  <div
                    className="bg-cyan-400 w-full rounded-t"
                    style={{ height: `${plannedHeight}%` }}
                  />
                )}
              </div>
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full" />
          <span className="text-sm text-gray-600">Planned</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <span className="text-sm text-gray-600">Actual</span>
        </div>
      </div>
    </div>
  );
};

// ExpenseBudgetCircle Component
const ExpenseBudgetCircle = () => {
  const percentage = 93;
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-6">% of Expenses Budget</h3>
      <div className="flex justify-center items-center h-64">
        <div className="relative">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="#3b82f6"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold">{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// CumulativeChart Component
const CumulativeChart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.cfc, d.actual)));
  const width = 600;
  const height = 200;
  const padding = 40;

  const xScale = (index) => padding + (index / (data.length - 1)) * (width - 2 * padding);
  const yScale = (value) => height - padding - ((value / maxValue) * (height - 2 * padding));

  const cfcPath = data.map((d, i) =>
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.cfc)}`
  ).join(' ');

  const actualPath = data.map((d, i) =>
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.actual)}`
  ).join(' ');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Cumulative Forecast Cost vs Actual</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full" />
            <span className="text-sm text-gray-600">CFC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-gray-600">Actual</span>
          </div>
        </div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
        <path d={cfcPath} fill="none" stroke="#22d3ee" strokeWidth="3" />
        <path d={actualPath} fill="none" stroke="#3b82f6" strokeWidth="3" />
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={xScale(i)} cy={yScale(d.cfc)} r="4" fill="#22d3ee" />
            <circle cx={xScale(i)} cy={yScale(d.actual)} r="4" fill="#3b82f6" />
            <text x={xScale(i)} y={height - 10} textAnchor="middle" fontSize="12" fill="#6b7280">
              {d.month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// CostBreakdown Component
const CostBreakdown = ({ data, total }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Cost Breakdown</h3>
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700">{item.category}</span>
              <span className="font-semibold">${item.amount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-900 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-500 w-10">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Total Spent</span>
          <span className="font-semibold">${total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

// ClaimsPayments Component
const ClaimsPayments = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Claims & Payments</h3>
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Last Claim</p>
          <p className="text-2xl font-bold text-gray-900">
            ${data.lastClaim.amount.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">{data.lastClaim.date}</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Next Claim</p>
          <p className="text-2xl font-bold text-gray-900">
            ${data.nextClaim.amount.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">{data.nextClaim.date}</p>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Total Claimed</span>
            <span className="text-lg font-semibold">${data.totalClaimed.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <button className="w-full mt-6 bg-blue-500 text-white py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
        Submit New Claim
      </button>
    </div>
  );
};

// Variations Component
const Variations = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Variations</h3>
      <div className="space-y-3">
        <div className="border border-yellow-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Pending Review</span>
            <span className="text-blue-600 font-semibold">
              ${data.pendingReview.amount.toLocaleString()}
            </span>
          </div>
          <p className="text-2xl font-bold mt-1">{data.pendingReview.count}</p>
        </div>
        <div className="border border-green-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Approved</span>
            <span className="text-blue-600 font-semibold">
              ${data.approved.amount.toLocaleString()}
            </span>
          </div>
          <p className="text-2xl font-bold mt-1">{data.approved.count}</p>
        </div>
        <div className="border border-red-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Rejected</span>
            <span className="text-blue-600 font-semibold">
              ${data.rejected.amount.toLocaleString()}
            </span>
          </div>
          <p className="text-2xl font-bold mt-1">{data.rejected.count}</p>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Variations</p>
            <p className="text-lg font-semibold">{data.total.count} items</p>
          </div>
          <div className="text-right">
            <p className="text-blue-600 font-semibold">
              ${data.total.amount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// InvoiceTable Component
const InvoiceTable = ({ invoices }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Upcoming Invoices for Payment</h3>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4" />
            Add Invoice
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice #</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vendor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.vendor}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.description}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.category}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  ${invoice.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.dueDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${invoice.status === 'pending' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-4 flex justify-center gap-2">
                  <button
                    className="p-1 border-2 rounded-lg border-blue-300 flex items-center justify-center"
                    title="View Contingency"
                  >
                    <Eye className="text-blue-600" size={16} />
                  </button>
                  <button
                    className="p-1 border-2 rounded-lg border-green-300 flex items-center justify-center"
                  >
                    <Pencil className="text-green-600" size={16} />
                  </button>
                  <button
                    onClick={() => console.log("Delete contingency")}
                    className="p-1 border-2 rounded-lg border-red-300 flex items-center justify-center"
                  >
                    <Trash2 className="text-red-600" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Dashboard Component
const FinanceDashboardPage = () => {
  const data = initialState;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">
              Track budgets, costs, variations, and financial performance
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span className="text-sm">Current Month</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Download className="w-4 h-4" />
              <span className="text-sm">Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={DollarSign}
            title="Total Budget"
            amount={data.budgetMetrics.totalBudget}
            change={data.budgetMetrics.totalBudgetChange}
            color="bg-blue-500"
          />
          <MetricCard
            icon={FileText}
            title="FEC (Final Estimated Cost)"
            amount={data.budgetMetrics.fec}
            change={data.budgetMetrics.fecChange}
            color="bg-blue-500"
          />
          <MetricCard
            icon={TrendingUp}
            title="Cost to Date"
            amount={data.budgetMetrics.costToDate}
            change={data.budgetMetrics.costToDateChange}
            color="bg-blue-500"
          />
          <MetricCard
            icon={Clock}
            title="Remaining Budget"
            amount={data.budgetMetrics.remainingBudget}
            change={data.budgetMetrics.remainingBudgetChange}
            color="bg-blue-500"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CashflowChart data={data.cashflowData} />
          </div>
          <ExpenseBudgetCircle />
        </div>

        {/* Cumulative Chart */}
        <CumulativeChart data={data.cumulativeData} />

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CostBreakdown
            data={data.costBreakdown}
            total={data.claimsPayments.totalClaimed}
          />
          <ClaimsPayments data={data.claimsPayments} />
          <Variations data={data.variations} />
        </div>

        {/* Invoice Table */}
        <InvoiceTable invoices={data.invoices} />
      </div>
    </div>
  );
};

export default FinanceDashboardPage;