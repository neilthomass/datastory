"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"

type AlumniProfile = {
  name: string
  graduatingClass: string
  position: string
  location?: string
  impact: string
  image: string
}

export default function Development() {
  const [currentAlumni, setCurrentAlumni] = useState(0)
  const [isJCPExpanded, setIsJCPExpanded] = useState(false)
  const [currentJCPImage, setCurrentJCPImage] = useState(0)

  const jcpImages = [
    "/images/fall 2025 jcp projects/casey-jcp.jpeg",
    "/images/fall 2025 jcp projects/cole-alex-jcp.jpeg",
    "/images/fall 2025 jcp projects/diya-cathryn-jcp.jpeg",
    "/images/fall 2025 jcp projects/jayden-paulo-jcp.jpeg",
    "/images/fall 2025 jcp projects/kira-chiara-jcp.jpeg",
    "/images/fall 2025 jcp projects/krishna-rohan-jcp.jpeg",
  ]

  const nextJCPImage = () => {
    setCurrentJCPImage((prev) => (prev + 1) % jcpImages.length)
  }

  const prevJCPImage = () => {
    setCurrentJCPImage((prev) => (prev - 1 + jcpImages.length) % jcpImages.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentJCPImage((prev) => (prev + 1) % jcpImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [jcpImages.length])

  const alumniData: AlumniProfile[] = [
    {
      name: "RYAN CHAN",
      graduatingClass: "Spring 2025",
      position: "Software Engineer at Meta",
      location: "Menlo Park, CA",
      impact:
        "DataStory helped me improve my professional career tremendously. I remember for my first internship half their behavioral interview questions were about my experiences at DataStory. I learned a lot of professional advice and got tons of hands on experience from a variety of consulting projects.",
      image: "/images/Ryan-chan-headshot.jpeg",
    },
    {
      name: "HAILEY HOLCOMB",
      graduatingClass: "Spring 2025",
      position: "Software Engineer at Walmart",
      location: "San Francisco, CA",
      impact:
        "Working on a project at school that affects more than just your personal grade is super rewarding! Doing work for DataStory is challenging in unique ways and teaches you skills that you could never learn in a class environment.",
      image: "/images/hailey-holcomb-headshot.jpeg",
    },
    {
      name: "IMAN HUNDAL",
      graduatingClass: "Fall 2024",
      position: "Data Analyst at Capital One",
      location: "Washington D.C.",
      impact:
        "The network of friends and connections I've built in many diverse fields within tech has been very useful and will be a great resource in the future!",
      image: "/images/iman-hundal-headshot.jpeg",
    },
    {
      name: "VICTOR SHI",
      graduatingClass: "Spring 2025",
      position: "Software Engineer at Meta",
      location: "Seattle, WA",
      impact:
        "DataStory helped a lot early in my career to add value to resume through project managing, being on projects, etc. Social events were a lot of fun.",
      image: "/images/victor-shi-headshot.png",
    },
    {
      name: "IRIS CHAO",
      graduatingClass: "Spring 2025",
      position: "Marketing Analyst at Adobe",
      location: "San Francisco, CA",
      impact:
        "DataStory showed me the positive impact that people can have on your professional and personal life. It was so motivating to be surrounded by the smartest, most talented people who push each other to achieve our academic and professional goals.",
      image: "/images/iris-chao-headshot.jpeg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAlumni((prev) => (prev + 1) % alumniData.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(timer)
  }, [alumniData.length])

  const nextAlumni = () => {
    setCurrentAlumni((prev) => (prev + 1) % alumniData.length)
  }

  const prevAlumni = () => {
    setCurrentAlumni((prev) => (prev - 1 + alumniData.length) % alumniData.length)
  }

  const currentProfile = alumniData[currentAlumni]

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Mobile Navigation */}
      <MobileNav currentPage="development" />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6] hidden md:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
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
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/development" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              Development
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-white transition-colors">
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

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section - HOW WE GROW */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="/images/development-hero-large-team.jpeg"
            alt="DataStory team in business attire - How We Grow"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#023020] opacity-30"></div>
          <div className="absolute inset-0 flex items-start justify-center pt-16 md:pt-20 z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-center text-[#eee1c6] tracking-wider">HOW WE GROW</h1>
          </div>
        </section>

        {/* Junior Consultant Program Section */}
        <section className="pt-20 pb-20 bg-[#eee1c6]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#023020] mb-12">JUNIOR CONSULTANT PROGRAM</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
              <div className="bg-[#023020] text-[#eee1c6] p-6 md:p-8 rounded-lg flex items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">What is JCP?</h3>
                  <div className="text-xs md:text-sm leading-relaxed">
                    {isJCPExpanded ? (
                      <>
                        <p className="mb-4">
                          The Junior Consultant Program (JCP) is a semester-long training and mentorship program designed for members with limited prior experience in data science or consulting. Participants develop core technical and professional skills through weekly workshops covering topics such as pandas, data cleaning, visualization, modeling, and applied tools like Streamlit.
                        </p>
                        <p className="mb-4">
                          Junior Consultants also complete a final project of their choice, applying these skills end-to-end and presenting their work at the semester Project Showcase. The program serves as a structured pathway into the club&apos;s consulting teams, with most members completing one semester in JCP before transitioning into full consultant roles.
                        </p>
                        <button
                          onClick={() => setIsJCPExpanded(false)}
                          className="text-[#eee1c6] font-semibold hover:underline"
                        >
                          Read Less
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="mb-4 md:hidden">
                          The Junior Consultant Program (JCP) is a semester-long training and mentorship program designed for members with limited prior experience in data science or consulting...
                        </p>
                        <p className="mb-4 hidden md:block">
                          The Junior Consultant Program (JCP) is a semester-long training and mentorship program designed for members with limited prior experience in data science or consulting. Participants develop core technical and professional skills through weekly workshops covering topics such as pandas, data cleaning, visualization, modeling, and applied tools like Streamlit.
                        </p>
                        <button
                          onClick={() => setIsJCPExpanded(true)}
                          className="text-[#eee1c6] font-semibold hover:underline"
                        >
                          Read More
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#023020] text-center md:text-left">Fall 2025 JCP Projects</h3>
                <div className="relative rounded-lg overflow-hidden">
                  {/* Navigation arrows */}
                  <button
                    onClick={prevJCPImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-[#023020] hover:text-[#023020]/70 bg-white/80 rounded-full p-2 hidden md:block"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextJCPImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-[#023020] hover:text-[#023020]/70 bg-white/80 rounded-full p-2 hidden md:block"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  {/* Image carousel */}
                  <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                      src={jcpImages[currentJCPImage]}
                      alt={`JCP Project ${currentJCPImage + 1}`}
                      fill
                      className="object-cover rounded-lg transition-opacity duration-500"
                    />
                  </div>
                  {/* Slide indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {jcpImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentJCPImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentJCPImage ? "bg-[#023020]" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  {/* JCP Flyer Button */}
                  <div className="flex justify-center mt-4">
                    <a 
                      href="/images/JCP flyers.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#023020] text-[#eee1c6] px-6 py-2 rounded-lg font-semibold hover:bg-[#034a2a] transition-colors duration-200"
                    >
                      See JCP Flyer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="relative pt-32 pb-20 bg-[#023020] overflow-hidden">
          {/* Curved background element */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-[80%] h-4/5 bg-[#eee1c6] rounded-l-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-white/80 p-12 rounded-lg shadow-lg backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-6 text-[#023020]">Workshops</h2>
                <p className="text-gray-700 leading-relaxed text-center md:text-left">
                  DataStory emphasizes the development of both technical and behavioral skills. Our Professional
                  Development team offers interactive and comprehensive workshops throughout the semester; some club
                  favorites include peer resume reviews and cross-validation labs.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/workshop-classroom-scene.png"
                  alt="Workshop classroom scene with students and presentation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Competitions Section */}
        <section className="relative py-20 bg-[#023020] overflow-hidden">
          {/* Curved background element */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-[80%] h-4/5 bg-[#eee1c6] rounded-r-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden md:order-1">
                <Image
                  src="/images/competition-team-mascot.png"
                  alt="DataStory competition team with Cal Hacks mascot at Berkeley hackathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white/80 p-12 rounded-lg shadow-lg backdrop-blur-sm md:order-2">
                <h2 className="text-4xl font-bold mb-6 text-[#023020]">Competitions</h2>
                <p className="text-gray-700 leading-relaxed text-center md:text-left">
                  We believe that diverse, real-life experiences are invaluable for expanding professional capabilities.
                  We form teams to participate in premier case and analytics competitions nationwide, enabling our
                  members to compete against and learn from the best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Panels Section */}
        <section className="relative pt-20 pb-32 bg-[#023020] overflow-hidden">
          {/* Curved background element */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-[80%] h-4/5 bg-[#eee1c6] rounded-l-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-white/80 p-12 rounded-lg shadow-lg backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-6 text-[#023020]">Panels</h2>
                <p className="text-gray-700 leading-relaxed text-center md:text-left">
                  We take pride in our highly successful and engaged DataStory alumni network. Our speaker events and
                  alumni mentorship program provide our members with many opportunities to gain insight from industry
                  professionals.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/alumni-panel-discussion.jpeg"
                  alt="Alumni panel discussion with current students and alumni in classroom setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-[#eee1c6] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#023020]">AWARDS</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Kearney Award */}
              <div className="text-center">
                <div className="w-64 h-64 bg-white/80 rounded-lg mx-auto mb-6 flex items-center justify-center p-4 backdrop-blur-sm">
                  <Image
                    src="/images/kearney-logo.avif"
                    alt="Kearney Logo"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <p className="font-bold text-[#023020] mb-2">1st Place</p>
                  <p className="text-gray-700 text-sm">2023 Kearney Case Competition</p>
                </div>
              </div>

              {/* Milwaukee Bucks Award */}
              <div className="text-center">
                <div className="w-64 h-64 bg-white/80 rounded-lg mx-auto mb-6 flex items-center justify-center border-2 border-gray-200 backdrop-blur-sm p-4">
                  <Image
                    src="/images/bucks-comp-img.avif"
                    alt="Milwaukee Bucks Competition"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <p className="font-bold text-[#023020] mb-2">2nd Place</p>
                  <p className="text-gray-700 text-sm">2023 Milwaukee Bucks Analytics Competition</p>
                </div>
              </div>

              {/* Paravel Award */}
              <div className="text-center">
                <div className="w-64 h-64 bg-white/80 rounded-lg mx-auto mb-6 flex items-center justify-center border-2 border-gray-200 backdrop-blur-sm p-4">
                  <Image
                    src="/images/paravel-logo.avif"
                    alt="Paravel Logo"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <p className="font-bold text-[#023020] mb-2">2nd Place</p>
                  <p className="text-gray-700 text-sm">2024 Paravel Case Competition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom curved element */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[#023020] rounded-t-full transform translate-y-16"></div>
        </section>

        {/* Alumni Spotlight Section */}
        <section className="py-20 bg-[#023020] relative overflow-hidden">
          {/* Curved background element */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-b from-[#023020] to-[#4a7c59] rounded-t-full transform translate-y-1/4"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">ALUMNI SPOTLIGHT</h2>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white/90 rounded-2xl p-12 shadow-2xl relative backdrop-blur-sm">
                <button
                  onClick={prevAlumni}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  aria-label="Previous alumni"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextAlumni}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  aria-label="Next alumni"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {alumniData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAlumni(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentAlumni ? "bg-[#023020]" : "bg-gray-300"
                      }`}
                      aria-label={`Go to alumni ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={currentProfile.image || "/placeholder.svg"}
                      alt={currentProfile.name}
                      fill
                      className="object-cover transition-opacity duration-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold mb-6 text-[#023020]">{currentProfile.name}</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <span className="font-semibold italic">Graduating Class:</span> {currentProfile.graduatingClass}
                      </p>
                      <p>
                        <span className="font-semibold italic">Current Position:</span> {currentProfile.position}
                      </p>
                      {currentProfile.location && (
                        <p>
                          <span className="font-semibold italic">Location:</span> {currentProfile.location}
                        </p>
                      )}
                      <p>
                        <span className="font-semibold italic">Most impactful moment in DataStory:</span>{" "}
                        {currentProfile.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
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
