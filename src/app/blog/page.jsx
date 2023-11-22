import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })

    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const Blog = async () => {


    const data = await getData()




    return (
        <div className={style.mainContainer}>
            {
                data.map((item) => (

                    <Link href={`/blog/${item._id}`} className={style.container} key={item.userId}>
                        <div className={style.imgContainer}>
                            <Image className={style.img}
                                src={item.img}
                                alt=""
                                width={400}
                                height={250}
                            />
                        </div>
                        <div className={style.content}>
                            <h1 className={style.title}>{item.title}</h1>
                            <p className={style.desc}>{item.desc}</p>
                        </div>
                    </Link>

                ))
            }
            {/* <Link href="/blog/testid" className={style.container}>
                <div className={style.imgContainer}>
                    <Image className={style.img}
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        width={400}
                        height={250}
                    />
                </div>
                <div className={style.content}>
                    <h1 className={style.title}>Title</h1>
                    <p className={style.desc}>Descr</p>
                </div>
            </Link>
            <Link href="/blog/testid" className={style.container}>
                <div className={style.imgContainer}>
                    <Image className={style.img}
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        width={400}
                        height={250}
                    />
                </div>
                <div className={style.content}>
                    <h1 className={style.title}>Title</h1>
                    <p className={style.desc}>Descr</p>
                </div>
            </Link> */}
        </div>
    )
}

export default Blog