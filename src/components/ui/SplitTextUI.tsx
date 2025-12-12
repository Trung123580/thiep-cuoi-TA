import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'

interface Props {
  className?: string
  delayText?: number
  children: React.ReactNode
  duration?: number
  isRun?: boolean
  classGsap?: string
}

const SplitTextUI = ({
  className,
  delayText = 0,
  children,
  duration = 1.8,
  isRun = true,
}: Props) => {
  const textRef = useRef<HTMLDivElement>(null)
  const splitRef = useRef<SplitType | null>(null)

  useEffect(() => {
    if (!textRef.current || !isRun) return

    splitRef.current?.revert()

    const split = new SplitType(textRef.current, {
      types: 'chars,words',
      tagName: 'div',
    })

    splitRef.current = split

    split.chars?.forEach((char) => {
      char.classList.add('inline-block', 'origin-bottom', 'overflow-visible')
    })

    split.chars?.forEach((char) => {
      char.classList.add('mr-0.5')
    })

    gsap.set(split.chars, {
      yPercent: 110,
      opacity: 0,
    })

    gsap.to(split.chars, {
      yPercent: 0,
      opacity: 1,
      duration: duration,
      ease: 'expo.out',
      stagger: 0.05,
      delay: delayText,
    })

    return () => {
      split.revert()
      splitRef.current = null
    }
  }, [delayText, duration, isRun, children]) // children trong deps để re-split nếu text thay đổi

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

export default SplitTextUI
