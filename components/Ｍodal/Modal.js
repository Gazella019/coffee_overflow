import React from 'react'
import styles from "./Modal.module.css"
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Modal = ({galleryData, imageIndex, setNextImage, setPrevImage, setShowModal}) => {
  
  const ratio = (galleryData[`${imageIndex}`].width >= galleryData[`${imageIndex}`].height) ? "horizontal" : "vertical";
  return (
    <motion.div 
    initial={{opacity:0, y: 0}}
    animate={{opacity:1, y: 0}}
    transition={{duration: 2}}
    className={styles.backdrop}>
        <MdClose className={styles.close_btn} onClick={() => setShowModal(false)}/>
          <motion.div 
          initial={{}}
          animate={{}}
          transition={{}}
          className={styles.modal_card}>
            {(ratio == "horizontal" ? 
              <div className={styles.horizontal_img} onClick={() => setShowModal(false)}>
                <img src={galleryData[`${imageIndex}`].image}/>
              </div> : 
              <div className={styles.vertical_img} onClick={() => setShowModal(false)}>
                <img src={galleryData[`${imageIndex}`].image}/>
              </div>
            )}
          </motion.div>
          <AiOutlineArrowLeft className={styles.icon_left} onClick={setPrevImage}/>
          <AiOutlineArrowRight className={styles.icon_right} onClick={setNextImage}/>
    </motion.div>
  )
}

export default Modal
