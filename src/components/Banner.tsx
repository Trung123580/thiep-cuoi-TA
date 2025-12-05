import { useRef } from 'react'
import SplitTextUI from './ui/SplitTextUI'
import useInViewport from './hooks/useScrollViewElement'

const Banner = () => {
  const refMiddle = useRef<HTMLDivElement | null>(null)
  const inViewMiddle = useInViewport(refMiddle, {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px',
  })
  console.log({ inViewMiddle })

  return (
    <section className='relative h-[650px] md:h-auto' ref={refMiddle} data-class='top'>
      <div className='ab-center w-full h-full bg-black/20'></div>
      <div className='w-full h-full'>
        <img src='/assets/banner.png' alt='' className='object-cover h-full' />
      </div>
      <div className='ab-center text-center top-[65%]'>
        {inViewMiddle && (
          <>
            <SplitTextUI
              classGsap='title'
              className='text-[35vw] md:text-[300px] font-normal text-nowrap leading-[90px] md:leading-[250px] text-white font-SVNAstronout'>
              Hải lý & Tiến Anh
            </SplitTextUI>
            <SplitTextUI
              classGsap='description'
              duration={0.3}
              className='text-lg leading-6 md:text-xl font-semibold italic font-UTMBryantLG mt-14 text-wrap md:text-nowrap'>
              Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp nhất, gả cho người
              đáng tin cậy nhất
            </SplitTextUI>
          </>
        )}
      </div>
    </section>
  )
}

export default Banner
