import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import HeaderTitle from "../components/elements/text/HeaderTitle";
import DeskripsiText from "../components/elements/text/DeskripsiText";
import SubHeaderTitle from "../components/elements/text/SubHeaderTitle";
import ButtonCustom from "../components/elements/buttons/ButtonCustom";
import Category from "../data/Category";
import Rekomendasi from "../data/Rekomendasi";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col h-screen bg-secondary font-inter">
      <Navbar page={"home"} />
      <main className="w-full">
        {/* ABOUT */}
        <section className="flex gap-8 my-16 px-32">
          <img src="./images/about-image.png" alt="about image" />
          <div className="">
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
        {/* SECTION TENTUKAN GAYA RAMBUTMU */}
        <section className="py-10 mt-16 flex flex-col justify-center items-center bg-primary w-full">
          <SubHeaderTitle>Tentukan Gaya Rambut Idealmu</SubHeaderTitle>
          {/* card category */}
          <div className="flex gap-40 my-10">
            {Category.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-lg"
                />
                <div className="text-center">
                  <DeskripsiText className={`font-bold`}>
                    {category.title}
                  </DeskripsiText>
                </div>
              </div>
            ))}
          </div>
          {/* button lihaat selengkapnya*/}
          <div className="flex items-center space-x-4 w-full">
            <div className="w-full h-[4px] bg-secondary"></div>
            <Link to="/get-started">
              <ButtonCustom className="bg-[#69B518] text-white font-bold text-xl px-8 hover:bg-secondary hover:text-black">
                <div className="flex gap-2 items-center justify-center">
                  <p>Selengkapnya</p>
                  <img src="./svg/arrow-right.svg" alt="arrow" />
                </div>
              </ButtonCustom>
            </Link>
            <div className="w-full h-[4px] bg-secondary"></div>
          </div>
        </section>
        {/* SECTION REKOMENDASI */}
        <section className="py-14 text-center bg-secondary">
          <div className="flex justify-between items-center px-36">
            <SubHeaderTitle>Rekomendasi Kami</SubHeaderTitle>
            <Link to="/style">
              <p className="underline font-bold text-xl">Selengkapnya</p>
            </Link>
          </div>
          {/* card rekomendasi */}
          <div className="flex gap-20 mt-10 items-center justify-center">
            {Rekomendasi.map((rekomendasi, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  src={rekomendasi.image}
                  alt={rekomendasi.title}
                  className="rounded-lg"
                />
                <div className="text-center">
                  <DeskripsiText className={`font-bold`}>
                    {rekomendasi.title}
                  </DeskripsiText>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
