import { useId, memo, forwardRef } from 'react'
import Input from './Input'

const FormInput = forwardRef<
  HTMLInputElement,
  {
    name: string
    label: string
    type?: 'text' | 'password' | 'number'
    required?: boolean
  }
>(({ label, type = 'text', name, ...props }, ref) => {
  const id = useId()
  return (
    <div className='flex flex-col items-start'>
      <label htmlFor={id} className='text-black'>
        {label}
      </label>
      <Input ref={ref} type={type} id={id} name={name} {...props} />
    </div>
  )
})

FormInput.displayName = 'FormInput'

export default memo(FormInput)
