import React, { useState } from 'react';
import { MoreVertical, Plus, Download, Eye, Edit2, Trash2, Share2 } from 'lucide-react';

const Variations = () => {
    const [variations, setVariations] = useState([
        {
            id: 'VO-001',
            description: 'Additional external cladding',
            amount: 45000,
            status: 'Approved',
            dateRequested: '10/15/2024',
            dateApproved: '10/20/2024'
        },
        {
            id: 'VO-002',
            description: 'Enhanced waterproofing system',
            amount: 32000,
            status: 'Approved',
            dateRequested: '11/01/2024',
            dateApproved: '11/05/2024'
        },
        {
            id: 'VO-003',
            description: 'Upgrade to premium fixtures',
            amount: 28500,
            status: 'Pending',
            dateRequested: '11/20/2024',
            dateApproved: '-'
        }
    ]);

    const [showActions, setShowActions] = useState(null);

    // Calculate totals
    const variationAnticipated = 50000;
    const variationReceived = 0;
    const variationApproved = variations
        .filter(v => v.status === 'Approved')
        .reduce((sum, v) => sum + v.amount, 0);
    const variationRejected = 10000;
    const totalVariations = variationAnticipated + variationReceived + variationApproved + variationRejected;

    const getStatusColor = (status) => {
        const colors = {
            'Approved': 'bg-green-100 text-green-700',
            'Pending': 'bg-yellow-100 text-yellow-700',
            'Rejected': 'bg-red-100 text-red-700',
            'Draft': 'bg-gray-100 text-gray-700'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    const formatCurrency = (amount) => {
        return `$${amount.toLocaleString('en-US')}`;
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Variations</h1>
                    <p className="text-gray-600 text-sm">Detailed variation summary and breakdown</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                        <div className="text-gray-600 text-sm mb-2">Variation Anticipated</div>
                        <div className="text-3xl font-bold text-gray-900">
                            {formatCurrency(variationAnticipated)}
                        </div>
                    </div>

                    <div className="bg-purple-50 rounded-xl border border-purple-200 p-6">
                        <div className="text-gray-600 text-sm mb-2">Variation Received</div>
                        <div className="text-3xl font-bold text-gray-900">
                            {formatCurrency(variationReceived)}
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                        <div className="text-gray-600 text-sm mb-2">Variation Approved</div>
                        <div className="text-3xl font-bold text-gray-900">
                            {formatCurrency(variationApproved)}
                        </div>
                    </div>

                    <div className="bg-red-50 rounded-xl border border-red-200 p-6">
                        <div className="text-gray-600 text-sm mb-2">Variation Rejected</div>
                        <div className="text-3xl font-bold text-gray-900">
                            {formatCurrency(variationRejected)}
                        </div>
                    </div>
                </div>

                {/* Total Variations */}
                <div className="bg-white border-t border-gray-200 mb-6">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">Total Variations</span>
                        <span className="text-2xl font-bold text-blue-600">
                            {formatCurrency(totalVariations)}
                        </span>
                    </div>
                </div>

                {/* Variations Table */}
                <div className="border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            {/* Table Header */}
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Variation #
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date Requested
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date Approved
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-200">
                                {variations.map((variation) => (
                                    <tr key={variation.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {variation.id}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {variation.description}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {formatCurrency(variation.amount)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(variation.status)}`}>
                                                {variation.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {variation.dateRequested}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {variation.dateApproved}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="relative">
                                                <button
                                                    onClick={() => setShowActions(showActions === variation.id ? null : variation.id)}
                                                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                                >
                                                    <MoreVertical className="w-5 h-5 text-gray-600" />
                                                </button>

                                                {showActions === variation.id && (
                                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                                                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                                                            <Eye className="w-4 h-4" />
                                                            View Details
                                                        </button>
                                                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                                                            <Edit2 className="w-4 h-4" />
                                                            Edit
                                                        </button>
                                                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                                                            <Share2 className="w-4 h-4" />
                                                            Share
                                                        </button>
                                                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                                                            <Download className="w-4 h-4" />
                                                            Download
                                                        </button>
                                                        <hr className="my-1" />
                                                        <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                                                            <Trash2 className="w-4 h-4" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Click outside to close actions menu */}
            {showActions && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setShowActions(null)}
                />
            )}
        </div>
    );
};

export default Variations;