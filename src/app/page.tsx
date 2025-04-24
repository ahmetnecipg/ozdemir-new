import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* All top images removed */}
      
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 relative">
            {/* Sağ üst anime karakteri */}
            <div className="absolute -bottom-16 right-2 md:right-8 w-12 h-12 md:w-20 md:h-20 transform rotate-12 shadow-lg">
              <Image src="/2.png" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full rounded-full" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-3">Çocuk Diş Doktorunuz</h1>
            <p className="text-xl md:text-2xl text-purple-600 font-medium">Dt. Ömer Özdemir&apos;in Renkli Dünyasına Hoş Geldiniz!</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300 relative">
            {/* Sol üst anime karakteri */}
            {/* Ana bölüm köşesi karakteri */}
            <div className="absolute -bottom-4 md:-bottom-6 right-4 w-16 h-16 md:w-24 md:h-24 z-20 transform rotate-12">
              <Image src="/cute5.jpg" alt="Anime karakter" width={130} height={130} style={{ objectFit: 'contain' }} />
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
                <h2 className="text-3xl font-bold text-teal-600 mb-6">Merhaba, Ben Dt. Ömer!</h2>
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
            {/* Luffy image is being removed */}
            
            <div className="bg-green-50 rounded-3xl p-8 shadow-md border-2 border-green-200 relative">
              {/* Köşe anime karakteri - yeşil kart */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden z-20 transform rotate-12 shadow-lg">
                <Image src="/9.webp" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
              </div>
              
              {/* Üst köşe anime karakteri - yeşil kart */}
              <div className="absolute -top-4 right-4 w-16 h-16 md:w-20 md:h-20 z-20 transform -rotate-6">
                <Image src="/cute4.png" alt="Anime karakter" width={112} height={112} style={{ objectFit: 'contain' }} />
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
                  <span>Genel anestezi ve sedasyon altında diş tedaviler</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-3xl p-8 shadow-md border-2 border-blue-200 relative">
              {/* Köşe anime karakteri - mavi kart */}
              <div className="absolute -bottom-3 -left-3 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden z-20 transform -rotate-12 shadow-lg">
                <Image src="/8.jpeg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full" />
              </div>
              
              {/* Üst köşe anime karakteri - mavi kart */}
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Diş Bakımı İpuçları</h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-4xl mb-3">🪥</div>
                  <p className="text-base text-gray-700">Günde iki kez dişlerinizi fırçalayın!</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-4xl mb-3">🍎</div>
                  <p className="text-base text-gray-700">Sağlıklı yiyecekler dişlerinize iyi gelir!</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-4xl mb-3">😁</div>
                  <p className="text-base text-gray-700">Düzenli diş kontrolü mutlu gülüşler demek!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Neden Dr. Ömer Özdemir? Bölümü */}
          <div className="mt-16 mb-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-10 text-white shadow-lg relative">
            {/* Soldaki karakter - Neden Dr. Ömer bölümü */}
            <div className="absolute -top-8 left-8 w-16 h-16 md:w-24 md:h-24 z-10">
              <Image src="/7.jpg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full rounded-full" />
            </div>
            
            {/* Sağdaki karakter - Neden Dr. Ömer bölümü */}
            <div className="absolute -bottom-6 right-8 w-16 h-16 md:w-24 md:h-24 z-10">
              <Image src="/11.jpg" alt="Anime karakteri" width={100} height={100} className="object-cover w-full h-full rounded-full" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-center">Neden Dt. Ömer Özdemir?</h2>
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
          
          {/* Bottom decorative elements removed */}
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
