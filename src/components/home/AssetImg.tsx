import { useState } from 'react'
import styles from './AssetImg.module.css'

type Props = {
  src: string
  alt?: string
  className?: string
}

export function AssetImg({ src, alt = '', className = '' }: Props) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return <div className={`${styles.fallback} ${className}`} aria-hidden />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      draggable={false}
      onError={() => setBroken(true)}
    />
  )
}
