import PropTypes from 'prop-types'

const DeskripsiText = ({children, className}) => {
  return (
    <div className={`text-lg text-black ${className}`}>
        {children}
    </div>
  )
}

DeskripsiText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default DeskripsiText