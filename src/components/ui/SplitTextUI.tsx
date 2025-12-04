// components/SplitTextUI.tsx
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(SplitText)

interface Props {
  classGsap: string
  className?: string
  delayText?: number
  children: React.ReactNode
  duration?: number
  isRun?: boolean
}

const SplitTextUI = ({
  classGsap,
  className,
  delayText = 0,
  children,
  duration = 1.8,
  isRun = true,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    if (!isRun) return
    const target = containerRef.current.querySelector(
      `.${classGsap.replace('.', '')}`
    ) as HTMLElement

    if (!target) {
      console.warn(`Không tìm thấy phần tử với class: ${classGsap}`)
      return
    }

    const split = new SplitText(target, {
      type: 'chars, words',
      // charsClass: 'split-char', // tự động thêm class này cho từng ký tự
    })

    split.chars.forEach((char) => {
      char.classList.add('text-grandient')
    })

    gsap.from(split.chars, {
      yPercent: 100,
      opacity: 0,
      duration: duration,
      ease: 'expo.out',
      stagger: 0.05,
      delay: delayText,
    })

    return () => {
      split.revert()
    }
  }, [classGsap, delayText, duration, isRun])

  return (
    <div ref={containerRef} className={className}>
      <div className={classGsap}>{children}</div>
    </div>
  )
}

export default SplitTextUI
