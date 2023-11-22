
import Connection from "@/utils/db";
import bcrypt from 'bcryptjs'
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { name, email, password } = await req.json();


    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    })

    await Connection();
    try {
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201,
        })
    }
    catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        })
    }

}