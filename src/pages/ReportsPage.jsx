import React, { useState } from 'react';
import {
  Plus, Search, Download, MoreVertical, Eye,
  FileText, Share2, Trash2, ChevronDown,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import ReportDetailsModal from '../components/reports/ReportDetailsModal ';

// Redux Slice Data (reportsSlice.js)
const initialState = {
  summary: {
    totalReports: 10,
    pendingReview: 3,
    reviewed: 7
  },
  reports: [
    {
      id: '0001',
      fileFormat: 'pdf',
      author: 'Sarah Wilson',
      discipline: 'Progress',
      title: 'Weekly Progress Report (Week 38)',
      version: 'v1.2',
      dateOfReport: '12/09/2024'
    },
    {
      id: '0002',
      fileFormat: 'doc',
      author: 'Michael Chen',
      discipline: 'Daily Site',
      title: 'Daily Site Report',
      version: 'v2.0',
      dateOfReport: '12/09/2024'
    },
    {
      id: '0003',
      fileFormat: 'pdf',
      author: 'Emma Davis',
      discipline: 'Safety',
      title: 'Weekly Safety Report (Week 36)',
      version: 'v1.0',
      dateOfReport: '12/09/2024'
    },
    {
      id: '0004',
      fileFormat: 'excel',
      author: 'Robert Martinez',
      discipline: 'Financial',
      title: 'Monthly Financial Report (Aug)',
      version: 'v1.1',
      dateOfReport: '01/09/2024'
    },
    {
      id: '0005',
      fileFormat: 'pdf',
      author: 'Lisa Anderson',
      discipline: 'Procurement',
      title: 'Procurement Update (Material)',
      version: 'v1.5',
      dateOfReport: '11/09/2024'
    },
    {
      id: '0006',
      fileFormat: 'doc',
      author: 'James Taylor',
      discipline: 'Progress',
      title: 'Subcontractor Electrical Report',
      version: 'v2.2',
      dateOfReport: '10/9/2024'
    },
    {
      id: '0007',
      fileFormat: 'doc',
      author: 'Maria Garcia',
      discipline: 'Daily Site',
      title: 'Daily Site Report',
      version: 'v1.0',
      dateOfReport: '11/09/2024'
    },
    {
      id: '0008',
      fileFormat: 'ppt',
      author: 'David Brown',
      discipline: 'Safety',
      title: 'Weekly Safety Report (Week 35)',
      version: 'v1.1',
      dateOfReport: '05/09/2024'
    },
    {
      id: '0009',
      fileFormat: 'pdf',
      author: 'Sophie Anderson',
      discipline: 'Quality',
      title: 'Foundation Inspection Report',
      version: 'v2.0',
      dateOfReport: '06/09/2024'
    },
    {
      id: '0010',
      fileFormat: 'pdf',
      author: 'Tom Wilson',
      discipline: 'Compliance',
      title: 'Site Preparation Compliance Report',
      version: 'v1.3',
      dateOfReport: '04/09/2024'
    }
  ],
  types: ['All Types', 'Progress', 'Safety', 'Financial', 'Quality', 'Daily Site', 'Compliance', 'Procurement'],
  statuses: ['All Status', 'Draft', 'Pending Review', 'Approved', 'Published']
};

// File Icon Component
const FileIcon = ({ format }) => {
  const iconConfig = {
    pdf: { bg: 'bg-red-100', border: 'border-red-300', color: 'text-red-600' },
    doc: { bg: 'bg-blue-100', border: 'border-blue-300', color: 'text-blue-600' },
    excel: { bg: 'bg-green-100', border: 'border-green-300', color: 'text-green-600' },
    ppt: { bg: 'bg-orange-100', border: 'border-orange-300', color: 'text-orange-600' }
  };

  const config = iconConfig[format] || iconConfig.pdf;

  return (
    <div className={`${config.bg} ${config.border} border-2 w-10 h-10 rounded flex items-center justify-center`}>
      <FileText className={`w-5 h-5 ${config.color}`} />
    </div>
  );
};

// Discipline Badge Component
const DisciplineBadge = ({ discipline }) => {
  const badgeStyles = {
    'Progress': 'bg-blue-100 text-blue-700',
    'Safety': 'bg-red-100 text-red-700',
    'Financial': 'bg-green-100 text-green-700',
    'Quality': 'bg-purple-100 text-purple-700',
    'Daily Site': 'bg-gray-100 text-gray-700',
    'Compliance': 'bg-cyan-100 text-cyan-700',
    'Procurement': 'bg-orange-100 text-orange-700'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyles[discipline] || 'bg-gray-100 text-gray-700'}`}>
      {discipline}
    </span>
  );
};

// Dropdown Component
const Dropdown = ({ value, options, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-40"
      >
        <span className="text-sm text-gray-700">{value || placeholder}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 py-1 max-h-60 overflow-y-auto">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
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

// Action Menu Component
const ActionMenu = ({ reportId, onView, onDownload, onShare, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20 py-1">
            <button
              onClick={() => {
                onView(reportId);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
            <button
              onClick={() => {
                onShare(reportId);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={() => {
                onDelete(reportId);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Report Row Component
const ReportRow = ({ report, onView, onDownload, onShare, onDelete }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-gray-900">{report.id}</span>
      </td>
      <td className="px-6 py-4">
        <FileIcon format={report.fileFormat} />
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-900">{report.author}</span>
      </td>
      <td className="px-6 py-4">
        <DisciplineBadge discipline={report.discipline} />
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-900">{report.title}</span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-600">{report.version}</span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-600">{report.dateOfReport}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onView(report.id)}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-1"
          >
            <Eye className="w-4 h-4" />
            View
          </button>
          <button
            onClick={() => onDownload(report.id)}
            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="Download"
          >
            <Download className="w-4 h-4" />
          </button>
          <ActionMenu
            reportId={report.id}
            onView={onView}
            onDownload={onDownload}
            onShare={onShare}
            onDelete={onDelete}
          />
        </div>
      </td>
    </tr>
  );
};

// Summary Cards Component
const SummaryCards = ({ summary }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
        <div className="text-3xl font-bold text-gray-900 mb-1">{summary.totalReports}</div>
        <div className="text-sm text-gray-600">Total Reports</div>
      </div>
      <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
        <div className="text-3xl font-bold text-gray-900 mb-1">{summary.pendingReview}</div>
        <div className="text-sm text-gray-600">Pending Review</div>
      </div>
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="text-3xl font-bold text-gray-900 mb-1">{summary.reviewed}</div>
        <div className="text-sm text-gray-600">Reviewed</div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, rowsPerPage, onPageChange, onRowsPerPageChange }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="text-sm text-gray-600 ml-4">
          1-10 of {totalPages}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Main ReportsPage Component
const ReportsPage = () => {
  const [data] = useState(initialState);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleView = (reportId) => {
    setIsModalOpen(true);
  };

  const handleDownload = (reportId) => {
    console.log('Download report:', reportId);
  };

  const handleShare = (reportId) => {
    console.log('Share report:', reportId);
  };

  const handleDelete = (reportId) => {
    console.log('Delete report:', reportId);
  };

  const handleGenerateReport = () => {
    console.log('Generate new report');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Reports</h1>
            <p className="text-sm text-gray-600">Generate, manage and export project reports</p>
          </div>
          <button
            onClick={handleGenerateReport}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Generate Report</span>
          </button>
        </div>

        {/* Summary Cards */}
        <SummaryCards summary={data.summary} />

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reports..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Dropdown
              value={selectedType}
              options={data.types}
              onChange={setSelectedType}
              placeholder="All Types"
            />
            <Dropdown
              value={selectedStatus}
              options={data.statuses}
              onChange={setSelectedStatus}
              placeholder="All Status"
            />
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    File Format
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Discipline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date of Report
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.reports.map(report => (
                  <ReportRow
                    key={report.id}
                    report={report}
                    onView={handleView}
                    onDownload={handleDownload}
                    onShare={handleShare}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
          />
          <ReportDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            report={data.reports[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;