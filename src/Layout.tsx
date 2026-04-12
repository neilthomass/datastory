import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/apply', label: 'Apply' },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-[22px] font-semibold tracking-[-0.02em] text-slate-900 hover:text-emerald-600 transition-colors"
            >
              DataStory
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[15px] font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-emerald-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:datastory.president@gmail.com"
                className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-slate-900 transition-all origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-slate-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-slate-900 transition-all origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-lg font-medium ${
                  location.pathname === link.to ? 'text-emerald-600' : 'text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:datastory.president@gmail.com"
              className="block text-lg font-medium text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-semibold tracking-[-0.02em] text-slate-900 mb-4">DataStory</div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                UC Berkeley's premier student-led data science consulting organization.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Navigate</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:datastory.president@gmail.com" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/datastoryconsulting/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Organization</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are a student group acting independently of the University of California.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} DataStory at Berkeley
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
