import { useState } from "react";
import HeaderTitle from "../components/elements/text/HeaderTitle";
import SubHeaderTitle from "../components/elements/text/SubHeaderTitle";
import DeskripsiText from "../components/elements/text/DeskripsiText";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import BentukWajah from "../data/BentukWajah";
import JenisRambut from "../data/JenisRambut";
import GayaKepribadian from "../data/GayaKepribadian";
import ProsesRekomendasi from "../controllers/ProsesRekomendasi";
import RadioButtonCard from "../components/fragments/RadioButtonCard";
import ButtonCustom from "../components/elements/buttons/ButtonCustom";
import RekomendasiRambut from "../data/RekomendasiRambut";
import CardRekomendasi from "../components/fragments/CardRekomendasi";

const GetStarted = () => {
  const [selectedBentukWajah, setSelectedBentukWajah] = useState(null);
  const [selectedJenisRambut, setSelectedJenisRambut] = useState(null);
  const [selectedGayaKepribadian, setSelectedGayaKepribadian] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [hasClickedButton, setHasClickedButton] = useState(false); // State untuk menandai tombol sudah diklik atau belum

  const handleBentukWajahChange = (event) => {
    setSelectedBentukWajah(event.target.value);
    setHasClickedButton(false);
  };

  const handleJenisRambutChange = (event) => {
    setSelectedJenisRambut(event.target.value);
    setHasClickedButton(false);
  };

  const handleGayaKepribadianChange = (event) => {
    setSelectedGayaKepribadian(event.target.value);
    setHasClickedButton(false);
  };

  const handleLihatRekomendasiClick = () => {
    setIsLoading(true); // Menampilkan animasi loading
    setTimeout(() => {
      setIsLoading(false); // Menghilangkan animasi loading setelah 3 detik
    }, 3000);
    setHasClickedButton(true); // Menandai tombol sudah diklik
  };

  return (
    <div className="w-full flex flex-col bg-secondary font-inter">
      <Navbar page={"get-started"} />
      <main className="min-h-[800px] w-full px-32 py-14 border border-black">
        <HeaderTitle className={`mx-auto text-center mb-2`}>
          Tentukan Gaya Rambut Idealmu!
        </HeaderTitle>
        <DeskripsiText className={`text-center mb-10`}>
          Temukan gaya rambut yang paling cocok untukmu berdasarkan kriteria
          yang ada. Pastikan data yang dimasukkan itu valid. Karena gaya rambut
          yang ideal mampu meningkatkan penampilan dan kepercayaan dirimu.
        </DeskripsiText>
        {/* SECTION BENTUK WAJAH */}
        <section>
          <SubHeaderTitle className={`mb-8`}>Bentuk Wajah</SubHeaderTitle>
          <div className="flex flex-wrap justify-around">
            {BentukWajah.map((item) => (
              <RadioButtonCard
                key={item.id}
                code={item.id}
                name={item.name}
                image={item.image}
                selected={selectedBentukWajah}
                onChange={handleBentukWajahChange}
              />
            ))}
          </div>
        </section>
        {/* SECTION  JENIS RAMBUT */}
        <section>
          <SubHeaderTitle className={`mb-8 mt-14`}>Jenis Rambut</SubHeaderTitle>
          <div className="flex flex-wrap justify-around">
            {JenisRambut.map((item) => (
              <RadioButtonCard
                key={item.id}
                code={item.id}
                name={item.name}
                image={item.image}
                selected={selectedJenisRambut}
                onChange={handleJenisRambutChange}
              />
            ))}
          </div>
        </section>
        {/* SECTION  GAYA KEPRIBADIAN*/}
        <section>
          <SubHeaderTitle className={`mb-8 mt-14`}>
            Gaya Kepribadian
          </SubHeaderTitle>
          <div className="flex flex-wrap justify-around">
            {GayaKepribadian.map((item) => (
              <RadioButtonCard
                key={item.id}
                code={item.id}
                name={item.name}
                image={item.image}
                selected={selectedGayaKepribadian}
                onChange={handleGayaKepribadianChange}
              />
            ))}
          </div>
        </section>
        <section className="w-full flex  mt-20 justify-center ">
          <button
            className="mx-auto "
            onClick={handleLihatRekomendasiClick}
            disabled={hasClickedButton}
          >
            <ButtonCustom
              className={`w-full bg-primary text-black font-bold px-10 `}
            >
              Lihat Rekomendasi
            </ButtonCustom>
          </button>
        </section>
        {/* hasil */}
        <section className="mt-14 border border-black min-h-[500px]">
          <SubHeaderTitle className={`mb - 8`}>Hasil</SubHeaderTitle>
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary "></div>
            </div>
          ) : (
            hasClickedButton && (
              <ProsesRekomendasi
                kodeBentukWajah={selectedBentukWajah}
                kodeJenisRambut={selectedJenisRambut}
                kodeGayaKepribadian={selectedGayaKepribadian}
              />
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
