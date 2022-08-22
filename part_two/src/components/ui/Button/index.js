import React from 'react'

const index = ({children, className, onClick, ...rest}) => {
  return (
    <button
        className={`bg-primary px-4 py-1 rounded-3xl text-white ${className}`}
        onClick={onClick}
        {...rest}
    >
        {children}
    </button>
  )
}

export default index