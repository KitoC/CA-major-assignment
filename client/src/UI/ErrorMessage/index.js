import React from 'react'
import styles from './ErrorMessage.module.css'

const ErrorMessage = (props) => {
    const {loginError} = props


    return (
        <p className={styles.loginError}>{loginError}</p>
    )
}

export default ErrorMessage
