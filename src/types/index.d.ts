declare const google: any
declare const FB: any
type func = () => void
type funcProps = (props: any) => void
type funcPromise = () => Promise<void>
type funcPromiseProps = () => Promise<void>

// declare global {
//   interface ScreenOrientation {
//     lock(orientation: 'portrait' | 'landscape' | 'any'): Promise<void>
//   }
// }
interface Window {
  fbAsyncInit?: () => void
}

declare module 'swiper/css' {
  const content: string
  export default content
}

declare module 'swiper/css/navigation' {
  const content: string
  export default content
}

declare module 'swiper/css/pagination' {
  const content: string
  export default content
}
