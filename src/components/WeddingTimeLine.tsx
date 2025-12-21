import SplitTextUI from './ui/SplitTextUI'
import { useInView } from 'react-intersection-observer'
import { idv4 } from '../utils/helpers'
import { useEffect, useState } from 'react'
interface ITimeLine {
  id: string
  image: string
  date: string
  title: string
  description: string
  description2: string
  className: string
  ref?: any
}
const dataTimeLine: ITimeLine[] = [
  {
    id: idv4(),
    image: '/assets/time-1.webp',
    title: '16:00 chủ nhật, ngày 28.12.2025',
    date: '28/12/2025',
    description: 'Tiệc Thân Mật',
    description2: 'Nhà Trai',
    className: 'animate-fadeInUpShow',
  },
  {
    id: idv4(),
    image: '/assets/time-2.webp',
    title: '16:00 chủ nhật, ngày 28.12.2025',
    date: '28/12/2025',
    description: 'Tiệc Thân Mật',
    description2: 'Nhà Gái',
    className: 'animate-fadeInUpShow ',
  },
  {
    id: idv4(),
    image: '/assets/time-3.webp',
    title: '08:00 thứ 2, ngày 29.12.2025',
    date: '29/12/2025',
    description: 'Lễ Vu Quy',
    description2: 'Nhà Gái',
    className: 'animate-fadeInUpShow ',
  },
  {
    id: idv4(),
    image: '/assets/time-4.webp',
    title: '11:00  chủ nhật, ngày 29.12.2025',
    date: '29/12/2025',
    description: 'Lễ Thành Hôn',
    description2: 'Nhà Trai',
    className: 'animate-fadeInUpShow ',
  },
]
const WeddingTimeLine = () => {
  const { ref, inView } = useInView({ threshold: 0 })
  // const { ref: refOne, inView: inViewOne } = useInView({ threshold: 0 })
  // const { ref: refTwo, inView: inViewTwo } = useInView({ threshold: 0.1 })
  const { ref: refThree, inView: inViewThree } = useInView({ threshold: 0.1 })

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 })
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 })

  const refItem = [ref1, ref2, ref3, ref4]
  const refInview = [inView1, inView2, inView3, inView4]

  const [dataRender, setDataRender] = useState<ITimeLine[]>([])

  useEffect(() => {
    if (dataTimeLine.length) {
      const mapData = dataTimeLine.map((item, index) => ({
        ...item,
        ref: refItem[index],
      }))
      setDataRender(mapData)
    }
  }, [refItem])
  return (
    <section ref={ref} className='mt-25 md:mt-40  text-center'>
      <SplitTextUI
        isRun={inView}
        duration={1}
        classGsap='title'
        className='text-[40px] leading-0 md:text-7xl text-black font-UVFAphroditePro'>
        Wedding Timeline
      </SplitTextUI>
      <div className='relative h-full md:h-auto mt-10 md:mt-30'>
        <div className='relative md:block hidden h-[920px]'>
          {/* <div
            className={`ab-center w-full h-full bg-black/30 z-10 ${
              inViewOne
                ? 'animate-fadeInUpShow'
                : 'opacity-0 transition-all duration-1000'
            }`}></div>
          <div
            className={`w-full h-[920px] ${
              inViewOne ? 'animate-fadeInUpShow' : ''
            } opacity-0 transition-all duration-1000`}>
            <img src='/assets/banner.webp' alt='' className='object-cover h-full w-full' />
          </div> */}
        </div>
        <div className='relative md:ab-center max-w-[900px] w-full z-10 h-[1950px] md:h-full flex md:flex-row flex-col'>
          <div className='relative md:hidden block h-[920px]'>
            {/* <div
              className={`ab-center w-full h-full bg-black/30 z-10 ${
                inViewOne || inViewTwo
                  ? 'animate-fadeInUpShow'
                  : 'opacity-0 transition-all duration-1000'
              }`}></div>
            <div
              className={`w-full h-[920px] ${
                inViewOne || inViewTwo ? 'animate-fadeInUpShow' : ''
              } opacity-0 transition-all duration-1000`}>
              <img
                src='/assets/banner.webp'
                alt=''
                className='object-cover h-full w-full'
              />
            </div> */}
          </div>
          <div className='h-auto w-full md:w-[55%] relative  mx-auto '>
            <div
              ref={ref}
              className='absolute left-1/2 z-10 -translate-x-1/2 top-0 md:top-1/2 -translate-y-[104%] md:-translate-y-1/2 flex flex-col w-max h-max mx-auto'>
              {dataRender.map(
                (
                  { description, ref, description2, id, image, title, className },
                  index
                ) => {
                  return (
                    <div
                      key={id}
                      className={`flex items-center gap-8 ${
                        // index < 2 && inViewOne ? className : index > 1 ? className : ''
                        refInview[index] ? className : ''
                      } opacity-0`}
                      ref={ref}>
                      <div className='flex items-center justify-center'>
                        <img
                          src={image}
                          className='max-w-[90px] md:max-w-[120px] object-contain'
                        />
                      </div>
                      <div
                        className={`relative ${
                          index === 0 || index === dataTimeLine.length - 1
                            ? `h-[175px] top-0.5 ${
                                index === dataTimeLine.length - 1 ? '!-top-0.5' : ''
                              }`
                            : 'h-[249px]'
                        } w-2 bg-[#231f20]`}>
                        <div className='ab-center w-6 h-6 rounded-full bg-[#231f20] flex-center'></div>
                      </div>

                      <div className='max-w-[150px] md:max-w-[300px] text-left relative top-2 text-[#231f20]'>
                        <span className='text-base text-center md:text-nowrap'>
                          {title}
                        </span>
                        <div className='font-UVFAphroditePro text-center text-xl md:text-2xl mt-2 leading-10'>
                          <span className='tracking-wide leading-10'>{description}</span>
                          <br />
                          <span>{description2}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
          <div
            ref={refThree}
            className={`flex-1 animation-delay-250 relative transition-all duration-1000 opacity-0 h-full  ${
              inViewThree ? 'animate-fadeInRight' : ''
            }`}>
            <div className='absolute h-auto md:h-full pb-20 pt-10 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex flex-col w-full md:w-[351px] px-3 md:pr-10 gap-4 '>
              <img
                src='/assets/date.webp'
                className={`flex-1 object-contain rounded-xl`}
                alt=''
              />
              <div className='h-full w-full'>
                <img
                  src='/assets/moment/date-image.webp'
                  className={`w-full h-[600px] md:h-[505px] object-cover opacity-0 animate-delay-2500 rounded-xl 
                    ${inViewThree ? 'animate-fadeInUpShow ' : ''}
                    `}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WeddingTimeLine
