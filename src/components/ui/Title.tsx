interface Props {
  label: string
  className?: string
}

const Title = (props: Props) => {
  return (
    <h3
      className={`font-UTMBryantLG text-[5.4vw] md:text-[26px] tracking-tight ${props.className}`}>
      {props.label}
    </h3>
  )
}

export default Title
