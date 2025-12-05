import SplitTextUI from './ui/SplitTextUI'
import { useInView } from 'react-intersection-observer'
import Title from './ui/Title'
import Description from './ui/Desctiption'
import { useEffect, useState } from 'react'

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
        address: 'Thôn Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
      wedding: {
        title: 'TIỆC THÀNH HÔN NHÀ TRAI',
        time: 'Tổ chức vào lúc 08 giờ 30 phút',
        date: 'Thứ Hai, ngày 29 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 10 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Trai',
        address: 'Thôn Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
    },
    bride: {
      intimate: {
        title: 'TIỆC THÂN MẬT NHÀ GÁI',
        time: 'Tổ chức vào lúc 17 giờ 00 phút',
        date: 'Thứ Bảy, ngày 27 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 08 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Gái',
        address: 'Thôn Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
      },
      wedding: {
        title: 'TIỆC THÀNH HÔN NHÀ GÁI',
        time: 'Tổ chức vào lúc 08 giờ 00 phút',
        date: 'Thứ Hai, ngày 29 tháng 12 năm 2025',
        lunarDate: '(Tức ngày 10 tháng 11 năm Ất Tỵ)',
        location: 'Tại: Tư Gia Nhà Gái',
        address: 'Thôn Quan Châm, Phú Nghĩa, Chương Mỹ, Hà Nội',
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
  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0,
  })

  const { ref: refWeddingDay, inView: inViewWeddingDay } = useInView({
    threshold: 0,
  })

  const [activeSide, setActiveSide] = useState<'groom' | 'bride'>('groom')

  const side = data.invitation[activeSide]
  const common = data.invitation.common

  useEffect(() => {}, [])

  return (
    <section ref={ref} className='mt-30  section-2 text-center' data-class='left'>
      <SplitTextUI
        isRun={inView}
        classGsap='title'
        className='text-7xl font-semibold text-black font-UVFAphroditePro'>
        Wedding Day
      </SplitTextUI>
      <SplitTextUI
        isRun={inView}
        classGsap='description'
        duration={0.5}
        className='text-xl italic text-black font-UTMBryantLG mt-20 text-nowrap'>
        Click vào sự kiện Nhà Gái - Nhà Trai để xem chi tiết lịch trình đám cưới của chúng
        mình nhé!
      </SplitTextUI>

      <div className='mx-auto max-w-[1000px] flex-center flex-col'>
        <div className='mt-16 flex gap-1 relative left-[0.3vw]' ref={refTitle}>
          <button
            onClick={() => setActiveSide('groom')}
            className={`${
              inViewTitle ? 'animate-fadeInLeft' : ''
            } px-10 py-4 pt-6 border rounded-full transition-all rounded-r-none text-2xl border-black font-UVFAphroditePro ${
              activeSide === 'groom' ? 'bg-red text-white' : 'bg-white text-black'
            }`}>
            Nhà Trai
          </button>
          <button
            onClick={() => setActiveSide('bride')}
            className={`${
              inViewTitle ? 'animate-fadeInRight' : ''
            } px-10 py-4 pt-6 border rounded-full transition-all rounded-l-none text-2xl border-black font-UVFAphroditePro ${
              activeSide === 'bride' ? 'bg-red text-white' : 'bg-white text-black'
            }`}>
            Nhà Gái
          </button>
        </div>
        <div
          className='flex shadow-medium/60 mt-10 w-full h-screen text-dark rounded-lg overflow-hidden'
          ref={refWeddingDay}>
          <div className={`flex-1 ${inViewWeddingDay ? 'animate-fadeInLeft' : ''}`}>
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
            className={`flex-1 flex-center flex-col h-full space-y-2 ${
              inViewWeddingDay ? 'animate-fadeInRight' : ''
            }`}>
            <div className='animate-fadeInUp opacity-0'>
              <Title label={common.greeting} className='uppercase font-normal' />
              <Description label={common.guest} className='!text-xl text-red' />
            </div>
            <div className='animate-fadeInRight animate-delay-500 opacity-0'>
              <Description label={common.inviteLine1} />
              <Description label={common.inviteLine2} />
            </div>
            <div className='animate-fadeInUp animation-delay-500 opacity-0'>
              <Title
                label={common.couple}
                className='font-UVFAphroditePro animate-decorFloatReverse1s !text-4xl my-6 text-gray-700'
              />
            </div>
            <div className='animate-fadeInRight animation-delay-500 opacity-0'>
              <Title label={side.intimate.title} className='text-red' />
              <Description label={side.intimate.time} />
            </div>
            <div className='animate-fadeInUpShow animation-delay-500 opacity-0'>
              <Title label={side.intimate.date} className='text-red' />
              <Description label={side.intimate.lunarDate} />
            </div>
            <div className='animate-fadeInLeft animation-delay-500 opacity-0'>
              <Title label={side.intimate.location} className='text-red' />
              <Description label={side.intimate.address} className='text-dark' />
            </div>
            <img
              src='/assets/logo.png'
              alt=''
              className='object-contain opacity-0 animate-fadeInUpShow animation-delay-250 w-[100px]'
            />
            <div className='animate-fadeInDown animation-delay-500 opacity-0'>
              <Title label={side.wedding.title} className='text-red' />
              <Description label={side.wedding.time} />
            </div>
            <div className='animate-fadeInLeft animation-delay-500 opacity-0'>
              <Title label={side.wedding.date} className='text-red' />
              <Description label={side.wedding.lunarDate} className='italic' />
            </div>
            <div className='animate-fadeInRight animation-delay-500 opacity-0'>
              <Title label={side.wedding.location} className='text-red' />
              <Description label={side.wedding.address} />
            </div>
            <p className='animate-fadeInUpShow opacity-0 animation-delay-1500 text-base mt-8 italic font-UVFAphroditePro'>
              {common.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingDay
