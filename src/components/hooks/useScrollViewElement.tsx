// hooks/useInViewport.ts
import { useEffect, useState, useRef, type RefObject } from 'react'

interface UseInViewportOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  freezeOnceVisible?: boolean
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

        if (visible) {
          hasBeenVisible.current = true
        }

        if (freezeOnceVisible) {
          setIsInViewport(hasBeenVisible.current)
        } else if (triggerOnce) {
          setIsInViewport(visible && !hasBeenVisible.current)
        } else {
          setIsInViewport(visible)
        }
      },
      { threshold, rootMargin }
    )

    // QUAN TRỌNG: observe NGAY LẬP TỨC, không đợi 'load'
    observer.observe(element)

    // Cleanup đúng cách
    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [ref, threshold, rootMargin, triggerOnce, freezeOnceVisible])
  // Không bao giờ được thêm ref.current vào dependency!

  return isInViewport
}

export default useInViewport
