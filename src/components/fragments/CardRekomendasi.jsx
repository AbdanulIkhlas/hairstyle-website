import PropTypes from "prop-types";

const CardRekomendasi = ({ rekomendasi }) => {
  const { nama, textBentukWajah, textJenisRambut, textGayaPribadi, image } = rekomendasi;

  return (
    <div className="card-container max-w-[320px] max-h-[500px]">
      <div className="w-full h-full p-3 flex flex-col items-center rounded-xl overflow-hidden shadow-buttonShadow">
        <img
          src={image}
          alt={nama}
          className="w-[200px] h-[200px] rounded-lg"
        />
        <div className="py-1 w-full">
          <div className="font-bold text-xl mb-4 text-center">{nama}</div>
          <div className="flex gap-2 items-start mb-4 text-sm text-left min-h-[40px]">
            <img
              src="./svg/bentuk-wajah.svg"
              alt="svg bentuk wajah"
              className="pt-[2px]"
            />
            <p className="text-left">{textBentukWajah.join(", ")}</p>
          </div>
          <div className="flex gap-2 items-start mb-4 text-sm text-left min-h-[40px]">
            <img
              src="./svg/jenis-rambut.svg"
              alt="svg jenis rambut"
              className="pt-[2px]"
            />
            <p className="text-left">{textJenisRambut.join(", ")}</p>
          </div>
          <div className="flex gap-2 items-start mb-4 text-sm text-left min-h-[40px]">
            <img
              src="./svg/kepribadian.svg"
              alt="svg kepribadian"
              className="pt-[2px]"
            />
            <p className="text-left">{textGayaPribadi.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardRekomendasi.propTypes = {
  rekomendasi: PropTypes.object,
};

export default CardRekomendasi;
