import React, { useState } from 'react';
import { 
  Search, Plus, Phone, Video, MoreVertical, 
  Paperclip, Image, Smile, Send, Download, 
  Check, CheckCheck
} from 'lucide-react';

// Redux Slice Data (messagesSlice.js)
const initialState = {
  groups: [
    { id: 1, name: 'MyBuildHub Support', members: 13, icon: '💬', color: 'bg-blue-500' },
    { id: 2, name: 'Technical Assistance', members: 8, icon: '🔧', color: 'bg-blue-500' },
    { id: 3, name: 'Project Team', members: 6, icon: '👥', color: 'bg-blue-500' },
    { id: 4, name: 'Certifier & Inspectors', members: 5, icon: '✓', color: 'bg-blue-500' },
    { id: 5, name: 'Contractors Community', members: 12, icon: '🏗️', color: 'bg-blue-500' }
  ],
  recentMessages: [
    {
      id: 1,
      name: 'David Chen',
      avatar: 'DC',
      message: 'Can you schedule the meeting',
      time: '2m ago',
      unread: 2,
      color: 'bg-orange-400'
    },
    {
      id: 2,
      name: 'MyBuildHub Support',
      avatar: 'MB',
      message: 'Thanks for reaching out! How can we',
      time: '15m ago',
      unread: 0,
      color: 'bg-cyan-400'
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      avatar: 'SW',
      message: 'Updated the budget report',
      time: '1h ago',
      unread: 1,
      color: 'bg-red-400'
    },
    {
      id: 4,
      name: 'Project Team',
      avatar: 'PT',
      message: 'John: Can you verify these costs',
      time: '2h ago',
      unread: 0,
      color: 'bg-cyan-400'
    },
    {
      id: 5,
      name: 'Kate Anderson',
      avatar: 'KA',
      message: 'See you at the site tomorrow',
      time: '3h ago',
      unread: 0,
      color: 'bg-gray-400'
    },
    {
      id: 6,
      name: 'Michael Roberts',
      avatar: 'MR',
      message: 'Need your feedback on...',
      time: '5h ago',
      unread: 0,
      color: 'bg-gray-400'
    },
    {
      id: 7,
      name: 'Certifier Team',
      avatar: 'CT',
      message: 'Inspection completed successfully',
      time: 'Yesterday',
      unread: 0,
      color: 'bg-cyan-400'
    }
  ],
  activeChat: {
    id: 1,
    name: 'David Chen',
    status: 'Active now',
    avatar: 'DC',
    color: 'bg-orange-400',
    messages: [
      {
        id: 1,
        text: 'Hi! How is the project coming along?',
        time: '10:23 AM',
        sender: 'other',
        status: 'read'
      },
      {
        id: 2,
        text: 'Going well! We\'re ahead of schedule.',
        time: '10:25 AM',
        sender: 'me',
        status: 'read'
      },
      {
        id: 3,
        text: 'That\'s great news! When can we schedule the next inspection?',
        time: '10:26 AM',
        sender: 'other',
        status: 'read'
      },
      {
        id: 4,
        text: 'How about next Tuesday? I\'ll send you the detailed schedule.',
        time: '10:28 AM',
        sender: 'me',
        status: 'read'
      },
      {
        id: 5,
        text: 'Perfect! Also, could you share the latest progress photos?',
        time: '10:30 AM',
        sender: 'other',
        status: 'read'
      },
      {
        id: 6,
        text: 'Sure, here are the photos from yesterday\'s inspection.',
        time: '10:32 AM',
        sender: 'me',
        status: 'read',
        attachments: [
          { name: 'site_photo_1.jpg', size: '2.4 MB' },
          { name: 'site_photo_2.jpg', size: '1.8 MB' }
        ]
      },
      {
        id: 7,
        text: 'Thanks! These look great. The foundation work is impressive.',
        time: '10:35 AM',
        sender: 'other',
        status: 'read'
      },
      {
        id: 8,
        text: 'We\'re really happy with the progress. Can we schedule the meeting for budget review?',
        time: '10:37 AM',
        sender: 'me',
        status: 'read'
      }
    ]
  }
};

// Sidebar Component
const Sidebar = ({ groups, recentMessages, activeChat, onSelectChat }) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Groups & Teams */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-gray-700">Groups & Teams</h3>
          <button className="text-blue-600 hover:bg-blue-50 p-1 rounded">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-1">
          {groups.map(group => (
            <div
              key={group.id}
              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className={`${group.color} w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm`}>
                  {group.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{group.name}</div>
                  <div className="text-xs text-gray-500">{group.members} members</div>
                </div>
              </div>
              <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Recent Messages</h3>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-blue-700">
              New
            </button>
          </div>
          <div className="space-y-1">
            {recentMessages.map(chat => (
              <div
                key={chat.id}
                onClick={() => onSelectChat(chat)}
                className={`flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer ${
                  activeChat.id === chat.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className={`${chat.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                  {chat.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div className="text-sm font-semibold text-gray-900 truncate">{chat.name}</div>
                    <div className="text-xs text-gray-500">{chat.time}</div>
                  </div>
                  <div className="text-sm text-gray-600 truncate">{chat.message}</div>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Message Bubble Component
const MessageBubble = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex gap-2 max-w-xl ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isMe && (
          <div className="bg-orange-400 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
            DC
          </div>
        )}
        <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
          <div
            className={`px-4 py-2 rounded-2xl ${
              isMe
                ? 'bg-blue-600 text-white rounded-br-sm'
                : 'bg-gray-100 text-gray-900 rounded-bl-sm'
            }`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
          
          {message.attachments && (
            <div className="mt-2 space-y-2">
              {message.attachments.map((file, idx) => (
                <div
                  key={idx}
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-between gap-4 min-w-64"
                >
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    <div>
                      <div className="text-sm font-medium">{file.name}</div>
                      <div className="text-xs opacity-80">{file.size}</div>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-blue-700 rounded">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500`}>
            <span>{message.time}</span>
            {isMe && (
              message.status === 'read' ? (
                <CheckCheck className="w-3 h-3 text-blue-600" />
              ) : (
                <Check className="w-3 h-3" />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Chat Area Component
const ChatArea = ({ activeChat, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${activeChat.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium`}>
              {activeChat.avatar}
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">{activeChat.name}</h2>
              <p className="text-sm text-gray-500">{activeChat.status}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Video className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Date separator */}
        <div className="flex justify-center mb-6">
          <div className="bg-white px-4 py-1 rounded-full text-xs text-gray-500 shadow-sm">
            July 10, 2024
          </div>
        </div>

        {/* Messages */}
        {activeChat.messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Help button */}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 shadow-lg">
            Help
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-end gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Image className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded">
              <Smile className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <button
            onClick={handleSend}
            className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main MessagesPage Component
const MessagesPage = () => {
  const [data, setData] = useState(initialState);

  const handleSelectChat = (chat) => {
    // Update active chat
    console.log('Selected chat:', chat);
  };

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: data.activeChat.messages.length + 1,
      text: messageText,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      sender: 'me',
      status: 'sent'
    };

    setData(prev => ({
      ...prev,
      activeChat: {
        ...prev.activeChat,
        messages: [...prev.activeChat.messages, newMessage]
      }
    }));
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        groups={data.groups}
        recentMessages={data.recentMessages}
        activeChat={data.activeChat}
        onSelectChat={handleSelectChat}
      />
      <ChatArea
        activeChat={data.activeChat}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessagesPage;