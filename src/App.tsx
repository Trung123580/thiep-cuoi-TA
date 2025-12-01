import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import SplitTextUI from './components/ui/SplitTextUI'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)
function App() {
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

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    console.log(sections)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }
        })
      },
      {
        threshold: 1,
        rootMargin: '0px 0px 0px 0px',
      }
    )
    sections.forEach((section) => observer.observe(section))
  }, [])

  return (
    <div className='smooth-wrapper'>
      <div className='smooth-content'>
        <div className=''>
          {/* relative -left-[150px] */}
          <section className='h-screen section section-1'>
            <SplitTextUI classGsap='title' className='text-9xl font-bold'>
              Hello World
            </SplitTextUI>
          </section>
          <section className='h-screen section section-2 bg-yellow-400'></section>
          <section className='h-screen section section-3 bg-blue-200'></section>
          <section className='h-screen section section-4 bg-green-400'></section>
          <section className='h-screen section section-5'>
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
