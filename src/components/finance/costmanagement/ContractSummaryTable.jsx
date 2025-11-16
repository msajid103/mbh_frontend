import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquareText } from 'lucide-react';

const ContractSummaryTable = () => {
    const [expandedSections, setExpandedSections] = useState({
        contract: true,
        variations: true
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const contractItems = [
        {
            id: 1,
            activity: 'Site Preparation',
            originalValue: 50000.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 50000.00,
            percentComplete: 100,
            paidToDate: 50000.00,
            amountRemaining: 0.00,
            amountApproved: 50000.00,
            comments: '$'
        },
        {
            id: 2,
            activity: 'Foundation Groundwork',
            originalValue: 75000.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 75000.00,
            percentComplete: 100,
            paidToDate: 75000.00,
            amountRemaining: 75000.00,
            amountApproved: 0.00,
            comments: '$'
        },
        {
            id: 3,
            activity: 'Structural Framing',
            originalValue: 100000.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 100000.00,
            percentComplete: 100,
            paidToDate: 100000.00,
            amountRemaining: 100000.00,
            amountApproved: 0.00,
            comments: '$'
        },
        {
            id: 4,
            activity: 'Roof Installation',
            originalValue: 25000.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 25000.00,
            percentComplete: 100,
            paidToDate: 25000.00,
            amountRemaining: 25000.00,
            amountApproved: 0.00,
            comments: '$'
        },
        {
            id: 5,
            activity: 'Windows & Doors',
            originalValue: 15000.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 15000.00,
            percentComplete: 88.5,
            paidToDate: 3000.00,
            amountRemaining: 3750.00,
            amountApproved: 0.00,
            comments: '$'
        },
        {
            id: 6,
            activity: 'Interior Work (Drywall)',
            originalValue: 5000.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 5000.00,
            percentComplete: 66.7,
            paidToDate: 0.00,
            amountRemaining: 0.00,
            amountApproved: 5000.00,
            comments: '$'
        },
        {
            id: 7,
            activity: 'Final Inspection',
            originalValue: 2500.00,
            anticipatedVariations: '-',
            approvedVariations: '-',
            revisedContractValue: 2500.00,
            percentComplete: 100,
            paidToDate: 2500.00,
            amountRemaining: 0.00,
            amountApproved: 2500.00,
            comments: '$'
        }
    ];

    const variationItems = [
        {
            id: 1,
            activity: 'Extra power outlets',
            originalValue: '-',
            anticipatedVariations: '-',
            approvedVariations: 12000.00,
            revisedContractValue: 12000.00,
            percentComplete: 100,
            paidToDate: 0.00,
            amountRemaining: 0.00,
            amountApproved: 500.00,
            comments: '$'
        },
        {
            id: 2,
            activity: 'Drainage',
            originalValue: '-',
            anticipatedVariations: 34000.00,
            approvedVariations: 2000.00,
            revisedContractValue: 2000.00,
            percentComplete: 100,
            paidToDate: 0.00,
            amountRemaining: 0.00,
            amountApproved: 1000.00,
            comments: '$'
        }
    ];

    const calculateSubtotal = (items) => {
        return items.reduce((acc, item) => ({
            originalValue: acc.originalValue + (typeof item.originalValue === 'number' ? item.originalValue : 0),
            anticipatedVariations: acc.anticipatedVariations + (typeof item.anticipatedVariations === 'number' ? item.anticipatedVariations : 0),
            approvedVariations: acc.approvedVariations + (typeof item.approvedVariations === 'number' ? item.approvedVariations : 0),
            revisedContractValue: acc.revisedContractValue + (typeof item.revisedContractValue === 'number' ? item.revisedContractValue : 0),
            paidToDate: acc.paidToDate + item.paidToDate,
            amountRemaining: acc.amountRemaining + item.amountRemaining,
            amountApproved: acc.amountApproved + item.amountApproved
        }), {
            originalValue: 0,
            anticipatedVariations: 0,
            approvedVariations: 0,
            revisedContractValue: 0,
            paidToDate: 0,
            amountRemaining: 0,
            amountApproved: 0
        });
    };

    const contractSubtotal = calculateSubtotal(contractItems);
    const variationSubtotal = calculateSubtotal(variationItems);

    const grandTotal = {
        originalValue: contractSubtotal.originalValue + variationSubtotal.originalValue,
        anticipatedVariations: contractSubtotal.anticipatedVariations + variationSubtotal.anticipatedVariations,
        approvedVariations: contractSubtotal.approvedVariations + variationSubtotal.approvedVariations,
        revisedContractValue: contractSubtotal.revisedContractValue + variationSubtotal.revisedContractValue,
        paidToDate: contractSubtotal.paidToDate + variationSubtotal.paidToDate,
        amountRemaining: contractSubtotal.amountRemaining + variationSubtotal.amountRemaining,
        amountApproved: contractSubtotal.amountApproved + variationSubtotal.amountApproved
    };

    const formatCurrency = (value) => {
        if (value === '-' || value === null || value === undefined) return '-';
        return `$ ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    return (


        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    {/* Header */}
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">ID</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Activity</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Original Contract Value</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Anticipated Variations</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Approved Variations</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Revised Contract Value</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Complete</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Paid to date</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Amount Remaining</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Amount Approved</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Comments</th>
                        </tr>
                        {/* <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-4 py-2 text-center text-xs text-gray-600">%</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600">%</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600">$</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600"></th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600"></th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600">$</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600"></th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600">$</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600">$</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600">$</th>
                  <th className="px-4 py-2 text-center text-xs text-gray-600"></th>
                </tr> */}
                    </thead>

                    <tbody>
                        {/* Contract Section */}
                        <tr className="bg-blue-50 border-b border-gray-200">
                            <td colSpan="11" className="px-4 py-2">
                                <button
                                    onClick={() => toggleSection('contract')}
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-900"
                                >
                                    {expandedSections.contract ? (
                                        <ChevronDown className="w-4 h-4" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4" />
                                    )}
                                    Contract
                                </button>
                            </td>
                        </tr>

                        {expandedSections.contract && contractItems.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-900">{item.id}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{item.activity}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.originalValue)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{item.anticipatedVariations}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{item.approvedVariations}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.revisedContractValue)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{item.percentComplete}%</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.paidToDate)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.amountRemaining)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.amountApproved)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">
                                    <button className="p-1 hover:bg-gray-200 rounded">
                                        <MessageSquareText />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Subtotal Contract */}
                        <tr className="bg-gray-100 border-b border-gray-200 font-semibold">
                            <td colSpan="2" className="px-4 py-3 text-sm text-gray-900">Subtotal Contract</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(contractSubtotal.originalValue)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(contractSubtotal.revisedContractValue)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(contractSubtotal.paidToDate)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(contractSubtotal.amountRemaining)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(contractSubtotal.amountApproved)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">$</td>
                        </tr>

                        {/* Variations Section */}
                        <tr className="bg-blue-50 border-b border-gray-200">
                            <td colSpan="11" className="px-4 py-2">
                                <button
                                    onClick={() => toggleSection('variations')}
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-900"
                                >
                                    {expandedSections.variations ? (
                                        <ChevronDown className="w-4 h-4" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4" />
                                    )}
                                    Variations
                                </button>
                            </td>
                        </tr>

                        {expandedSections.variations && variationItems.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-900">{item.id}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{item.activity}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{item.originalValue}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.anticipatedVariations)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.approvedVariations)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.revisedContractValue)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{item.percentComplete}%</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.paidToDate)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.amountRemaining)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(item.amountApproved)}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">
                                    <button className="p-1 hover:bg-gray-200 rounded">
                                        <MessageSquareText />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Subtotal Variations */}
                        <tr className="bg-gray-100 border-b border-gray-200 font-semibold">
                            <td colSpan="2" className="px-4 py-3 text-sm text-gray-900">Subtotal Variations</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(variationSubtotal.anticipatedVariations)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(variationSubtotal.approvedVariations)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(variationSubtotal.revisedContractValue)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900"></td>
                        </tr>

                        {/* Grand Total */}
                        <tr className="bg-blue-100 border-b-2 border-gray-300 font-bold">
                            <td colSpan="2" className="px-4 py-3 text-sm text-gray-900">Totals</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.originalValue)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.anticipatedVariations)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.approvedVariations)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.revisedContractValue)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-center">-</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.paidToDate)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.amountRemaining)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(grandTotal.amountApproved)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">$</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="flex justify-end items-center gap-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <span className="text-sm text-gray-600">submitted amounts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>


    );
};

export default ContractSummaryTable;