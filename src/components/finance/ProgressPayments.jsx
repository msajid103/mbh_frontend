import React, { useState } from 'react';
import { Plus, FileText, MoreVertical, Upload, Eye, Pencil, Trash2 } from 'lucide-react';

// Redux Slice Data (progressPaymentsSlice.js)
const initialState = {
    summary: {
        totalContractPrice: 41.6,
        invoicedToDate: 58.9,
        paidToDate: 43.5,
        totalPaid: 130000
    },
    claims: [
        {
            id: 'PC-01',
            category: 'Contractor',
            serviceProvider: 'Builder',
            description: 'Site establishment and mobilization',
            amount: 45000,
            status: 'paid',
            dateReceived: '8/02/2024',
            dueDate: '8/15/2024',
            paidDate: '8/10/2024',
            hasInvoice: true
        },
        {
            id: 'PC-02',
            category: 'Consultant',
            serviceProvider: 'Electrician',
            description: 'Foundation works complete',
            amount: 85000,
            status: 'paid',
            dateReceived: '8/15/2024',
            dueDate: '9/30/2024',
            paidDate: '9/28/2024',
            hasInvoice: true
        },
        {
            id: 'PC-03',
            category: 'Provisional Sums',
            serviceProvider: 'Builder',
            description: 'Frame and roof structure',
            amount: 120000,
            status: 'approved',
            dateReceived: '10/02/2024',
            dueDate: '11/15/2024',
            paidDate: null,
            hasInvoice: true
        },
        {
            id: 'PC-04',
            category: 'Contractor',
            serviceProvider: 'Architect',
            description: 'External envelope and windows',
            amount: 95000,
            status: 'submitted',
            dateReceived: '11/15/2024',
            dueDate: '12/20/2024',
            paidDate: null,
            hasInvoice: false
        }
    ]
};

// InvoiceSummaryChart Component
const InvoiceSummaryChart = ({ summary }) => {
    const maxValue = 50; // Max scale for chart
    const contractWidth = (summary.totalContractPrice / maxValue) * 100;
    const invoicedWidth = (summary.invoicedToDate / maxValue) * 100;
    const paidWidth = (summary.paidToDate / maxValue) * 100;

    return (
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Invoice Summary</h3>

            <div className="relative">
                {/* Chart bars */}
                <div className="space-y-3 mb-4">
                    {/* Total Contract Price */}
                    <div className="flex items-center">
                        <div
                            className="bg-blue-300 h-8 rounded flex items-center justify-end px-3"
                            style={{ width: `${contractWidth}%` }}
                        >
                            <span className="text-white text-sm font-medium">Total Contract Price</span>
                        </div>
                        <span className="ml-3 text-sm font-semibold text-gray-900 min-w-12">
                            {summary.totalContractPrice}
                        </span>
                    </div>

                    {/* Invoiced to Date */}
                    <div className="flex items-center">
                        <div
                            className="bg-blue-500 h-8 rounded flex items-center justify-end px-3"
                            style={{ width: `${invoicedWidth}%` }}
                        >
                            <span className="text-white text-sm font-medium">Invoiced to Date</span>
                        </div>
                        <span className="ml-3 text-sm font-semibold text-gray-900 min-w-12">
                            {summary.invoicedToDate}
                        </span>
                    </div>

                    {/* Paid to Date */}
                    <div className="flex items-center">
                        <div
                            className="bg-blue-600 h-8 rounded flex items-center justify-end px-3"
                            style={{ width: `${paidWidth}%` }}
                        >
                            <span className="text-white text-sm font-medium">Paid to Date</span>
                        </div>
                        <span className="ml-3 text-sm font-semibold text-gray-900 min-w-12">
                            {summary.paidToDate}
                        </span>
                    </div>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-500 mt-2 border-t border-gray-200 pt-2">
                    <span>0</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                    <span>50</span>
                </div>
                <div className="text-center text-xs text-gray-500 mt-1">
                    $ (Thousands)
                </div>
            </div>
        </div>
    );
};

// StatusBadge Component
const StatusBadge = ({ status }) => {
    const statusStyles = {
        paid: 'bg-green-100 text-green-700',
        approved: 'bg-blue-100 text-blue-700',
        submitted: 'bg-yellow-100 text-yellow-700',
        rejected: 'bg-red-100 text-red-700'
    };

    const statusText = {
        paid: 'Paid',
        approved: 'Approved',
        submitted: 'Submitted',
        rejected: 'Rejected'
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
            {statusText[status]}
        </span>
    );
};

// ClaimRow Component
const ClaimRow = ({ claim, onViewInvoice, onUploadInvoice }) => {
    return (
        <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
            <td className="px-6 py-4">
                <div className="text-sm font-semibold text-gray-900">{claim.id}</div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-700">{claim.category}</div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-700">{claim.serviceProvider}</div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-700">{claim.description}</div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm font-semibold text-gray-900">
                    ${claim.amount.toLocaleString()}
                </div>
            </td>
            <td className="px-6 py-4">
                <StatusBadge status={claim.status} />
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-700">{claim.dateReceived}</div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-700">{claim.dueDate}</div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-700">
                    {claim.paidDate || '-'}
                </div>
            </td>
            <td className="px-6 py-4">
                {claim.hasInvoice ? (
                    <button
                        onClick={() => onViewInvoice(claim.id)}
                        className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                        title="View Invoice"
                    >
                        <FileText className="w-5 h-5" />
                    </button>
                ) : (
                    <button
                        onClick={() => onUploadInvoice(claim.id)}
                        className="p-1.5 text-gray-400 hover:bg-gray-50 rounded transition-colors"
                        title="Upload Invoice"
                    >
                        <Upload className="w-5 h-5" />
                    </button>
                )}
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
                  onClick={() => console.log("Delete")}
                  className="p-1 border-2 rounded-lg border-red-300 flex items-center justify-center"
                >
                  <Trash2 className="text-red-600" size={16} />
                </button>
              </td>
        </tr>
    );
};

// Main ProgressPayments Component
const ProgressPayments = () => {
    const [data] = useState(initialState);

    const handleNewClaim = () => {
        console.log('Create new payment claim');
    };

    const handleViewInvoice = (claimId) => {
        console.log('View invoice for:', claimId);
    };

    const handleUploadInvoice = (claimId) => {
        console.log('Upload invoice for:', claimId);
    };

    return (
        <div className="bg-gray-50">
            {/* Invoice Summary Chart */}
            <InvoiceSummaryChart summary={data.summary} />

            {/* Progress Payments Section */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm mt-4">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Progress Payments</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Total paid:{' '}
                                <span className="font-semibold text-gray-900">
                                    ${data.summary.totalPaid.toLocaleString()}
                                </span>
                            </p>
                        </div>
                        <button
                            onClick={handleNewClaim}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="text-sm font-medium">New Payment Claim</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Claim #
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Service Provider
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Date Received
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Due Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Paid Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Invoice
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.claims.map((claim) => (
                                <ClaimRow
                                    key={claim.id}
                                    claim={claim}
                                    onViewInvoice={handleViewInvoice}
                                    onUploadInvoice={handleUploadInvoice}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {data.claims.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No payment claims found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressPayments;