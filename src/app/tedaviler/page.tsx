"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

// Renk tipleri için tip tanımı
type ColorType = 'blue' | 'purple' | 'yellow' | 'red' | 'green' | 'teal' | 'pink';

// Tedavi bilgileri için interface
interface Treatment {
  id: string;
  title: string;
  icon: string;
  color: ColorType;
  content: string;
  image: string;
}

// Tedavi bilgileri
const treatmentData: Treatment[] = [
  {
    id: 'curuk',
    title: 'Çocuklarda Diş Çürükleri',
    icon: '🍭',
    color: 'yellow',
    content: `Çocukluk çağı çürükleri, erken yaşta başlayan ve hızla ilerleyebilen yaygın bir sorundur. Düzenli kontroller, doğru beslenme ve koruyucu uygulamalarla çürükleri önlemek mümkün! Tedavide ise hem estetik hem de dayanıklı dolgu materyalleri tercih edilir.

📌 Minik çürükler, büyük sorunlara dönüşmeden çözüme kavuşsun.`,
    image: '/curuk.png'
  },
  {
    id: 'kanal',
    title: 'Çocuklarda Uygulanan Kanal Tedavisi',
    icon: '🔍',
    color: 'purple',
    content: `Süt dişlerinde veya genç daimi dişlerde oluşan derin çürüklerde, dişin çekilmeden tedavi edilmesi için kanal tedavisi gerekebilir. Çocuklara özel tekniklerle yapılan bu işlem, dişin ağızda kalmasını ve işlevini sürdürmesini sağlar.

📌 Diş kaybını değil, dişin geleceğini planlıyoruz`,
    image: '/kanal.png'
  },
  {
    id: 'travma',
    title: 'Çocuklarda Görülen Diş Travmaları ve Tedavileri',
    icon: '⚠️',
    color: 'red',
    content: `Düşme, çarpma gibi kazalar sonrası dişlerde kırık, yer değiştirme ya da tamamen yerinden çıkma gibi travmalar yaşanabilir. Travma sonrası ilk müdahale çok önemlidir. Erken ve doğru tedaviyle dişi kurtarmak mümkündür.

📌 Travma anlarında doğru müdahale, çocuk dişinin kaderini belirler`,
    image: '/travma.png'
  },
  {
    id: 'cekim',
    title: 'Çocuklarda Diş Çekimi',
    icon: '🔧',
    color: 'green',
    content: `Süt dişlerinin aşırı çürük, enfeksiyon veya yer tutucu gereksinimi gibi nedenlerle çekilmesi gerekebilir. Çocuk dostu tekniklerle ağrısız ve konforlu bir çekim süreci sağlanır.

📌 Her çekim bir kayıp değil, bazen sağlıklı dişlerin önünü açan bir adımdır.`,
    image: '/discekimi.png'
  },
  {
    id: 'anestezi',
    title: 'Çocuklarda Diş Tedavilerinde Genel Anestezi ve Sedasyon İşlemleri',
    icon: '💤',
    color: 'teal',
    content: `Küçük yaştaki ya da iş birliği kısıtlı çocuklarda, tüm diş tedavileri genel anestezi veya sedasyon altında güvenle tamamlanabilir. Bu yöntemler sayesinde çocuklar için konforlu, aileler için ise stresiz bir tedavi süreci sağlanır.

📌 Bazen en iyi tedavi, çocuğun hiçbir şey hatırlamadığı tedavidir.`,
    image: '/sedasyon.png'
  },
  {
    id: 'ortodonti',
    title: 'Çocuklar İçin Ortodontik Apareyler ve Tedavileri',
    icon: '🦷',
    color: 'blue',
    content: `
Çocuklarda çapraşık dişler ve çene problemleri erken yaşta fark edilirse, basit ortodontik apareylerle tedavi edilebilir. Hareketli veya sabit apareylerle hem çene gelişimi yönlendirilir hem de ileride oluşabilecek sorunların önüne geçilir. Erken müdahale, ileride daha büyük tedavilere ihtiyaç kalmamasını sağlar.

📌 Ömer Özdemir ile sağlıklı gülüşler, küçük yaşta başlar.`,
    image: '/apareys.png'
  }
];

