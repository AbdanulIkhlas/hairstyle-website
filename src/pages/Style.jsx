import ProsesRekomendasi from "../controllers/ProsesRekomendasi"

const Style = () => {
  return (
    <div>
      testing :
      <ProsesRekomendasi
        kodeBentukWajah="B002"
        kodeJenisRambut="J001"
        kodeGayaKepribadian="P002"
      />
    </div>
  );
}

export default Style