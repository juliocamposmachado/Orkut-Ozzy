'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrkutLayout from '@/components/layout/OrkutLayout';
import PostCard from '@/components/feed/PostCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import CommunitiesSidebar from '@/components/communities/CommunitiesSidebar';
import VoiceAssistant from '@/components/voice/VoiceAssistant';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Users } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    author: {
      name: 'Carlos Santos',
      photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    content: 'Que nostalgia estar aqui no Orkut novamente! Lembra quando passávamos horas customizando nossos perfis? 😊',
    timeAgo: '2 horas atrás',
    likes: 15,
    comments: 3,
    liked: false
  },
  {
    id: 2,
    author: {
      name: 'Maria Oliveira',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    content: 'Acabei de entrar na comunidade "Nostalgia dos Anos 2000" e já me senti em casa! Quem mais sente falta dos tempos do MSN? 💙',
    timeAgo: '4 horas atrás',
    likes: 23,
    comments: 8,
    liked: true
  },
  {
    id: 3,
    author: {
      name: 'João Silva',
      photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    content: 'É aí! Como está sendo sua volta ao passado? Orkut era demais mesmo! 😍',
    timeAgo: '3 dias atrás',
    likes: 42,
    comments: 12,
    liked: false
  }
];

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState(mockPosts);

  useEffect(() => {
    const userData = localStorage.getItem('orkut_user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  if (!user) return null;

  return (
    <OrkutLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <ProfileSidebar user={user} />
            
            {/* Quick Actions */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">Ações rápidas</h3>
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => router.push('/profile')}
                >
                  Ver meu perfil
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => router.push('/friends')}
                >
                  Procurar amigos
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => router.push('/communities')}
                >
                  Encontrar comunidades
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => router.push('/messages')}
                >
                  Ver mensagens
                </Button>
              </div>
            </Card>

            {/* Online Friends */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">Amigos online</h3>
              <div className="space-y-3">
                {[
                  { name: 'Carlos', photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40' },
                  { name: 'João', photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=40' },
                  { name: 'Ricardo', photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=40' },
                  { name: 'Bruno', photo: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=40' },
                  { name: 'Diego', photo: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=40' }
                ].map((friend, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="relative">
                      <img 
                        src={friend.photo} 
                        alt={friend.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-gray-700">{friend.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Users size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">Bem-vindo de volta ao Orkut!</h2>
                  <p className="text-white/90">
                    A rede social dos anos 2000 está de volta! Reconecte-se com seus amigos, 
                    participe de comunidades e reviva os melhores momentos da internet retrô. Que 
                    a nostalgia comece! 💜
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => router.push('/profile')}
                >
                  💜 Curtir
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                >
                  💬 Comentar
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                >
                  📤 Compartilhar
                </Button>
              </div>
            </div>

            {/* Feed Header */}
            <Card className="orkut-card p-4">
              <h2 className="text-xl font-bold text-purple-600 mb-2">Últimas atualizações</h2>
              <p className="text-gray-600">Veja o que seus amigos estão fazendo</p>
            </Card>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard 
                  key={post.id} 
                  post={post} 
                  onLike={handleLike} 
                />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <CommunitiesSidebar />
            
            {/* Recent Photos */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">Fotos recentes</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
                  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
                  'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=100',
                  'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=100'
                ].map((photo, idx) => (
                  <img 
                    key={idx}
                    src={photo} 
                    alt={`Foto ${idx + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                ))}
              </div>
            </Card>

            {/* Birthdays */}
            <Card className="orkut-card p-4">
              <h3 className="font-bold text-purple-600 mb-4">Aniversários</h3>
              <div className="text-center py-4">
                <p className="text-gray-500 text-sm">Nenhum aniversário hoje</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Voice Assistant */}
      <VoiceAssistant />
    </OrkutLayout>
  );
}