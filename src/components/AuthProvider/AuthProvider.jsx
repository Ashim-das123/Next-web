"use client"

import React from 'react'
import { SessionProvider } from "next-auth/react"
const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider


//2.20.58