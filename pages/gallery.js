import React, { use } from 'react'
import { useState } from 'react'
import styles from '@/styles/page.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '@/components/Ｍodal/Modal'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Image from 'next/image'

const Gallery = ({ galleryData }) => {

  const [showModal, setShowModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(1);

  function setNextImage() {
    let newIndex;
    if(imageIndex >= (galleryData.length-1))
      newIndex = 0;
    else
      newIndex = imageIndex + 1;
    setImageIndex(newIndex);
  }

  function setPrevImage() {
    let newIndex;
    if(imageIndex === 0)
      newIndex = galleryData.length-1;
    else
      newIndex = imageIndex-1;
    setImageIndex(newIndex);
  }

  function setModal(index) {
    setShowModal(true);
    setImageIndex(index);
  }
  return (
        <div className={styles.container}>
          <h2>Gallery</h2>
        <div className={styles.wrapper}>
          {galleryData.map((data, index) => (
              <div className={styles.image_card} key={index} onClick={() => setModal(index)}>
                {/* <img src={data.image}/> */}
                <Image src={data.image}
                width={500}
                height={500}
                alt="Picture of the author"
                />
              </div>
          ))}
        </div>
        <AnimatePresence>
          {showModal && (
            <Modal showModal={showModal} galleryData = {galleryData} imageIndex = {imageIndex} setNextImage={setNextImage} setPrevImage={setPrevImage} setShowModal={setShowModal}/>
          )}
        </AnimatePresence>
      </div>
  )
}

export async function getStaticProps() {
  const cloudinary = require('cloudinary').v2;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  const result = await cloudinary.api.resources();
  const { resources } = result;
  const galleryData = resources.map(resource => {
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.url,
      date: resource.created_at,
      width: resource.width,
      height: resource.height
    }
  })
  return {
      props: {
        galleryData,
      }
  }
}

export default Gallery
