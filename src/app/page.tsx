import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Anime karakterleri */}
      <div className="absolute -right-8 top-20 w-24 h-24 rounded-full overflow-hidden z-10 transform rotate-6 shadow-lg">
        <Image src="/1.png" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
      </div>
      
      <div className="absolute left-6 top-[40%] w-20 h-20 rounded-full overflow-hidden z-10 transform -rotate-12 shadow-lg">
        <Image src="/3.webp" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
      </div>
      
      
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 relative">
            {/* Sağ üst anime karakteri */}
            <div className="absolute -top-8 -right-4 md:right-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden transform rotate-12 shadow-lg hidden md:block">
              <Image src="/2.png" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-3">Çocuk Diş Doktorunuz</h1>
            <p className="text-xl md:text-2xl text-purple-600 font-medium">Dr. Ömer Özdemir&apos;in Renkli Dünyasına Hoş Geldiniz!</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300 relative">
            {/* Sol üst anime karakteri */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full overflow-hidden z-20 transform -rotate-12 shadow-lg hidden md:block">
              <Image src="/4.jpeg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
            </div>
            
            <div className="md:flex">
              <div className="md:w-1/2 h-[500px] md:h-[650px] relative">
                <Image 
                  src="/drphoto.jpg" 
                  alt="Dr. Ömer Özdemir" 
                  fill 
                  style={{ objectFit: 'contain' }} 
                  className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" 
                />
              </div>
              <div className="p-8 md:w-1/2 md:p-10">
                <h2 className="text-3xl font-bold text-teal-600 mb-6">Merhaba, Ben Dr. Ömer!</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Çocukların sağlıklı ve mutlu gülümsemeleri için çalışan bir çocuk diş hekimiyim. Diş tedavisini korkulan bir şey değil, eğlenceli bir deneyime dönüştürmek en sevdiğim şey!
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;nden mezun oldum. Şu anda Pedodonti (çocuk diş hekimliği) alanında doktora yapıyor ve çocuklara özel tedaviler konusunda uzmanlaşıyorum.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bilimi, deneyimi ve çocuklarla güçlü iletişimi birleştirerek; onların diş sağlığına en konforlu, modern ve güvenli çözümleri sunmak için her gün kendimi geliştirmeye devam ediyorum.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16 relative">
            {/* Sağ orta anime karakteri */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden z-20 shadow-lg hidden md:block">
              <Image src="/7.jpg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
            </div>
            
            <div className="bg-blue-50 rounded-3xl p-8 shadow-md border-2 border-blue-200 relative overflow-hidden">
              {/* Sol üst anime karakteri */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full overflow-hidden z-20 transform -rotate-6 shadow-lg">
                <Image src="/8.jpeg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-blue-500 text-5xl mr-3">🌎</span>
                  <h2 className="text-3xl font-bold text-blue-600">Uluslararası Deneyim</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">Whitecenter Belgie - Erasmus+ Stajı</h3>
                    <p className="text-gray-600">Haziran 2024 – Eylül 2024 | Genk, Belçika</p>
                    <p className="text-lg text-gray-700 mt-2">
                      Belçika&apos;daki diş hekimliği uygulamalarına dair kapsamlı bir bakış açısı kazanıldı. Diş hekimliğinin Avrupa standartlarında nasıl yapıldığı tecrübe edildi.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Background anime image */}
              <div className="absolute right-0 bottom-0 w-48 h-48 opacity-20">
                <Image src="/ghibli.jpg" alt="Anime illustration" width={200} height={200} style={{ objectFit: 'contain' }} />
              </div>
            </div>
            
            <div className="bg-green-50 rounded-3xl p-8 shadow-md border-2 border-green-200 relative">
              {/* Sağ orta anime karakteri */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden z-20 transform rotate-12 shadow-lg">
                <Image src="/9.webp" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-green-500 text-5xl mr-3">🦷</span>
                <h2 className="text-3xl font-bold text-green-600">Neler Yapıyorum?</h2>
              </div>
              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🎈</span>
                  <span>Ağrısız ve çocuk dostu diş tedavileri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🖥️</span>
                  <span>Dijital teknolojiyle desteklenen modern uygulamalar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🛡️</span>
                  <span>Çürükleri önlemeye yönelik koruyucu tedaviler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🚑</span>
                  <span>Düşme ve çarpmalarda diş travması tedavileri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">😴</span>
                  <span>Genel anestezi ve sedasyon altında diş tedavileri</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-3xl p-10 shadow-md border-2 border-purple-200 mb-16 relative">
            {/* Sol alt anime karakteri */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full overflow-hidden z-20 transform -rotate-12 shadow-lg hidden md:block">
              <Image src="/10.png" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-purple-500 text-5xl mr-3">📞</span>
              <h2 className="text-3xl font-bold text-purple-600">Benimle Tanışmaya Gel!</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Randevu almak ya da sorularınız için aşağıdaki bilgilerden bana ulaşabilirsiniz:
                </p>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-500 text-xl mr-3">📱</span>
                    <span>Telefon: 05538885444</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 text-xl mr-3">✉️</span>
                    <span>E-posta: iletisim@ozdemirdis.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 text-xl mr-3">🏥</span>
                    <span>Adres: Osmaniye, Ümraniye Sk. No:2/B, 34146 Bakırköy/İstanbul</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-4 font-semibold">Çalışma Saatlerimiz:</p>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl mr-3">🗓️</span>
                    <span>Pazartesi - Cuma: 09:00 - 18:00</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl mr-3">🗓️</span>
                    <span>Cumartesi: 09:00 - 16:00</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 text-xl mr-3">🗓️</span>
                    <span>Pazar: Kapalı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-3xl p-8 shadow-md border-2 border-blue-200 relative">
            {/* Sağ alt anime karakteri */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full overflow-hidden z-20 transform rotate-12 shadow-lg hidden md:block">
              <Image src="/11.jpg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
            </div>
            
            {/* Orta üst anime karakteri */}
            <div className="absolute -top-8 right-1/3 w-18 h-18 rounded-full overflow-hidden z-20 transform -rotate-12 shadow-lg hidden md:block">
              <Image src="/12.png" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
            </div>
            
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Diş Bakımı İpuçları</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🪥</div>
                <p className="text-lg text-gray-700">Günde iki kez dişlerinizi fırçalayın!</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🍎</div>
                <p className="text-lg text-gray-700">Sağlıklı yiyecekler dişlerinize iyi gelir!</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">😁</div>
                <p className="text-lg text-gray-700">Düzenli diş kontrolü mutlu gülüşler demek!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
