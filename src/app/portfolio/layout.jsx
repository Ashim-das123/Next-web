import React from 'react'
import style from './style.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className={style.mainTitle}>Our Works</h1>
            {children}
        </div>
    )
}

export default Layout