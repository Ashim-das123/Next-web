import Connection from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

    const { id } = params;

    try {
        await Connection();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });
    }
    catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}
export const DELETE = async (req, { params }) => {

    const { id } = params;

    try {
        await Connection();
        const post = await Post.findByIdAndDelete(id);
        return new NextResponse("Post has been deleted", { status: 200 });
    }
    catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}