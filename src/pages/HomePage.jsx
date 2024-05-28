import Navbar from "../components/fragments/Navbar";
import HeaderTitle from "../components/elements/text/HeaderTitle";
import DeskripsiText from "../components/elements/text/DeskripsiText";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col h-screen bg-secondary">
      <Navbar page={"home"} />
      <main className="w-full px-32">
        {/* ABOUT */}
        <section className="flex gap-8 border border-black my-16">
          <img src="./images/about-image.png" alt="about image" />
          <div className="border-r border-black">
            <HeaderTitle className={`mb-4`}>
              Get Your Cool Hair Style!
            </HeaderTitle>
            <DeskripsiText>
              Bosan dengan gaya rambut lama? Ingin tampil lebih percaya diri
              dengan gaya rambut yang sesuai dengan bentuk wajah, karakter
              rambut, dan gaya kepribadianmu? Situs ini hadir untuk membantumu!
              Kami menggunakan teknologi kecerdasan buatan untuk menganalisis
              bentuk wajah, karakter rambut, dan gaya kepribadianmu, dan
              memberikan rekomendasi gaya rambut terbaik untukmu. Kunjungi situs
              ini sekarang dan ubah penampilanmu dengan gaya rambut impianmu!
            </DeskripsiText>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
