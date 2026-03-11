'use server'

import { login, signup } from "@/api/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleLogin = async (email: string, password: string) => {
    let redirectUrl = `/login?errorMessage=${encodeURIComponent('Failed to login')}`
    try {
        const res = await login(email, password)
        if(res.token){ 
            cookies().set('token', res.token)
            redirectUrl = '/dashboard'
        }
        console.log('res from login:::', res)
    } catch (error) {
        console.log(error)
    }finally {
        redirect(redirectUrl)
    }
}

export const handleSignup = async (email: string, password: string) => {
    let redirectUrl = `/login?errorMessage=${encodeURIComponent('Failed to signup')}`
    try {
        const res = await signup(email, password)
        console.log('res in handleSignup', res)
        if(res.token){ 
            cookies().set('token', res.token)
            redirectUrl = '/dashboard'
        }
        console.log('res from login:::', res)
    } catch (error) {
        console.log(error)
    }finally {
        redirect(redirectUrl)
    }
}