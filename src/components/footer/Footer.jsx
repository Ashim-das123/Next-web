
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
const Footer = () => {

    return (

        <div className={style.container}>
            <div className={style.container1}>©2023 Infinite. All rights reserved.</div>
            <div className={style.socials}>
                <Image src="/face.png" width={15} height={15} className={style.icon} alt="f" />
                <Image src="/insta.png" width={15} height={15} className={style.icon} alt="I" />
                <Image src="/you.png" width={15} height={15} className={style.icon} alt="Y" />
                <Image src="/twit.png" width={15} height={15} className={style.icon} alt="PIC" />
            </div>
        </div>
    )
}

export default Footer