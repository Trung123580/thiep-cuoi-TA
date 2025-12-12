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
    link.download = 'qr-' + time + '.jpg'
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

      <div className='flex gap-20 w-full mt-15 md:mt-30 md:flex-row flex-col'>
        <div
          ref={refOne}
          className={`${
            inViewOne ? 'animate-fadeInLeft' : ''
          } animation-delay-500 opacity-0 flex-1`}>
          <h3 className='text-primary mb-10 text-5xl text-center capitalize'>Chú rể</h3>
          <div className='shadow-medium/30 rounded-lg overflow-hidden'>
            <img
              id='qr-1'
              src='/assets/qr-trai.jpg'
              className='w-full h-full object-contain'
              alt=''
            />
          </div>
          <div className='flex text-black *:shadow-medium/30 *:rounded-sm mt-5 *:bg-[#fffdf6] *:w-full gap-5 text-base md:text-2xl text-center capitalize'>
            <button onClick={() => downloadImage('qr-1')}>Tải ảnh QR</button>
            <button
              onClick={() => {
                navigator.clipboard.writeText('103875413789')
              }}>
              Copy stk
            </button>
          </div>
        </div>
        <div
          ref={refTwo}
          className={`${
            inViewTwo ? 'animate-fadeInRight' : ''
          } animation-delay-500 opacity-0 flex-1`}>
          <h3 className='text-primary mb-10 text-5xl text-center capitalize'>Cô dâu</h3>
          <div className='shadow-medium/30  rounded-lg overflow-hidden'>
            <img
              id='qr-2'
              src='/assets/qr-trai.jpg'
              className='w-full h-full object-contain '
              alt=''
            />
          </div>
          <div className='flex *:shadow-medium/30 *:rounded-sm text-black mt-5 *:bg-[#fffdf6] *:w-full gap-5 text-base  md:text-2xl text-center capitalize'>
            <button onClick={() => downloadImage('qr-2')}>Tải ảnh QR</button>
            <button
              onClick={() => {
                navigator.clipboard.writeText('103875413789')
              }}>
              Copy stk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingWishes
