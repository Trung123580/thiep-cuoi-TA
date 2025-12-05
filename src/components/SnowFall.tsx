import { useEffect } from 'react'

const SnowFall = () => {
  useEffect(() => {
    document.querySelectorAll('.snowflake').forEach((flake: any) => {
      flake.style.left = Math.random() * 100 + '%'
      flake.style.animationDelay = Math.random() * 5 + 's'
      flake.style.animationDuration = 5 + Math.random() * 10 + 's' // tốc độ random
    })
  }, [])

  const flakes = [
    { char: '♥️', size: 20 },
    { char: '❤', size: 14 },
    { char: '♥️', size: 18 },
    { char: '❤', size: 14 },
    { char: '♥️', size: 20 },
    // { char: '♥️', size: 22 },
    { char: '❤', size: 14 },
    { char: '♥️', size: 16 },
    // { char: '♥️', size: 18 },
    { char: '❤', size: 15 },
    // { char: '♥️', size: 22 },
    { char: '❤', size: 14 },
    { char: '♥️', size: 20 },
    { char: '❤', size: 14 },
    { char: '♥️', size: 18 },
    { char: '❤', size: 14 },
    { char: '♥️', size: 22 },
    { char: '❤', size: 14 },
  ]

  return (
    <div className='snowflakes'>
      {flakes.map((item, i) => (
        <div key={i} className='snowflake' style={{ fontSize: item.size || 16 }}>
          {item.char}
        </div>
      ))}
    </div>
  )
}

export default SnowFall
