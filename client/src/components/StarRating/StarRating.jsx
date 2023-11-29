
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


export function StarRating() {
  const [ setRating] = useState(0)

  // Catch Rating value
  const handleRating = () => {
    setRating()
  }

  return (
    <div className='App col-7'  style={{scale:"0.5"}}>
      {/* set initial value */}
      <Rating onClick={handleRating} initialValue={Math.floor(Math.random() * 5)} />
    </div>
  )

}