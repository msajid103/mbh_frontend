import React, { useState } from 'react';
import CashflowTable from './CashflowTable';
import CashflowChart from './CashflowChart';

const CashflowAnalysis = () => {
  return (
    <div className="bg-gray-50">
      <div className="space-y-6">
        <CashflowChart />
        <CashflowTable/>
      </div>
    </div>
  );
};

export default CashflowAnalysis;