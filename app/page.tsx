'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Users, MessageCircle, Home } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - accept admin/admin or any email/password
    if ((email === 'admin' && password === 'admin') || email.includes('@')) {
      localStorage.setItem('orkut_user', JSON.stringify({
        id: '1',
        username: email === 'admin' ? 'teste_audio' : email.split('@')[0],
        display_name: email === 'admin' ? 'Julio Cesar Campos Machado' : 'Usuário Demo',
        email: email === 'admin' ? 'admin@orkut.com' : email,
        photo_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        voice_enabled: false
      }));
      router.push('/home');
    } else {
      alert('Use admin/admin para login de demonstração ou qualquer email válido');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Welcome Section */}
        <Card className="orkut-card p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text orkut-gradient mb-2">
              orkut retrô
            </h1>
            <p className="text-gray-600 mb-8">conecte-se aos seus amigos e muito mais</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Bem-vindo ao Orkut Retrô!
            </h2>
            <p className="text-gray-700 mb-6">
              Reviva a magia das redes sociais dos anos 2000. Conecte-se com seus amigos, 
              participe de comunidades e compartilhe seus momentos especiais!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <Users className="text-purple-600" size={24} />
                <div>
                  <h3 className="font-semibold text-purple-600">Conecte-se com Amigos</h3>
                  <p className="text-sm text-gray-600">Encontre antigos amigos e faça novos</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <MessageCircle className="text-purple-600" size={24} />
                <div>
                  <h3 className="font-semibold text-purple-600">Scraps e Depoimentos</h3>
                  <p className="text-sm text-gray-600">Deixe recados e depoimentos especiais</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <Home className="text-purple-600" size={24} />
                <div>
                  <h3 className="font-semibold text-purple-600">Comunidades</h3>
                  <p className="text-sm text-gray-600">Participe de grupos com seus interesses</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Login Form */}
        <Card className="orkut-card p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-600">Faça login</h2>
            <p className="text-gray-600">Entre na sua conta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail:
              </label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="Digite seu email ou 'admin'"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha:
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                placeholder="Digite sua senha ou 'admin'"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Lembrar de mim
              </label>
              <a href="#" className="ml-auto text-sm text-purple-600 hover:underline">
                Esqueceu a senha?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full orkut-button text-white font-semibold py-3"
            >
              ENTRAR
            </Button>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-purple-600 hover:underline font-semibold"
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </form>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Demo:</strong> Use <code>admin/admin</code> para entrar como usuário de teste
              ou qualquer email válido para criar uma conta demo.
            </p>
          </div>
        </Card>
      </div>

      {/* Floating Orky Assistant */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 shadow-lg pulse-pink">
          <MessageCircle className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
}