import React from 'react'

const index = ({children, className}) => {
  return (
    <div className={`my-12 mx-auto w-10/12 ${className}`}>
        {children}
    </div>
  )
}

export default index