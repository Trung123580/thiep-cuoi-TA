import { useEffect, useState, useRef, type RefObject } from 'react'

interface UseInViewportOptions {
  threshold?: number | number[] // 0.0 -> 1.0 (hoặc mảng)
  rootMargin?: string // ví dụ: "0px 0px -100px 0px"
  triggerOnce?: boolean // chỉ true 1 lần duy nhất
  freezeOnceVisible?: boolean // nếu true → khi đã visible thì giữ true mãi mãi
}

function useInViewport(
  ref: RefObject<HTMLElement | null>,
  {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    freezeOnceVisible = false,
  }: UseInViewportOptions = {}
): boolean {
  const [isInViewport, setIsInViewport] = useState(false)
  const hasBeenVisible = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting
        console.log({ visible })

        if (visible) {
          hasBeenVisible.current = true
        } else {
          hasBeenVisible.current = false
        }

        // Logic xử lý theo các option
        if (freezeOnceVisible) {
          setIsInViewport(hasBeenVisible.current)
        } else if (triggerOnce) {
          setIsInViewport(visible && !hasBeenVisible.current)
        } else {
          setIsInViewport(visible)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    window.addEventListener('load', () => {
      observer.observe(element)
    })
    return () => {
      window.removeEventListener('load', () => {
        observer.disconnect()
      })
    }
  }, [ref, threshold, rootMargin, triggerOnce, freezeOnceVisible])

  return isInViewport
}

export default useInViewport
