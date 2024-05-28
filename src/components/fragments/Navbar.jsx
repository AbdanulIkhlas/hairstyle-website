import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div
      className="w-full h-[80px] absolute z-30 px-20 font-inter shadow-lg bg-primary"
    >
      <div className="w-full bg-opacity-75">
        <div className="container mx-auto py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-black text-2xl">

            <Link>
              <img
                src="./images/logo.png"
                alt="Logo"
                className="h-12 inline-block"
              />
            </Link>
          </div>
          {/* Navbar Items */}
          <div className="flex space-x-8 text-black text-lg font-bold">
            <Link
              to="/home"
              className="hover:text-white transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/style"
              className="hover:text-white transition duration-300"
            >
              STYLE
            </Link>
            <Link
              to="/get-started"
              className="hover:text-white transition duration-300"
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
