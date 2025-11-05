import React, { useState } from 'react';
import { 
  Plus, Download, ChevronDown, ChevronRight, Calendar,
  GripVertical, Settings, Link2
} from 'lucide-react';

// Redux Slice Data (scheduleSlice.js)
const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Consultant Engagement',
      type: 'phase',
      expanded: true,
      children: [
        { id: 11, name: 'Architect Selection', start: 'Jan 15, 24', end: 'Feb 15, 24', days: 31, unit: 'Days', progress: 100 },
        { id: 12, name: 'Engineer Appointment', start: 'Feb 1, 24', end: 'Feb 28, 24', days: 27, unit: 'Days', progress: 100 },
        { id: 13, name: 'Surveyor Engagement', start: 'Feb 15, 24', end: 'Mar 10, 24', days: 24, unit: 'Days', progress: 100 }
      ]
    },
    {
      id: 2,
      name: 'Design Phase',
      type: 'phase',
      expanded: true,
      children: [
        { id: 21, name: 'Concept Design', start: 'Mar 1, 24', end: 'Apr 15, 24', days: 45, unit: 'Days', progress: 100 },
        { id: 22, name: 'Schematic Design', start: 'Apr 10, 24', end: 'May 30, 24', days: 50, unit: 'Days', progress: 75 },
        { id: 23, name: 'Design Development', start: 'May 25, 24', end: 'Jul 20, 24', days: 56, unit: 'Days', progress: 40 },
        { id: 24, name: 'Construction Documentation', start: 'Jul 15, 24', end: 'Sep 30, 24', days: 77, unit: 'Days', progress: 0 }
      ]
    },
    {
      id: 3,
      name: 'Planning Phase',
      type: 'phase',
      expanded: true,
      children: [
        { id: 31, name: 'Planning Application Prep', start: 'Sep 15, 24', end: 'Oct 30, 24', days: 45, unit: 'Days', progress: 0 },
        { id: 32, name: 'Submission & Review', start: 'Oct 25, 24', end: 'Jan 15, 25', days: 82, unit: 'Days', progress: 0 },
        { id: 33, name: 'Approval & Conditions', start: 'Jan 10, 25', end: 'Feb 28, 25', days: 49, unit: 'Days', progress: 0 }
      ]
    },
    {
      id: 4,
      name: 'Procurement Phase',
      type: 'phase',
      expanded: true,
      children: [
        { id: 41, name: 'Tender Documentation', start: 'Feb 15, 25', end: 'Apr 15, 25', days: 59, unit: 'Days', progress: 0 },
        { id: 42, name: 'Contractor Selection', start: 'Apr 10, 25', end: 'May 30, 25', days: 50, unit: 'Days', progress: 0 },
        { id: 43, name: 'Contract Negotiation', start: 'May 25, 25', end: 'Jun 30, 25', days: 36, unit: 'Days', progress: 0 }
      ]
    }
  ],
  timelineMonths: ['Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25'],
  viewMode: 'Months',
  dependencies: [
    { from: 11, to: 12, type: 'finish-to-start' },
    { from: 12, to: 13, type: 'finish-to-start' },
    { from: 13, to: 21, type: 'finish-to-start' },
    { from: 21, to: 22, type: 'finish-to-start' },
    { from: 22, to: 23, type: 'start-to-start' }
  ]
};

