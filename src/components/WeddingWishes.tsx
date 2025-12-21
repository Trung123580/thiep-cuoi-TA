import SplitTextUI from './ui/SplitTextUI'
import { useInView } from 'react-intersection-observer'

const WeddingWishes = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const { ref: refOne, inView: inViewOne } = useInView({ threshold: 0.1 })
  const { ref: refTwo, inView: inViewTwo } = useInView({ threshold: 0.1 })
  const downloadImage = async (id: string) => {
    const url = document.getElementById(id)?.getAttribute('src') ?? ''
    if (!url) return
    const time = Math.floor(Date.now() / 1000)
    const response = await fetch(url)
    const blob = await response.blob()
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'qr-' + time + '.webp'
    link.click()
    URL.revokeObjectURL(link.href)
  }
  return (
    <section
      ref={ref}
      className='flex-center flex-col md:mt-40 mt-20 max-w-[1000px] mx-auto md:px-0 px-3'>
      <SplitTextUI
        isRun={inView}
        duration={1}
        classGsap='title'
        className='text-[40px] leading-0 md:text-7xl text-black font-UVFAphroditePro'>
        Wedding Wishes
      </SplitTextUI>

      <SplitTextUI
        isRun={inView}
        classGsap='description'
        duration={0.1}
        className='text-xl italic text-black font-UTMBryantLG mt-16 md:mt-30 md:text-nowrap text-center'>
        Mình rất muốn được chụp chung với bạn những tấm hình kỷ niệm vì vậy hãy đến sớm
        hơn một chút bạn yêu nhé!
      </SplitTextUI>
      <SplitTextUI
        isRun={inView}
        classGsap='description'
        duration={0.1}
        className='text-xl italic text-black font-UTMBryantLG  md:text-nowrap  text-center'>
        Đám cưới của chúng mình sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện
        của các bạn.
      </SplitTextUI>

      <div className='flex gap-10 md:gap-60 w-full mt-15 md:mt-30 md:flex-row flex-col px-[8vw] md:px-0'>
        <div
          ref={refOne}
          className={`${
            inViewOne ? 'animate-fadeInLeft' : ''
          } animation-delay-500 opacity-0 flex-1`}>
          <h3 className='text-primary mb-10 text-5xl text-center capitalize'>Chú rể</h3>
          <div className=' rounded-lg overflow-hidden'>
            <img
              id='qr-1'
              src='/assets/qr-trai.webp'
              className='w-full h-[450px] object-cover'
              alt=''
            />
          </div>
          <div className='*:py-1 flex-1 flex text-black *:rounded-sm mt-5 *:bg-[#fffdf6] *:w-full gap-5 text-base md:text-xl text-center capitalize'>
            <button
              className='active:top-1 relative'
              onClick={() => downloadImage('qr-1')}>
              Tải ảnh QR
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText('106867926349')
              }}
              className='active:top-1 relative'>
              Copy STK
            </button>
          </div>
        </div>
        <div
          ref={refTwo}
          className={`${
            inViewTwo ? 'animate-fadeInRight' : ''
          } animation-delay-500 opacity-0 flex-1`}>
          <h3 className='text-primary mb-10 text-5xl text-center capitalize'>Cô dâu</h3>
          <div className='  rounded-lg overflow-hidden'>
            <img
              id='qr-2'
              src='/assets/qr-gai.webp'
              className='w-full h-[450px] object-cover'
              alt=''
            />
          </div>
          <div className='*:py-1 flex *:rounded-sm text-black mt-5 *:bg-[#fffdf6] *:w-full gap-5 text-base  md:text-xl text-center capitalize'>
            <button
              onClick={() => downloadImage('qr-2')}
              className='active:top-1  relative'>
              Tải ảnh QR
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText('103003498662')
              }}
              className='active:top-1  relative'>
              Copy STK
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingWishes
