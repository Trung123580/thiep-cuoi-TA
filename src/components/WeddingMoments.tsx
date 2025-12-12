import SplitTextUI from './ui/SplitTextUI'
import WrapperMasonry from './WrapperMasonry'
import { useInView } from 'react-intersection-observer'

const WeddingMoments = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const { ref: refXemThem, inView: inViewXemThem } = useInView({
    threshold: 0,
  })
  return (
    <section ref={ref} className='flex-center flex-col md:mt-40 mt-20 px-3 md:px-0'>
      <SplitTextUI
        isRun={inView}
        duration={1}
        classGsap='title'
        className='text-[40px] leading-0 md:text-7xl text-black font-UVFAphroditePro'>
        Wedding Attending
      </SplitTextUI>
      <div className='md:mt-40 mt-20 max-w-[1400px] px-3'>
        <div className='hidden'>
          <WrapperMasonry
            data={[
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
              '/assets/banner.png',
            ]}
          />
        </div>
        <div className='h-[500px] w-full bg-red-500 mb-30'></div>
        <a
          ref={refXemThem}
          href='#gallery-1'
          className='text-black inline-flex items-center gap-10 md:gap-14 flex-col'>
          <SplitTextUI
            isRun={inViewXemThem}
            duration={1}
            classGsap='title'
            className='text-[40px] leading-0 md:text-5xl text-black font-UVFAphroditePro'>
            Xem Thêm
          </SplitTextUI>
          <img
            className={`${
              inViewXemThem ? 'animate-fadeInDown' : ''
            } w-18 md:w-24 animation-delay-500 opacity-0`}
            src='/assets/arrow-bottom.png'
            alt=''
          />
        </a>
      </div>
    </section>
  )
}

export default WeddingMoments
