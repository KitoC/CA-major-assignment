import React from 'react';
import Button from './../Button';
import styles from './form.module.css'





const Form = (props) => {
    const { onSubmit, title } = props

    return(
        <React.Fragment>
            <form className={styles.form} onSubmit={onSubmit}>
                <h3 className={styles.formTitle}>{title}</h3>
                { props.children }
                <div className={styles.submitBox}>
                    
                  
                </div>
                    
            </form>
        </React.Fragment>
    )
}


export default Form;