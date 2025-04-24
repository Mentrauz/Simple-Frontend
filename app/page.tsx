"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(1.0) // 100% is the default size, increased from 0.8

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Want
              <br />
              Frontend
              <br />
              Dev?
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  I am a passionate Full Stack developer with a knack for creating beautiful and functional web experiences.
                </p>
                <p>
                  I have worked with multiple companies to build their websites and web applications with beautiful
                  and functional designs using React, Next.js, and Tailwind CSS etc. I specialize in NextJs based 
                  Web Development and open-source tools for impactful, equitable social change.
                </p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <Link
              href="https://portfolio-mentrauzs-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
            >
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-xs text-white/30 mt-2">
              Note: This page uses assets from Luma that are copyrighted to them.
            </p>
          </div>
          {/* <a
            href="https://lumalabs.ai/join?role=5d274587-f8fd-4f53-a5b6-8f85d586e1aa"
            className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a> */}
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}
