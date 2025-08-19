'use client';

import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function CommunitiesSidebar() {
  const communities = [
    { name: 'Nostalgia dos Anos 2000', members: '1523 membros', color: 'bg-red-100 text-red-600' },
    { name: 'Orkut Memories', members: '892 membros', color: 'bg-red-100 text-red-600' },
    { name: 'Pop Rock Nacional', members: '2341 membros', color: 'bg-red-100 text-red-600' },
    { name: 'Amor e Relacionamentos', members: '567 membros', color: 'bg-red-100 text-red-600' }
  ];

  return (
    <Card className="orkut-card p-4">
      <h3 className="font-bold text-purple-600 mb-4">Comunidades em alta</h3>
      <div className="space-y-3">
        {communities.map((community, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${community.color}`}>
              <Users size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-gray-700 truncate">
                {community.name}
              </h4>
              <p className="text-xs text-gray-500">{community.members}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}