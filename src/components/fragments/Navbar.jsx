import { Link } from "react-router-dom";
import ButtonCustom from "../elements/buttons/ButtonCustom";
import PropTypes from "prop-types";

const Navbar = ({ page }) => {
  return (
    <div className="w-full h-[80px] z-30 px-32 pb-1 font-inter shadow-lg bg-primary">
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
          <div className="flex space-x-8 items-center text-black text-lg font-bold">
            <Link
              to="/home"
              className={`hover:text-white transition duration-300 ${
                page == "home" ? "text-white" : "text-black"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/style"
              className={`hover:text-white transition duration-300 ${
                page == "style" ? "text-white" : "text-black"
              }`}
            >
              STYLE
            </Link>
            <Link
              to="/get-started"
              className="hover:text-white transition duration-300"
            >
              <ButtonCustom
                type="button"
                name="getStarted"
                id="getStarted"
                className={`
                ${
                  page == "get-started"
                    ? "text-black bg-white hover:bg-third hover:text-black"
                    : "bg-third text-black hover:bg-white hover:text-black"
                }
                `}
              >
                GET STARTED
              </ButtonCustom>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  page: PropTypes.string,
};

export default Navbar;
