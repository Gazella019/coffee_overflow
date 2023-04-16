import React from 'react'
import styles from './CategoryCardTwo.module.css'

const CategoryCardTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <img src="https://images.unsplash.com/photo-1607622017669-2b0fe5eb878b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80"/>
        <div className={styles.overlay}/>
        <p className={styles.text}>Japan</p>
      </div>
      <div className={styles.category}>
        <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"/>
        <div className={styles.overlay}/>
        <p className={styles.text}>Osaka</p>
      </div>
      <div className={styles.category}>
        <img src="https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"/>
        <div className={styles.overlay}/>
        <p className={styles.text}>Nerion</p>
      </div>
      <div className={styles.category}>
        <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80"/>
        <div className={styles.overlay}/>
        <p className={styles.text}>Kyoto</p>
      </div>
      <div className={styles.category}>
        <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"/>
        <div className={styles.overlay}/>
        <p className={styles.text}>Tokyo</p>
      </div>
      
    </div>
  )
}

export default CategoryCardTwo
