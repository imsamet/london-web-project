import PropTypes from 'prop-types';
import cn from 'classnames'
import Style from './style.module.css'

const Col =  ({col, xs, sm, md, lg, xl, xxl, offset, className, children, ...props}) => {
  
  return(
    <div 
      className={cn(
        className, 
        Style.col, 
        col >= 0 && Style[`col-${col}`],
        xs >= 0 && Style[`col-xs-${xs}`],
        sm >= 0 && Style[`col-sm-${sm}`],
        md >= 0 && Style[`col-md-${md}`],
        lg >= 0 && Style[`col-lg-${lg}`],
        xl >= 0 && Style[`col-xl-${xl}`],
        xxl >= 0 && Style[`col-xxl-${xxl}`],
        offset && Style[`col-offset-${offset}`]
      )} {...props}>
      {children}
    </div>
  )
}

Col.propTypes = {
  col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xxl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

Col.defaultProps = {
  col: 1
}

export default Col