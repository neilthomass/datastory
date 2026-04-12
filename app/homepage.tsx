"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users, Building2, Mail, Linkedin, Instagram, BarChart3 } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Projects",
      description:
        "We are committed to helping businesses and organizations harness the power of data to make informed decisions and achieve impactful results. We work with a variety of companies, ranging from startups to non-profits to well-established corporations.",
      image: "/images/2026-projects-group-pic.jpg",
      icon: <BarChart3 className="h-8 w-8" />,
      buttonText: "View Projects",
      buttonLink: "/projects",
    },
    {
      title: "Community",
      description:
        "Community is a cornerstone of our club. We prioritize fostering lasting relationships through both large social events and smaller gatherings, ensuring members build meaningful connections that endure over time.",
      image: "/images/2026-community-pic.jpg",
      icon: <Users className="h-8 w-8" />,
      buttonText: "Our Team",
      buttonLink: "/team",
    },
    {
      title: "Professional Development",
      description:
        "We strive to provide our members with real-world experience through consulting projects, workshops, and mentorship that prepare them for careers in data science. We also offer a Junior Consultant Program to support members early in their data science journey through structured training and project-based learning.",
      image: "/images/professional-development-team.png",
      icon: <Building2 className="h-8 w-8" />,
      buttonText: "Learn More",
      buttonLink: "/development",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <MobileNav currentPage="" />

      {/* Desktop Header */}
      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6] hidden md:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/datastory-logo.png"
              alt="DataStory Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
              }}
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-white">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-white">
              Projects
            </Link>
            <Link href="/development" className="text-sm font-medium hover:text-white">
              Development
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-white">
              Our Team
            </Link>
            <Link href="/apply" className="text-sm font-medium hover:text-white">
              Apply Now
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/club-pic-2025.jpg"
            alt="DataStory team photo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#023020] opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-4 md:pt-2 z-10">
            <div className="text-center px-4">
              <Image
                src="/images/datastory-logo.png"
                alt="DataStory Logo"
                width={400}
                height={140}
                className="h-12 md:h-28 w-auto mx-auto mb-2 md:mb-3 drop-shadow-2xl"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%) drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                }}
              />
              <div className="space-y-0 -mt-1">
                <p className="text-xs md:text-sm font-semibold text-[#eee1c6] tracking-widest uppercase drop-shadow-lg">
                  Building
                </p>
                <p className="text-sm md:text-xl font-bold text-[#eee1c6] tracking-wide leading-tight drop-shadow-lg">
                  Community Through Data Science
                </p>
                <div className="w-8 md:w-12 h-0.5 bg-[#eee1c6] mx-auto mt-0.5 drop-shadow-sm"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-8 md:py-16 bg-[#eee1c6]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
              <div className="bg-[#023020] text-[#eee1c6] p-6 md:p-8 rounded-lg flex items-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-4">Welcome to DataStory,</h2>
                  <p className="text-xs md:text-sm leading-relaxed mb-6">
                    a premier student-led organization at UC Berkeley dedicated to providing top-notch consulting services
                    in the fields of data science and software development.
                  </p>
                  <Link href="/apply">
                    <Button
                      variant="outline"
                      className="border-[#eee1c6] text-[#eee1c6] hover:bg-[#eee1c6] hover:text-[#023020] bg-transparent w-full md:w-auto"
                    >
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/women-2026-group.jpg"
                  alt="DataStory leadership team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER Section */}
        <section className="py-8 md:py-16 bg-[#023020] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#eee1c6]">WHAT WE OFFER</h2>
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-[#eee1c6] hover:text-white hidden md:block"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-[#eee1c6] hover:text-white hidden md:block"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Content Card */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white text-black rounded-lg overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <Image
                        src={slides[currentSlide].image || "/placeholder.svg"}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-[#023020]">{slides[currentSlide].icon}</div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#023020]">{slides[currentSlide].title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                        {slides[currentSlide].description}
                      </p>
                      <Link href={slides[currentSlide].buttonLink}>
                        <Button
                          variant="outline"
                          className="border-[#023020] text-[#023020] hover:bg-[#023020] hover:text-white bg-transparent w-full md:w-auto"
                        >
                          {slides[currentSlide].buttonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#eee1c6]" : "bg-[#eee1c6]/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-8 md:py-16 bg-[#eee1c6]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#023020]">CONNECT WITH US</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="mb-4">
                  <Users className="h-10 md:h-12 w-10 md:w-12 mx-auto text-[#023020]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-[#023020]">Students</h3>
                <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                  We recruit new members at the beginning of every semester! Recruitment typically takes place the first two weeks of the semester. All skill levels are welcome.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Building2 className="h-10 md:h-12 w-10 md:w-12 mx-auto text-[#023020]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-[#023020]">Companies</h3>
                <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                  We strive to provide our members with opportunities to gain real-world experience. If you have any
                  projects in mind, please reach out to us!
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <Link href="/contact">
                <Mail className="h-8 w-8 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/datastoryconsulting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
              </Link>
              <Link href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-8 w-8 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 md:py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-[#023020]">DataStory at Berkeley</h3>
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
                  className="block bg-[#023020] text-white px-3 py-2 text-sm rounded hover:bg-[#023020]/80"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block bg-[#023020] text-white px-3 py-2 text-sm rounded hover:bg-[#023020]/80"
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="block bg-[#023020] text-white px-3 py-2 text-sm rounded hover:bg-[#023020]/80"
                >
                  Our Team
                </Link>
                <Link
                  href="/apply"
                  className="block bg-[#023020] text-white px-3 py-2 text-sm rounded hover:bg-[#023020]/80"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="block bg-[#023020] text-white px-3 py-2 text-sm rounded hover:bg-[#023020]/80"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">Contact</h4>
              <div className="flex gap-4">
                <Link href="mailto:datastory.president@gmail.com">
                  <Mail className="h-6 w-6 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/datastoryconsulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
