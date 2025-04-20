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
    id: 'ortodonti',
    title: 'Çocuklar İçin Ortodontik Apareyler ve Tedavileri',
    icon: '🦷',
    color: 'blue',
    content: `Ortodontik tedavilerin çocuklar için erken yaşlarda başlatılması genellikle daha iyi sonuçlar elde edilmesini sağlar. Çünkü çocukların çene yapısı henüz gelişme sürecindedir ve dişler daha esnektir. Erken müdahale, daha ciddi problemlerin önüne geçmeye ve daha kısa tedavi süreleriyle sonuçlanmaya yardımcı olabilir.
    
    Unutulmamalıdır ki her çocuğun diş ve çene yapısı farklıdır ve ihtiyaçları bireysel olarak değerlendirilmelidir. Çocuğunuzun ortodontik tedaviye ihtiyacı olup olmadığını belirlemek için düzenli diş hekimi kontrolleri önemlidir.
    
    Sonuç olarak, çocukların ortodontik apareyler ve tedavileri, düzgün bir diş ve çene yapısı elde etmelerine yardımcı olabilir. Erken yaşlarda başlatılan tedaviler, çocuğunuzun gülümsemesinin ve genel ağz sağlığının ilerleyen yıllarda da güzel olmasına katkıda bulunabilir.`,
    image: '/apareys.png'
  },
  {
    id: 'kanal',
    title: 'Çocuklarda Uygulanan Kanal Tedavisi',
    icon: '🔍',
    color: 'purple',
    content: `Çocuklarda kanal tedavisi, dişteki aşırı çürük, travma veya enfeksiyon gibi durumlar nedeniyle hasar görmüş dişin tedavisinde kullanılan bir yöntemdir. Bu tedavi, dişin iç kısmındaki yumuşak doku ve sinirleri temizlemeyi, dezenfekte etmeyi ve dolgu malzemesiyle doldurmayı içerir.
    
    Kanal tedavisi, dişin kaybedilmesini önlemeye ve çocuğun ağzındaki doğal dişin korunmasına yardımcı olur. Tedavi, diş ağrısını azaltır, enfeksiyonu kontrol altına alır ve dişin sağlıklı bir şekilde kullanılmasını sağlar.
    
    Çocuklarda kanal tedavisi uzmanlık gerektiren hassas bir konudur. Kalıcı dişler gibi köklü dişler olan süt dişlerindeki çürüklerin ilerlemesi; gece ağrısı, soğuğa karşı hassasiyet ve şişlik gibi sorunlara neden olabilir. Bu gibi durumlarda süt dişlerine kanal tedavisi önerilmektedir.`,
    image: '/kanal.png'
  },
  {
    id: 'curuk',
    title: 'Çocuklarda Diş Çürükleri',
    icon: '🍭',
    color: 'yellow',
    content: `Çocuklarda diş çürükleri, çocukluk çağının en yaygın ve önemli diş sağlığı sorunlarından biridir. Diş çürükleri, şekerli yiyeceklerin bakteriler tarafından metabolize edilmesi sonucu oluşan asitlerin diş minesini çözmesiyle başlar. Bu süreç, zaman içinde dişin minesinin zayıflamasına ve çürük oluşumuna yol açar.
    
    Çocukların diş çürüklerine yatkınlığı, beslenme alışkanlıkları, diş hijyeni düzeni ve genetik faktörler gibi çeşitli etmenlere bağlıdır. Şekerli içeceklerin ve atıştırmalıkların aşırı tüketimi, diş çürükleri riskini artırır.
    
    Çocuklarda diş çürüklerinin etkileri şunlardır:
    • Diş Ağrısı ve Hassasiyet: Çürükler dişin hassas kısımlarına ulaştığında, ağrı ve hassasiyet hissedilebilir.
    • Çürüklerin İlerlemesi: Tedavi edilmediğinde çürükler dişin içine ilerleyerek dişin pulpasını etkileyebilir ve enfeksiyonlara yol açabilir.
    • Diş Kaybı: İleri düzeydeki çürükler, dişi kaybetmeye ve boşluğun doldurulması için diş protezi veya implant gibi tedavilere ihtiyaç duyulmasına neden olabilir.`,
    image: '/curuk.png'
  },
  {
    id: 'travma',
    title: 'Çocuklarda Görülen Diş Travmaları ve Tedavileri',
    icon: '⚠️',
    color: 'red',
    content: `Çocuklarda diş travmaları, oyuncak kazaları, spor aktiviteleri veya düşmeler gibi necedenlerle sıkça görülebilir. Diş travmaları, dişlerin kırılması, çıkması veya yerinden oynaması gibi çeşitli şekillerde ortaya çıkabilir.
    
    Diş travmalarında erken müdahale ve profesyonel tedavi, dişlerin sağlıklı ve doğal bir şekilde korunmasına yardımcı olur. Travmaya karşı koruyucu dişlikler kullanmak, çocukların dişlerini spor aktiviteleri sırasında korumak için önemlidir.`,
    image: '/travma.png'
  },
  {
    id: 'cekim',
    title: 'Çocuklarda Diş Çekimi',
    icon: '🔧',
    color: 'green',
    content: `Çocuklarda da erişkinlerde olduğu gibi süt ya da daimi dişleri çekilebilir. Daimi dişleri ortodontik karar ya da aşırı harabiyet durumu gibi ender durumlarda çekmekteyiz. Bu cerrahiler, çocukların diş sağlığını korumak ve gelecekte olası problemleri önlemek için uygulanabilir.
    
    Çocuklarda diş çekim işlemleri çocukların psikolojileri düşünülerek onları tedirgin etmeden yapılmaktadır. Diş çekimleri lokal anestezi altında yapılmaktadır. Süt dişlerinin aşırı sallandığı durumlarda topikal anestezik spreyle de uyuşturularak basitçe süt dişini çekebilmekteyiz.`,
    image: '/discekimi.png'
  },
  {
    id: 'anestezi',
    title: 'Çocuklarda Diş Tedavilerinde Genel Anestezi ve Sedasyon İşlemleri',
    icon: '💤',
    color: 'teal',
    content: `Çocuklarda diş tedavileri, çocukların genellikle heyecan veya endişeyle yaklaştığı deneyimler olabilir. Bazı çocuklar, diş hekimine gitmeye karşı direnç gösterebilir ve tedavi sırasında sakinleşmeleri zor olabilir. Bu gibi durumlarda, çocukların daha rahat bir deneyim yaşamalarına yardımcı olmak için genel anestezi ve sedasyon yöntemleri kullanılabilir.
    
    Genel anestezi, çocuğun bilincinin geçici olarak kapatılmasını ve uykuya daldırılmasını sağlayan bir tür anestezi yöntemidir. Bu işlem, ağız ve diş sağlığı için daha kapsamlı ve uzun süreli tedavilere ihtiyaç duyulan durumlarda uygulanır.
    
    Sedasyon, çocuğun sakinleşmesini ve anksiyetesini azaltmak için kullanılan hafif anestezi birimidir. Çocuğun bilinci hafifçe etkilenir, ancak çocuk bilinçli bir şekilde nefes alma ve tepki verme yeteneğini korur.`,
    image: '/kanal.png'
  },
  {
    id: 'gicirdatma',
    title: 'Çocuklarda Diş Gıcırdatma Tedavisi',
    icon: '😬',
    color: 'pink',
    content: `Çocuklarda diş gıcırdatma (bruksizm), uyku sırasında veya stresli durumlarda bilinçsizce dişleri sıkma ve gıcırdatma eylemidir. Bu yaygın bir durumdur ve çocuklar arasında farklı yaş gruplarında görülebilir. Diş gıcırdatma genellikle çocukların diş ve çene yapısının gelişimi sırasında ortaya çıkar.
    
    Çoğu durumda, çocukların farkında olmadan gece uykuları sırasında gerçekleşir. Ancak bazı çocuklar, stresli veya gergin anlarda da diş gıcırdatma eğilimi gösterebilir. Diş gıcırdatma genellikle aileler tarafından fark edilir; çünkü uyku esnasında yüksek sesli gıcırdatma sesleri veya diş sıkma izleri gözlemlenebilir.
    
    Çocuğunuzda diş gıcırdatma belirtileri fark ederseniz, bir pedodontiste (çocuk diş hekimi) danışmanız önemlidir. Çocuğun durumunu değerlendirerek uygun tedavi yöntemini belirleyecektir.`,
    image: '/apareys.png'
  }
];

