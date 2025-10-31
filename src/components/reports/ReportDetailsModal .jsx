import React from 'react';
import { X, Download, Share2, FileText } from 'lucide-react';

// Report Details Modal Component
const ReportDetailsModal = ({ isOpen, onClose, report }) => {
  if (!isOpen || !report) return null;

  const handleDownload = () => {
    console.log('Download report:', report.id);
    // Add download logic here
  };

  const handleShare = () => {
    console.log('Share report:', report.id);
    // Add share logic here
  };

  const handleDelete = () => {
    console.log('Delete report:', report.id);
    onClose();
    // Add delete logic here
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Report Details</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Report Header with Icon */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-red-100 border-2 border-red-300 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {report.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    PDF
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {report.discipline}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Report Information Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Report Type
                </label>
                <p className="text-sm text-gray-900">{report.reportType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  File Size
                </label>
                <p className="text-sm text-gray-900">{report.fileSize}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Generated Date
                </label>
                <p className="text-sm text-gray-900">{report.generatedDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Received By
                </label>
                <p className="text-sm text-gray-900">{report.receivedBy}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-600 block mb-2">
                Description
              </label>
              <p className="text-sm text-gray-700 leading-relaxed">
                {report.description}
              </p>
            </div>

            {/* Preview Section */}
            <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 text-center mb-6">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-3" />
              <p className="text-lg font-semibold text-gray-900 mb-1">Report Preview</p>
              <p className="text-sm text-gray-600">Full preview available after download</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={handleDelete}
                className="p-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetailsModal;

// Example Usage Component
// const ReportDetailsExample = () => {
//   const [isModalOpen, setIsModalOpen] = React.useState(true);

//   const sampleReport = {
//     id: '0001',
//     title: 'Monthly Financial Summary',
//     reportType: 'Financial Report',
//     fileSize: '2.4 MB',
//     generatedDate: 'Oct 8, 2024',
//     receivedBy: 'System',
//     discipline: 'Financial',
//     description: 'Comprehensive monthly financial overview including budget tracking, expenses, and forecasts.',
//     tags: ['PDF', 'Financial', 'Completed']
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold text-gray-900 mb-6">Report Details Modal Demo</h1>
        
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Open Report Details
//         </button>

//         <ReportDetailsModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           report={sampleReport}
//         />

//         {/* Sample Report Card */}
//         <div className="mt-8 bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Report Information</h2>
//           <div className="space-y-2 text-sm text-gray-600">
//             <p><strong>ID:</strong> {sampleReport.id}</p>
//             <p><strong>Title:</strong> {sampleReport.title}</p>
//             <p><strong>Type:</strong> {sampleReport.reportType}</p>
//             <p><strong>Size:</strong> {sampleReport.fileSize}</p>
//             <p><strong>Date:</strong> {sampleReport.generatedDate}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDetailsExample;