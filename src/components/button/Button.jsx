import React from 'react'
import style from './style.module.css'
import Link from 'next/link'

const Button = ({ text, url }) => {
    return (
        <div>
            <Link href={url}>
                <button className={style.container}>{text}</button>
            </Link>
        </div>
    )
}

export default Button;