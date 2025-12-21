interface props {
  label: string
  className?: string
}

const Description = (props: props) => {
  return (
    <h3
      className={`font-UTMBryantLG text-[4.5vw] xl:text-[1.2vw] md:text-[1.5vw] leading-5 md:leading-4 font-bold ${props.className} `}>
      {props.label}
    </h3>
  )
}

export default Description
