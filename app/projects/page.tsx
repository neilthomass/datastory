import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <MobileNav currentPage="projects" />

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
            <Link href="/projects" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
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
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[375px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/our-work-hero-new.jpeg"
          alt="DataStory team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#023020] opacity-30"></div>
        <div className="absolute inset-0 flex items-start justify-center pt-8 z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-[#eee1c6] tracking-wider">OUR WORK</h1>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 bg-gradient-to-br from-[#023020] to-[#034030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M0,300 Q250,100 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">RECENT PROJECTS</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-8 h-32 items-center bg-white rounded-lg p-4">
                <Image
                  src="/images/unicef-logo-clean.png"
                  alt="UNICEF"
                  width={300}
                  height={150}
                  className="h-32 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Created web scrapers to identify potential partner organizations for UNICEF by utilizing sentiment
                analysis on social media posts to target organizations with a higher propensity to join.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-8 h-24 items-center">
                <Image
                  src="/images/ea-logo.png"
                  alt="EA Games"
                  width={220}
                  height={110}
                  className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Developed a web scraper to capture game leak data, integrating it with an ETL pipeline into Snowflake.
                Enhanced classification accuracy using confusion matrices and initiated predictive analytics on
                sentiment and revenue trends.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-8 h-32 items-center">
                <Image
                  src="/images/seagate-logo.png"
                  alt="Seagate"
                  width={300}
                  height={150}
                  className="h-32 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Developed a PostgreSQL-integrated priority scoring framework for automating accounts payable and cost
                modeling. Built Tableau dashboards with drill-down analytics and streamlined ETL workflows using
                Metabase and Streamlit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="py-16 bg-gradient-to-br from-[#023020] to-[#034030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M0,300 Q250,100 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">PAST PROJECTS</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-8 h-20 items-center">
                <Image
                  src="/images/epri-logo.png"
                  alt="EPRI"
                  width={160}
                  height={80}
                  className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Built generative machine learning models including LSTM, GANs, and VAEs to synthesize ultrasonic A-
                scans for non-destructive testing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-8 h-20 items-center">
                <Image
                  src="/images/education-trust-logo-updated.png"
                  alt="The Education Trust"
                  width={160}
                  height={80}
                  className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Constructed an ETL Snowflake pipeline to automate collection and data. Generated multiple Tableau
                visualizations using piped data.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-8 h-20 items-center">
                <Image
                  src="/images/farmlink-project-logo.png"
                  alt="The Farmlink Project"
                  width={160}
                  height={80}
                  className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Conducted an ML-driven data analysis to segment donors. Identified key factors to increase donations
                from newsletters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023020] text-center mb-16">OUR SERVICES</h2>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/services-icons-only.png"
              alt="Our Services - Machine Learning & AI, Software Development, Data Visualization & Dashboards, Data Driven Business Strategy, Data Driven Marketing, Data Management & Strategy"
              width={800}
              height={600}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-[#023020] to-[#034030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M0,300 Q250,100 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">TESTIMONIALS</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/good360-logo.png"
                  alt="Good360"
                  width={120}
                  height={80}
                  className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-gray-600 italic mb-4 leading-relaxed">
                  &ldquo;Each of the customer-facing consultants were professional and mature beyond their years. The team was
                  adaptable to various challenges and scope adjustments necessitated by the project and ultimately
                  delivered several PowerBI dashboards that will have ongoing value to Good360. I would definitely
                  recommend the Berkeley Data Story team for supplemental BI and Data Science projects.&rdquo;
                </blockquote>
                <cite className="text-base text-gray-500 font-medium">
                  - Kniffen Kelly, Sr. Director of Business Intelligence Center of Excellence at Good 360
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Past Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023020] text-center mb-16">ADDITIONAL PAST CLIENTS</h2>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/additional-past-clients.png"
              alt="Additional Past Clients - SimpleLab, IBM, GIG Car Share, Leaf, Plan International, LifeMoves, Fingenic"
              width={800}
              height={300}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
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
