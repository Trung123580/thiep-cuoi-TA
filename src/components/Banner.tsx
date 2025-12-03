import SplitTextUI from './ui/SplitTextUI'

const Banner = () => {
  return (
    <section className='relative h-[700px] section section-1' data-class='top'>
      <div className='flex'>
        {/* <img src='' alt='' /> */}
        {/* <img src='' alt='' /> */}
        {/* <img src='' alt='' /> */}
      </div>
      <div className='ab-center top-[60%] text-center'>
        <SplitTextUI classGsap='title' className='text-8xl font-bold '>
          Hải lý & Tiến Anh
        </SplitTextUI>
        <SplitTextUI
          classGsap='description'
          duration={2}
          className='text-xl font-semibold'>
          Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp nhất, gả cho người đáng
          tin cậy nhất
        </SplitTextUI>
      </div>
    </section>
  )
}

export default Banner
