import PropTypes from 'prop-types'
import Style from './style.module.css'
import cn from 'classnames'
const Button = ({secondary, color, className, children, ...props}) => {
  return <button className={cn(secondary && Style.outline, Style[color], Style.button, className)} {...props}>
    {children}
  </button>
}
Button.propTypes = {
  secondary: PropTypes.bool,
  color: PropTypes.oneOf(['primary, secondary', 'tertiary', 'pink', 'purple'])
}
Button.defaultProps = {
  color: 'primary'
}
export default Button