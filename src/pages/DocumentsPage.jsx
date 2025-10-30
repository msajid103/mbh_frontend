import React, { useState } from 'react';
import { 
  Plus, Upload, FolderOpen, ChevronRight, ChevronDown,
  Search, Filter, Grid, List, Eye, Download, MoreVertical,
  Star, FileText,
  Pencil,
  Trash2
} from 'lucide-react';

// Redux Slice Data (documentsSlice.js)
const initialState = {
  folders: [
    { id: 1, name: 'Project Area', expanded: false, hasChildren: true },
    { id: 2, name: 'Subfolder 1', expanded: false, hasChildren: false, level: 1 },
    { id: 3, name: 'Project Archive', expanded: true, hasChildren: true },
    { id: 4, name: 'Project Comms', expanded: false, hasChildren: false, level: 1 },
    { id: 5, name: 'Project Docs', expanded: false, hasChildren: false, level: 1 }
  ],
  documents: [
    {
      id: 1,
      name: 'Project Plan',
      type: 'docx',
      icon: 'word',
      size: '2.1 MB',
      tags: [],
      lastModified: '04/21/2024',
      starred: false
    },
    {
      id: 2,
      name: 'Budget.xlsx',
      type: 'xlsx',
      icon: 'excel',
      size: '888 KB',
      tags: [],
      lastModified: '03/28/2024',
      starred: true
    },
    {
      id: 3,
      name: 'Presentation.pptx',
      type: 'pptx',
      icon: 'powerpoint',
      size: '5.2 MB',
      tags: ['drawings', 'structural'],
      lastModified: '03/25/2024',
      starred: false
    },
    {
      id: 4,
      name: 'Specs.pdf',
      type: 'pdf',
      icon: 'pdf',
      size: '1.8 MB',
      tags: [],
      lastModified: '03/23/2024',
      starred: false
    },
    {
      id: 5,
      name: 'Notes.txt',
      type: 'docx',
      icon: 'word',
      size: '24 KB',
      tags: [],
      lastModified: '03/28/2024',
      starred: false
    },
    {
      id: 6,
      name: 'Site Photos.zip',
      type: 'zip',
      icon: 'archive',
      size: '35.6 MB',
      tags: ['photos', 'site'],
      lastModified: '04/18/2024',
      starred: false
    },
    {
      id: 7,
      name: 'Floor Plans.dwg',
      type: 'dwg',
      icon: 'cad',
      size: '3.2 MB',
      tags: ['drawings', 'architectural'],
      lastModified: '04/15/2024',
      starred: true
    },
    {
      id: 8,
      name: 'Contract Agreement.pdf',
      type: 'pdf',
      icon: 'pdf',
      size: '986 KB',
      tags: ['legal', 'contract'],
      lastModified: '04/10/2024',
      starred: false
    }
  ],
  storageUsed: 4.3,
  storageTotal: 15,
  fileTypes: ['All Types', 'PDF', 'Word', 'Excel', 'PowerPoint', 'Images']
};

// File Icon Component
const FileIcon = ({ type, icon }) => {
  const iconStyles = {
    word: { bg: 'bg-blue-100', icon: 'bg-blue-500', color: 'text-blue-500' },
    excel: { bg: 'bg-green-100', icon: 'bg-green-500', color: 'text-green-500' },
    powerpoint: { bg: 'bg-red-100', icon: 'bg-red-500', color: 'text-red-500' },
    pdf: { bg: 'bg-red-100', icon: 'bg-red-500', color: 'text-red-500' },
    archive: { bg: 'bg-purple-100', icon: 'bg-purple-500', color: 'text-purple-500' },
    cad: { bg: 'bg-gray-100', icon: 'bg-gray-500', color: 'text-gray-500' }
  };

  const style = iconStyles[icon] || iconStyles.pdf;

  return (
    <div className={`${style.bg} w-10 h-10 rounded-lg flex items-center justify-center`}>
      <FileText className={`w-5 h-5 ${style.color}`} />
    </div>
  );
};

