import { useId, memo } from 'react'
import Input from './Input'

const FormRadio = ({
  options = [],
  label,
  name,
}: {
  name: string
  label: string
  options: string[]
}) => {
  const id = useId()
  return (
    <div className='flex gap-4 text-black items-start flex-col'>
      <label>{label}</label>
      <div className='flex gap-4 border-b w-full pb-2'>
        {options.map((option, index) => (
          <div key={index} className='flex items-center gap-2 '>
            <div className='border p-1 w-5 h-5 flex-center rounded-sm'>
              <Input
                type='radio'
                id={`${id}-${index}`}
                className='min-w-4 min-h-4 checked:bg-primary! appearance-none rounded-sm border-none'
                name={name}
                value={option}
              />
            </div>
            <label htmlFor={`${id}-${index}`} className='cursor-pointer'>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(FormRadio)
