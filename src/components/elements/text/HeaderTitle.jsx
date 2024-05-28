import PropTypes from "prop-types";

const HeaderTitle = ({children, className}) => {
  return <div className={`text-5xl font-bold ${className}`}>{children}</div>;
};

HeaderTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default HeaderTitle;
