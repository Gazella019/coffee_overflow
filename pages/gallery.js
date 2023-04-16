import React, { use } from 'react'
import { useState } from 'react'
import styles from '@/styles/page.module.css'
import Layout from '@/components/Layout/Layout'
import { MdClose } from 'react-icons/md'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const gallery = () => {

  const images = [

    "https://images.unsplash.com/photo-1679908208587-ee7199a0a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    "https://images.unsplash.com/photo-1679882028877-8ff92cf0abd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80",
    "https://images.unsplash.com/photo-1679679007793-25fa830507c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    "https://images.unsplash.com/photo-1679834841135-b73991e3941d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1679678691002-cca4ae795169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    "https://plus.unsplash.com/premium_photo-1669752000456-dd35381ca44f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1679834831394-8a7e5b7230f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1679883814689-08676c813d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1679896230078-b99bd7305d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80",
    "https://images.unsplash.com/photo-1679843004484-205e29b9b740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1679859339757-d499fafc716e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",

  ]
  const [showModal, setShowModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(1);

  function setNextImage(index) {
    // if(index >= images.length-1)
    //   setImageIndex(0);
    // else
    //   setImageIndex(index+1);
    setImageIndex(imageIndex+1);
  }

  function setPrevImage(index) {
    // if(index < 0)
    //   setImageIndex(images.length-1);
    // else
    //   setImageIndex(index-1);
    setImageIndex(imageIndex-1);
  }

  // const function setModalIndxe()
  return (
    <Layout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
              <div className={styles.image_card} onClick={() => setShowModal(true)}>
                <img src={images[0]}/>
              </div>
              <div className={`${styles.image_card} ${styles.big}`}>
                <img src={images[1]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[2]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[3]}/>
              </div>
              <div className={`${styles.image_card} ${styles.horizontal}`}>
                <img src={images[4]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[5]}/>
              </div>
              <div className={`${styles.image_card} ${styles.vertical}`}>
                <img src={images[6]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[7]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[8]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[9]}/>
              </div>
              <div className={styles.image_card}>
                <img src={images[10]}/>
              </div>
          </div>
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.backdrop}>
                <MdClose className={styles.close_btn} onClick={() => setShowModal(false)}/>
                <div className={styles.modal_card}>
                  <div className={styles.modal_img} onClick={() => setShowModal(false)}>
                    <img src={images[`${imageIndex}`]}/>
                  </div>
                  <div className={styles.modal_content}>
                    modal content
                  </div>
                </div>
                <AiOutlineArrowLeft className={styles.icon_left} onClick={setNextImage}/>
                <AiOutlineArrowRight className={styles.icon_right} onClick={setPrevImage}/>
              </div>
            </div>
          )}
        </div>
    </Layout>
  )
}

export default gallery

