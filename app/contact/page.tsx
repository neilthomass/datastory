import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <MobileNav currentPage="contact" />

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
                className="h-8 w-auto hover:scale-105 transition-transform duration-300"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
                }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="/development"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Development
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Our Team
            </Link>
            <Link
              href="/apply"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Link>
            <Link href="/contact" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Contact Form Section */}
        <section className="py-16 bg-[#eee1c6] min-h-[calc(100vh-4rem)]">
          <div className="container max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#023020]">Leave us a message!</h1>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
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
                  className="block bg-[#eee1c6] text-[#023020] px-3 py-1 text-sm rounded"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">Contact</h4>
              <div className="flex gap-2">
                <Link href="mailto:datastory.president@gmail.com">
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
