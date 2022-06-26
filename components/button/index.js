import PropTypes from 'prop-types'
import Style from './buttton.module.css'
import cn from 'classnames'
export const Button = ({secondary, color, className, children, ...props}) => {
  return <button className={cn(secondary && Style.outline, Style[color], Style.button, className)}>
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