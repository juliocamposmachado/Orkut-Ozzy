'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    photo: string;
  };
  content: string;
  timeAgo: string;
  likes: number;
  comments: number;
  liked: boolean;
}

interface PostCardProps {
  post: Post;
  onLike: (postId: number) => void;
}

export default function PostCard({ post, onLike }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="orkut-card p-0 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img 
            src={post.author.photo} 
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-purple-600">{post.author.name}</h4>
            <p className="text-xs text-gray-500">{post.timeAgo}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal size={16} />
        </Button>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Actions */}
      <div className="border-t px-4 py-2">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{post.likes} curtidas</span>
          <span>{post.comments} comentários</span>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLike(post.id)}
            className={`flex-1 ${
              post.liked 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart 
              size={16} 
              className={`mr-2 ${post.liked ? 'fill-current' : ''}`} 
            />
            {post.liked ? '❤️' : '💜'} Descurtir
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-gray-600 hover:text-purple-600"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle size={16} className="mr-2" />
            💬 Comentar
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-gray-600 hover:text-blue-600"
          >
            <Share2 size={16} className="mr-2" />
            📤 Compartilhar
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="border-t bg-gray-50 p-4">
          <div className="text-center text-gray-500 text-sm py-4">
            Nenhum comentário ainda. Seja o primeiro a comentar!
          </div>
        </div>
      )}
    </Card>
  );
}