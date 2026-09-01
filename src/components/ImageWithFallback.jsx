import React, { useState } from 'react'

const FALLBACK = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'

export default function ImageWithFallback({ src, alt, className, style }) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK)
  const [errored, setErrored] = useState(false)

  function handleError() {
	if (!errored) {
	  setImgSrc(FALLBACK)
	  setErrored(true)
	}
  }

  return (
	<img
	  src={imgSrc}
	  alt={alt}
	  className={className}
	  style={style}
	  onError={handleError}
	  loading="lazy"
	/>
  )
}
