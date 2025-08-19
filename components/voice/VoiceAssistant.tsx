'use client';

import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Mic, MicOff, Send, Minimize2, Maximize2, Settings, User, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Orky: Oi Sou a Orky, sua assistente de IA! Como posso te ajudar hoje? 😊',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        recognitionRef.current = new SpeechRecognitionAPI();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'pt-BR';

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          setIsListening(false);
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const speak = (text: string) => {
    if (voiceEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const processMessage = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('ler feed') || lowerMessage.includes('feed')) {
      return 'Vou ler seu feed para você! Carlos Santos postou sobre nostalgia do Orkut há 2 horas. Maria Oliveira falou sobre a comunidade dos Anos 2000 há 4 horas. João Silva perguntou como está sendo sua volta ao passado há 3 dias. Quer que eu curta, comente ou compartilhe algum post?';
    }
    
    if (lowerMessage.includes('postar') || lowerMessage.includes('publicar')) {
      return 'Claro! O que você gostaria de postar? Pode me dizer o conteúdo do seu post e eu publico para você.';
    }
    
    if (lowerMessage.includes('parabéns') || lowerMessage.includes('aniversário')) {
      return 'Que legal! Para quem você quer dar os parabéns? Posso enviar um scrap ou mensagem privada com uma mensagem especial de aniversário.';
    }
    
    if (lowerMessage.includes('ligar') || lowerMessage.includes('chamada') || lowerMessage.includes('call')) {
      return 'Posso iniciar uma chamada de áudio ou vídeo para você! Para quem você quer ligar? Tenho os contatos Carlos, João, Maria, Ricardo e Bruno online.';
    }
    
    if (lowerMessage.includes('comunidade')) {
      return 'Temos várias comunidades ativas! As mais populares são "Nostalgia dos Anos 2000", "Pop Rock Nacional", "Games Clássicos" e "Amor e Relacionamentos". Qual te interessa?';
    }
    
    if (lowerMessage.includes('perfil') || lowerMessage.includes('editar')) {
      return 'Posso te ajudar com seu perfil! Você pode adicionar uma biografia, alterar sua foto, atualizar seu status de relacionamento, ou editar suas informações pessoais. O que quer fazer?';
    }
    
    return 'Entendi! Posso te ajudar com várias coisas no Orkut: ler seu feed, postar atualizações, mandar scraps, fazer chamadas de áudio/vídeo, encontrar comunidades, editar seu perfil e muito mais. O que você gostaria de fazer?';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const assistantResponse = processMessage(inputValue);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content: assistantResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    
    if (voiceEnabled) {
      setTimeout(() => speak(assistantResponse), 500);
    }
    
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: 'Analisar Perfil', icon: User },
    { label: 'Sugerir Post', icon: MessageSquare },
    { label: 'Dicas', icon: Settings }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full w-14 h-14 shadow-lg pulse-pink"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`bg-white shadow-2xl border-0 overflow-hidden transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-80 h-96'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Orky - IA Assistente</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`text-white hover:bg-white/20 p-1 ${voiceEnabled ? 'bg-white/20' : ''}`}
              >
                {voiceEnabled ? <Mic size={16} /> : <MicOff size={16} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                ×
              </Button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="chat-container flex-1 p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-700 border'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t bg-gray-50">
              <div className="flex gap-1">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.label}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setInputValue(action.label)}
                    >
                      <Icon size={12} className="mr-1" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className={`flex-1 ${isListening ? 'voice-recording' : ''}`}
                />
                {voiceEnabled && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={isListening ? stopListening : startListening}
                    className={isListening ? 'bg-red-100 text-red-600' : ''}
                  >
                    <Mic size={16} />
                  </Button>
                )}
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="orkut-button"
                >
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-center">16:31:01</p>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}