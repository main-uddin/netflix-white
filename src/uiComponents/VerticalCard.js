const VerticalCard = props => {
  return (
    <div
      className='vertical-card__img--sizes'
      style={{
        backgroundImage: `url(${props?.img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top'
      }}
    >
      {/* <img  src={props?.img} alt='' /> */}
    </div>
  )
}

export default VerticalCard
