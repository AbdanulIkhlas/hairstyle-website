import Navbar from "../components/fragments/Navbar";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold underline bg-slate-800 text-white">
        Hello world!
      </h1>
      ;
    </div>
  );
};

export default HomePage;
