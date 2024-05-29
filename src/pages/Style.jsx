import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import SubHeaderTitle from "../components/elements/text/SubHeaderTitle";
import RekomendasiRambut from "../data/RekomendasiRambut";
import CardRekomendasi from "../components/fragments/CardRekomendasi";

const Style = () => {
  return (
    <main className="w-full flex flex-col  bg-secondary font-inter">
      <Navbar page={"style"} />
      <SubHeaderTitle className={`my-10  mx-auto`}>
        Pilih Gaya Rambutmu!
      </SubHeaderTitle>
      {/* SECTION CARD GAYA RAMBUT */}
      <section className="grid grid-cols-5 gap-8 px-32  mb-10">
        {RekomendasiRambut.map((item) => (
          <CardRekomendasi key={item.id} rekomendasi={item} />
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default Style;
