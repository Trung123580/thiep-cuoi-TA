import { Fragment, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const WrapperMasonry = ({
  data,
}: // onClickRightMouse,
{
  data: any[]
  // onClickRightMouse: (e: React.MouseEvent<HTMLDivElement>) => void
}) => {
  const downloadImage = async () => {
    const activeSlide = NativeFancybox.getInstance()?.getSlide() as any

    const url = activeSlide.src
    const time = Math.floor(Date.now() / 1000)

    const response = await fetch(url)
    const blob = await response.blob()
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'timanh-download-' + time + '.jpg'
    link.click()
    URL.revokeObjectURL(link.href)
  }
  const preventContextMenu = (event: Event) => event.preventDefault()
  const handleTouchStart = (event: TouchEvent) => event.preventDefault()

  useEffect(() => {
    NativeFancybox.bind('[data-fancybox]', {
      Carousel: {
        infinite: false,
      },
      trapFocus: false,
      on: {
        ready: () => {
          document.removeEventListener('contextmenu', preventContextMenu)
          document.removeEventListener('touchstart', handleTouchStart)
        },
        close: () => {
          document.addEventListener('contextmenu', preventContextMenu)
          document.addEventListener('touchstart', handleTouchStart)
        },
        done: () => {},
      },
      Toolbar: {
        items: {
          download: {
            tpl: `<button class="f-button"><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"></path></svg></button>`,
            click: () => downloadImage(),
          },
          // 'btn-diploma': {
          //   tpl: `<button class="f-button">🎓</button>`,
          //   click: (fancybox, slide) => {
          //     handleCheckDiplomaUser(slide)
          //   }
          // }
        },
        display: {
          left: ['infobar'],
          middle: [],
          right: ['download', 'slideshow', 'fullscreen', 'thumbs', 'close'],
        },
      },
    } as any)

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.id === 'btn-diploma') {
        e.stopPropagation()
      }
    }

    document.body.addEventListener('click', handleClick)
    return () => {
      document.body.removeEventListener('click', handleClick)
      NativeFancybox.destroy()
    }
  }, [])
  return (
    <ResponsiveMasonry
      className=''
      columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1024: 5 }}>
      <Masonry
        style={{ gap: '8px' }}
        itemStyle={{
          gap: '8px',
          cursor: 'pointer',
          width: '100%',
        }}>
        {data.map((photo: any, index) => {
          if (index > 11) return <Fragment key={photo}></Fragment>
          return (
            <div key={photo} className='relative group'>
              <a
                data-fancybox='gallery'
                id='fancybox'
                data-key={photo}
                data-publicurl={photo}
                className='flex justify-center w-full h-auto'
                href={photo}>
                <img
                  src={photo}
                  className={`object-contain rounded-lg`}
                  alt=''
                  width={500}
                  height={500}
                />
              </a>
            </div>
          )
        })}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default WrapperMasonry
