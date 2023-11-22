"use client"

import React from 'react'
import style from './DarkModeToggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={style.container} onClick={toggle}>
            <div className={style.icon}>🌙</div>
            <div className={style.icon}>🔆</div>
            <div className={style.ball} style={mode === 'light' ? { left: "2px" } : { right: "2px" }} />
        </div>
    )
}

export default DarkModeToggle