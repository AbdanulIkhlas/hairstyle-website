import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div
      className="w-full h-[80px] absolute z-30 px-20 font-roboto shadow-lg"
      style={{
        background:
          "linear-gradient(to right, #0c0201 35%, #320702 60%, #3A0707 62%, #8d3a40 73%, #220d18 82%)",
      }}
    >
      <div className="w-full bg-opacity-75">
        <div className="container mx-auto py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-2xl">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="h-12 inline-block"
            />
          </div>
          {/* Navbar Items */}
          <div className="flex space-x-20 text-white text-lg font-semibold">
            <Link
              to="/home"
              className="hover:text-gray-300 transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/style"
              className="hover:text-gray-300 transition duration-300"
            >
              STYLE
            </Link>
            <Link
              to="/get-started"
              className="hover:text-gray-300 transition duration-300"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
