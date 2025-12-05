import SplitTextUI from './ui/SplitTextUI'
import { useInView } from 'react-intersection-observer'
import Title from './ui/Title'
import Description from './ui/Desctiption'
import { useRef, useState } from 'react'
import useInViewport from './hooks/useScrollViewElement'

const data = {
  title: 'Wedding Day',
  description:
    'Click vào sự kiện Nhà Gái - Nhà Trai để xem chi tiết lịch trình đám cưới của chúng mình nhé!',
  invitation: {
    groom: {
      intimate: {
        title: 'TIỆC THÂN MẬT NHÀ TRAI',
        time: 'Tổ chức vào lúc 17 giờ 00 phút',
        date: 'Chủ Nhật, ngày 28 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 09 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Trai',
        address: 'Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
      wedding: {
        title: 'TIỆC THÀNH HÔN NHÀ TRAI',
        time: 'Tổ chức vào lúc 08 giờ 30 phút',
        date: 'Thứ Hai, ngày 29 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 10 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Trai',
        address: 'Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
    },
    bride: {
      intimate: {
        title: 'TIỆC THÂN MẬT NHÀ GÁI',
        time: 'Tổ chức vào lúc 17 giờ 00 phút',
        date: 'Thứ Bảy, ngày 27 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 08 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Gái',
        address: 'Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
      wedding: {
        title: 'TIỆC THÀNH HÔN NHÀ GÁI',
        time: 'Tổ chức vào lúc 08 giờ 00 phút',
        date: 'Thứ Hai, ngày 29 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 10 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Gái',
        address: 'Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
    },
    common: {
      greeting: 'Trân trọng kính mời',
      guest: 'Quý khách',
      inviteLine1: 'Tới dự bữa Tiệc Thân Mật & tiệc Lễ Vu Quy chung vui',
      inviteLine2: 'cùng gia đình chúng tôi',
      couple: 'Hải Lý & Tiến Anh',
      closing: 'Sự hiện diện của quý khách là niềm vinh dự cho gia đình chúng tôi !',
    },
  },
}

const WeddingDay = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const { ref: refWeddingDay, inView: inViewWeddingDay } = useInView({
    threshold: 0,
  })
  const refTitle = useRef<HTMLDivElement | null>(null)
  const refBottom = useRef<HTMLDivElement | null>(null)
  const refTop = useRef<HTMLDivElement | null>(null)
  const inViewTitle = useInViewport(refTitle, {
    threshold: 0.3,
    // rootMargin: '0px 0px 0px 0px',
    // freezeOnceVisible: true, // cho phép chạy lại khi scroll lên/xuống
  })
  const inViewBottom = useInViewport(refBottom, {
    threshold: 0.3,
    // rootMargin: '0px 0px 0px 0px',
    // freezeOnceVisible: true, // cho phép chạy lại khi scroll lên/xuống
  })

  const inViewTop = useInViewport(refTop, {
    threshold: 0.3,
    // rootMargin: '0px 0px 0px 0px',
    // freezeOnceVisible: true, // cho phép chạy lại khi scroll lên/xuống
  })

  const [activeSide, setActiveSide] = useState<'groom' | 'bride'>('groom')

  const side = data.invitation[activeSide]
  const common = data.invitation.common

  return (
    <section ref={ref} className='mt-20 md:mt-30 section-2 text-center' data-class='left'>
      <SplitTextUI
        isRun={inView}
        classGsap='title'
        className='text-[40px] leading-0 md:text-7xl font-semibold text-black font-UVFAphroditePro'>
        Wedding Day
      </SplitTextUI>
      <SplitTextUI
        isRun={inView}
        classGsap='description'
        duration={0.5}
        className='text-xl italic text-black font-UTMBryantLG mt-16 md:mt-20 md:text-nowrap'>
        Click vào sự kiện Nhà Gái - Nhà Trai để xem chi tiết lịch trình đám cưới của chúng
        mình nhé!
      </SplitTextUI>

      <div className='mt-6 md:mt-10 mx-auto max-w-[1000px] flex-center flex-col md:px-0 px-2'>
        <div className='flex gap-1 relative left-[0.3vw] ' ref={refTitle}>
          <div
            className={`${
              activeSide === 'groom' ? 'animate-decorFloatReverse2.5' : 'opacity-50'
            }`}>
            <button
              onClick={() => setActiveSide('groom')}
              className={`${
                inViewTitle ? 'animate-fadeInLeft' : ''
              } px-10 py-2 pt-4 md:py-4 md:pt-6 border rounded-full transition-all rounded-r-none text-base md:text-2xl border-black font-UVFAphroditePro ${
                activeSide === 'groom' ? 'bg-primary text-white' : 'bg-white text-black'
              }`}>
              Nhà Trai
            </button>
          </div>
          <div
            className={`${
              activeSide === 'bride' ? 'animate-decorFloatReverse2.5' : 'opacity-50'
            }`}>
            <button
              onClick={() => setActiveSide('bride')}
              className={`${
                inViewTitle ? 'animate-fadeInRight' : ''
              } px-10 py-2 pt-4 md:py-4 md:pt-6 border rounded-full transition-all rounded-l-none text-base md:text-2xl border-black font-UVFAphroditePro ${
                activeSide === 'bride' ? 'bg-primary text-white' : 'bg-white text-black'
              }`}>
              Nhà Gái
            </button>
          </div>
        </div>
        <div
          className='flex md:flex-row flex-col item-center justify-center shadow-medium/60 mt-10 w-full text-dark rounded-lg overflow-hidden'
          ref={refWeddingDay}>
          <div
            className={` h-screen flex-1 ${
              inViewWeddingDay ? 'animate-fadeInLeft' : ''
            }`}>
            <img
              src={
                activeSide === 'groom'
                  ? './assets/wedding-trai.png'
                  : './assets/wedding-gai.png'
              }
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div
            ref={refTop}
            className={`flex-1 py-8 md:px-0 px-1 md:py-0 my-auto flex-center flex-col space-y-2 ${
              inViewWeddingDay ? 'animate-fadeInRight' : ''
            }`}>
            <div
              className={`${
                inViewTop ? 'animate-fadeInUpShow' : ''
              } animation-delay-0 opacity-0`}>
              <Title
                label={common.greeting}
                className='uppercase md:text-[30px]! text-[26px]! font-normal'
              />
              <Description label={common.guest} className='text-2xl! text-primary' />
            </div>
            <div
              className={`${
                inViewTop ? 'animate-fadeInUpShow' : ''
              } animate-delay-500 opacity-0`}>
              <Description label={common.inviteLine1} />
              <Description label={common.inviteLine2} className='mt-1' />
            </div>
            <div
              className={`${
                inViewTop ? 'animate-fadeInUp' : ''
              } animation-delay-500 opacity-0`}>
              <Title
                label={common.couple}
                className='font-UVFAphroditePro animate-decorFloatReverse1s text-[30px]! md:text-4xl! my-6 text-gray-700'
              />
            </div>
            <div
              className={`${
                inViewTop ? 'animate-fadeInRight' : ''
              } animation-delay-1000 opacity-0`}>
              <Title label={side.intimate.title} className='text-primary' />
              <Description label={side.intimate.time} />
            </div>
            <div
              className={`${
                inViewTop ? 'animate-fadeInUpShow' : ''
              } animation-delay-1000 opacity-0`}>
              <Title label={side.intimate.date} className='text-primary' />
              <Description label={side.intimate.lunarDate} />
            </div>
            <div
              className={`${
                inViewTop ? 'animate-fadeInLeft' : ''
              } animation-delay-1000 opacity-0`}>
              <Title label={side.intimate.location} className='text-primary' />
              <Description label={side.intimate.address} className='text-dark' />
            </div>
            <div ref={refBottom} className='flex-center flex-col mt-4 space-y-2 '>
              <img
                src='/assets/logo.png'
                alt=''
                className={`object-contain opacity-0 ${
                  inViewBottom ? 'animate-fadeInUpShow' : ''
                } animation-delay-0 w-[100px] mb-2`}
              />
              <div
                className={`${
                  inViewBottom ? 'animate-fadeInUpShow' : ''
                } animation-delay-250 opacity-0`}>
                <Title label={side.wedding.title} className='text-primary' />
                <Description label={side.wedding.time} />
              </div>
              <div
                className={`${
                  inViewBottom ? 'animate-fadeInUpShow' : ''
                } animation-delay-500 opacity-0`}>
                <Title label={side.wedding.date} className='text-primary' />
                <Description label={side.wedding.lunarDate} className='italic' />
              </div>
              <div
                className={`${
                  inViewBottom ? 'animate-fadeInUpShow' : ''
                } animation-delay-1000 opacity-0`}>
                <Title label={side.wedding.location} className='text-primary' />
                <Description label={side.wedding.address} />
              </div>
              <p
                className='animate-fadeInUpShow opacity-0 animation-delay-2000 md:leading-9 
              leading-7
              text-[3.7vw]
               md:text-[1.08vw]
               mt-6 italic font-UVFAphroditePro'>
                {common.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingDay
