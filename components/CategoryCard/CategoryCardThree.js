import React from 'react'
import Image from 'next/image'
import { useStyleRegistry } from 'styled-jsx'
import styles from './CategoryCardThree.module.css'

const CategoryCardThree = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.category_card}>
          <Image src="https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
              width={500}
              height={500}
              alt="img"
          />
          <div className={styles.backdrop}>
              looks for her
          </div>
        </div>
        <div className={styles.category_card}>
          <Image src="https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            width={500}
            height={500}
            alt="img"
          />
          <div className={styles.backdrop}>
              looks for him
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCardThree
