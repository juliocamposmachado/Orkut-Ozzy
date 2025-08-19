'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrkutLayout from '@/components/layout/OrkutLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Users, Plus, TrendingUp } from 'lucide-react';

export default function CommunitiesPage() {
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

  const myCommunities = [
    {
      id: 1,
      name: 'Nostalgia dos Anos 2000',
      description: 'Relembre os melhores momentos dos anos 2000',
      members: 1523,
      category: 'Nostalgia',
      joined: true,
      trending: true
    },
    {
      id: 2,
      name: 'Pop Rock Nacional',
      description: 'O melhor do rock nacional dos anos 90 e 2000',
      members: 2341,
      category: 'Música',
      joined: true,
      trending: false
    },
    {
      id: 3,
      name: 'Games Clássicos',
      description: 'Discussões sobre jogos retrô e clássicos',
      members: 1234,
      category: 'Games',
      joined: true,
      trending: false
    }
  ];

  const popularCommunities = [
    {
      id: 4,
      name: 'Orkut Memories',
      description: 'Compartilhe suas memórias do Orkut original',
      members: 892,
      category: 'Nostalgia',
      joined: false,
      trending: true
    },
    {
      id: 5,
      name: 'Amor e Relacionamentos',
      description: 'Conselhos e experiências sobre relacionamentos',
      members: 567,
      category: 'Relacionamento',
      joined: false,
      trending: false
    },
    {
      id: 6,
      name: 'Tecnologia Retrô',
      description: 'Tecnologia dos anos 90 e 2000',
      members: 445,
      category: 'Tecnologia',
      joined: false,
      trending: true
    },
    {
      id: 7,
      name: 'Humor Brasileiro',
      description: 'Os melhores memes e piadas nacionais',
      members: 1876,
      category: 'Humor',
      joined: false,
      trending: false
    }
  ];

  const categories = [
    { name: 'Nostalgia', count: 45, color: 'bg-purple-100 text-purple-700' },
    { name: 'Música', count: 78, color: 'bg-pink-100 text-pink-700' },
    { name: 'Games', count: 34, color: 'bg-blue-100 text-blue-700' },
    { name: 'Relacionamento', count: 56, color: 'bg-red-100 text-red-700' },
    { name: 'Humor', count: 89, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Tecnologia', count: 23, color: 'bg-green-100 text-green-700' }
  ];

  const filteredMyCommunities = myCommunities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPopularCommunities = popularCommunities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user) return null;

  return (
    <OrkutLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <Card className="orkut-card p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-purple-600 mb-2">Comunidades</h1>
              <p className="text-gray-600">Participe de grupos com seus interesses</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Buscar comunidades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button className="orkut-button">
                <Plus size={16} className="mr-2" />
                Criar Comunidade
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="space-y-4">
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">Categorias populares</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div 
                    key={category.name}
                    className={`p-2 rounded-lg cursor-pointer hover:opacity-80 ${category.color}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{category.name}</span>
                      <span className="text-xs">{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">Minhas estatísticas</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Comunidades:</span>
                  <span className="font-bold">{myCommunities.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Posts:</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Comentários:</span>
                  <span className="font-bold">45</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="my" className="space-y-6">
              <TabsList className="bg-purple-50">
                <TabsTrigger value="my" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Minhas Comunidades ({myCommunities.length})
                </TabsTrigger>
                <TabsTrigger value="popular" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Populares ({popularCommunities.length})
                </TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Em Alta
                </TabsTrigger>
              </TabsList>

              <TabsContent value="my">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredMyCommunities.map((community) => (
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
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{community.members} membros</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                              {community.category}
                            </span>
                          </div>
                          <div className="mt-3">
                            <Button size="sm" variant="outline" className="w-full">
                              Ver Comunidade
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="popular">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPopularCommunities.map((community) => (
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
                            <span>{community.members} membros</span>
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

              <TabsContent value="trending">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...myCommunities, ...popularCommunities]
                    .filter(community => community.trending)
                    .map((community) => (
                    <Card key={community.id} className="orkut-card p-4 border-l-4 border-l-orange-500">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {community.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-purple-600">{community.name}</h3>
                            <TrendingUp size={14} className="text-orange-500" />
                            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
                              Em Alta
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{community.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <span>{community.members} membros</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                              {community.category}
                            </span>
                          </div>
                          <Button 
                            size="sm" 
                            className={community.joined ? "w-full" : "orkut-button w-full"}
                            variant={community.joined ? "outline" : "default"}
                          >
                            {community.joined ? 'Ver Comunidade' : (
                              <>
                                <Users size={14} className="mr-2" />
                                Participar
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </OrkutLayout>
  );
}