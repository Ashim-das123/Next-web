import React from 'react'
import style from './style.module.css'

import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
    title: 'Ashim Dev Contact information',
    description: 'This is contact page',
}

const Contact = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Let's Keep in Touch</h1>
            <div className={style.content}>
                <div className={style.imgContainer}>
                    <Image className={style.img} fill={true} src="/contac.png" alt='contact' />
                </div>

                <form className={style.form}>
                    <input type="text" placeholder='name' className={style.input} />
                    <input type="email" placeholder='email' className={style.input} />
                    <textarea className={style.textArea} placeholder='message' cols="30" rows="6"></textarea>
                    <Button url="#" text="Send" />
                </form>

            </div>
        </div>
    )
}

export default Contact