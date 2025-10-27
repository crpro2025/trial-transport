'use client';

import { useState, useEffect } from 'react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';
import { MessageSquare, Send, Search, Package } from 'lucide-react';

interface Message {
  id: string;
  shipperId: string;
  shipperName: string;
  shipmentId: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'shipper' | 'driver';
  message: string;
  timestamp: string;
}

export default function DriverMessagesPage() {
  const [conversations, setConversations] = useState<Message[]>([
    {
      id: '1',
      shipperId: 'S001',
      shipperName: 'BioTech Research Inc.',
      shipmentId: 'SH-2025-001',
      lastMessage: 'Please ensure temperature stays between 2-8°C',
      timestamp: '2 hours ago',
      unread: true,
    },
    {
      id: '2',
      shipperId: 'S002',
      shipperName: 'Pharma Labs Co.',
      shipmentId: 'SH-2025-002',
      lastMessage: 'Thank you for the safe delivery!',
      timestamp: '1 day ago',
      unread: false,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'shipper',
      message: 'Hello! Please ensure the temperature stays between 2-8°C.',
      timestamp: '10:32 AM',
    },
    {
      id: '2',
      sender: 'driver',
      message: 'Understood. Temperature is currently at 4°C and stable.',
      timestamp: '10:35 AM',
    },
    {
      id: '3',
      sender: 'driver',
      message: 'I\'ve picked up the shipment and heading to the destination.',
      timestamp: '10:30 AM',
    },
    {
      id: '4',
      sender: 'driver',
      message: 'Delivery completed successfully!',
      timestamp: '11:45 AM',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'driver') {
      window.location.href = '/login';
    }
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        sender: 'driver',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.shipperName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.shipmentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <DashboardNavigation role="driver" />
      <DemoDataBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Messages</h1>
          <p className="text-gray-300 mt-2">Communicate with shippers about your deliveries</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
            {/* Conversations List */}
            <div className="lg:col-span-1 border-r border-white/20 flex flex-col">
              <div className="p-4 border-b border-white/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {filteredConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-4 border-b border-white/20 hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors text-left ${
                      selectedConversation === conv.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {conv.shipperName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-white truncate">
                            {conv.shipperName}
                          </p>
                          {conv.unread && (
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mb-1">
                          <Package className="w-3 h-3 text-gray-400" />
                          <p className="text-xs text-gray-400">{conv.shipmentId}</p>
                        </div>
                        <p className="text-sm text-gray-300 truncate">
                          {conv.lastMessage}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {conv.timestamp}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-white/20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                        BR
                      </div>
                      <div>
                        <p className="font-semibold text-white">BioTech Research Inc.</p>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Package className="w-3 h-3" />
                          <span>Shipment: SH-2025-001</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'driver' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'driver'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 text-white'
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'driver' ? 'text-blue-200' : 'text-gray-400'
                          }`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-white/20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium">Select a conversation</p>
                    <p className="text-sm">Choose a shipper to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}