'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Users, MessageCircle, Search, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrkutLayoutProps {
  children: React.ReactNode;
}

export default function OrkutLayout({ children }: OrkutLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('orkut_user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('orkut_user');
    router.push('/');
  };

  const navItems = [
    { label: 'início', href: '/home', icon: Home },
    { label: 'perfil', href: '/profile', icon: User },
    { label: 'amigos', href: '/friends', icon: Users },
    { label: 'comunidades', href: '/communities', icon: Users },
    { label: 'mensagens', href: '/messages', icon: MessageCircle },
    { label: 'buscar', href: '/search', icon: Search },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Header */}
      <header className="orkut-header shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/home" className="text-2xl font-bold text-white">
            orkut retrô
          </Link>

          <nav className="orkut-nav hidden md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {user && (
              <>
                <div className="flex items-center gap-2 text-white">
                  <img 
                    src={user.photo_url} 
                    alt={user.display_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="hidden sm:inline text-sm">{user.display_name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-white hover:bg-white/10"
                >
                  <LogOut size={16} />
                  <span className="hidden sm:inline ml-1">sair</span>
                </Button>
              </>
            )}
            
            <div className="bg-teal-500 text-white px-3 py-1 rounded text-sm font-medium">
              Local
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-purple-600 border-t border-purple-500">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-2 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen pb-20 md:pb-8">
        {children}
      </main>
    </div>
  );
}