import React, { ReactNode } from "react"

const Row = ({ children }: {
  children: JSX.Element | JSX.Element[] | ReactNode
}) => {
  return (
    <div className='row'>
      {children}
    </div>
  )
}

export default Row