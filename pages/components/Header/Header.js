import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <span className={styles.users}>Users</span>
        <div className={styles.left}>
            <img src="/icon notification.png" alt="Icon 1" />
        </div>
        <div className={styles.left1}>
            <img src="/icon notification (1).png" alt="Icoon 2" />
        </div>
        <div className={styles.profile}>
            <div className={styles.nametag}>
                <span className={styles.span1}>Ole gunnar</span>
                <span className={styles.span2}>Super admin</span>
            </div>
            <img className={styles.profileimg} src="/Ellipse 6.png" alt="Profile Image" />
        </div>
    </div>
  )
}

export default Header