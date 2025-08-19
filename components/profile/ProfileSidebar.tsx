'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Eye } from 'lucide-react';
import Link from 'next/link';

interface ProfileSidebarProps {
  user: any;
}

export default function ProfileSidebar({ user }: ProfileSidebarProps) {
  return (
    <Card className="orkut-card p-0 overflow-hidden">
      {/* Profile Photo */}
      <div className="text-center p-4 border-b">
        <div className="relative inline-block">
          <img 
            src={user.photo_url} 
            alt={user.display_name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-4 border-purple-200"
          />
          <div className="absolute bottom-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
            foto do perfil
          </div>
        </div>
        
        <h3 className="font-bold text-lg text-purple-600 mt-2">
          {user.display_name}
        </h3>
        
        <p className="text-sm text-gray-600 italic mb-3">
          "Novo no Orkut Retrô! 🎉"
        </p>
        
        <div className="text-xs text-gray-500">
          <p>idade:</p>
          <p>relacionamento:</p>
          <p>localização:</p>
          <p>aniversário:</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-b">
        <div className="text-center py-3 border-r">
          <div className="text-xl font-bold text-purple-600">32</div>
          <div className="text-xs text-gray-600">VISUALIZAÇÕES</div>
        </div>
        <div className="text-center py-3 border-r">
          <div className="text-xl font-bold text-purple-600">9</div>
          <div className="text-xs text-gray-600">AMIGOS</div>
        </div>
        <div className="text-center py-3">
          <div className="text-xl font-bold text-purple-600">0</div>
          <div className="text-xs text-gray-600">FÃS</div>
        </div>
      </div>

      {/* About */}
      <div className="p-4 border-b bg-purple-50">
        <h4 className="font-bold text-purple-600 mb-2">quem sou eu</h4>
        <p className="text-sm text-gray-600 italic">
          Nenhuma biografia adicionada ainda.{' '}
          <Link href="/profile" className="text-purple-600 hover:underline">
            editar
          </Link>
        </p>
      </div>

      {/* Friends */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-bold text-purple-600">top 10 amigos</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { name: 'Ricardo Lima', points: '129 pts', photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=40' },
            { name: 'Silva João', points: '119 pts', photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=40' },
            { name: 'Maria Oliveira', points: '117 pts', photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40' },
            { name: 'Camila Castro', points: '91 pts', photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40' }
          ].map((friend, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs text-purple-600 font-medium">{idx + 1}</div>
              <img 
                src={friend.photo} 
                alt={friend.name}
                className="w-8 h-8 rounded mx-auto mb-1 object-cover"
              />
              <div className="text-xs text-gray-700">{friend.name}</div>
              <div className="text-xs text-gray-500">{friend.points}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline" className="flex-1 text-xs">
            gerenciar amigos
          </Button>
          <Button size="sm" className="orkut-button flex-1 text-xs">
            adicionar amigo
          </Button>
        </div>
      </div>
    </Card>
  );
}