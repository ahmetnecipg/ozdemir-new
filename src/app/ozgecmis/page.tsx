import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function OzgecmisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-6 py-16 max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 border-b pb-6">Dr. Ömer Özdemir</h1>
        
        <div className="md:flex mb-16 gap-10 items-start">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col">
              <div className="relative h-[550px] bg-gray-50">
                <Image 
                  src="/drphoto.jpg" 
                  alt="Dr. Ömer Özdemir" 
                  fill 
                  style={{ objectFit: 'contain' }} 
                  className="rounded-t-lg" 
                />
              </div>
              <div className="p-8 bg-white flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">İletişim Bilgileri</h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-lg">05538885444</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-lg">iletisim@ozdemirdis.com</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-lg">Osmaniye, Ümraniye Sk. No:2/B, 34146 Bakırköy/İstanbul</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M12 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      <span className="text-lg">@dr.omer.ozdemir</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-blue-600 font-medium">Randevu için lütfen iletişime geçiniz.</p>
                </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Kişisel Bilgiler</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Dr. Ömer Özdemir 1999 yılında İstanbul Üsküdar&apos;da ailesinin ilk çocuğu olarak dünyaya geldi. İlkokulu İstanbul Altunizade Hafize Özal İlkokulunda, liseyi İstanbul Ümraniye Anadolu Lisesinde tamamladı. Lise mezuniyetinin hemen ardından İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;ni kazandı.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Üniversite öğrenimi sırasında ikinci üniversite olarak kendi üniversitesinin farklı bir bölümü olan Sağlık Kurumları İşletmeciliği bölümünü bitirdi. Lisans eğitimini onur derecesi ile tamamladıktan sonra aynı yıl içerisinde aynı fakültede Pedodonti (Çocuk Diş Hekimliği) Ana bilim Dalı&apos;nda doktora eğitimine başladı ve halen araştırmalarını sürdürmektedir.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Akademik Eğitim</h2>
              <ul className="space-y-6">
                <li className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="font-semibold text-xl">İstanbul Üniversitesi, Diş Hekimliği Fakültesi</div>
                  <div className="text-gray-600 text-lg">Pedodonti Anabilim Dalı, Doktora</div>
                  <div className="text-gray-500">Devam Ediyor</div>
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="font-semibold text-xl">İstanbul Üniversitesi, Sağlık Kurumları İşletmeciliği</div>
                  <div className="text-gray-600 text-lg">Lisans Derecesi</div>
                  <div className="text-gray-500">Tamamlandı</div>
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="font-semibold text-xl">İstanbul Üniversitesi, Diş Hekimliği Fakültesi</div>
                  <div className="text-gray-600 text-lg">Lisans Derecesi (Onur Derecesi ile Mezun)</div>
                  <div className="text-gray-500">Tamamlandı</div>
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="font-semibold text-xl">İstanbul Ümraniye Lisesi</div>
                  <div className="text-gray-500">Tamamlandı</div>
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="font-semibold text-xl">İstanbul Altunizade Hafize Özal İlkokulu</div>
                  <div className="text-gray-500">Tamamlandı</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Uzmanlık Alanları</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-700">Çocuk Diş Hekimliği</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-700">Diş Hekimliğinde Yapay Zeka Uygulamaları</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-700">Dijital Diş Hekimliği Uygulamaları</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-700">Ortodontik Apareyler</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-700">Dental Travma</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Uluslararası Deneyimler</h2>
            <ul className="space-y-6">
              <li className="border-l-4 border-blue-600 pl-6 pb-6">
                <div className="font-semibold text-xl">Erasmus+ Staj Programı</div>
                <div className="text-gray-600 text-lg">Whitecenter Belgie, Belçika</div>
                <p className="text-lg text-gray-700 mt-2">
                  Mayıs-Ağustos 2023 tarihleri arasında Erasmus+ Staj Programı kapsamında Belçika&apos;nın Gent şehrinde bulunan Whitecenter Belgie&apos;de staj gerçekleştirmiştir. Bu süreçte uluslararası hastaların dental tedavileri konusunda önemli deneyimler kazanmıştır.
                </p>
              </li>
              <li className="border-l-4 border-blue-600 pl-6 pb-6">
                <div className="font-semibold text-xl">TİKA - Gönüllü Elçi</div>
                <div className="text-gray-600 text-lg">Zanzibar, Tanzanya</div>
                <p className="text-lg text-gray-700 mt-2">
                  2018 yılında Türk İşbirliği ve Koordinasyon Ajansı (TİKA) tarafından gönüllü elçi seçilerek Assalam Community Foundation ile Zanzibar&apos;da yaşayan kadın ve çocuklara sağlık servisi ve diş hekimliği alanında hizmet ve yardımlar sağlamıştır.
                </p>
              </li>
              <li className="border-l-4 border-blue-600 pl-6">
                <div className="font-semibold text-xl">Volunteers of Turkish Derneği</div>
                <div className="text-gray-600 text-lg">Nijer</div>
                <p className="text-lg text-gray-700 mt-2">
                  Volunteers of Turkish Derneği ile Nijer&apos;de sağlık hizmetleri ve cerrahi diş hekimliği alanında gönüllü olarak hizmet vermiştir.
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Yabancı Dil Bilgisi</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Diller</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                  </svg>
                  <span className="text-lg text-gray-700">Türkçe (Anadil)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                  </svg>
                  <span className="text-lg text-gray-700">İngilizce</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                  </svg>
                  <span className="text-lg text-gray-700">Japonca (N5 Seviyesi)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Özel Beceriler</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                  </svg>
                  <span className="text-lg text-gray-700">Türk İşaret Dili</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Üyelikler</h2>
          <ul className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="text-lg text-gray-700">Türk Diş Hekimleri Birliği</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="text-lg text-gray-700">Türk Pedodonti Derneği</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="text-lg text-gray-700">Volunteers of Turkish Derneği</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
} 