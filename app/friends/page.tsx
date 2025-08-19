'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrkutLayout from '@/components/layout/OrkutLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, UserPlus, Phone, Video } from 'lucide-react';

export default function FriendsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('orkut_user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const friends = [
    { 
      id: 1,
      name: 'Carlos Santos', 
      username: 'carlos_santos',
      photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Que nostalgia!',
      online: true,
      mutualFriends: 5
    },
    { 
      id: 2,
      name: 'Maria Oliveira', 
      username: 'maria_oli',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Adoro estar de volta!',
      online: true,
      mutualFriends: 3
    },
    { 
      id: 3,
      name: 'João Silva', 
      username: 'joao_silva',
      photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Orkut para sempre!',
      online: false,
      mutualFriends: 7
    },
    { 
      id: 4,
      name: 'Ana Carolina', 
      username: 'ana_carol',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Revivendo os anos 2000',
      online: true,
      mutualFriends: 2
    }
  ];

  const suggestions = [
    { 
      id: 5,
      name: 'Bruno Ferreira', 
      username: 'bruno_f',
      photo: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 4,
      reason: 'Amigos em comum'
    },
    { 
      id: 6,
      name: 'Camila Santos', 
      username: 'camila_s',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 2,
      reason: 'Mesma cidade'
    },
    { 
      id: 7,
      name: 'Diego Costa', 
      username: 'diego_costa',
      photo: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 6,
      reason: 'Comunidades em comum'
    }
  ];

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user) return null;

  return (
    <OrkutLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <Card className="orkut-card p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-purple-600 mb-2">Amigos</h1>
              <p className="text-gray-600">Conecte-se com seus amigos e faça novos</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Buscar amigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-purple-50">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Todos os Amigos ({friends.length})
            </TabsTrigger>
            <TabsTrigger value="online" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Online ({friends.filter(f => f.online).length})
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Sugestões ({suggestions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFriends.map((friend) => (
                <Card key={friend.id} className="orkut-card p-4">
                  <div className="text-center">
                    <div className="relative inline-block mb-3">
                      <img 
                        src={friend.photo} 
                        alt={friend.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                      />
                      {friend.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-purple-600 mb-1">{friend.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">@{friend.username}</p>
                    <p className="text-xs text-gray-600 mb-3 italic">"{friend.status}"</p>
                    <p className="text-xs text-gray-500 mb-4">{friend.mutualFriends} amigos em comum</p>
                    
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone size={14} className="mr-1" />
                        Áudio
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Video size={14} className="mr-1" />
                        Vídeo
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {friends.filter(friend => friend.online).map((friend) => (
                <Card key={friend.id} className="orkut-card p-4 border-l-4 border-l-green-500">
                  <div className="text-center">
                    <div className="relative inline-block mb-3">
                      <img 
                        src={friend.photo} 
                        alt={friend.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                      />
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    
                    <h3 className="font-bold text-purple-600 mb-1">{friend.name}</h3>
                    <p className="text-sm text-green-600 font-medium mb-2">Online agora</p>
                    <p className="text-xs text-gray-600 mb-3 italic">"{friend.status}"</p>
                    
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" className="orkut-button flex-1">
                        <Phone size={14} className="mr-1" />
                        Ligar
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suggestions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestions.map((suggestion) => (
                <Card key={suggestion.id} className="orkut-card p-4">
                  <div className="text-center">
                    <img 
                      src={suggestion.photo} 
                      alt={suggestion.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                    />
                    
                    <h3 className="font-bold text-purple-600 mb-1">{suggestion.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">@{suggestion.username}</p>
                    <p className="text-xs text-blue-600 mb-2">{suggestion.reason}</p>
                    <p className="text-xs text-gray-500 mb-4">{suggestion.mutualFriends} amigos em comum</p>
                    
                    <Button size="sm" className="orkut-button w-full">
                      <UserPlus size={14} className="mr-2" />
                      Adicionar Amigo
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </OrkutLayout>
  );
}