export default function Tedaviler() {
  const [activeTab, setActiveTab] = useState<string>('ortodonti');
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
              <div className="md:flex">
                {/* Tedavi Resmi */}
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {imageError[activeTreatment.id] ? (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-8xl">{activeTreatment.icon}</div>
                      </div>
                    ) : (
                      <Image 
                        src={activeTreatment.image} 
                        alt={activeTreatment.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        onError={() => handleImageError(activeTreatment.id)}
                      />
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
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-semibold mb-2">Çocuk Dostu Yaklaşım</h3>
                <p>Çocukların kendilerini rahat ve güvende hissetmelerini sağlayan özel bir yaklaşım sunuyoruz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Uzman Bakım</h3>
                <p>Çocuk diş sağlığı konusunda uzmanlaşmış, deneyimli ve sürekli kendini geliştiren bir ekibiz.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Modern Teknoloji</h3>
                <p>En son teknoloji ve yöntemlerle çocuğunuzun diş sağlığını koruyoruz.</p>
              </div>
            </div>
          </div>

          {/* İletişim CTA */}
          <div className="mt-16 bg-blue-50 rounded-3xl p-8 shadow-md border-2 border-blue-200 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Randevu Alın</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Çocuğunuzun diş sağlığı için profesyonel tedavi ve danışmanlık almak için hemen bize ulaşın.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
              İletişime Geçin
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 