import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })

    if (!res.ok) {

        // throw new Error('Failed to fetch data')
        return notFound()
    }

    return res.json()
}

export async function generateMetadata({ params }) {
    // console.log(params);
    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc
    }
}


const BlogPost = async ({ params }) => {

    const data = await getData(params.id)

    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.info}>
                    <h1 className={style.title}>
                        {/* Caring for trees of all ages creates the diverse urban forest we need! */}
                        {data.title}
                    </h1>
                    <p className={style.desc}>
                        {/* When we take care of our trees, we help them take care of us.
                        This is the beautiful relationship between trees and community that is at the core of Friends of Trees.
                        You can help foster and expand your community of tree stewards. */}
                        {data.desc}
                    </p>

                    <div className={style.author}>
                        <Image
                            // src="https://images.pexels.com/photos/4865541/pexels-photo-4865541.jpeg?auto=compress&cs=tinysrgb&w=600"
                            src={data.img}
                            width={40}
                            height={40}
                            alt=""
                            className={style.avatar}
                        />
                        <span className={style.username}>{data.username}</span>
                    </div>
                </div>
                <div className={style.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill={true}
                        className={style.image}
                    />
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>
                    {/* Stay atop the latest forest research and news!
                    The Global Forest Watch blog uses data to illuminate the state of forests
                    worldwide and tells the stories of people dedicated to protecting them.
                    Read about rainforests, deforestation, fires, sustainable agriculture,
                    forest management and other topics critical to the future of forests.
                    Stay atop the latest forest research and news!
                    <br />
                    <br />
                    The Global Forest Watch blog uses data to illuminate the state of forests
                    worldwide and tells the stories of people dedicated to protecting them.
                    Read about rainforests, deforestation, fires, sustainable agriculture,
                    forest management and other topics critical to the future of forests.
                    <br />
                    <br />
                    Stay a top the latest forest research and news!

                    The Global Forest Watch blog uses data to illuminate the state of forests
                    worldwide and tells the stories of people dedicated to protecting them.
                    Read about rainforests, deforestation, fires, sustainable agriculture,
                    forest management and other topics critical to the future of forests. */}
                    {data.content}
                </p>
            </div>

        </div>
    )
}

export default BlogPost