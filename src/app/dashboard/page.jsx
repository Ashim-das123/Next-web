"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import style from "./style.module.css";
import Image from "next/image";
const Dashboard = () => {

    // const [data, setData] = useState([]);
    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true);
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' })

    //         if (!res.ok) {

    //             setError(true);
    //         }

    //         const data = await res.json();

    //         setData(data);
    //         setIsLoading(false);

    //     }
    //     getData();
    // }, [])





    //**USE SESSION FOR USER AUTHENTICATION */

    const session = useSession();
    const router = useRouter();

    // ***USING  REACT HOOKS LIBRARY SWR INSTEAD OF USEEFFECT FOR FETCHING DATA ON CLIENT SIDE***

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
    console.log(data);

    if (session.status === "loading") {
        return (
            <p>Loading...</p>
        )
    }
    if (session.status === "unauthenticated") {
        return (
            router?.push("/dashboard/login")
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;


        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title, desc, img, content, username: session.data.user.name
                })
            })
            mutate();
            e.target.reset();
        } catch (err) {
            console.log(err)
        }


    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate()
        }
        catch (err) {
            console.log(err)
        }
    }

    if (session.status === "authenticated") {
        return (




            <div className={style.container}>
                <div className={style.posts}>
                    {
                        isLoading ? "loading" : data?.map((post) => (


                            <div className={style.post} key={post._id}>
                                <div className={style.imgContainer}>
                                    <Image src={post.img} alt="" height={100} width={200} />
                                </div>
                                <h2 className={style.postTitle}>{post.title}</h2>
                                <span className={style.delete} onClick={() => handleDelete(post._id)}>X</span>
                            </div>
                        ))}
                </div>
                <form className={style.new} onSubmit={handleSubmit}>
                    <h1>Add new post</h1>
                    <input type="text" placeholder='Title' className={style.input} />
                    <input type="text" placeholder='Desc' className={style.input} />
                    <input type="text" placeholder='Image' className={style.input} />
                    <textarea placeholder='Content' className='styles.textArea' cols="30" rows="10"></textarea>
                    <button className={style.button}>Send</button>
                </form>
            </div>
        )
    }
}

export default Dashboard