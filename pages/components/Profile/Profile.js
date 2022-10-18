import React from 'react'
import styles from './Profile.module.css'
const Profile = () => {
  return (
    <div className={styles.profile}>
        <div className={styles.phead}>
            <img src="/arrow-narrow-left.svg" alt="" />
            <span className={styles.span}>John Doe</span>
        </div>
        <hr className={styles.hr} />
        <a className={styles.a} href="">View Status</a>
        <img  className={styles.img} src="/Ellipse 4 (1).png" alt="" />
        <span className={styles.account}>Account Details</span>
        <span className={styles.user}>User ID</span>
        <span className={styles.p00}>P000063</span>
        {/* <span className={styles.account}>User ID</span>
        <span className={styles.account}>User ID</span>
        <span className={styles.account}>User ID</span>
        <span className={styles.account}>User ID</span> */}

    </div>
  )
}

export default Profile