"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <MobileNav currentPage="team" />

      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6] hidden md:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/datastory-logo.png"
                alt="DataStory Logo"
                width={120}
                height={40}
                className="h-8 w-auto cursor-pointer"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
                }}
              />
            </Link>
            <span className="text-xl font-bold">{""}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/development" className="text-sm font-medium hover:text-white transition-colors">
              Development
            </Link>
            <Link href="/team" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              Our Team
            </Link>
            <Link href="/apply" className="text-sm font-medium hover:text-white transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[375px] md:h-[600px] bg-cover overflow-hidden"
        style={{ 
          backgroundImage: "url('/images/meet-mems-2026.jpg')",
          backgroundPosition: "center 35%"
        }}
      >
        <div className="absolute inset-0 bg-[#023020] opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-start items-center pt-12 md:pt-16 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#eee1c6] tracking-wider">MEET OUR MEMBERS</h1>
        </div>
      </section>

      <main>
        {/* Executive Board */}
        <section className="py-16 bg-[#023020]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">Executive Board</h2>

            {/* First Row - Top Leadership */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto">
              {/* Katie Zhang - President */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/katie-zhang-headshot.jpeg"
                    alt="Katie Zhang"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Data Science, Economics</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Katie Zhang</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">President</p>
                <Link href="https://www.linkedin.com/in/katie-h-zhang/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Hasset Mekuria - External VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/hasset-mekuria-headshot.jpeg"
                    alt="Hasset Mekuria"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science, Political Science </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Hasset Mekuria</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">External VP</p>
                <Link
                  href="https://www.linkedin.com/in/hasset-mekuria-2189b8271"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Shaivi Shah - Co-Internal VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/shaivi-shah-headshot.jpeg"
                    alt="Shaivi Shah"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Shaivi Shah</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Internal VP</p>
                <Link href="http://www.linkedin.com/in/shaivi-shah-6b9b30305" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Nikhil Rajgopal - Co-Internal VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/nikhil-rajgopal-headshot.jpeg"
                    alt="Nikhil Rajgopal"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science, Economics</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Nikhil Rajgopal</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Internal VP</p>
                <Link
                  href="http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Second Row - VPs */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto">
              {/* Yash Chitambar - VP of Projects */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/yash-chitambar-headshot.jpeg"
                    alt="Yash Chitambar"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Computer Science, Data Science </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Yash Chitambar</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-VP of Projects</p>
                <Link
                  href="https://www.linkedin.com/in/yash-chitambar-b3139829a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Ajay Kankipati - VP of Projects */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/ajay-kankipati-headshot.png"
                    alt="Ajay Kankipati"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Ajay Kankipati</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-VP of Projects</p>
                <Link
                  href="https://www.linkedin.com/in/ajay-kankipati-86895b271/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Julia Shvartsman - VP of Operations */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/julia-shvartsman-headshot.jpeg"
                    alt="Julia Shvartsman"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Julia Shvartsman</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">VP of Operations</p>
                <Link
                  href="https://www.linkedin.com/in/julia-shvartsman-4a89692ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Rayan Sudeora - VP of Professional Development */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/rayan-sudeora-headshot.png"
                    alt="Rayan Sudeora"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Data Science, Cognitive Science </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Rayan Sudeora</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">VP of Professional Development</p>
                <Link href="https://www.linkedin.com/in/rayansudeora/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Third Row - Directors */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto">
              {/* Tony Getsin - Dir. of Jr Consultants */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/tony-getsin-headshot.png"
                    alt="Tony Getsin"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science, Computer Science </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Tony Getsin</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Dir. of Jr Consultants</p>
                <Link href="https://www.linkedin.com/in/tonygetsin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Kathy Yun - Dir. of Jr Consultants */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/kathy-yun-headshot.JPG"
                    alt="Kathy Yun"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kathy Yun</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Dir. of Jr Consultants</p>
                <Link
                  href="https://www.linkedin.com/in/kathy-yun-2b4128314/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Kira Pan - Dir. of Marketing */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/kira-pan-headshot.jpg"
                    alt="Kira Pan"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Cognitive Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kira Pan</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Dir. of Marketing</p>
                <Link href="https://www.linkedin.com/in/kira-z-pan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Cathryn Chang - Jr VP of Operations */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/cathryn-chang-headshot.jpg"
                    alt="Cathryn Chang"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Computer Science, Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Cathryn Chang</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Jr VP of Operations</p>
                <Link
                  href="https://www.linkedin.com/in/cathryn-chang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Fourth Row - Junior VPs */}
            <div className="flex flex-wrap justify-evenly gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">

              {/* Chiara Rignot - Jr External VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/chiara-rignot-headshot.jpg"
                    alt="Chiara Rignot"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science, Philosophy</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Chiara Rignot</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Jr External VP</p>
                <Link
                  href="https://www.linkedin.com/in/chiara-rignot1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Casey Colson - Jr Internal VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/casey-colson-headshot.JPEG"
                    alt="Casey Colson"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Statistics</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Casey Colson</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Jr Internal VP</p>
                <Link href="https://www.linkedin.com/in/caseycolson/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Vrushtee Shah - Jr Internal VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/vrushtee-shah-headshot.jpeg"
                    alt="Vrushtee Shah"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science, Legal Studies</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Vrushtee Shah</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Jr Internal VP</p>
                <Link href="https://www.linkedin.com/in/vrushteeshah13/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Consultants */}
            <section className="py-16 bg-[#023020]">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">Consultants</h2>

                {/* First Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Himani Balaga */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/himani-balaga-headshot.png"
                        alt="Himani Balaga"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Himani Balaga</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="https://www.linkedin.com/in/himani-balaga/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Arjun Kelkar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/arjun-kelkar-headshot.png"
                        alt="Arjun Kelkar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Economics </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Arjun Kelkar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link
                      href="https://www.linkedin.com/in/arjun-kelkar-924598350/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Viktor Gonzalez */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/viktor-gonzalez-headshot.png"
                        alt="Viktor Gonzalez"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Viktor Gonzalez</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link
                      href="https://www.linkedin.com/in/viktor-gonzalez-ab974a343/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Nikhil Rajgopal */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/nikhil-rajgopal-headshot.jpeg"
                        alt="Nikhil Rajgopal"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Economics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Nikhil Rajgopal</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link
                      href="http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Dhruv Hebbar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/dhruv-hebbar-headshot.jpeg"
                        alt="Dhruv Hebbar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Economics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Dhruv Hebbar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="https://www.linkedin.com/in/dhruvhebbar" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Oscar Araujo */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/oscar-araujo-headshot.jpeg"
                        alt="Oscar Araujo"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science, Economics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Oscar Araujo</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link
                      href="https://www.linkedin.com/in/oscara-raujo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Julia Shvartsman */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/julia-shvartsman-headshot.jpeg"
                        alt="Julia Shvartsman"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Julia Shvartsman</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/julia-shvartsman-4a89692ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Kathy Yun */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/kathy-yun-headshot.JPG"
                        alt="Kathy Yun"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kathy Yun</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/kathy-yun-2b4128314/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                </div>

                {/* Fourth Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Yash Chitambar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/yash-chitambar-headshot.jpeg"
                        alt="Yash Chitambar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Computer Science, Data Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Yash Chitambar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/yash-chitambar-b3139829a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Shaivi Shah */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/shaivi-shah-headshot.jpeg"
                        alt="Shaivi Shah"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Shaivi Shah</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/shaivi-shah-6b9b30305/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Rayan Sudeora */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/rayan-sudeora-headshot.png"
                        alt="Rayan Sudeora"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science, Cognitive Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Rayan Sudeora</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/rayansudeora/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Vrushtee Shah */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/vrushtee-shah-headshot.jpeg"
                        alt="Vrushtee Shah"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Legal Studies</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Vrushtee Shah</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/vrushteeshah13/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Sixth Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Hasset Mekuria */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/hasset-mekuria-headshot.jpeg"
                        alt="Hasset Mekuria"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Political Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Hasset Mekuria</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="http://www.linkedin.com/in/hasset-mekuria-2189b8271"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Kira Pan */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/kira-pan-headshot.jpg"
                        alt="Kira Pan"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Cognitive Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kira Pan</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/kira-z-pan" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Casey Colson */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/casey-colson-headshot.JPEG"
                        alt="Casey Colson"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Statistics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Casey Colson</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/caseycolson/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Avyukth Harish */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/avyukth-harish-headshot.jpg"
                        alt="Avyukth Harish"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Avyukth Harish</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="http://linkedin.com/in/avy-harish" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Fifth Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Alexander Zhao */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/alexander-zhao-headshot.jpg"
                        alt="Alexander Zhao"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Freshman</p>
                        <p className="text-center">Statistics, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Alexander Zhao</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/alexander-zhao-/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Anthony Kobzar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/anthony-kobzar-headshot.jpg"
                        alt="Anthony Kobzar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Applied Math, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Anthony Kobzar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/anthony-kobzar-182889252/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Jayden Burton */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/jayden-burton-headshot.jpg"
                        alt="Jayden Burton"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Jayden Burton</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/jaydenburton/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Chiara Rignot */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/chiara-rignot-headshot.jpg"
                        alt="Chiara Rignot"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Philosophy</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Chiara Rignot</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/chiara-rignot1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Ninth Row - New Consultants */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Paulo Trento */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/paulo-trento-headshot.jpg"
                        alt="Paulo Trento"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Applied Math, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Paulo Trento</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/paulo-trento-469175382/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Rohan Dash */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/rohan-dash-headshot.jpg"
                        alt="Rohan Dash"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Freshman</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Rohan Dash</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/rohan-dash-6b83312b1" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Krishna Narayanasamy */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/krishna-narayanasamy-headshot.jpg"
                        alt="Krishna Narayanasamy"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Freshman</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Krishna Narayanasamy</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="http://www.linkedin.com/in/krishna-narayanasamy" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Diya Pendyala */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/diya-pendyala-headshot.jpg"
                        alt="Diya Pendyala"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Comp Bio</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Diya Pendyala</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Tenth Row - Cole, Ria, Cathryn (3 evenly spaced, stay in one row on mobile) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Cole Dickerson */}
                  <div className="text-center group relative min-w-0">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/cole-dickerson-headshot.jpeg"
                        alt="Cole Dickerson"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Cole Dickerson</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/cole-dickerson-43b499324/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Ria Voodi */}
                  <div className="text-center group relative min-w-0">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/ria-voodi-headshot.jpeg"
                        alt="Ria Voodi"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Economics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Ria Voodi</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/riavoodi/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Cathryn Chang */}
                  <div className="text-center group relative min-w-0">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/cathryn-chang-headshot.jpg"
                        alt="Cathryn Chang"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Computer Science, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Cathryn Chang</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/cathryn-chang/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Eleventh Row - two consultants evenly spaced, stay in one row on mobile */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Akshay Anand */}
                  <div className="text-center group relative min-w-0">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/akshay-anand-headshot.jpeg"
                        alt="Akshay Anand"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Computer Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Akshay Anand</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/akshay-anand-968b27230/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Dennis Vengerov */}
                  <div className="text-center group relative min-w-0">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/dennis-vengerov-headshot.jpeg"
                        alt="Dennis Vengerov"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Computer Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Dennis Vengerov</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/dennis-vengerov-a78376294/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

              </div>
            </section>

            {/* Senior Advisors */}
            <section className="py-16 bg-[#023020]">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">
                  Senior Advisors
                </h2>

                {/* Senior Advisors Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Piya Shah */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/piya-shah-headshot.jpeg"
                        alt="Piya Shah"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Statistics </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Piya Shah</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/piya-shahh/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Katelyn Jo */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/katelyn-jo-headshot.jpeg"
                        alt="Katelyn Jo"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Cognitive Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Katelyn Jo</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/katelyn-jo/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Sara Miller */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/sara-miller-headshot.jpeg"
                        alt="Sara Miller"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Computer Science, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Sara Miller</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link
                      href="https://www.linkedin.com/in/sara-jade-miller/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Hannah Chung */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/hannah-chung-headshot.jpeg"
                        alt="Hannah Chung"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Statistics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Hannah Chung</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link
                      href="https://www.linkedin.com/in/hannah-c-8714121b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Second Row */}
                  {/* Simon Cha */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/simon-cha-headshot.jpeg"
                        alt="Simon Cha"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Statistics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Simon Cha</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/simon-cha/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Bryan Hwang */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/bryan-hwang-headshot.jpeg"
                        alt="Bryan Hwang"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Bryan Hwang</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/bryanhwangg/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Ethan Wei */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/ethan-wei-headshot.jpeg"
                        alt="Ethan Wei"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science, Statistics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Ethan Wei</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/ethan-wei-b24345235/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Pulak Dugar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/pulak-dugar-headshot.jpeg"
                        alt="Pulak Dugar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Computer Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Pulak Dugar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/pulak-dugar/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Kayle Marsh */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/kayle-marsh-headshot.jpeg"
                        alt="Kayle Marsh"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Computer Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kayle Marsh</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="http://www.linkedin.com/in/kaylemarsh" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Divya Madgula */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/divya-madgula-headshot.png"
                        alt="Divya Madgula"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Applied Math, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Divya Madgula</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/divya-madgula/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Arav Sachdeva */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/arav-sachdeva-headshot.jpeg"
                        alt="Arav Sachdeva"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Computer Science, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Arav Sachdeva</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/aravs/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Reid Trussler */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/reid-trussler-headshot.jpeg"
                        alt="Reid Trussler"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Computer Science, EEP</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Reid Trussler</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/reid-trussler-77a674264/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Fourth Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Avyuktha Mattupalli */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/Avyuktha-mattupalli-headshot.jpeg"
                        alt="Avyuktha Mattupalli"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, MCB</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Avyuktha Mattupalli</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="http://linkedin.com/in/avyuktha-mattupalli-9134a8249" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Riley Hansen */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/riley-hansen-headshot.png"
                        alt="Riley Hansen"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Riley Hansen</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/riley-hansenn/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Ashika Thomas */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/ashika-thomas-headshot.jpeg"
                        alt="Ashika Thomas"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Economics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Ashika Thomas</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="http://www.linkedin.com/in/ashikathomas" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Jack White */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/jack-white-headshot.jpeg"
                        alt="Jack White"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Jack White</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/jack-white-568761272" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Fifth Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Matthew Ho */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/matthew-ho-headshot.jpeg"
                        alt="Matthew Ho"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Public Health</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Matthew Ho</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/matthewho88/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Neil Thomas */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/neil-thomas-headshot.jpeg"
                        alt="Neil Thomas"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">EECS, Pure Math</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Neil Thomas</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/neiltthomas" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Rohan Gopalam */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/rohan-gopalam-headshot.jpeg"
                        alt="Rohan Gopalam"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">EECS</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Rohan Gopalam</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/rohan-gopalam/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Peyton Schales */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/peyton-schales-headshot.jpg"
                        alt="Peyton Schales"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Computer Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Peyton Schales</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Senior Advisor</p>
                    <Link href="https://www.linkedin.com/in/peytons224/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 md:py-12 border-t">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-[#023020]">DataStory at Berkeley</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are a student group acting independently of the University of California. We take full responsibility
                for our organization and this website.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">General</h4>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="block bg-[#eee1c6] text-[#023020] px-3 py-1 text-sm rounded"
                >
                  Our Team
                </Link>
                <Link
                  href="/apply"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">Contact</h4>
              <div className="flex gap-2">
                <Link href="/contact">
                  <Mail className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/datastoryconsulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
