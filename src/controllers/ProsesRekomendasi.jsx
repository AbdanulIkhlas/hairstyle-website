import PropTypes from "prop-types";

const ProsesRekomendasi = ({
  kodeBentukWajah,
  kodeJenisRambut,
  kodeGayaKepribadian,
}) => {
  const rekomendasi = [
    {
      id: "GR01",
      nama: "Undercut",
      bentukWajah: ["B001", "B002", "B003", "B005"],
      jenisRambut: ["J001", "J002", "J003", "J005"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
    {
      id: "GR02",
      nama: "Top Knot",
      bentukWajah: ["B001", "B003", "B004"],
      jenisRambut: ["J001", "J002", "J004"],
      gayaPribadi: ["P002", "P001", "P004"],
    },
    {
      id: "GR03",
      nama: "Brushed On Top",
      bentukWajah: ["B001", "B002", "B003"],
      jenisRambut: ["J001", "J002", "J003"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
    {
      id: "GR04",
      nama: "Buzz Cut",
      bentukWajah: ["B001", "B004", "B005"],
      jenisRambut: ["J002", "J004", "J005"],
      gayaPribadi: ["P001", "P002", "P003"],
    },
    {
      id: "GR05",
      nama: "Two Block",
      bentukWajah: ["B001", "B002", "B005"],
      jenisRambut: ["J001", "J002", "J003", "J004"],
      gayaPribadi: ["P002", "P003", "P004"],
    },
    {
      id: "GR06",
      nama: "Soft Side Parting",
      bentukWajah: ["B001", "B002", "B003"],
      jenisRambut: ["J002", "J003", "J004"],
      gayaPribadi: ["P005", "P003", "P004"],
    },
    {
      id: "GR07",
      nama: "Short and Spiky",
      bentukWajah: ["B001", "B002", "B003"],
      jenisRambut: ["J001", "J002", "J003"],
      gayaPribadi: ["P002", "P003", "P001"],
    },
    {
      id: "GR08",
      nama: "Pompadour",
      bentukWajah: ["B001", "B002", "B005"],
      jenisRambut: ["J001", "J002", "J004", "J005"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
    {
      id: "GR09",
      nama: "Mullet",
      bentukWajah: ["B001", "B003", "B004"],
      jenisRambut: ["J001", "J002", "J004", "J005"],
      gayaPribadi: ["P002", "P004", "P001"],
    },
    {
      id: "GR10",
      nama: "Quiff",
      bentukWajah: ["B001", "B002", "B003", "B005"],
      jenisRambut: ["J001", "J002", "J004", "J005"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
    {
      id: "GR11",
      nama: "French Crop",
      bentukWajah: ["B001", "B002", "B004", "B005"],
      jenisRambut: ["J001", "J002", "J003", "J004"],
      gayaPribadi: ["P002", "P001", "P003"],
    },
    {
      id: "GR12",
      nama: "Slicked Back Undercut",
      bentukWajah: ["B001", "B002", "B003", "B005"],
      jenisRambut: ["J001", "J002", "J004"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
    {
      id: "GR13",
      nama: "Comma Hair",
      bentukWajah: ["B001", "B003", "B005"],
      jenisRambut: ["J001", "J002", "J004"],
      gayaPribadi: ["P002", "P005", "P004"],
    },
    {
      id: "GR14",
      nama: "Afro Fade",
      bentukWajah: ["B001", "B004", "B005"],
      jenisRambut: ["J001", "J005"],
      gayaPribadi: ["P002", "P001", "P004"],
    },
    {
      id: "GR15",
      nama: "Layered Undercut",
      bentukWajah: ["B001", "B002", "B003"],
      jenisRambut: ["J001", "J002", "J004", "J005"],
      gayaPribadi: ["P002", "P003", "P005"],
    },
    {
      id: "GR16",
      nama: "Front Fringe",
      bentukWajah: ["B001", "B004", "B005"],
      jenisRambut: ["J001", "J002", "J003", "J004"],
      gayaPribadi: ["P002", "P004", "P001"],
    },
    {
      id: "GR17",
      nama: "Patterned Fade",
      bentukWajah: ["B001", "B002", "B003", "B004"],
      jenisRambut: ["J001", "J002", "J004", "J005"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
    {
      id: "GR18",
      nama: "Short Neat",
      bentukWajah: ["B001", "B002", "B003", "B004"],
      jenisRambut: ["J002", "J003", "J004", "J005"],
      gayaPribadi: ["P001", "P003", "P004"],
    },
    {
      id: "GR19",
      nama: "Curtain Cut",
      bentukWajah: ["B001", "B003", "B005"],
      jenisRambut: ["J001", "J002", "J004"],
      gayaPribadi: ["P002", "P005", "P004"],
    },
    {
      id: "GR20",
      nama: "Crop Fringe",
      bentukWajah: ["B001", "B002", "B004"],
      jenisRambut: ["J001", "J002", "J003", "J004"],
      gayaPribadi: ["P002", "P003", "P001"],
    },
    {
      id: "GR21",
      nama: "Undercut Wave Hair",
      bentukWajah: ["B001", "B002", "B003", "B005"],
      jenisRambut: ["J001", "J004", "J005"],
      gayaPribadi: ["P002", "P004", "P003"],
    },
    {
      id: "GR22",
      nama: "High Fade",
      bentukWajah: ["B001", "B002", "B003"],
      jenisRambut: ["J001", "J002", "J004"],
      gayaPribadi: ["P002", "P003", "P005"],
    },
    {
      id: "GR23",
      nama: "Low Fade",
      bentukWajah: ["B001", "B002", "B003", "B004"],
      jenisRambut: ["J001", "J002", "J004", "J005"],
      gayaPribadi: ["P002", "P003", "P001"],
    },
    {
      id: "GR24",
      nama: "Bowl Cut",
      bentukWajah: ["B001", "B003", "B004"],
      jenisRambut: ["J001", "J002", "J003", "J004"],
      gayaPribadi: ["P002", "P004", "P001"],
    },
    {
      id: "GR25",
      nama: "Ivy League",
      bentukWajah: ["B001", "B002", "B003", "B005"],
      jenisRambut: ["J001", "J002", "J003", "J004"],
      gayaPribadi: ["P002", "P005", "P003"],
    },
  ];

  const rekomendasiRambut = () => {
    const rekomendasiArray = [];
    for (const r of rekomendasi) {
      if (
        r.bentukWajah.includes(kodeBentukWajah) &&
        r.jenisRambut.includes(kodeJenisRambut) &&
        r.gayaPribadi.includes(kodeGayaKepribadian)
      ) {
        rekomendasiArray.push(r.id);
      }
    }
    return rekomendasiArray.length > 0
      ? rekomendasiArray
      : ["Tidak ada rekomendasi yang cocok"];
  };

  return (
    <div>
      {rekomendasiRambut().map((rekomendasi) => (
        <div key={rekomendasi}>{rekomendasi}</div>
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
