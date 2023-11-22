import Connection from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const url = new URL(req.url);
    const username = url.searchParams.get("username")
    try {
        await Connection();
        const posts = await Post.find(username && { username });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    }
    catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const POST = async (req) => {
    const body = await req.json();

    const newPost = new Post(body)

    try {
        await Connection();
        await newPost.save()
        return new NextResponse("Post has been created", { status: 201 });
    }
    catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}