'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrkutLayout from '@/components/layout/OrkutLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Search, Send, Phone, Video } from 'lucide-react';

export default function MessagesPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('orkut_user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const conversations = [
    {
      id: 1,
      name: 'Carlos Santos',
      photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50',
      lastMessage: 'Oi! Como você está?',
      timeAgo: '5 min',
      unread: 2,
      online: true,
      messages: [
        { id: 1, sender: 'other', content: 'Oi! Como você está?', time: '14:30' },
        { id: 2, sender: 'me', content: 'Oi Carlos! Tudo bem, e você?', time: '14:32' },
        { id: 3, sender: 'other', content: 'Tudo ótimo! Que legal te ver no Orkut novamente!', time: '14:33' }
      ]
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50',
      lastMessage: 'Vamos ser amigas?',
      timeAgo: '1 hora',
      unread: 0,
      online: true,
      messages: [
        { id: 1, sender: 'other', content: 'Oi! Vamos ser amigas?', time: '13:20' },
        { id: 2, sender: 'me', content: 'Claro! Seria um prazer!', time: '13:25' },
        { id: 3, sender: 'other', content: 'Que bom! Adoro fazer novos amigos 😊', time: '13:26' }
      ]
    },
    {
      id: 3,
      name: 'João Silva',
      photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=50',
      lastMessage: 'Orkut era demais mesmo!',
      timeAgo: '2 dias',
      unread: 0,
      online: false,
      messages: [
        { id: 1, sender: 'other', content: 'E aí! Como está sendo essa volta?', time: 'Ter 15:45' },
        { id: 2, sender: 'me', content: 'Muito nostálgico! Tô adorando!', time: 'Ter 15:50' },
        { id: 3, sender: 'other', content: 'Orkut era demais mesmo!', time: 'Ter 15:52' }
      ]
    }
  ];

  const selectedChat = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    
    // In a real app, this would send the message to the server
    setNewMessage('');
  };

  if (!user) return null;

  return (
    <OrkutLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Card className="orkut-card h-[600px] overflow-hidden">
          <div className="flex h-full">
            {/* Conversations Sidebar */}
            <div className="w-1/3 border-r flex flex-col">
              {/* Header */}
              <div className="p-4 border-b bg-purple-50">
                <h2 className="text-lg font-bold text-purple-600 mb-4">Mensagens</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input placeholder="Buscar conversas..." className="pl-10" />
                </div>
              </div>

              {/* Filters */}
              <div className="p-2 border-b">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 h-8">
                    <TabsTrigger value="all" className="text-xs">Todas</TabsTrigger>
                    <TabsTrigger value="unread" className="text-xs">Não lidas</TabsTrigger>
                    <TabsTrigger value="sent" className="text-xs">Enviadas</TabsTrigger>
                    <TabsTrigger value="archived" className="text-xs">Arquivadas</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Conversations List */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b cursor-pointer hover:bg-purple-50 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-purple-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={conversation.photo} 
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium text-gray-900 truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {conversation.timeAgo}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600 truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img 
                            src={selectedChat.photo} 
                            alt={selectedChat.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {selectedChat.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-purple-600">{selectedChat.name}</h3>
                          <p className="text-xs text-gray-500">
                            {selectedChat.online ? 'Online agora' : 'Visto por último há 2 dias'}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Phone size={16} className="mr-2" />
                          Áudio
                        </Button>
                        <Button size="sm" variant="outline">
                          <Video size={16} className="mr-2" />
                          Vídeo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-purple-50">
                    <div className="space-y-4">
                      {selectedChat.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.sender === 'me'
                                ? 'bg-purple-500 text-white'
                                : 'bg-white text-gray-700 shadow-sm'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'me' ? 'text-purple-200' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t bg-white">
                    <div className="flex gap-2">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button onClick={handleSendMessage} className="orkut-button">
                        <Send size={16} />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-purple-50">
                  <div className="text-center text-gray-500">
                    <MessageCircle size={64} className="mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">Selecione uma conversa</h3>
                    <p className="text-sm">Escolha uma conversa para começar a trocar mensagens</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </OrkutLayout>
  );
}