"use client"
import React, { useEffect, useState } from 'react'

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollY(window.scrollY)
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll' , handleScroll)
        }
    }, [])

    return scrollY;
}
