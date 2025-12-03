import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import SplitTextUI from './components/ui/SplitTextUI'
import Banner from './components/Banner'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector, useAppStore } from './components/hooks/useStore'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)
function App() {
  const {
    storeAction: { isOpen },
  } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  console.log({ isOpen })

  useEffect(() => {
    ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: '#smooth-wrapper',
      smooth: 1.5,
      effects: true,
    })
  }, [ScrollSmoother])

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

  const handleScroll = (e: Event) => {
    // console.log(e.);
    console.log(window.innerHeight)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    // if (rect.top >= 0 && rect.bottom <= window.innerHeight) {

    // }
    console.log(sections)
    // sections.forEach((element) => {
    //   console.log(element.className)

    //   const domElement = element.getBoundingClientRect()
    //   console.log({ domElement })
    // })

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     // entries.forEach((entry) => {
    //     //   if (entry.isIntersecting) {
    //     //     entry.target.classList.add('show')
    //     //   } else {
    //     //     entry.target.classList.remove('show')
    //     //   }
    //     // })
    //     if (entries[0].isIntersecting) {
    //       // if (entries[0].target.classList.contains('show')) {
    //       //   entries[0].target.classList.remove('show')
    //       //   return
    //       // }

    //       entries[0].target.classList.add('show')
    //     } else {
    //       entries[0].target.classList.remove('show')
    //     }
    //   },
    //   {
    //     threshold: 0.5,
    //     rootMargin: '0px 0px 0px 0px',
    //   }
    // )
    // sections.forEach((section) => observer.observe(section))
  }, [])

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
          <section
            className='h-[700px] section-2 bg-yellow-400'
            data-class='left'></section>
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
