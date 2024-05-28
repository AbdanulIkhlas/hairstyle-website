import PropTypes from "prop-types";

const SubHeaderTitle = ({children, className}) => {
  return (
    <div className={`${className} text-3xl font-bold`}
    >
      {children}
    </div>
  )
}

SubHeaderTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default SubHeaderTitle