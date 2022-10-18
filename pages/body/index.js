import React, {useState} from 'react'
import styles from './Body.module.css'
import Link from 'next/link'


const Body = () => {
    const [data, setData] = useState(null)
 
    // useEffect(() => {
    //     // setLoading(true)
    //     fetch('https://parivest-mock-api.herokuapp.com/')
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         setData(data)
    //         // setLoading(false)
    //       })
    //   }, [])
  return (
    <>

        <div className={styles.body}>
            <div className={styles.alllist}>
                <span className={styles.all}>All</span>
                <img src="/chevron-down.svg" alt="Dropdown for status" />
            </div>
            <div className={styles.dates}>
                <div className={styles.fromdate}>
                    <span>From</span>
                    <div className={styles.date1}>
                        <input type="date" name="From" id="" />
                    </div>
                </div>
                <div className={styles.todate}>
                    <span>To</span>
                    <div className={styles.date2}>
                        <input type="date" name="To" id="" />
                    </div>
                </div>
            </div>

            <div className={styles.file}>
                <img src="/file-x-03.svg" alt="FileX" />
            </div>
            <div className={styles.search}>
                <img src="/search-sm.svg" alt="Search" />
                <input type="text" placeholder='Search'/>
            </div>
            <hr className={styles.hr1} />
            
            <div className={styles.table}>
                <span className={styles.span1}>Date Joined</span>
                <span className={styles.span2}>User ID</span>
                <span className={styles.span3}>Name</span>
                <span className={styles.span4}>Email address</span>
                <span className={styles.span5}>Phone no.</span>
                <span className={styles.span6}>Status</span>
                <span className={styles.span7}>Action</span>
            </div>
            <div className={styles.ash}>
                <span className={styles.span1}>4 Aug 2022</span>
                <span className={styles.span2}>P000063</span>
                <span className={styles.span3}>Jacob Jones</span>
                <span className={styles.span4}>tanya.hill@example.com</span>
                <span className={styles.span5}>08123456789</span>
                <span className={styles.span6}>Approved</span>
                <Link href="/profile">
                    <span className={styles.span7}>View</span>
                </Link>
            </div>
            <div className={styles.white}>
                <span className={styles.span1}>4 Aug 2022</span>
                <span className={styles.span2}>P000063</span>
                <span className={styles.span3}>Jacob Jones</span>
                <span className={styles.span4}>tanya.hill@example.com</span>
                <span className={styles.span5}>08123456789</span>
                <span className={styles.span6}>Pending</span>
                <span className={styles.span7}>View</span>
            </div>
            <div className={styles.ash1}>
                <span className={styles.span1}>4 Aug 2022</span>
                <span className={styles.span2}>P000063</span>
                <span className={styles.span3}>Jacob Jones</span>
                <span className={styles.span4}>tanya.hill@example.com</span>
                <span className={styles.span5}>08123456789</span>
                <span className={styles.span6}>Pending</span>
                <span className={styles.span7}>View</span>
            </div>
            <div className={styles.white1}>
                <span className={styles.span1}>4 Aug 2022</span>
                <span className={styles.span2}>P000063</span>
                <span className={styles.span3}>Jacob Jones</span>
                <span className={styles.span4}>tanya.hill@example.com</span>
                <span className={styles.span5}>08123456789</span>
                <span className={styles.span6}>In-review</span>
                <span className={styles.span7}>View</span>
            </div>
        </div>
    </>
  )
}

export default Body