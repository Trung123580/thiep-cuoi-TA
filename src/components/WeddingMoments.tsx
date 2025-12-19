import SplitTextUI from './ui/SplitTextUI'
import WrapperMasonry from './WrapperMasonry'
import { useInView } from 'react-intersection-observer'
import * as motion from 'motion/react-client'

const WeddingMoments = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const { ref: refXemThem, inView: inViewXemThem } = useInView({
    threshold: 0,
  })

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 })
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0 })
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0 })
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0 })
  const { ref: ref7, inView: inView7 } = useInView({ threshold: 0 })
  const { ref: ref8, inView: inView8 } = useInView({ threshold: 0 })
  // const { ref: ref9, inView: inView9 } = useInView({ threshold: 0.2 })
  console.log({ inView3, inView2 })

  return (
    <section ref={ref} className='flex-center flex-col md:mt-40 mt-20 px-3 md:px-0 '>
      <div className='flex-center justify-between md:space-x-10'>
        <img src='/assets/arrow.png' className='rotate-180 md:block hidden' alt='' />
        <SplitTextUI
          isRun={inView}
          duration={1}
          classGsap='title'
          className='text-[40px] leading-0 md:text-7xl text-black font-UVFAphroditePro'>
          Wedding Moments
        </SplitTextUI>
        <img src='/assets/arrow.png' className='md:block hidden' alt='' />
      </div>
      <div className='md:mt-40 mt-20 w-full md:max-w-[1400px] '>
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
        <div className='w-full'>
          <div
            className={`flex relative justify-between opacity-0 *:w-[calc(50%_-_10px)] md:*:w-[calc(35%_-_50px)] ${
              inView2 || inView1 ? 'animate-fadeInLeft animation-delay-500' : ''
            }`}
            ref={ref1}>
            <div
              className={`${
                inView1 ? 'animate-fadeInUpShow animation-delay-250' : ''
              } border opacity-0 border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 relative`}>
              <img src='/assets/hai-ly/anh-1.jpg' className='' alt='' />
              <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
              <div className='absolute md:bottom-36 bottom-24 h-[1px] md:right-[-8vw] right-[-16vw] w-2/3 rotate-90 bg-primary'></div>
            </div>
            <div
              className={`${
                inView2 || inView1 ? 'animate-fadeInDown animation-delay-500' : ''
              } border border-t-0 border-r-0 pt-0 pr-0 border-primary opacity-0 p-2 relative`}>
              <img src='/assets/tien-anh/anh-1.jpg' className='md:block hidden' alt='' />
              <img src='/assets/hai-ly/anh-2.jpg' className='md:hidden' alt='' />
              <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
              <div className='absolute md:bottom-36 bottom-24 h-[1px] md:right-[-8vw] right-[-16vw] w-2/3 rotate-90 bg-primary'></div>
            </div>
            <div
              className={`${
                inView2 || inView1 ? 'animate-fadeInRight animation-delay-1000' : ''
              } border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 opacity-0 relative md:block hidden`}>
              <img src='/assets/hai-ly/anh-2.jpg' className='' alt='' />
              <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
              <div className='absolute md:bottom-36 bottom-24 h-[1px] md:right-[-8vw] right-[-16vw] w-2/3 rotate-90 bg-primary'></div>
            </div>
            <div
              className={` border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 absolute md:relative w-[52vw]! left-1/2 -translate-x-1/2 top-[45%] md:hidden`}>
              <img src='/assets/tien-anh/anh-1.jpg' className='' alt='' />
              <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
              <div className='absolute bottom-24 h-[1px] right-[-19vw] w-2/3 rotate-90 bg-primary'></div>
            </div>
          </div>
          <div
            ref={ref2}
            className={`relative w-full mt-60 md:mt-10 animation-delay-250 opacity-0 ${
              inView3 || inView2 ? 'animate-fadeInUpShow ' : ''
            }`}>
            <img
              src='/assets/chung/anh-1.jpg'
              className='object-contain w-full h-full'
              alt='img'
            />
            <div className='absolute right-0 top-[85%] -translate-y-1/2 max-w-3/4'>
              <img
                src='/assets/chung/chim-right.png'
                className={`${
                  inView3 || inView2 ? 'animate-fadeInRight ' : ''
                } object-contain animation-delay-1000 opacity-0`}
                alt='img'
              />
            </div>
          </div>
          <div className='relative mt-14 md:mt-40 h-[630px] md:h-[700px] ' ref={ref3}>
            <div className='flex items-end gap-4 md:gap-10 justify-between'>
              <div
                className={`${
                  inView4 ? 'animate-fadeInLeft' : ''
                } w-[530px] h-[530px] rounded-full opacity-0 overflow-hidden`}>
                <motion.img
                  src='/assets/chung/anh-2.jpg'
                  className={`w-full h-full object-cover  `}
                  initial={{ objectPosition: 'center 40%' }}
                  animate={{ objectPosition: 'center 20%' }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div
                ref={ref4}
                className={`${
                  inView4 ? 'animate-fadeInDown' : ''
                } w-[400px] h-[400px] rounded-full  animation-delay-500 relative opacity-0 top-20 md:top-40 overflow-hidden`}>
                <motion.img
                  src='/assets/chung/anh-3.jpg'
                  className={`w-full h-full object-cover  `}
                  initial={{ objectPosition: 'center 40%' }}
                  animate={{ objectPosition: 'center 20%' }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div
                className={` ${
                  inView4 ? 'animate-fadeInRight' : ''
                } w-[250px] h-[250px] rounded-full relative animation-delay-1000 opacity-0 -top-36 md:-top-24 overflow-hidden`}>
                <motion.img
                  src='/assets/chung/anh-4.jpg'
                  className={`w-full h-full object-cover `}
                  initial={{ objectPosition: 'center 40%' }}
                  animate={{ objectPosition: 'center 20%' }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
          <div className='relative md:-top-38 -top-0 h-[1190px] md:h-[2330px]' ref={ref5}>
            <div className='flex md:flex-row flex-col  relative z-10'>
              <div className='h-full w-full md:w-[35%] flex-center md:items-center items-start flex-col'>
                <img
                  src={'/assets/chung/chim-left.png'}
                  className={`object-contain mb-7  md:w-auto w-[80%] opacity-0 animation-delay-500 ${
                    inView5 ? 'animate-fadeInLeft' : ''
                  }`}
                  alt='img'
                />
                <div className='md:relative absolute top-10 md:top-0 flex md:flex-col w-full gap-7 md:gap-10 md:w-auto flex-1 md:min-w-[421px] md:px-0 px-5'>
                  <div
                    ref={ref6}
                    className={`${
                      inView6 ? 'animate-fadeInUp animation-delay-1000' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 opacity-0 relative md:top-0 top-40`}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px] w-full object-cover'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                  <div
                    className={`${
                      inView8 ? 'animate-fadeInRight animation-delay-1000' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 opacity-0 relative `}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px] w-full'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                </div>
              </div>
              <div className='text-black flex justify-between md:relative absolute top-[17%] gap-6 md:gap-12 ml-2 flex-1 mt-42 md:mt-70 pr-3'>
                <div className='flex flex-col gap-10 relative top-40 md:top-44 flex-1'>
                  <div
                    ref={ref7}
                    className={`${
                      inView7 ? 'animate-fadeInUp ' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 opacity-0 relative`}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px] w-full'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                  <div
                    className={`${
                      inView8 || inView7 ? 'animate-fadeInRight animation-delay-250' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 opacity-0 relative`}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px] w-full'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                  <div
                    className={`${
                      inView8 ? 'animate-fadeInRight animation-delay-500' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary md:block hidden p-2 opacity-0 relative`}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px] w-full'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                </div>
                <div className='flex flex-col gap-10 flex-1'>
                  <div
                    className={`${
                      inView7 ? 'animate-fadeInUp animation-delay-250' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary w-full p-2 opacity-0 relative`}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px]  w-full object-cover'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                  <div
                    className={`${
                      inView8 || inView7 ? 'animate-fadeInRight animation-delay-500' : ''
                    } border border-t-0 border-r-0 pt-0 pr-0 border-primary p-2 opacity-0 relative`}>
                    <img
                      src='/assets/hai-ly/anh-2.jpg'
                      className='h-auto md:h-[500px] w-full'
                      alt=''
                    />
                    <div className='absolute -top-2 h-[1px] right-4 w-2/4 bg-primary'></div>
                    <div className='absolute bottom-36 h-[1px] right-[-36%]  w-2/3 rotate-90 bg-primary'></div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={ref8} className='absolute right-0 bottom-0 w-[80%] md:w-[40%]'>
              <img
                src={'/assets/chung/chim-right-2.png'}
                className={`object-contain w-full opacity-0 ${
                  inView8 ? 'animate-fadeInDown animation-delay-1000' : ''
                }`}
                alt='img'
              />
            </div>
          </div>
        </div>
        <a
          ref={refXemThem}
          href='#gallery-1'
          className='text-black relative z-10 flex items-center gap-10 md:gap-14 flex-col'>
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
