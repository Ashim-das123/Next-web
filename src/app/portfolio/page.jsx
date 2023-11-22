import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
const Portfolio = () => {
    return (
        <div className={style.container}>

            <h1 className={style.selectTitle}>Choose a gallery</h1>
            <div className={style.items}>
                <Link href="/portfolio/illustration" className={style.item}>
                    <span className={style.title}>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className={style.item}>
                    <span className={style.title}>Websites</span>
                </Link>
                <Link href="/portfolio/application" className={style.item}>
                    <span className={style.title}>Application</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio