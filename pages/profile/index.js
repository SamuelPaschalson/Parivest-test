import React from 'react'
import styles from './Profile.module.css'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Link from 'next/link'

const Profile = () => {
  return (
    <>
        <Header/>
        <Sidebar/>
        <div className={styles.profile}>
            <div className={styles.phead}>
                <Link href="/">
                    <img src="/arrow-narrow-left.svg" alt="" />
                </Link>
                <span className={styles.span}>John Doe</span>
            </div>
            <hr className={styles.hr} />
            <a className={styles.a} href="#divone">View Status</a>
            <img  className={styles.img} src="/Ellipse 4 (1).png" alt="" />
            <span className={styles.account}>Account details</span>
            <div className={styles.details}>
                <div className={styles.ids}>
                    <span className={styles.user}>User ID</span>
                    <span className={styles.p00}>P000063</span>
                </div>
                <div className={styles.name}>
                    <span className={styles.fname}>First name</span>
                    <span className={styles.john}>John</span>
                </div>
                <div className={styles.name1}>
                    <span className={styles.lname}>Last name</span>
                    <span className={styles.doe}>Doe</span>
                </div>
                <div className={styles.email}>
                    <span className={styles.addr}>Email address</span>
                    <span className={styles.johnd}>Johndoe@example.com</span>
                </div>
            </div>
            <hr className={styles.hr1} />
            <span className={styles.invest}>Investment profile</span>
            <div className={styles.ip}>
                <div className={styles.details1}>
                    <div className={styles.ids1}>
                        <span className={styles.user1}>Annual income</span>
                        <span className={styles.p001}>$470.48</span>
                    </div>
                    <div className={styles.name1}>
                        <span className={styles.fname1}>Investment goal</span>
                        <span className={styles.john1}>$470.48</span>
                    </div>
                    <div className={styles.name11}>
                        <span className={styles.lname1}>Investment experience</span>
                        <span className={styles.doe1}>None</span>
                    </div>
                    <div className={styles.email1}>
                        <span className={styles.addr1}>Marital status</span>
                        <span className={styles.johnd1}>Single</span>
                    </div>
                    <div className={styles.email11}>
                        <span className={styles.addr11}>Next of kin name</span>
                        <span className={styles.johnd11}>Kathryn Murphy</span>
                    </div>
                </div>
            </div>
            <div className={styles.ip1}>
                <div className={styles.details2}>
                    <div className={styles.kin}>
                        <span className={styles.kinp}>Next of kin phone</span>
                        <span className={styles.n}>nil</span>
                    </div>
                    <div className={styles.name11}>
                        <span className={styles.fname11}>Next of kin email</span>
                        <span className={styles.john1}>nil</span>
                    </div>
                    <div className={styles.name111}>
                        <span className={styles.lname11}>Next of kin relationship</span>
                        <span className={styles.doe11}>Sister</span>
                    </div>
                </div>
            </div>
            <hr className={styles.hr2} />
            <span className={styles.document}>Document Upload</span>
            <div className={styles.upload}>
                <div className={styles.upload1}>
                    <span>Document.pdf</span>
                    <span>Tap to view uploaded pdf</span>
                </div>
            </div>

            <div className={styles.overlay} id='divone'>
                <div className={styles.wrapper}>
                    <h2>Status</h2>
                    {/* <a href="">&times;</a> */}
                    <img src="/x-close.svg" alt="" />
                    <div className={styles.content}>
                        <div className={styles.container}>
                            <form action="">
                                <div  className={styles.select}>
                                    <label htmlFor="">Access</label>
                                    <select name="" id="" disabled="disabled">
                                        <option value="">Denied</option>
                                    </select>
                                </div>
                                <div  className={styles.select1}>
                                    <label htmlFor="">Access</label>
                                    <select name="" id="" disabled="disabled">
                                        <option value="">Denied</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <input type="checkbox" name="" id="chkBox"/>
    <div class="mainContnt">
        <div class="box">
            <div class="boxes bx1"></div>
            <div class="boxes bx2">
                <h3>Contact Us</h3>
                <div class="login-form">
                    <input type="text" placeholder="Enter Your Email.."/>
                    <input type="password" placeholder="Enter Your Password.."/>
                    <input type="submit" value="submit"/>
                </div>
                <div class="close-box">
                    <label for="chkBox" class="box-close">X</label>
                </div>
            </div>
        </div>
    </div> */}
        </div>
    </>
  )
}

export default Profile