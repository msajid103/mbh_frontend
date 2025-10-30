import React, { useState } from "react";
import FinanceHeaderCards from "./FinanceHeaderCards";
import TopActions from "./TopActions";
import BudgetTabs from "./BudgetTabs";
import BudgetBreakdownTable from "./BudgetBreakdownTable";
import VariationOrders from "./VariationOrders ";
import ProgressPayments from "./ProgressPayments";
import CashflowAnalysis from "./CashflowAnalysis";

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
      {activeTab === "Variations" && <VariationOrders />}
      {activeTab === "Progress Payments" && <ProgressPayments/>}
      {activeTab === "Cashflow" && <CashflowAnalysis/>}
    </div>
  );
};

export default FinanceDashboard;
