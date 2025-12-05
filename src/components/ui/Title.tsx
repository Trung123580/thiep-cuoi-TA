interface props {
  label: string
  className?: string
}

const Title = (props: props) => {
  return (
    <h3 className={`font-UTMBryantLG text-[26px] font-bold ${props.className}`}>
      {props.label}
    </h3>
  )
}

export default Title
