"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

interface MobileNavProps {
  currentPage?: string
}

export function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/development", label: "Development" },
    { href: "/team", label: "Our Team" },
    { href: "/apply", label: "Apply Now" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full bg-[#023020] text-[#eee1c6] md:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/datastory-logo.png"
              alt="DataStory Logo"
              width={100}
              height={32}
              className="h-6 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
              }}
            />
          </Link>
          <button onClick={toggleMenu} className="p-2 text-[#eee1c6] hover:text-white" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={toggleMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-64 bg-[#023020] text-[#eee1c6] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                currentPage === item.href.slice(1)
                  ? "bg-[#eee1c6] text-[#023020]"
                  : "hover:bg-[#eee1c6]/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
