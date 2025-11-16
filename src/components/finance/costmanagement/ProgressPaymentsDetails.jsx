import React, { useState } from 'react';
import { MoreVertical, Eye, FileText, Share2, Download, Trash2, Plus, Search, Filter } from 'lucide-react';

const ProgressPaymentsDetails = () => {
  const [showActions, setShowActions] = useState(null);

  const ProgressPaymentsDetails = [
    {
      id: 'PC-01',
      description: 'Site establishment and mobilization',
      amount: 45000,
      status: 'Paid',
      dateReceived: '8/02/2024',
      dueDate: '8/15/2024',
      paidDate: '8/10/2024',
      invoice: 'INV-001'
    },
    {
      id: 'PC-02',
      description: 'Foundation works complete',
      amount: 85000,
      status: 'Paid',
      dateReceived: '8/15/2024',
      dueDate: '9/30/2024',
      paidDate: '9/28/2024',
      invoice: 'INV-002'
    },
    {
      id: 'PC-03',
      description: 'Frame and roof structure',
      amount: 120000,
      status: 'Approved',
      dateReceived: '10/02/2024',
      dueDate: '11/15/2024',
      paidDate: '-',
      invoice: 'INV-003'
    },
    {
      id: 'PC-04',
      description: 'External envelope and windows',
      amount: 95000,
      status: 'Submitted',
      dateReceived: '11/15/2024',
      dueDate: '12/20/2024',
      paidDate: '-',
      invoice: '-'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Paid': 'bg-green-100 text-green-700',
      'Approved': 'bg-blue-100 text-blue-700',
      'Submitted': 'bg-yellow-100 text-yellow-700',
      'Rejected': 'bg-red-100 text-red-700',
      'Draft': 'bg-gray-100 text-gray-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString('en-US')}`;
  };


  return (
    <div>

      {/* Progress Payments Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Claim #
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
                  Date Received
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Paid Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {ProgressPaymentsDetails.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {payment.description}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {payment.dateReceived}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {payment.dueDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {payment.paidDate}
                  </td>
                  <td className="px-6 py-4">
                    {payment.invoice !== '-' ? (
                      <button className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700">
                        <FileText className="w-4 h-4" />
                        <span>{payment.invoice}</span>
                      </button>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === payment.id ? null : payment.id)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>

                      {showActions === payment.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
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

export default ProgressPaymentsDetails;