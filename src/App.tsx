import Banner from './components/Banner'
import WeddingDay from './components/WeddingDay'
import WeddingTimeLine from './components/WeddingTimeLine'
import Modal from './components/Modal'
import { useEffect, useState } from 'react'
import WeddingAttenDing from './components/WeddingAttenDing'
import Footer from './components/Footer'
import WeddingMoments from './components/WeddingMoments'
import WeddingWishes from './components/WeddingWishes'
function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenModal(true)
    }, 90000)
  }, [])

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenModal])
  return (
    <main>
      <Banner />
      <WeddingDay />
      <WeddingTimeLine />
      <WeddingAttenDing />
      <WeddingMoments />
      <WeddingWishes />
      <Footer />
      <Modal isOpen={isOpenModal} onToggle={() => setIsOpenModal(!isOpenModal)}>
        <div className='px-5 w-[400px] h-[150px] bg-white rounded-xl flex-center relative'>
          <button
            onClick={() => setIsOpenModal(false)}
            className='absolute top-1 right-1 w-6 h-6 rounded-full bg-dark text-white flex-center hover:bg-opacity-80 transition'
            aria-label='Close modal'>
            &times;
          </button>
          <div className='flex flex-col gap-5'>
            <h1 className='text-black text-3xl font-UVFAphroditePro'>
              Bạn sẽ tham dự chứ ?
            </h1>
            <button
              onClick={() => {
                document.getElementById('form-submit')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'start',
                })
                setIsOpenModal(false)
              }}
              className='text-center cursor-pointer rounded-lg text-2xl font-bold text-white bg-dark px-4 py-2 leading-6'>
              <span className='relative -top-0.5'>Xác nhận tham gia</span>
            </button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default App
