'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrkutLayout from '@/components/layout/OrkutLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Users, MessageCircle, UserPlus, TrendingUp } from 'lucide-react';

export default function SearchPage() {
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

  const people = [
    {
      id: 1,
      name: 'Ana Carolina Silva',
      username: 'ana_carol',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Revivendo os anos 2000 ✨',
      mutualFriends: 3,
      location: 'São Paulo, SP',
      isFriend: false
    },
    {
      id: 2,
      name: 'Bruno Ferreira',
      username: 'bruno_f',
      photo: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Nostálgico assumido 🎮',
      mutualFriends: 7,
      location: 'Rio de Janeiro, RJ',
      isFriend: false
    },
    {
      id: 3,
      name: 'Camila Santos',
      username: 'camila_s',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Adoro música dos anos 2000! 🎵',
      mutualFriends: 2,
      location: 'Belo Horizonte, MG',
      isFriend: false
    }
  ];

  const communities = [
    {
      id: 1,
      name: 'Nostalgia Anos 90',
      description: 'Tudo sobre os incríveis anos 90',
      members: 2456,
      category: 'Nostalgia',
      trending: true
    },
    {
      id: 2,
      name: 'Programadores Retrô',
      description: 'Tecnologia e programação vintage',
      members: 876,
      category: 'Tecnologia',
      trending: false
    },
    {
      id: 3,
      name: 'Música Nacional 2000s',
      description: 'O melhor da música nacional dos anos 2000',
      members: 3421,
      category: 'Música',
      trending: true
    }
  ];

  const posts = [
    {
      id: 1,
      author: {
        name: 'Ricardo Lima',
        photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=50'
      },
      content: 'Alguém mais lembra dos layouts personalizados do Orkut? Passava horas fazendo CSS!',
      timeAgo: '3 horas atrás',
      likes: 28,
      comments: 12
    },
    {
      id: 2,
      author: {
        name: 'Fernanda Costa',
        photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50'
      },
      content: 'Que saudade dos scraps e depoimentos! Era tão especial receber um depoimento carinhoso.',
      timeAgo: '1 dia atrás',
      likes: 45,
      comments: 8
    }
  ];

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user) return null;

  return (
    <OrkutLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Header */}
        <Card className="orkut-card p-6 mb-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-600 mb-4">Buscar</h1>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Buscar pessoas, comunidades ou posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600 mt-2">
                Resultados para: "<span className="font-semibold text-purple-600">{searchTerm}</span>"
              </p>
            )}
          </div>
        </Card>

        {/* Search Results */}
        {searchTerm ? (
          <Tabs defaultValue="people" className="space-y-6">
            <TabsList className="bg-purple-50">
              <TabsTrigger value="people" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                Pessoas ({filteredPeople.length})
              </TabsTrigger>
              <TabsTrigger value="communities" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                Comunidades ({filteredCommunities.length})
              </TabsTrigger>
              <TabsTrigger value="posts" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                Posts ({filteredPosts.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="people">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPeople.map((person) => (
                  <Card key={person.id} className="orkut-card p-4">
                    <div className="text-center">
                      <img 
                        src={person.photo} 
                        alt={person.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                      />
                      <h3 className="font-bold text-purple-600 mb-1">{person.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">@{person.username}</p>
                      <p className="text-xs text-gray-600 mb-2 italic">"{person.status}"</p>
                      <p className="text-xs text-gray-500 mb-1">{person.location}</p>
                      <p className="text-xs text-blue-600 mb-4">{person.mutualFriends} amigos em comum</p>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="orkut-button flex-1">
                          <UserPlus size={14} className="mr-2" />
                          Adicionar
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle size={14} className="mr-2" />
                          Mensagem
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="communities">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCommunities.map((community) => (
                  <Card key={community.id} className="orkut-card p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {community.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-purple-600">{community.name}</h3>
                          {community.trending && (
                            <TrendingUp size={14} className="text-orange-500" />
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{community.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>{community.members.toLocaleString()} membros</span>
                          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            {community.category}
                          </span>
                        </div>
                        <Button size="sm" className="orkut-button w-full">
                          <Users size={14} className="mr-2" />
                          Participar
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="posts">
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="orkut-card p-4">
                    <div className="flex items-start gap-3">
                      <img 
                        src={post.author.photo} 
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-purple-600">{post.author.name}</h4>
                          <span className="text-xs text-gray-500">{post.timeAgo}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{post.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{post.likes} curtidas</span>
                          <span>{post.comments} comentários</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          /* Suggestions when no search term */
          <div className="space-y-6">
            <Card className="orkut-card p-6">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Sugestões para você</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* People Suggestions */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Users size={18} />
                    Pessoas que você pode conhecer
                  </h3>
                  <div className="space-y-3">
                    {people.slice(0, 3).map((person) => (
                      <div key={person.id} className="flex items-center gap-2">
                        <img 
                          src={person.photo} 
                          alt={person.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-purple-600 truncate">{person.name}</p>
                          <p className="text-xs text-gray-500">{person.mutualFriends} amigos em comum</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Suggestions */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Users size={18} />
                    Comunidades populares
                  </h3>
                  <div className="space-y-3">
                    {communities.slice(0, 3).map((community) => (
                      <div key={community.id} className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">
                          {community.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-purple-600 truncate">{community.name}</p>
                          <p className="text-xs text-gray-500">{community.members.toLocaleString()} membros</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trending */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <TrendingUp size={18} />
                    Trending agora
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm font-medium text-orange-700">#NostalgiaAnos2000</p>
                      <p className="text-xs text-orange-600">145 posts hoje</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm font-medium text-purple-700">#OrkutMemories</p>
                      <p className="text-xs text-purple-600">89 posts hoje</p>
                    </div>
                    <div className="p-3 bg-pink-50 rounded-lg">
                      <p className="text-sm font-medium text-pink-700">#MúsicaDos2000s</p>
                      <p className="text-xs text-pink-600">67 posts hoje</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </OrkutLayout>
  );
}