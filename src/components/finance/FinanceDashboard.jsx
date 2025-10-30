import React, { useState } from "react";
import FinanceHeaderCards from "./FinanceHeaderCards";
import TopActions from "./TopActions";
import BudgetTabs from "./BudgetTabs";
import BudgetBreakdownTable from "./BudgetBreakdownTable";

const FinanceDashboard = () => {
  const [activeTab, setActiveTab] = useState("Budget Tracking");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="pb-2">
          <h2 className="text-[15px] font-semibold text-gray-700">
            Budget Tracking & Financial Management
          </h2>
          <p className="text-sm text-gray-500">
            Riverside Residential Development
          </p>
        </div>
        <TopActions />
      </div>

      {/* Header cards */}
      <FinanceHeaderCards />

      {/* Tabs */}
      <BudgetTabs active={activeTab} onChange={setActiveTab} />

      {/* Tab Content */}
      {activeTab === "Budget Tracking" && <BudgetBreakdownTable />}

      {activeTab === "Progress Payments" && (
        <div className="bg-white p-6 rounded-2xl border shadow-sm text-sm text-gray-600">
          Progress Payments — coming soon.
        </div>
      )}

      {activeTab === "Cashflow" && (
        <div className="bg-white p-6 rounded-2xl border shadow-sm text-sm text-gray-600">
          Cashflow chart + editable table will be added in the next step.
        </div>
      )}
    </div>
  );
};

export default FinanceDashboard;
