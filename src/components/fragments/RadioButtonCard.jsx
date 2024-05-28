import PropTypes from "prop-types";
import { useState } from "react";

const RadioButtonCard = ({ code, name, image, selected, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <label
      className={`flex items-center  cursor-pointer ${
        selected === code ? "ring ring-black ring-opacity-50 rounded-xl" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="radio"
        className="hidden"
        value={code}
        checked={selected === code}
        onChange={onChange}
      />
      <div
        className={`p-4 flex flex-col items-center rounded-xl bg-slate-200 shadow-buttonShadow ${
          isHovered && "transform hover:scale-105 transition-transform"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-[140px] h-[140px] rounded-lg"
        />
        <p className="mt-6 font-bold">{name}</p>
      </div>
    </label>
  );
};

RadioButtonCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

export default RadioButtonCard;
