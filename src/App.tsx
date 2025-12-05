// import { gsap } from 'gsap'
// import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
// import { useGSAP } from '@gsap/react'
import SplitTextUI from './components/ui/SplitTextUI'
import Banner from './components/Banner'
import { useEffect } from 'react'
import { useAppSelector } from './components/hooks/useStore'
import WeddingDay from './components/WeddingDay'
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)
function App() {
  const {
    storeAction: { isOpen },
  } = useAppSelector((state) => state)
  console.log({ isOpen })

  useEffect(() => {
    if (window.innerWidth > 768) return
    // const smoother = ScrollSmoother.create({
    //   wrapper: '#smooth-wrapper',
    //   content: '#smooth-content',
    //   smooth: 1.8,
    //   effects: true,
    //   smoothTouch: 0.1,
    //   normalizeScroll: true,
    //   ignoreMobileResize: true,
    // })
    // smoother.scrollTop(0)

    // return () => {
    //   smoother.kill()
    //   ScrollTrigger.refresh()
    // }
  }, [])
  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray('.box')
  //     boxes.forEach((box: any) => {
  //       gsap.to(box, {
  //         x: 150,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: 'top bottom ',
  //           end: 'top 0%',
  //           scrub: true,
  //         },
  //       })
  //     })
  //   },
  //   { scope: main }
  // )

  // useEffect(() => {
  //   const boxes = gsap.utils.toArray('.section')
  //   boxes.forEach((box: any, i) => {
  //     gsap.to(box, {
  //       x: 150,
  //       animationDelay: i * 0.5,
  //       scrollTrigger: {
  //         trigger: box,
  //         start: 'top bottom ',
  //         end: 'top 0%',
  //         scrub: true,
  //       },
  //     })
  //   })
  // })

  // const handleScroll = (e: Event) => {
  //   console.log(e)
  // }

  // useEffect(() => {
  //   const sections = document.querySelectorAll('.section')

  //   // if (rect.top >= 0 && rect.bottom <= window.innerHeight) {

  //   // }
  //   console.log(sections)
  //   // sections.forEach((element) => {
  //   //   console.log(element.className)

  //   //   const domElement = element.getBoundingClientRect()
  //   //   console.log({ domElement })
  //   // })

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  //   // const observer = new IntersectionObserver(
  //   //   (entries) => {
  //   //     // entries.forEach((entry) => {
  //   //     //   if (entry.isIntersecting) {
  //   //     //     entry.target.classList.add('show')
  //   //     //   } else {
  //   //     //     entry.target.classList.remove('show')
  //   //     //   }
  //   //     // })
  //   //     if (entries[0].isIntersecting) {
  //   //       // if (entries[0].target.classList.contains('show')) {
  //   //       //   entries[0].target.classList.remove('show')
  //   //       //   return
  //   //       // }

  //   //       entries[0].target.classList.add('show')
  //   //     } else {
  //   //       entries[0].target.classList.remove('show')
  //   //     }
  //   //   },
  //   //   {
  //   //     threshold: 0.5,
  //   //     rootMargin: '0px 0px 0px 0px',
  //   //   }
  //   // )
  //   // sections.forEach((section) => observer.observe(section))
  // }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
          // else {
          //   entry.target.classList.remove('show')
          // }
        })
      },
      {
        threshold: 0.2, // 30% phần tử xuất hiện thì add class
        // rootMargin: '0px 400px 0px 400px',
      }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <div className='smooth-wrapper'>
      <div className='smooth-content '>
        <div className=''>
          <Banner />
          <WeddingDay />

          <section
            className='h-[700px] section section-3 bg-blue-200'
            data-class='left'></section>
          <section
            data-class='bottom'
            className='h-[700px] section-4 bg-green-400'></section>
          <section data-class='right' className='h-[700px] section section-5'>
            <SplitTextUI classGsap='title' className='text-9xl font-bold'>
              Hello World
            </SplitTextUI>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