// Folder Tree Item Component
const FolderTreeItem = ({ folder, onToggle, isActive }) => {
  return (
    <div>
      <div
        onClick={() => onToggle(folder.id)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer group ${
          isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-700'
        }`}
        style={{ paddingLeft: `${(folder.level || 0) * 20 + 12}px` }}
      >
        {folder.hasChildren && (
          folder.expanded ? (
            <ChevronDown className="w-4 h-4 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          )
        )}
        {!folder.hasChildren && <div className="w-4" />}
        <FolderOpen className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm font-medium truncate">{folder.name}</span>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ folders, storageUsed, storageTotal, onFolderClick, activeFolder }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">Document Control</h2>
      </div>

      {/* New Folder Button */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Folder</span>
        </button>
      </div>

      {/* Folder Tree */}
      <div className="flex-1 overflow-y-auto px-2">
        {folders.map(folder => (
          <FolderTreeItem
            key={folder.id}
            folder={folder}
            onToggle={onFolderClick}
            isActive={activeFolder === folder.id}
          />
        ))}
      </div>

      {/* Storage Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-600 mb-2">Storage Used</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${(storageUsed / storageTotal) * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-600">
          {storageUsed} GB of {storageTotal} GB used
        </div>
      </div>
    </div>
  );
};

// Dropdown Component
const Dropdown = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Filter className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-700">{value}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 py-1">
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

// Document Row Component
const DocumentRow = ({ document, onStar, onView, onDownload }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <td className="px-6 py-4 w-12">
        <button onClick={() => onStar(document.id)}>
          <Star
            className={`w-5 h-5 ${
              document.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
            }`}
          />
        </button>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <FileIcon type={document.type} icon={document.icon} />
          <span className="text-sm font-medium text-gray-900">{document.name}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-700 uppercase">{document.type}</span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-700">{document.size}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {document.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-700">{document.lastModified}</span>
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

// Main Content Area Component
const ContentArea = ({ documents, onStar, onView, onDownload, fileTypes, selectedType, onTypeChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Documents</h1>
            <p className="text-sm text-gray-500">8 files • 1036.8 MB</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Grid className="w-4 h-4 text-gray-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Upload Files</span>
            </button>
          </div>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-sm text-gray-600 mb-1">Drag and drop files here</p>
          <p className="text-xs text-gray-500 mb-3">or click to browse</p>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Browse Files
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Dropdown
            value={selectedType}
            options={fileTypes}
            onChange={onTypeChange}
          />
        </div>
      </div>

      {/* Documents Table */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white m-6 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 w-12"></th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  File Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Modified
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {documents.map(doc => (
                <DocumentRow
                  key={doc.id}
                  document={doc}
                  onStar={onStar}
                  onView={onView}
                  onDownload={onDownload}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main DocumentsPage Component
const DocumentsPage = () => {
  const [data, setData] = useState(initialState);
  const [activeFolder, setActiveFolder] = useState(3);
  const [selectedType, setSelectedType] = useState('All Types');

  const handleFolderClick = (folderId) => {
    setActiveFolder(folderId);
    setData(prev => ({
      ...prev,
      folders: prev.folders.map(f =>
        f.id === folderId ? { ...f, expanded: !f.expanded } : f
      )
    }));
  };

  const handleStar = (docId) => {
    setData(prev => ({
      ...prev,
      documents: prev.documents.map(doc =>
        doc.id === docId ? { ...doc, starred: !doc.starred } : doc
      )
    }));
  };

  const handleView = (docId) => {
    console.log('View document:', docId);
  };

  const handleDownload = (docId) => {
    console.log('Download document:', docId);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        folders={data.folders}
        storageUsed={data.storageUsed}
        storageTotal={data.storageTotal}
        onFolderClick={handleFolderClick}
        activeFolder={activeFolder}
      />
      <ContentArea
        documents={data.documents}
        onStar={handleStar}
        onView={handleView}
        onDownload={handleDownload}
        fileTypes={data.fileTypes}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />
    </div>
  );
};

export default DocumentsPage;