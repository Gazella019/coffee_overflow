import React from 'react'
import styles from "./InstaGallery.module.css"

const InastaGallery = ({galleryData}) => {
  return (
    <div className={styles.container}>
        {galleryData.map((data) =>
          <div className={styles.box}>
            <img src={data.image}/>
          </div>
        )}
    </div>
  )
}

export default InastaGallery