export default function Tedaviler() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  // Image error handler
  const handleImageError = (id: string) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  // Renkle ilgili sınıf tanımları
  const colorClasses: Record<ColorType, {
    bg: string;
    light: string;
    border: string;
    text: string;
  }> = {
    blue: {
      bg: 'bg-blue-500',
      light: 'bg-blue-100',
      border: 'border-blue-300',
      text: 'text-blue-700'
    },
    purple: {
      bg: 'bg-purple-500',
      light: 'bg-purple-100',
      border: 'border-purple-300',
      text: 'text-purple-700'
    },
    yellow: {
      bg: 'bg-yellow-500',
      light: 'bg-yellow-100',
      border: 'border-yellow-300',
      text: 'text-yellow-700'
    },
    red: {
      bg: 'bg-red-500',
      light: 'bg-red-100',
      border: 'border-red-300',
      text: 'text-red-700'
    },
    green: {
      bg: 'bg-green-500',
      light: 'bg-green-100',
      border: 'border-green-300',
      text: 'text-green-700'
    },
    teal: {
      bg: 'bg-teal-500',
      light: 'bg-teal-100',
      border: 'border-teal-300',
      text: 'text-teal-700'
    },
    pink: {
      bg: 'bg-pink-500',
      light: 'bg-pink-100',
      border: 'border-pink-300',
      text: 'text-pink-700'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">Çocuklar İçin Diş Tedavileri</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dt. Ömer Özdemir&apos;in uzman olduğu çocuk diş tedavileri, modern ve çocuk dostu yaklaşımla sunulmaktadır</p>
          </div>

          {/* Tüm Tedaviler Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {treatmentData.map(treatment => (
              <div 
                key={treatment.id}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${colorClasses[treatment.color].border} border-2 flex flex-col h-full`}
              >
                <div className={`${colorClasses[treatment.color].bg} p-4 flex items-center space-x-2`}>
                  <span className="text-3xl">{treatment.icon}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{treatment.title}</h2>
                </div>
                
                <div className="flex flex-col md:flex-row h-full">
                  {/* Tedavi Resmi */}
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    {imageError[treatment.id] ? (
                      <div className={`w-full h-full ${colorClasses[treatment.color].light} flex items-center justify-center`}>
                        <div className="text-8xl">{treatment.icon}</div>
                      </div>
                    ) : (
                      <div className="relative w-full h-48 md:h-full flex items-center justify-center bg-gray-50">
                        <Image 
                          src={treatment.image} 
                          alt={treatment.title}
                          fill
                          style={{ 
                            objectFit: 'contain', 
                            padding: '16px',
                          }}
                          onError={() => handleImageError(treatment.id)}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Tedavi Bilgileri */}
                  <div className="p-6 md:w-3/5 flex-grow">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colorClasses[treatment.color].light} ${colorClasses[treatment.color].text} mb-4`}>
                      <span className="mr-2">{treatment.icon}</span>
                      Çocuk Diş Tedavisi
                    </div>
                    <div className="prose text-gray-700">
                      {treatment.content.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Çocuk Diş Tedavileri Hakkında Bilgi */}
          <div className="bg-blue-50 rounded-3xl p-8 shadow-md border-2 border-blue-200 mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Çocuk Diş Hekimliği (Pedodonti) Hakkında</h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                Çocuk diş hekimliği, bebeklerin, çocukların ve ergenlerin ağız sağlığı ihtiyaçlarına odaklanan özel bir diş hekimliği dalıdır. Çocukların büyüme ve gelişim süreçlerini dikkate alarak, süt dişlerinden daimi dişlere geçiş döneminde uygun tedavi yaklaşımları sunmak temel amacımızdır.
              </p>
              <p>
                Dt. Ömer Özdemir, çocuklara özel iletişim becerileri ve modern tedavi teknikleriyle, diş tedavisini korkulan bir deneyim olmaktan çıkarıp eğlenceli bir sürece dönüştürmeyi hedeflemektedir. Çocuğunuzun yaşına ve ihtiyaçlarına uygun tedavi planlaması ile sağlıklı gülüşler için doğru adımları birlikte atıyoruz.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Sağlıklı Gülüşler İçin Randevu Alın</h2>
            <p className="text-xl mb-6">Çocuğunuzun diş sağlığı hakkında sorularınız mı var? Hemen iletişime geçin!</p>
            <div className="flex justify-center">
              <Link href="/contact" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md transition-all hover:bg-blue-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 