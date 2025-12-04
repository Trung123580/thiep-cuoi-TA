import SplitTextUI from './ui/SplitTextUI'
import { useInView } from 'react-intersection-observer'

const WeddingDay = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  console.log({ inView })

  //   const [isShow, setIsShow] = useState(false)
  //   const ref = useRef<HTMLDivElement>(null)

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

      <div className='mt-16 *:rounded-full flex gap-1 mx-auto w-max'>
        <button className='px-10 py-4 pt-6 border !rounded-r-none text-2xl bg-red text-white border-black  font-UVFAphroditePro'>
          Nhà Trai
        </button>
        <button className='px-10 py-4 pt-6 border !rounded-l-none text-2xl bg-white text-black border-black  font-UVFAphroditePro'>
          Nhà Gái
        </button>
      </div>
    </section>
  )
}

export default WeddingDay
