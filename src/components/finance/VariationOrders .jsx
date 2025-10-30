import React, { useState } from 'react';
import { Plus, Paperclip, MoreVertical, Check, X, ChevronDown, Eye, Pencil, Trash2 } from 'lucide-react';

// Redux Slice Data (variationOrdersSlice.js)
const initialState = {
  variations: [
    {
      id: 'VO-001',
      description: 'Additional foundation waterproofing',
      category: 'Contractor',
      serviceProvider: 'Builder',
      amount: 15000,
      status: 'approved',
      submitted: '11/15/2024',
      docsCount: 2
    },
    {
      id: 'VO-002',
      description: 'Upgrade kitchen fixtures',
      category: 'Contractor',
      serviceProvider: 'Builder',
      amount: 8500,
      status: 'approved',
      submitted: '11/20/2024',
      docsCount: 3
    },
    {
      id: 'VO-003',
      description: 'Extended structural engineer hours',
      category: 'Consultants',
      serviceProvider: 'Architect',
      amount: 3000,
      status: 'rejected',
      submitted: '11/25/2024',
      docsCount: 1
    },
    {
      id: 'VO-004',
      description: 'Additional landscaping works',
      category: 'Provisional Sums',
      serviceProvider: 'Landscaper',
      amount: 12000,
      status: 'submitted',
      submitted: '12/1/2024',
      docsCount: 4
    },
    {
      id: 'VO-005',
      description: 'Solar panel system upgrade',
      category: 'Contractor',
      serviceProvider: 'Electrician',
      amount: 25000,
      status: 'anticipated',
      submitted: '12/5/2024',
      docsCount: 2
    }
  ],
  providers: ['All Providers', 'Builder', 'Architect', 'Landscaper', 'Electrician'],
  summary: {
    approved: 2,
    pending: 1,
    rejected: 1
  }
};

// StatusBadge Component
const StatusBadge = ({ status }) => {
  const statusStyles = {
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
    submitted: 'bg-blue-100 text-blue-700',
    anticipated: 'bg-yellow-100 text-yellow-700'
  };

  const statusText = {
    approved: 'Approved',
    rejected: 'Rejected',
    submitted: 'Submitted',
    anticipated: 'Anticipated'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {statusText[status]}
    </span>
  );
};


// Dropdown Component
const Dropdown = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <span className="text-sm text-gray-700">{value}</span>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// VariationRow Component
const VariationRow = ({ variation, onApprove, onReject }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <td className="px-6 py-4">
        <div className="text-sm font-semibold text-gray-900">{variation.id}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-700">{variation.description}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-700">{variation.category}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-700">{variation.serviceProvider}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm font-semibold text-gray-900">
          ${variation.amount.toLocaleString()}
        </div>
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={variation.status} />
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-700">{variation.submitted}</div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <Paperclip className="w-4 h-4" />
          <span>{variation.docsCount}</span>
        </div>
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
          onClick={() => console.log("Delete contingency")}
          className="p-1 border-2 rounded-lg border-red-300 flex items-center justify-center"
        >
          <Trash2 className="text-red-600" size={16} />
        </button>
      </td>
    </tr>
  );
};

// Main VariationOrders Component
const VariationOrders = () => {
  const [data, setData] = useState(initialState);
  const [selectedProvider, setSelectedProvider] = useState('All Providers');

  const handleApprove = (id) => {
    setData(prev => ({
      ...prev,
      variations: prev.variations.map(v =>
        v.id === id ? { ...v, status: 'approved' } : v
      )
    }));
    console.log('Approved:', id);
  };

  const handleReject = (id) => {
    setData(prev => ({
      ...prev,
      variations: prev.variations.map(v =>
        v.id === id ? { ...v, status: 'rejected' } : v
      )
    }));
    console.log('Rejected:', id);
  };

  const handleNewVariation = () => {
    console.log('Create new variation');
  };

  const filteredVariations = selectedProvider === 'All Providers'
    ? data.variations
    : data.variations.filter(v => v.serviceProvider === selectedProvider);

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <div className=" p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Variation Orders</h1>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-medium">{data.summary.approved}</span> approved •{' '}
              <span className="font-medium">{data.summary.pending}</span> pending •{' '}
              <span className="font-medium">{data.summary.rejected}</span> rejected
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Dropdown
              value={selectedProvider}
              options={data.providers}
              onChange={setSelectedProvider}
            />
            <button
              onClick={handleNewVariation}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">New Variation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  VO Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Service Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Docs
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredVariations.map((variation) => (
                <VariationRow
                  key={variation.id}
                  variation={variation}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredVariations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No variations found for the selected provider.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VariationOrders;