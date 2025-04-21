"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  const [activeTab, setActiveTab] = useState<string>('curuk');
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  // Aktif tedavi verilerini al
  const activeTreatment = treatmentData.find(treatment => treatment.id === activeTab);

  // Image error handler
  const handleImageError = (id: string) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  // Reset image error when tab changes
  useEffect(() => {
    setImageError({});
  }, [activeTab]);

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">Çocuklar İçin Diş Tedavileri</h1>
            <p className="text-xl text-gray-600">Dr. Ömer Özdemir&apos;in uzman olduğu diş tedavi yöntemleri</p>
          </div>

          {/* Tedavi Seçenekleri - Tablet/Masaüstü Görünümü */}
          <div className="hidden md:flex space-x-2 mb-8 overflow-x-auto pb-2">
            {treatmentData.map(treatment => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(treatment.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeTab === treatment.id 
                    ? `${colorClasses[treatment.color].bg} text-white` 
                    : `${colorClasses[treatment.color].light} ${colorClasses[treatment.color].text} hover:bg-opacity-80`
                }`}
              >
                <span className="mr-2">{treatment.icon}</span>
                {treatment.title}
              </button>
            ))}
          </div>

          {/* Tedavi Seçenekleri - Mobil Görünüm */}
          <div className="md:hidden mb-8">
            <select 
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {treatmentData.map(treatment => (
                <option key={treatment.id} value={treatment.id}>
                  {treatment.icon} {treatment.title}
                </option>
              ))}
            </select>
          </div>

          {/* Tedavi İçeriği */}
          {activeTreatment && (
            <div className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.01] ${colorClasses[activeTreatment.color].border} border-2`}>
              <div className="md:flex h-full">
                {/* Tedavi Resmi */}
                <div className="md:w-2/5 h-64 md:h-auto relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-50 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                    {imageError[activeTreatment.id] ? (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-8xl">{activeTreatment.icon}</div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src={activeTreatment.image} 
                          alt={activeTreatment.title}
                          fill
                          style={{ 
                            objectFit: 'contain', 
                            padding: '16px',
                          }}
                          onError={() => handleImageError(activeTreatment.id)}
                          className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Tedavi Bilgileri */}
                <div className="p-8 md:w-3/5">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colorClasses[activeTreatment.color].light} ${colorClasses[activeTreatment.color].text} mb-4`}>
                    <span className="mr-2">{activeTreatment.icon}</span>
                    Çocuk Diş Tedavisi
                  </div>
                  <h2 className={`text-3xl font-bold ${colorClasses[activeTreatment.color].text} mb-6`}>
                    {activeTreatment.title}
                  </h2>
                  <div className="prose max-w-none text-gray-700">
                    {activeTreatment.content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Neden Biz Bölümü */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-10 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Neden Dr. Ömer Özdemir?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🦷</div>
                <h3 className="text-xl font-semibold mb-2">Koruyucu Tedavi Odaklı</h3>
                <p>Gereksiz işlemler yerine, koruyucu ve minimal girişimsel tedavilerle çocukların doğal diş yapısını korumayı hedefliyoruz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Kişiselleştirilmiş Planlama</h3>
                <p>Her çocuğun ihtiyacı farklıdır. Bireysel tedavi planlarıyla çocuğunuza özel çözümler sunuyoruz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">👨👩👧</div>
                <h3 className="text-xl font-semibold mb-2">Aileyle İş Birliği</h3>
                <p>Ebeveynlerin tedavi sürecine katılımını önemsiyoruz. Çocuğunuzun alışkanlıkları, korkuları ve beklentileri doğrultusunda birlikte karar veriyoruz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Gülümseten İletişim</h3>
                <p>Çocuklarla güçlü bir iletişim kurarak onları tedaviye hazırlıyor, kliniğimizden mutlu ayrılmalarını sağlıyoruz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Modern Teknoloji</h3>
                <p>Dijital röntgen ve anestezi, lazer destekli cihazlar, dijital tarama sistemleri ve çocuk dostu sistemlerle tedavileri hem hızlı hem de konforlu hâle getiriyoruz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-semibold mb-2">Çocuk Dostu Yaklaşım</h3>
                <p>Korkuyu kapıda bırakıyoruz! Her çocuğa özel iletişimle, sevgi dolu ve güven veren bir ortam sunuyoruz. Çünkü tedavi, güvenle başlar.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
} 