// View Mode Toggle Component
const ViewModeToggle = ({ mode, onChange }) => {
  const modes = ['Days', 'Weeks', 'Months'];
  
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      {modes.map(m => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === m 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
};

// Task Row Component
const TaskRow = ({ task, level = 0, isPhase, expanded, onToggle, monthsCount }) => {
  const [showMenu, setShowMenu] = useState(false);
  
  // Calculate position and width based on dates
  const getBarPosition = () => {
    if (isPhase) return { left: 0, width: 0 };
    
    // Mock calculation - in real app, calculate based on actual dates
    let left = 0;
    let width = 0;
    
    // Simple positioning logic
    if (task.name.includes('Architect')) { left = 0; width = 2; }
    else if (task.name.includes('Engineer')) { left = 1; width = 1.5; }
    else if (task.name.includes('Surveyor')) { left = 2; width = 1.5; }
    else if (task.name.includes('Concept')) { left = 3.5; width = 2.5; }
    else if (task.name.includes('Schematic')) { left = 5.5; width = 3; }
    else if (task.name.includes('Design Development')) { left = 8; width = 3.5; }
    else if (task.name.includes('Construction Doc')) { left = 11; width = 4; }
    else if (task.name.includes('Planning App')) { left = 14; width = 2.5; }
    else if (task.name.includes('Submission')) { left = 16; width = 4; }
    else if (task.name.includes('Approval')) { left = 19; width = 2.5; }
    else if (task.name.includes('Tender')) { left = 1; width = 3; }
    else if (task.name.includes('Contractor Sel')) { left = 3.5; width = 2.5; }
    else if (task.name.includes('Contract Neg')) { left = 5.5; width = 2; }
    
    return { 
      left: `${(left / monthsCount) * 100}%`, 
      width: `${(width / monthsCount) * 100}%` 
    };
  };

  const getBarColor = () => {
    if (task.progress === 100) return 'bg-blue-500';
    if (task.progress > 50) return 'bg-cyan-500';
    if (task.progress > 0) return 'bg-cyan-400';
    return 'bg-gray-300';
  };

  return (
    <div className={`flex border-b border-gray-200 hover:bg-gray-50 ${isPhase ? 'bg-blue-50' : 'bg-white'}`}>
      {/* Left Panel - Task Info */}
      <div className="w-96 flex items-center gap-2 px-4 py-3 border-r border-gray-200">
        <div style={{ width: `${level * 20}px` }} />
        {isPhase && (
          <button onClick={onToggle} className="p-0.5 hover:bg-gray-200 rounded">
            {expanded ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </button>
        )}
        {!isPhase && <div className="w-5" />}
        <GripVertical className="w-4 h-4 text-gray-400" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {isPhase && (
              <div className={`w-5 h-5 rounded ${task.expanded ? 'bg-blue-500' : 'bg-gray-400'} text-white text-xs flex items-center justify-center font-semibold`}>
                {task.children?.length || 0}
              </div>
            )}
            <span className={`text-sm truncate ${isPhase ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
              {task.name}
            </span>
          </div>
        </div>
      </div>

      {/* Start Date */}
      <div className="w-28 flex items-center px-4 py-3 border-r border-gray-200">
        <span className="text-sm text-gray-700">{!isPhase && task.start}</span>
      </div>

      {/* End Date */}
      <div className="w-28 flex items-center px-4 py-3 border-r border-gray-200">
        <span className="text-sm text-gray-700">{!isPhase && task.end}</span>
      </div>

      {/* Days */}
      <div className="w-20 flex items-center px-4 py-3 border-r border-gray-200">
        <span className="text-sm text-gray-700">{!isPhase && task.days}</span>
      </div>

      {/* Unit */}
      <div className="w-20 flex items-center px-4 py-3 border-r border-gray-200">
        <span className="text-sm text-gray-500">{!isPhase && task.unit}</span>
      </div>

      {/* Gantt Chart Area */}
      <div className="flex-1 relative px-2 py-3">
        {!isPhase && (
          <div
            className={`absolute ${getBarColor()} h-7 rounded-md flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity`}
            style={getBarPosition()}
          >
            <div className="w-full h-full rounded-md relative overflow-hidden">
              {task.progress > 0 && (
                <div 
                  className="absolute top-0 left-0 h-full bg-white bg-opacity-30"
                  style={{ width: `${task.progress}%` }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Timeline Header Component
const TimelineHeader = ({ months }) => {
  return (
    <div className="flex border-b border-gray-300 bg-gray-50 sticky top-0 z-10">
      <div className="w-96 px-4 py-2 border-r border-gray-200">
        <span className="text-xs font-semibold text-gray-600 uppercase">Activity Name</span>
      </div>
      <div className="w-28 px-4 py-2 border-r border-gray-200">
        <span className="text-xs font-semibold text-gray-600 uppercase">Start</span>
      </div>
      <div className="w-28 px-4 py-2 border-r border-gray-200">
        <span className="text-xs font-semibold text-gray-600 uppercase">Finish</span>
      </div>
      <div className="w-20 px-4 py-2 border-r border-gray-200">
        <span className="text-xs font-semibold text-gray-600 uppercase">Days</span>
      </div>
      <div className="w-20 px-4 py-2 border-r border-gray-200">
        <span className="text-xs font-semibold text-gray-600 uppercase">Unit</span>
      </div>
      <div className="flex-1 flex border-r border-gray-200">
        {months.map((month, idx) => (
          <div
            key={idx}
            className="flex-1 text-center py-2 border-r border-gray-200 last:border-r-0"
          >
            <span className="text-xs font-semibold text-gray-700">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Gantt Chart Component
const SchedulingPage = () => {
  const [data, setData] = useState(initialState);
  const [viewMode, setViewMode] = useState('Months');

  const handleTogglePhase = (phaseId) => {
    setData(prev => ({
      ...prev,
      tasks: prev.tasks.map(task =>
        task.id === phaseId ? { ...task, expanded: !task.expanded } : task
      )
    }));
  };

  const handleAddActivity = () => {
    console.log('Add new activity');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">Detailed schedule with Gantt chart visualization</p>
          </div>
          <div className="flex items-center gap-3">
            <ViewModeToggle mode={viewMode} onChange={setViewMode} />
            <button
              onClick={handleAddActivity}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Add Activity</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gantt Chart */}
      <div className="flex-1 overflow-auto">
        <div className="min-w-max">
          <TimelineHeader months={data.timelineMonths} />
          
          {data.tasks.map(task => (
            <React.Fragment key={task.id}>
              <TaskRow
                task={task}
                level={0}
                isPhase={true}
                expanded={task.expanded}
                onToggle={() => handleTogglePhase(task.id)}
                monthsCount={data.timelineMonths.length}
              />
              {task.expanded && task.children?.map(child => (
                <TaskRow
                  key={child.id}
                  task={child}
                  level={1}
                  isPhase={false}
                  monthsCount={data.timelineMonths.length}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Timeline Scale */}
      <div className="bg-gray-800 text-white px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm hover:text-gray-300">
            <Link2 className="w-4 h-4" />
            <span>Show Dependencies</span>
          </button>
          <button className="flex items-center gap-2 text-sm hover:text-gray-300">
            <Settings className="w-4 h-4" />
            <span>Chart Settings</span>
          </button>
        </div>
        <div className="text-sm text-gray-400">
          Zoom: 100% | Today: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default SchedulingPage;