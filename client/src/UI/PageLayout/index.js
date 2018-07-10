import React from 'react'
import style from './PageLayout.module.css'

const PageLayout = (props) => {
    const {layout} = props

    let layoutStyle = null
    if (layout === 'sidebarOneThreeGrid') {
        layoutStyle = style.sidebarOneThreeGrid
    }
    return (
        <div className={layoutStyle}>
            {props.children}
        </div>
    )
}


export default PageLayout