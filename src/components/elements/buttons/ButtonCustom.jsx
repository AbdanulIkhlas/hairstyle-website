import PropTypes from "prop-types";

const ButtonCustom = ({ children, type, name, id, className }) => {
  return (
    <button
      type={type}
      name={name}
      id={id}
      className={`${className} px-2 py-2 rounded-lg shadow-buttonShadow transition duration-300 active:translate-y-1 active:shadow-buttonShadowActive`}
    >
      {children}
    </button>
  );
};

ButtonCustom.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ButtonCustom;
