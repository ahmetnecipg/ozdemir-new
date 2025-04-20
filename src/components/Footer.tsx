const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Ömer Özdemir</h3>
            <p className="mb-2">Osmaniye, Ümraniye Sk. No:2/B, 34146 Bakırköy/İstanbul</p>
            <p className="mb-2">Telefon: 05538885444</p>
            <p>E-posta: iletisim@ozdemirdis.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Çalışma Saatleri</h3>
            <p className="mb-2">Pazartesi - Cuma: 09:00 - 18:00</p>
            <p className="mb-2">Cumartesi: 09:00 - 16:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>© {new Date().getFullYear()} Dr. Ömer Özdemir Diş Kliniği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 