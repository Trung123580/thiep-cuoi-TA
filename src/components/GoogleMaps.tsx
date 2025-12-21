const GoogleMaps = ({ src }: { src: string }) => {
  return (
    <div className='embed-map-responsive mt-10'>
      <div className='embed-map-container'>
        <iframe
          className='embed-map-frame'
          src={src}
          frameBorder='0'
          scrolling='no'
          width={380}
          height={250}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Google Map'
        />
      </div>
    </div>
  )
}

export default GoogleMaps
