import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logo}>
            <img src="/icon 1.png" alt="Parivest Logo" />
            <span className={styles.parivest}>PariVest</span>
        </div>
        <div className={styles.home}>
            <img src="/Home.svg" alt="Home logo" />
            <span>Home</span>
        </div>
        <div className={styles.user1}>
            <img src="/users-03.svg" alt="Users Logo" />
            <span>Users</span>
        </div>
        <div className={styles.active}></div>
        <div className={styles.active1}></div>
        <div className={styles.investment}>
            <img src="/line-chart-up-01.svg" alt="Investment Logo" />
            <span>Investments</span>
        </div>
        <div className={styles.savings}>
            <img src="/piggy-bank-02.svg" alt="Savings Logo" />
            <span>Savings</span>
        </div>
        <div className={styles.wallet}>
            <img src="/wallet-02.svg" alt="Wallet Logo" />
            <span>Wallet</span>
        </div>
        <div className={styles.admin}>
            <img src="/user-02.svg" alt="Admin Logo" />
            <span>Admin</span>
        </div>
        <hr className={styles.hr} />
        <div className={styles.cpassword}>
            <img src="/key-02.svg" alt="CPASSWORD Logo" />
            <span>Change password</span>
        </div>
        <div className={styles.logout}>
            <img src="/log-out-03.svg" alt="Logout Logo" />
            <span>Logout</span>
        </div>
    </div>
  )
}

export default Sidebar