import React, { useState } from 'react';
import {Plus} from 'lucide-react';
import ContractSummaryTable from './costmanagement/ContractSummaryTable';
import Variations from './costmanagement/Variations';
import ProgressPaymentsDetails from './costmanagement/ProgressPaymentsDetails';

const FinancialSummary = () => {
  const [activeTab, setActiveTab] = useState('current'); 

  const financialData = {
    totalBudget: 333961.58,
    totalExpenses: 33394926.17,
    progressPercentage: 65,
    metrics: {
      originalContract: 9483879.08,
      approvedVariations: 1127.24,
      pendingVariations: 150000.86,
      forecastCost: 12001.48,
      estimatedRevenue: 33394926.17,
      forecastProfit: 1717980.00,
      contractMargin: 8009816.00,
      currentMarginPercentage: 2.55
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">PAID TO DATE</div>
            <div className="text-2xl font-medium text-gray-900">
              $ {financialData.totalBudget.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-[#0891B2] mt-1">Actual</div>
          </div>
          <div className="bg-orange-100  rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">TOTAL EXPENSES</div>
            <div className="text-2xl font-bold text-gray-900">
              $ {financialData.totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-[#F54900] mt-1">Balance</div>
          </div>
        </div>

        {/* Progressbar */}
        <div className="flex items-center h-8 rounded-l overflow-hidden">
          {/* Paid to Date (Actual) - Green */}
          <div
            className="relative flex items-center justify-center bg-gradient-to-r from-green-500 to-green-400 h-full transition-all duration-500"
            style={{ width: `30%` }}
          >
            <span className="text-white text-xs font-semibold px-4 whitespace-nowrap">
              PAID TO DATE (ACTUAL)
            </span>
          </div>

          {/* Blue Divider */}
          <div className="w-1 h-full bg-blue-600 flex-shrink-0"></div>

          {/* Paid to Date (Forecast) - Yellow/Green */}
          <div
            className="relative flex items-center justify-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-300 h-full transition-all duration-500"
            style={{ width: `25%` }}
          >
            <span className="text-white text-xs font-semibold px-4 whitespace-nowrap">
              PAID TO DATE (FORECAST)
            </span>
          </div>

          {/* Blue Divider */}
          <div className="w-1 h-full bg-blue-600 flex-shrink-0"></div>

          {/* Remaining Balance - Orange to Red */}
          <div
            className="relative flex items-center justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 h-full transition-all duration-500"
            style={{ width: `45%` }}
          >
            <span className="text-white text-xs font-semibold px-4 whitespace-nowrap">
              REMAINING BALANCE
            </span>
          </div>
        </div>

        {/* Financial Summary */}

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Financial Summary</h2>

          {/* Financial Details Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 mb-8">
            {/* Left Column */}
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Original Contract</span>
              <span className="font-semibold text-gray-900">$ 33,449,272.00</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Claimed to Date</span>
              <span className="font-semibold text-gray-900">$ 4,502,638.33</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Approved Variations</span>
              <span className="font-semibold text-gray-900">$ 1,127,223.00</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Approved to Date</span>
              <span className="font-semibold text-gray-900">$ 781,568.83</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Total Contract Value</span>
              <span className="font-semibold text-gray-900">$ 34,576,495.00</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Paid to Date</span>
              <span className="font-semibold text-gray-900">$ 38,878.75</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Forecast Cost</span>
              <span className="font-semibold text-gray-900">$ 35,120,000.00</span>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Forecast vs Budget</span>
              <span className="font-semibold text-red-600">+$ 543,505.00 (+1.57%)</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* Contract Value Remaining */}
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <div className="text-sm text-gray-600 mb-2">Contract Value Remaining</div>
              <div className="text-2xl font-medium text-gray-900">$ 33,994,926.17</div>
            </div>

            {/* Retention Remaining */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Retention Remaining</div>
              <div className="text-2xl font-medium text-gray-900">$ 1,717,949.00</div>
            </div>

            {/* Retention Remaining (%) */}
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <div className="text-sm text-gray-600 mb-2">Retention Remaining (%)</div>
              <div className="text-2xl font-medium text-gray-900">2.25%</div>
            </div>
          </div>
        </div>


         {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('current')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'current'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Current Summary
          </button>
          <button
            onClick={() => setActiveTab('variations')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'variations'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Variations
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'progress'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Progress Payments
          </button>
          <button className="ml-auto btn-primary">
            <Plus className="w-4 h-4" />
            Create Variation
          </button>
          <button className="btn-primary">
            <Plus className="w-4 h-4" />
            Create a Claim
          </button>
        </div>  


        {activeTab == 'current' && <ContractSummaryTable/>}    
        {activeTab == 'variations' && <Variations/>}    
        {activeTab == 'progress' && <ProgressPaymentsDetails/>}    
      </div>
    </div>
  );
};

export default FinancialSummary;