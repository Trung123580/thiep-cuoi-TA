import { useInView } from 'react-intersection-observer'
import SplitTextUI from './ui/SplitTextUI'
import FormSubmit from './FormSubmit'
// import { useRef } from 'react'
// import useInViewport from './hooks/useScrollViewElement'

const WeddingAttenDing = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  // const refOne = useRef<HTMLDivElement | null>(null)
  // const refTwo = useRef<HTMLDivElement | null>(null)
  // const refThree = useRef<HTMLDivElement | null>(null)
  // const refFour = useRef<HTMLDivElement | null>(null)
  const { ref: refOne, inView: inViewOne } = useInView({ threshold: 0.1 })
  // const inViewOne = useInViewport(refOne, {
  //   threshold: 0,
  // })
  // const inViewTwo = useInViewport(refTwo, {
  //   threshold: 0,
  // })
  return (
    <>
      <section
        id='form-submit'
        ref={ref}
        className='pt-20 text-center md:px-0 px-3  mt-10 md:mt-20'>
        <SplitTextUI
          isRun={inView}
          duration={1}
          classGsap='title'
          className='text-[9vw] leading-0 md:text-7xl text-black font-UVFAphroditePro'>
          Wedding Attending
        </SplitTextUI>
        <SplitTextUI
          isRun={inView}
          classGsap='description'
          duration={0.1}
          className='text-xl italic text-black font-UTMBryantLG mt-16 md:mt-26 md:text-nowrap'>
          Đám cưới sẽ trọn vẹn và ý nghĩa hơn khi có sự hiện diện và chúc phúc của bạn.
          Hãy xác nhận sự có mặt của bạn để
        </SplitTextUI>
        <SplitTextUI
          isRun={inView}
          classGsap='description'
          duration={0.1}
          className='text-xl italic text-black font-UTMBryantLG  md:text-nowrap'>
          Minh & Thuỷ chuẩn bị đón tiếp bạn chu đáo nhất nha ♥️
        </SplitTextUI>

        <div
          ref={refOne}
          className='flex md:flex-row flex-col max-w-[900px] justify-between mx-auto pt-4 pb-10 gap-13 mt-10 md:mt-20'>
          <div
            className={`flex-1 flex-center opacity-0 max-w-[450px] animation-delay-250 ${
              inViewOne ? 'animate-fadeInLeft' : ''
            }`}>
            <FormSubmit />
          </div>
          <div
            className={`h-[650px] md:h-[550px] rounded-lg overflow-hidden animation-delay-1000 ${
              inViewOne ? 'animate-fadeInRight' : ''
            } opacity-0`}>
            <img
              src='/assets/xem-them/anh-7.webp'
              className='h-full object-cover md:object-contain rounded-xl w-full md:w-max '
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default WeddingAttenDing
