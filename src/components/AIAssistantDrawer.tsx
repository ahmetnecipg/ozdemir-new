"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistantDrawer = ({ isOpen, onClose }: AIAssistantDrawerProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      from: 'ai', 
      text: 'Merhaba! Ben Dt. Ömer Özdemir\'in AI asistanıyım. Diş sağlığınız hakkında sorularınızı yanıtlayabilirim. Size nasıl yardımcı olabilirim?', 
      timestamp: new Date() 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Otomatik olarak en son mesaja kaydır
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Drawer açılıp kapandığında animasyonu yönet
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // AI yanıtlarını simüle et
  const aiResponses = [
    "Dişlerinizi günde iki kez fırçalamanız ve diş ipi kullanmanız ağız sağlığınız için çok önemlidir. Başka sorularınız var mı?",
    "Çocukların diş sağlığı için düzenli kontrollerimiz mevcut. 6 ayda bir kontrol öneriyorum.",
    "Diş ağrınız için öncelikle randevu almanızı öneririm. Bu arada ağrı kesici kullanabilir ve soğuk kompres uygulayabilirsiniz.",
    "Evet, kliniğimizde çocuklara özel tedavi yöntemlerimiz var. Çocukların korkularını azaltmak için özel yaklaşımlar kullanıyoruz.",
    "Süt dişlerinin bakımı da kalıcı dişler kadar önemlidir. Çocuğunuzun ağız sağlığı için düzenli kontroller gereklidir.",
    "Diş beyazlatma işlemi hakkında daha detaylı bilgiyi kliniğimizde verebiliriz. Öncelikle dişlerinizin durumunu görmemiz gerekiyor."
  ];

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Kullanıcı mesajını ekle
    const userMessage: Message = {
      from: 'user',
      text: inputText.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // AI yanıtını simüle et
    setTimeout(() => {
      const aiMessage: Message = {
        from: 'ai',
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  // Enter tuşuna basılınca mesaj gönder
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Saat formatı
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`fixed inset-0 z-50 flex justify-end pointer-events-none ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Arka plan overlay - sadece tıklanabilir */}
      <div 
      className={`absolute inset-0 transition-opacity duration-300 pointer-events-auto ${isOpen ? 'bg-opacity-30 opacity-100' : 'bg-opacity-0 opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Drawer - sağdan açılma animasyonu ile */}
      <div 
        className={`relative w-full max-w-md h-full bg-white shadow-xl transform transition-all duration-300 ease-in-out pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white">
              <Image 
                src="/ghibli.jpg" 
                alt="AI Assistant" 
                width={40} 
                height={40} 
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Dt. Ömer AI</h3>
              <p className="text-xs text-blue-100">Diş Hekimi AI Asistanı</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Mesaj alanı - Devre dışı */}
        <div className="flex-1 p-4 overflow-y-auto h-[calc(100vh-180px)] relative filter grayscale opacity-50">
          {/* YAKINDA yazısı */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="bg-blue-600 bg-opacity-80 text-white py-6 px-10 rounded-xl text-3xl font-bold shadow-xl">
              ÇOK YAKINDA
            </div>
          </div>
          
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md rounded-lg p-3 ${
                  message.from === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  {message.from === 'ai' && (
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border border-blue-200">
                        <Image 
                          src="/ghibli.jpg" 
                          alt="AI Assistant" 
                          width={32} 
                          height={32} 
                          className="object-cover" 
                        />
                      </div>
                      <div>
                        <span className="font-medium text-sm">Dt. Ömer AI</span>
                      </div>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 text-right ${
                    message.from === 'user' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Input alanı - Devre dışı */}
        <div className="border-t p-4 bg-white opacity-50">
          <div className="flex rounded-lg border overflow-hidden">
            <input
              type="text"
              disabled
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Bir mesaj yazın..."
              className="flex-1 px-4 py-2 focus:outline-none bg-gray-100 cursor-not-allowed"
            />
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            *Bu AI asistanı çok yakında hizmetinizde olacak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantDrawer; 