import React, { use } from 'react'
import { useState } from 'react'
import styles from '@/styles/page.module.css'
import Layout from '@/components/Layout/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '@/components/Ｍodal/Modal'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const gallery = ({ galleryData }) => {

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
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: .6, delayChildren: 1, staggerChildren: 0.08}}
        className={styles.container}
        >
        <div className={styles.wrapper}>
          {galleryData.map((data, index) => (
              <div className={styles.image_card} onClick={() => setModal(index)}>
                <img src={data.image}/>
              </div>
          ))}
            {/* <div className={styles.image_card} onClick={() => setShowModal(true)}>
              <img src={galleryData[0].image}/>
            </div>
            <div className={`${styles.image_card} ${styles.big}`}>
              <img src={galleryData[1].image}/>
            </div>
            <div className={styles.image_card}>
              <img src={galleryData[2].image}/>
            </div>
            <div className={styles.image_card}>
              <img src={galleryData[3].image}/>
            </div>
            <div className={`${styles.image_card} ${styles.horizontal}`}>
              <img src={galleryData[4].image}/>
            </div>
            <div className={styles.image_card}>
              <img src={galleryData[5].image}/>
            </div>
            <div className={`${styles.image_card} ${styles.vertical}`}>
              <img src={galleryData[6].image}/>
            </div>
            <div className={styles.image_card}>
              <img src={galleryData[7].image}/>
            </div>
            <div className={styles.image_card}>
              <img src={galleryData[8].image}/>
            </div> */}
        </div>
        <AnimatePresence>
          {showModal && (
            <Modal showModal={showModal} galleryData = {galleryData} imageIndex = {imageIndex} setNextImage={setNextImage} setPrevImage={setPrevImage} setShowModal={setShowModal}/>
          )}
        </AnimatePresence>
      </motion.div>
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

export default gallery
