import React from 'react'
import styles from "./InstaGallery.module.css"
import Image from 'next/image'

const InastaGallery = ({galleryData}) => {
  return (
    <div className={styles.container}>
      <div className={styles.instaGrid}>
        {galleryData.map((data) =>
          <div className={styles.box}>
            <Image 
              width={400}
              height={400}
              src={data.image}
              alt={data.title}
            />
          </div>
        )}
        
      </div>
    </div>
  )
}

export default InastaGallery