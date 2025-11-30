import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother, Observer } from 'gsap/all'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)
function App() {
  const main = useRef<any>()
  useEffect(() => {
    ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: '#smooth-wrapper',
      smooth: 1.5,
      effects: true,
    })
  }, [ScrollSmoother])

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box')
      boxes.forEach((box: any) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        })
      })
    },
    { scope: main }
  )

  return (
    <section className='smooth-wrapper'>
      <div className='smooth-content'>
        <section className='h-screen bg-red-400'>
          <div className='section flex-center column' ref={main}>
            <div className='box gradient-blue'>box</div>
            <div className='box gradient-blue'>box</div>
            <div className='box gradient-blue'>box</div>
          </div>
        </section>
        <section className='h-screen bg-yellow-400'></section>
        <section className='h-screen bg-blue-200'></section>
        <section className='h-screen bg-green-400'></section>
      </div>
    </section>
  )
}

export default App
