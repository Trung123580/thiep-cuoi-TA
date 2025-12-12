import { useInView } from 'react-intersection-observer'
import SplitTextUI from './ui/SplitTextUI'

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0,
  })
  const { ref: refFooter, inView: inViewFooter } = useInView({
    threshold: 0,
  })
  return (
    <footer
      ref={ref}
      className='flex-center relative flex-col mt-20 md:mt-40 max-w-[1000px] mx-auto'>
      <SplitTextUI
        isRun={inView}
        duration={2}
        classGsap='title'
        className='text-[35vw] text-primary md:text-[300px] font-normal text-nowrap leading-[90px] md:leading-[250px]  font-SVNAstronout'>
        Hải lý & Tiến Anh
      </SplitTextUI>

      <div className='mt-20 space-y-20'>
        <img
          ref={refTitle}
          src='/assets/title-footer.png'
          className={`object-contain w-full animation-delay-500 opacity-0 ${
            inViewTitle ? 'animate-fadeInUpShow' : ''
          }`}
          alt=''
        />
        <img
          ref={refFooter}
          src='/assets/cam-on.png'
          alt=''
          className={`object-contain w-full animation-delay-1000 opacity-0 ${
            inViewFooter ? 'animate-fadeInUpShow' : ''
          }`}
        />
      </div>
    </footer>
  )
}

export default Footer
