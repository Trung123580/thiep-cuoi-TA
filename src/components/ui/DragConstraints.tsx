'use client'
import * as motion from 'motion/react-client'
import { useEffect, useRef, useState } from 'react'

export default function DragConstraints() {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const refMusic = useRef<HTMLAudioElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const [stateAudio, setStateAudio] = useState({
    isPlay: false,
  })
  const { isPlay } = stateAudio

  const handlePlayMusic = () => {
    if (refMusic.current && refMusic.current.paused) {
      refMusic.current.play()
    } else {
      if (refMusic.current) {
        refMusic.current?.pause()
      }
    }
  }
  useEffect(() => {
    if (refMusic.current) {
      refMusic.current.addEventListener('play', () => {
        setStateAudio({
          isPlay: true,
        })
      })
      refMusic.current.addEventListener('pause', () => {
        setStateAudio({
          isPlay: false,
        })
      })
    }
  }, [])

  return (
    <div className='fixed top-2 h-full w-[20vw] z-10'>
      <audio
        playsInline
        autoPlay={false}
        ref={refMusic}
        muted={false}
        loop={true}
        className='hidden'>
        <source src='https://bachlong-trading.com/wp-content/uploads/2024/05/EM-DONG-Y-I-DO-DUC-PHUC-x-911-x-KHAC-HUNG-1ST-LIVE-STAGE.mp3' />
      </audio>
      <motion.div
        ref={constraintsRef}
        style={constraints}
        className='h-[96%] md:w-[98%] w-[95%] py-0 px-2 mx-auto '>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 10,
          }}
          className={isPlay ? 'shadow-red ' : 'shadow-xl'}
          style={box}
          onDoubleClick={() => {
            handlePlayMusic()
            setIsMounted(false)
          }}
          onClick={() => {
            if (isMounted) return
            setIsMounted(true)
            handlePlayMusic()
          }}>
          <div
            className={`bg-white h-full w-full ${
              isPlay ? 'animate-rotate shadow-red' : ''
            } flex-center  cursor-pointer`}>
            <img
              src={!isPlay ? '/assets/btn-play-pause.jpg' : '/assets/btn-play.jpg'}
              alt=''
              width={30}
              className='rounded-full object-contain'
              style={
                {
                  pointerEvents: 'auto',
                  userSelect: 'none',
                  WebkitUserDrag: 'none',
                  animationDuration: '1300ms',
                } as React.CSSProperties
              }
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const constraints: React.CSSProperties = {
  // backgroundColor: 'var(--hue-1-transparent)',
  // borderRadius: 10,
  // height: '100%',
}

const box: React.CSSProperties = {
  width: 50,
  height: 50,
  // backgroundColor: '#fff',
  borderRadius: 100,
  overflow: 'hidden',
}
