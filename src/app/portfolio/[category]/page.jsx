import React from 'react'
import style from './style.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'


const getData = (catego) => {
    const data = items[catego]

    if (data) {
        return data;
    }

    return notFound();
}



const Category = ({ params }) => {

    const data = getData(params.category); // .category ,because our folder name is category

    return (
        <div className={style.container}>
            <h1 className={style.catTitle}>{params.category}</h1>

            {data.map((item) => (
                <div className={style.item} key={item.id}>
                    <div className={style.textContainer}>
                        <h1 className={style.title}>{item.title}</h1>
                        <p className={style.desc}>{item.desc}</p>
                        <Button url="#" text="See more" />
                    </div>

                    <div className={style.imgContainer}>
                        <Image className={style.img} src={item.image} fill={true} alt="" />
                    </div>

                </div>
            ))
            }

        </div>
    )
}

export default Category