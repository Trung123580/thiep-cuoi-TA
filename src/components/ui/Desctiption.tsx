interface props {
  label: string
  className?: string
}

const Description = (props: props) => {
  return (
    <h3 className={`font-UTMBryantLG text-[18px] font-bold ${props.className} `}>
      {props.label}
    </h3>
  )
}

export default Description
