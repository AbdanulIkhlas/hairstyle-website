import PropTypes from "prop-types";
import CardRekomendasi from "../components/fragments/CardRekomendasi";
import RekomendasiRambut from "../data/RekomendasiRambut";

const ProsesRekomendasi = ({
  kodeBentukWajah,
  kodeJenisRambut,
  kodeGayaKepribadian,
}) => {
  const rekomendasiRambut = () => {
    const rekomendasiArray = [];
    for (const r of RekomendasiRambut) {
      if (
        r.bentukWajah.includes(kodeBentukWajah) &&
        r.jenisRambut.includes(kodeJenisRambut) &&
        r.gayaPribadi.includes(kodeGayaKepribadian)
      ) {
        rekomendasiArray.push(r);
      }
    }
    return rekomendasiArray.length > 0
      ? rekomendasiArray
      : ["Tidak ada rekomendasi yang cocok"];
  };

  return (
    <div className="grid grid-cols-3 justify-items-center gap-8 gap-y-12">
      {rekomendasiRambut().map((rekomendasi) => (
        <>
          <div className="w-[300px] gap-y-12">
            <CardRekomendasi key={rekomendasi.id} rekomendasi={rekomendasi} />
          </div>
        </>
      ))}
    </div>
  );
};

ProsesRekomendasi.propTypes = {
  kodeBentukWajah: PropTypes.string.isRequired,
  kodeJenisRambut: PropTypes.string.isRequired,
  kodeGayaKepribadian: PropTypes.string.isRequired,
};

export default ProsesRekomendasi;
