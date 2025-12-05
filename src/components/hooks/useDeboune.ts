import React from 'react'

interface UseDebouneProps {
  delay: number
  initialValue: any
}

const useDeboune = ({ delay, initialValue }: UseDebouneProps) => {
  const [value, setValue] = React.useState(initialValue)
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return value
}

export default useDeboune
