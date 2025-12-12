import React, { forwardRef } from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = 'button', ...props }, ref) => {
    return (
      <button type={type} className={className} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
