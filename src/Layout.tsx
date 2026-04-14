import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

type NavLink = { to: string; label: string } | { href: string; label: string }

const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { href: 'mailto:datastory.president@gmail.com', label: 'Contact' },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Floating Pill Navigation - Launchpad style */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <div
          className={`mx-auto transition-all duration-700 ease-out ${
            scrolled
              ? 'max-w-7xl mt-4 px-4'
              : 'max-w-[90rem] mt-0 px-6'
          }`}
        >
          <div
            className={`transition-all duration-700 ease-out ${
              scrolled
                ? 'bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-black/[0.03] rounded-full px-6'
                : 'bg-transparent border border-transparent rounded-full px-6'
            }`}
          >
            <div
              className={`flex items-center justify-between transition-all duration-700 ease-out ${
                scrolled ? 'h-14' : 'h-20'
              }`}
            >
              {/* Logo */}
              <Link
                to="/"
                className={`font-semibold tracking-[-0.02em] transition-all duration-700 ease-out hover:text-emerald-600 text-slate-900 flex-shrink-0 ${
                  scrolled ? 'text-lg' : 'text-[22px]'
                }`}
              >
                DataStory
              </Link>

              {/* Center Nav Items */}
              <div
                className={`flex items-center transition-all duration-700 ease-out ${
                  scrolled ? 'gap-6' : 'gap-10'
                }`}
              >
                {navLinks.map((link) => (
                  'to' in link ? (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`text-[15px] font-medium transition-colors duration-200 ${
                        location.pathname === link.to
                          ? 'text-emerald-600'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-[15px] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>

              {/* Right Side - Apply CTA */}
              <div className="flex items-center flex-shrink-0">
                <Link
                  to="/apply"
                  className={`font-semibold rounded-full transition-all duration-700 ease-out bg-emerald-600 text-white hover:bg-emerald-700 ${
                    scrolled
                      ? 'text-[13px] px-5 py-2'
                      : 'text-[14px] px-6 py-2.5 shadow-lg shadow-emerald-600/25'
                  }`}
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="text-lg font-semibold tracking-[-0.02em] text-slate-900"
            >
              DataStory
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-slate-900 transition-all origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`h-0.5 w-full bg-slate-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-slate-900 transition-all origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 border-t border-slate-100 ${
              mobileMenuOpen ? 'max-h-80 py-6' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                'to' in link ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-base font-medium ${
                      location.pathname === link.to
                        ? 'text-emerald-600'
                        : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-slate-600"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Link
                to="/apply"
                className="mt-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full text-center hover:bg-emerald-700 transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
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
                {navLinks.filter(link => link.label !== 'Contact').map((link) => (
                  <li key={'to' in link ? link.to : link.href}>
                    {'to' in link ? (
                      <Link to={link.to} className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                        {link.label}
                      </a>
                    )}
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
              <p className="text-sm text-slate-500 mt-3">
                Designed by <a href="https://linkedin.com/in/neiltthomas" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 transition-colors">Neil Thomas</a>
              </p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
