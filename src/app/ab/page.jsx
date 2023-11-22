import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
const About = () => {
    return (
        <div className={style.container}>
            <div className={style.imgConatiner}>
                <Image
                    src="https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=600"
                    fill={true}
                    alt=""
                    className={style.img}
                />
                <div className={style.imgtext}>
                    <h1 className={style.imgTitle}>Digital Storytellers</h1>
                    <h1 className={style.imgDesc}>Handcrafting award winning digital experiences</h1>
                </div>
            </div>

            <div className={style.textContainer}>

                <div className={style.item}>
                    <h1 className={style.title}>Who Are We?</h1>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae.
                        A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo
                        ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        voluptatum quo ea eveniet?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolog optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet?</p>
                </div>
                <div className={style.item}>
                    <h1>What We Do?</h1>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam lure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Creative Illustrations
                        <br />
                        <br />
                        -Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> -Mobile Apps</p>

                    <Button url="/contact" text="Contact" />
                </div>
            </div>

        </div>
    )
}

export default About