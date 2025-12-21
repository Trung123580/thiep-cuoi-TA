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
      className='flex-center relative flex-col mt-20 md:mt-40 max-w-[1400px] mx-auto px-1'>
      <div className='flex items-center md:w-max w-full gap-2 md:gap-8 h-[9.5vh] md:h-[250px] mx-auto'>
        <img
          src='/assets/logo-1.webp'
          className={`object-contain h-full w-auto ${
            inView ? 'animate-fadeInLeft animation-delay-500' : ''
          } opacity-0`}
          alt=''
        />
        <SplitTextUI
          isRun={inView}
          duration={2}
          classGsap='title'
          className='text-[25vw] text-primary md:text-[300px] font-normal text-nowrap leading-[90px] md:leading-[250px]  font-SVNAstronout'>
          Tiến Anh & Hải lý
        </SplitTextUI>
        <img
          src='/assets/logo-2.webp'
          className={`object-contain h-full w-auto ${
            inView ? 'animate-fadeInRight animation-delay-500' : ''
          } opacity-0`}
          alt=''
        />
      </div>

      <div className='mt-10 md:mt-20 space-y-10 md:space-y-20'>
        <img
          ref={refTitle}
          src='/assets/title-footer.webp'
          className={`object-cover w-full animation-delay-500 opacity-0 ${
            inViewTitle ? 'animate-fadeInUpShow' : ''
          }`}
          alt=''
        />
        <img
          ref={refFooter}
          src='/assets/cam-on.webp'
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
