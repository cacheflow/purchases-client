import React from "react"
const cx = require('classnames');

type NumberAttr = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type ColSize = NumberAttr;

const Col = ({ children, sm, md, lg, xl, xxl, className }: {
  children: JSX.Element | JSX.Element[]
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
  xl?: ColSize;
  className?: string;
  xxl?: ColSize;
}) => {
  let colClassName = cx({
    [className || '']: className ? true : false,
    [`col-sm-${sm}`]: sm ? true : false,
    [`col-md-${md}`]: md ? true : false,
    [`col-lg-${lg}`]: lg ? true : false,
    [`col-xl-${xl}`]: xl ? true : false,
    [`col-lg-${xxl}`]: xxl ? true : false,
  });
  return (
    <div className={colClassName}>
      {children}
    </div>
  )
}

export default Col