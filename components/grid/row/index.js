import cn from 'classnames'
import PropTypes from 'prop-types'
import Style from './style.module.css'

const Row = ({ justify, align, className, children, ...props}) => {

  return(
    <div className={Style.container}>
      <div className={cn(Style.row, justify && Syle[`justify-${justify}`], align && Style[`align-${align}`], className)} {...props}>
        {children}
      </div>
    </div>
  )
}

Row.propTypes = {
  justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
};

export default Row