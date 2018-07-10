import React from 'react'
import styles from './Sidebar.module.css'


const SideBar = (props) => {
    // const {}
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export default SideBar
