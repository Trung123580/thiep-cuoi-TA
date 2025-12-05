interface props {
  label: string
  className?: string
}

const Description = (props: props) => {
  return (
    <h3
      className={`font-UTMBryantLG text-[4.5vw] md:text-[1.07vw] leading-5 md:leading-4 font-bold ${props.className} `}>
      {props.label}
    </h3>
  )
}

export default Description
