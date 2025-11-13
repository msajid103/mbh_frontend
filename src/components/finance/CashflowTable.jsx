import React, { useState } from 'react';
import { Plus, Trash2, Calendar, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export default function CashflowTable() {
    const months = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'];

    const [rows, setRows] = useState([
        { id: 1, category: 'OPENING BALANCE', values: Array(12).fill(0), isEditable: false, isHeader: true },
        { id: 2, category: 'Cash Incoming', values: Array(12).fill(0), isEditable: false, isSubHeader: true },
        { id: 3, category: 'Sales', values: Array(12).fill(0), isEditable: true },
        { id: 4, category: 'Asset sales', values: Array(12).fill(0), isEditable: true },
        { id: 5, category: 'Debtor receipts', values: Array(12).fill(0), isEditable: true },
        { id: 6, category: 'Loans', values: Array(12).fill(0), isEditable: true },
        { id: 7, category: 'Other income', values: Array(12).fill(0), isEditable: true },
        { id: 8, category: 'Total incoming', values: Array(12).fill(0), isEditable: false, isTotal: true },
        { id: 9, category: 'Cash outgoing', values: Array(12).fill(0), isEditable: false, isSubHeader: true },
        { id: 10, category: 'Purchases (stock etc)', values: Array(12).fill(0), isEditable: true },
        { id: 11, category: 'Accountant fees', values: [5313, 1, 3, 212, 0, 0, 0, 0, 0, 0, 0, 0], isEditable: true },
        { id: 12, category: 'Solicitor fees', values: Array(12).fill(0), isEditable: true },
        { id: 13, category: 'Solicitor fees', values: Array(12).fill(0), isEditable: true },
        { id: 14, category: 'Advertising and marketing', values: [0, 0, 0, 1321, 0, 0, 0, 0, 0, 0, 0, 0], isEditable: true },
        { id: 15, category: 'Bank fees and charges', values: [0, 0, 0, 321, 0, 0, 0, 0, 0, 0, 0, 0], isEditable: true },
        { id: 16, category: 'Interest paid', values: Array(12).fill(0), isEditable: true },
        { id: 17, category: 'Credit card fees', values: Array(12).fill(0), isEditable: true },
        { id: 18, category: 'Utilities (electricity, gas, water)', values: [0, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], isEditable: true },
        { id: 19, category: 'Telephone', values: Array(12).fill(0), isEditable: true },
        { id: 20, category: 'Lease/loan payments', values: Array(12).fill(0), isEditable: true },
        { id: 21, category: 'Total outgoing', values: [3214, 313, 8, 542133.985, 54, 4, 545, 54, 54, 0, 0, 0], isEditable: false, isTotal: true },
        { id: 22, category: 'Monthly cash balance', values: [462251, 4333, -4, -542133.193, -49, 450, -491, -10, -54, 445, 0, 0], isEditable: false, isBalance: true },
        { id: 23, category: 'CLOSING BALANCE', values: [462251, 466584, 466580, -541666.751, -541666.800, -541666.350, -541666.841, -541666.851, -541666.905, -541666.460, -541666.460, -541666.460], isEditable: false, isClosing: true }
    ]);

    const [forecastCost, setForecastCost] = useState('');
    const [showAddRow, setShowAddRow] = useState(false);
    const [newRowName, setNewRowName] = useState('');

    const updateCell = (rowId, monthIndex, value) => {
        setRows(rows.map(row => {
            if (row.id === rowId && row.isEditable) {
                const newValues = [...row.values];
                newValues[monthIndex] = value === '' ? 0 : parseFloat(value) || 0;
                return { ...row, values: newValues };
            }
            return row;
        }));
    };

    const addNewRow = () => {
        if (newRowName.trim()) {
            const newRow = {
                id: Date.now(),
                category: newRowName,
                values: Array(12).fill(0),
                isEditable: true
            };
            // Insert before "Total outgoing" row
            const totalOutgoingIndex = rows.findIndex(r => r.category === 'Total outgoing');
            const newRows = [...rows];
            newRows.splice(totalOutgoingIndex, 0, newRow);
            setRows(newRows);
            setNewRowName('');
            setShowAddRow(false);
        }
    };

    const deleteRow = (rowId) => {
        setRows(rows.filter(row => row.id !== rowId));
    };

    const formatCurrency = (value) => {
        if (value === 0) return '$0';
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };

    const getCellColor = (value, isBalance = false) => {
        if (value === 0) return '';
        if (isBalance) {
            return value < 0 ? 'text-red-600' : 'text-green-600';
        }
        return '';
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">

            {/* Add Row Section */}
            <div className="mt-4">
                {showAddRow ? (
                    <div className="flex gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <input
                            type="text"
                            value={newRowName}
                            onChange={(e) => setNewRowName(e.target.value)}
                            placeholder="Enter category name..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            onKeyPress={(e) => e.key === 'Enter' && addNewRow()}
                        />
                        <button
                            onClick={addNewRow}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Add
                        </button>
                        <button
                            onClick={() => {
                                setShowAddRow(false);
                                setNewRowName('');
                            }}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowAddRow(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        <Plus className="w-4 h-4" />
                        Add New Category
                    </button>
                )}
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto border rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                            <th className="px-4 py-3 text-left text-sm font-semibold text-white border-r border-blue-500 sticky left-0 bg-blue-600 z-10 min-w-[200px]">
                                Category
                            </th>
                            {months.map((month, idx) => (
                                <th key={idx} className="px-4 py-3 text-center text-sm font-semibold text-white border-r border-blue-500 min-w-[120px]">
                                    {month}
                                </th>
                            ))}
                            <th className="px-4 py-3 text-center text-sm font-semibold text-white min-w-[80px]">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIdx) => (
                            <tr
                                key={row.id}
                                className={`
                  ${row.isHeader ? 'bg-gray-100 font-bold' : ''}
                  ${row.isSubHeader ? 'bg-blue-50 font-semibold' : ''}
                  ${row.isTotal ? 'bg-yellow-50 font-bold border-t-2 border-yellow-300' : ''}
                  ${row.isBalance ? 'bg-purple-50 font-bold' : ''}
                  ${row.isClosing ? 'bg-gray-800 text-white font-bold' : ''}
                  ${!row.isHeader && !row.isSubHeader && !row.isTotal && !row.isBalance && !row.isClosing ? 'hover:bg-gray-50' : ''}
                `}
                            >
                                <td className={`px-4 py-3 text-sm border-r border-gray-200 sticky left-0 z-10 ${row.isClosing ? 'bg-gray-800' : row.isTotal ? 'bg-yellow-50' : row.isBalance ? 'bg-purple-50' : row.isSubHeader ? 'bg-blue-50' : row.isHeader ? 'bg-gray-100' : 'bg-white'
                                    }`}>
                                    <div className="flex items-center gap-2">
                                        {row.isBalance && <TrendingUp className="w-4 h-4 text-purple-600" />}
                                        {row.isTotal && <DollarSign className="w-4 h-4 text-yellow-600" />}
                                        <span className={row.isClosing ? 'text-white' : ''}>{row.category}</span>
                                    </div>
                                </td>
                                {row.values.map((value, colIdx) => (
                                    <td key={colIdx} className="px-2 py-2 text-sm text-center border-r border-gray-200">
                                        {row.isEditable ? (
                                            <input
                                                type="number"
                                                value={value || ''}
                                                onChange={(e) => updateCell(row.id, colIdx, e.target.value)}
                                                className={`w-full px-2 py-1 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${getCellColor(value)
                                                    }`}
                                            />
                                        ) : (
                                            <span className={`font-medium ${getCellColor(value, row.isBalance || row.isClosing)}`}>
                                                {formatCurrency(value)}
                                            </span>
                                        )}
                                    </td>
                                ))}
                                <td className="px-2 py-2 text-center border-l border-gray-200">
                                    {row.isEditable && !row.isHeader && !row.isSubHeader && (
                                        <button
                                            onClick={() => deleteRow(row.id)}
                                            className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}