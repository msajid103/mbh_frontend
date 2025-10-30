import React from "react";

const TABS = ["Budget Tracking", "Variations", "Progress Payments", "Cashflow"];

const BudgetTabs = ({ active, onChange }) => {
  return (
    <div className="flex items-center justify-between border-b pb-3 mt-6 mb-4">
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const selected = active === tab;
          return (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition
                ${selected ? "bg-blue-600 text-white shadow-sm" : "bg-transparent text-gray-600 hover:bg-gray-100"}`}
              aria-pressed={selected}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetTabs;
