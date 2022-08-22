import React from 'react'

const index = ({className, children, ...rest}) => {
  return (
    <p 
        className={`${className}`}
        {...rest}    
    >
        {children}
    </p>
  )
}

export default index