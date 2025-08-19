'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrkutLayout from '@/components/layout/OrkutLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Phone, Video, MessageCircle } from 'lucide-react';
import EditProfileModal from '@/components/profile/EditProfileModal';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeTab, setActiveTab] = useState('scraps');

  useEffect(() => {
    const userData = localStorage.getItem('orkut_user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) return null;

  const scraps = [
    {
      id: 1,
      author: 'Carlos Santos',
      photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50',
      content: 'Que saudades dos anos 2000! Adorei este perfil retrô! 😊',
      timeAgo: '2 horas atrás'
    },
    {
      id: 2,
      author: 'Maria Oliveira',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50',
      content: 'Oie! Vamos ser amigas? Tenho certeza que vamos nos dar super bem! 💙',
      timeAgo: '1 dia atrás'
    },
    {
      id: 3,
      author: 'João Silva',
      photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=50',
      content: 'E aí! Como está sendo essa volta ao passado? Orkut era demais mesmo! 😍',
      timeAgo: '3 dias atrás'
    }
  ];

  const photos = [
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=200'
  ];

  return (
    <OrkutLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="orkut-card p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <img 
                src={user.photo_url} 
                alt={user.display_name}
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-200"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-purple-600 mb-2">
                {user.display_name}
              </h1>
              <p className="text-gray-600 italic mb-4">
                "Novo no Orkut Retrô! 🎉"
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                <div>
                  <span className="font-medium">idade:</span>
                </div>
                <div>
                  <span className="font-medium">relacionamento:</span>
                </div>
                <div>
                  <span className="font-medium">localização:</span>
                </div>
                <div>
                  <span className="font-medium">aniversário:</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">32</div>
                  <div className="text-sm text-gray-600">visualizações</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">9</div>
                  <div className="text-sm text-gray-600">amigos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-gray-600">fãs</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setShowEditModal(true)}
                  className="orkut-button flex items-center gap-2"
                >
                  <Edit size={16} />
                  editar perfil
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  ver perfil completo
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 text-green-600 border-green-300 hover:bg-green-50"
                >
                  <Phone size={16} />
                  Chamada de Áudio
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - About & Friends */}
          <div className="space-y-4">
            {/* About */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-3">quem sou eu</h3>
              <p className="text-sm text-gray-600 italic">
                Nenhuma biografia adicionada ainda.{' '}
                <button 
                  onClick={() => setShowEditModal(true)}
                  className="text-purple-600 hover:underline"
                >
                  editar
                </button>
              </p>
            </Card>

            {/* Top 10 Friends */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">top 10 amigos</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Ricardo Lima', points: '129 pts', photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60' },
                  { name: 'Silva João', points: '119 pts', photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=60' },
                  { name: 'Maria Oliveira', points: '117 pts', photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60' },
                  { name: 'Camila Castro', points: '91 pts', photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=60' },
                  { name: 'Carlos Santos', points: '79 pts', photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=60' },
                  { name: 'Bruno Ferreira', points: '67 pts', photo: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=60' }
                ].map((friend, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xs text-purple-600 font-medium mb-1">{idx + 1}</div>
                    <img 
                      src={friend.photo} 
                      alt={friend.name}
                      className="w-12 h-12 rounded mx-auto mb-2 object-cover"
                    />
                    <div className="text-xs text-gray-700 font-medium">{friend.name}</div>
                    <div className="text-xs text-gray-500">{friend.points}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Communities */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">minhas comunidades</h3>
              <div className="space-y-2">
                {[
                  { name: 'Nostalgia dos Anos 2000', members: '1523 membros' },
                  { name: 'Pop Rock Nacional', members: '2341 membros' },
                  { name: 'Games Clássicos', members: '1234 membros' }
                ].map((community, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-purple-600 font-medium">{community.name}</div>
                      <div className="text-xs text-gray-500">{community.members}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="orkut-card p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full bg-purple-50 p-1 h-auto rounded-t-lg">
                  <TabsTrigger 
                    value="scraps" 
                    className="flex-1 data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    scraps ({scraps.length})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="testimonials"
                    className="flex-1 data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                  >
                    depoimentos (6)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="photos"
                    className="flex-1 data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                  >
                    fotos ({photos.length})
                  </TabsTrigger>
                </TabsList>

                <div className="p-4">
                  <TabsContent value="scraps" className="mt-0">
                    <div className="mb-4">
                      <h3 className="font-bold text-purple-600 mb-3">deixar um scrap</h3>
                      <div className="space-y-3">
                        <textarea 
                          className="w-full p-3 border rounded-lg resize-none h-24"
                          placeholder="Escreva seu recado aqui..."
                        />
                        <Button className="orkut-button">
                          enviar scrap
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {scraps.map((scrap) => (
                        <div key={scrap.id} className="border rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <img 
                              src={scrap.photo} 
                              alt={scrap.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-purple-600">{scrap.author}</h4>
                                <span className="text-xs text-gray-500">{scrap.timeAgo}</span>
                              </div>
                              <p className="text-gray-700">{scrap.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="testimonials" className="mt-0">
                    <div className="text-center py-8 text-gray-500">
                      <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Nenhum depoimento ainda.</p>
                      <p className="text-sm">Peça aos seus amigos para deixar um depoimento!</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="photos" className="mt-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {photos.map((photo, idx) => (
                        <div key={idx} className="aspect-square">
                          <img 
                            src={photo} 
                            alt={`Foto ${idx + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      {showEditModal && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEditModal(false)}
          onSave={(updatedUser) => {
            setUser(updatedUser);
            localStorage.setItem('orkut_user', JSON.stringify(updatedUser));
            setShowEditModal(false);
          }}
        />
      )}
    </OrkutLayout>
  );
}