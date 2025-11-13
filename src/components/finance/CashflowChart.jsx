import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CashflowChart = () => {
  // Dummy data
  const data = [
    { month: 'Jul', balance: -50000, expenses: 120000 },
    { month: 'Aug', balance: -120000, expenses: 125000 },
    { month: 'Sep', balance: -200000, expenses: 130000 },
    { month: 'Oct', balance: -280000, expenses: 145000 },
    { month: 'Nov', balance: -420000, expenses: 155000 },
    { month: 'Dec', balance: -520000, expenses: 150000 }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Cashflow Analysis</h2>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="month" 
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '12px'
            }}
            formatter={(value) => `$${value.toLocaleString()}`}
          />
          <Legend 
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '14px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="balance" 
            stroke="#06B6D4" 
            strokeWidth={2}
            dot={{ fill: '#06B6D4', r: 4 }}
            activeDot={{ r: 6 }}
            name="Balance"
          />
          <Line 
            type="monotone" 
            dataKey="expenses" 
            stroke="#EF4444" 
            strokeWidth={2}
            dot={{ fill: '#EF4444', r: 4 }}
            activeDot={{ r: 6 }}
            name="Expenses"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashflowChart;