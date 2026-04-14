import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react'
import SlidingEaseVerticalBars from '@/components/SlidingEaseVerticalBars'
import ScrollScaleSection from '@/components/ScrollScaleSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Companies with logos available
const companiesWithLogos: Record<string, string> = {
  'Amazon': '/logos/amazon.svg',
  'McKinsey & Company': '/logos/mckinsey.svg',
  'Adobe': '/logos/adobe.svg',
  'Microsoft': '/logos/microsoft.svg',
  'BlackRock': '/logos/blackrock.svg',
  'Intel': '/logos/intel.svg',
  'Tesla': '/logos/tesla.svg',
  'Meta': '/logos/meta.svg',
  'BCG': '/logos/bcg.svg',
  'Salesforce': '/logos/salesforce.svg',
  'PwC': '/logos/pwc.svg',
  'Workday': '/logos/workday.svg',
  'Atlassian': '/logos/atlassian.svg',
  'Coinbase': '/logos/coinbase.svg',
  'Figma': '/logos/figma.svg',
  'SpaceX': '/logos/spacex.svg',
  'Capital One': '/logos/capital-one.svg',
  'Bain & Company': '/logos/bain.svg',
  'SIG': '/logos/sig.webp',
  'Walmart': '/logos/walmart.svg',
  'Visa': '/logos/visa.svg',
  'Scale': '/logos/scale.svg',
  'Disney': '/logos/disney.svg',
  'Coke': '/logos/coke.svg',
  'Datadog': '/logos/datadog.svg',
  'EY': '/logos/ey.svg',
  'Apple': '/logos/apple.svg',
  'Databricks': '/logos/databricks.svg',
  'OpenAI': '/logos/openai.svg',
  'CrowdStrike': '/logos/crowdstrike.svg',
}

const alumniCompanies = [
  'Amazon', 'McKinsey & Company', 'Adobe', 'Microsoft', 'BlackRock',
  'Figma', 'Meta', 'Tesla', 'BCG', 'Salesforce', 'SIG',
  'Workday', 'Atlassian', 'Coinbase',
  'Intel', 'SpaceX', 'Capital One', 'Bain & Company', 'PwC',
  'Walmart', 'Visa', 'Scale', 'Disney', 'Coke', 'Datadog', 'Databricks', 'Apple',
  'EY', 'OpenAI', 'CrowdStrike'
]

export default function Home() {
  const [marqueeInView, setMarqueeInView] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Animate headline with delay
      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
      })
      .to(subheadRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }, '-=0.4')

      // Scroll-triggered animations for sections
      gsap.utils.toArray('.animate-on-scroll').forEach((section) => {
        gsap.set(section as Element, { opacity: 0, y: 50 })
        gsap.to(section as Element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })


      // Horizontal slide for pillar text
      gsap.utils.toArray('.pillar-text-left').forEach((el) => {
        gsap.from(el as Element, {
          x: -60,
          opacity: 0,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        })
      })

      gsap.utils.toArray('.pillar-text-right').forEach((el) => {
        gsap.from(el as Element, {
          x: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        })
      })

      // Scale up images on scroll
      gsap.utils.toArray('.scale-on-scroll').forEach((img) => {
        gsap.from(img as Element, {
          scale: 0.9,
          scrollTrigger: {
            trigger: img as Element,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1
          }
        })
      })

      // Hero image parallax
      const heroImage = document.querySelector('.hero-image')
      if (heroImage) {
        gsap.to(heroImage, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        })
      }

      // Curved path and glowing dot animation
      const pillarsContainer = document.querySelector('.pillars-container') as HTMLElement
      const glowingDot = document.querySelector('.glowing-dot') as HTMLElement
      const curvedPath = document.querySelector('.curved-path') as SVGPathElement
      const pillarSections = gsap.utils.toArray('.pillar-section')

      if (pillarsContainer && glowingDot && curvedPath && pillarSections.length) {
        // Generate the curved roller coaster path
        const updatePath = () => {
          const width = pillarsContainer.offsetWidth
          const height = pillarsContainer.offsetHeight

          // Smooth S-curve roller coaster path - ends higher behind last photo
          const pathData = `
            M ${width * 0.15} 0
            C ${width * 0.15} ${height * 0.1}, ${width * 0.85} ${height * 0.15}, ${width * 0.85} ${height * 0.33}
            S ${width * 0.15} ${height * 0.5}, ${width * 0.15} ${height * 0.62}
            S ${width * 0.85} ${height * 0.75}, ${width * 0.85} ${height * 0.85}
          `
          curvedPath.setAttribute('d', pathData)
          return curvedPath.getTotalLength()
        }

        let pathLength = updatePath()

        // Update on resize
        const handleResize = () => {
          pathLength = updatePath()
        }
        window.addEventListener('resize', handleResize)

        // Set initial position (center the 200px glow)
        const initialPoint = curvedPath.getPointAtLength(0)
        gsap.set(glowingDot, {
          x: initialPoint.x - 100,
          y: initialPoint.y - 100,
          opacity: 0
        })

        // Animate glow along path on scroll
        ScrollTrigger.create({
          trigger: pillarsContainer,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1.5,
          onUpdate: (self) => {
            const point = curvedPath.getPointAtLength(self.progress * pathLength)
            gsap.to(glowingDot, {
              x: point.x - 100,
              y: point.y - 100,
              duration: 0.3,
              ease: 'power2.out'
            })
          },
          onEnter: () => gsap.to(glowingDot, { opacity: 1, duration: 0.8 }),
          onLeave: () => gsap.to(glowingDot, { opacity: 0, duration: 0.8 }),
          onLeaveBack: () => gsap.to(glowingDot, { opacity: 0, duration: 0.8 }),
          onEnterBack: () => gsap.to(glowingDot, { opacity: 1, duration: 0.8 })
        })

        // Animate each pillar section
        pillarSections.forEach((section) => {
          gsap.set(section as Element, { opacity: 0, y: 40 })
          ScrollTrigger.create({
            trigger: section as Element,
            start: 'top 80%',
            onEnter: () => {
              gsap.to(section as Element, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
              })
            }
          })
        })
      }
    }, pageRef)

    return () => ctx.revert()
  }, [])

  // Intersection Observer to start marquee when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMarqueeInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <SlidingEaseVerticalBars />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 ref={headlineRef} className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900 opacity-0 translate-y-[60px]">
                Where data meets
                <br />
                <span className="text-emerald-600">community</span>
              </h1>

              <p ref={subheadRef} className="mt-8 text-xl md:text-2xl text-slate-600 leading-relaxed opacity-0 translate-y-[60px]">
                DataStory is a student-run data science consulting organization at UC Berkeley.
                We are established on the principles of professionalism, cohesion, and career guidance—providing
                our members with mentorship and invaluable experience while adding value to companies through consulting engagements.
              </p>

              <div ref={ctaRef} className="mt-12 flex flex-wrap gap-4 opacity-0 translate-y-[60px]">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40"
                >
                  Apply to join
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:datastory.president@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Work with us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block lg:scale-110 lg:translate-x-8 hero-image">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/dstory-171.webp"
                  alt="DataStory club members 2025"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Three Pillars - with scroll scale effect */}
      <ScrollScaleSection bgColor="bg-emerald-950" className="text-white">
        <section className="pillars-section relative py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section header */}
            <div className="animate-on-scroll text-center mb-32">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white">
                More than consulting
              </h2>
              <p className="mt-6 text-xl text-emerald-100/80 max-w-2xl mx-auto">
                Three pillars that define the DataStory experience
              </p>
            </div>

            {/* Curved path container */}
            <div className="pillars-container relative">
              {/* SVG curved path - invisible, just for dot to follow */}
              <svg
                className="curved-path-svg absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: 'visible' }}
              >
                <path
                  className="curved-path"
                  fill="none"
                  stroke="none"
                />
              </svg>

              {/* Glowing orb - positioned absolutely within container, behind content */}
              <div
                className="glowing-dot absolute rounded-full pointer-events-none hidden lg:block"
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(52,211,153,0.6) 0%, rgba(52,211,153,0.3) 30%, rgba(52,211,153,0) 70%)',
                  filter: 'blur(20px)',
                  left: 0,
                  top: 0,
                  zIndex: 0
                }}
              />

              {/* Projects */}
              <div className="pillar-section relative mb-40 lg:mb-56">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div className="pillar-text-left">
                    <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                      Professional work
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                      Real projects, real impact
                    </h3>
                    <p className="text-lg text-emerald-100/80 leading-relaxed mb-8">
                      Each semester, we tackle a new slate of client projects, providing compelling research insights and actionable recommendations. Our goal is producing meaningful results within our client organizations and broader society.
                    </p>
                    <Link
                      to="/services"
                      className="group inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                    >
                      Learn more about projects
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl scale-on-scroll">
                    <img
                      src="/images/dstory-084.webp"
                      alt="DataStory project work"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Community */}
              <div className="pillar-section relative mb-40 lg:mb-56">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl scale-on-scroll">
                    <img
                      src="/images/dstory-153.webp"
                      alt="DataStory community"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 pillar-text-right">
                    <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                      Close-knit family
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                      Lifelong friendships
                    </h3>
                    <p className="text-lg text-emerald-100/80 leading-relaxed mb-8">
                      We prioritize helping our members create unforgettable memories throughout their undergraduate experience. From weekly socials to semester retreats, we foster a close-knit community where lasting friendships thrive.
                    </p>
                    <Link
                      to="/team"
                      className="group inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                    >
                      Learn more about community
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Growth */}
              <div className="pillar-section relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div className="pillar-text-left">
                    <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                      Career guidance
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                      Launch your career
                    </h3>
                    <p className="text-lg text-emerald-100/80 leading-relaxed mb-8">
                      We provide our members with mentorship from alumni and industry professionals, enabling them to acquire invaluable experience. Our Junior Consultant Program, technical workshops, and case competitions prepare you for top careers.
                    </p>
                    <Link
                      to="/apply"
                      className="group inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                    >
                      Learn more about growth
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl scale-on-scroll">
                    <img
                      src="/images/dstory-107.webp"
                      alt="DataStory growth"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollScaleSection>

      {/* Alumni Companies Marquee - no background to avoid horizontal line effect */}
      <section className="py-48 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
          <div className="animate-on-scroll text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
              Where our alumni work
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Our members go on to build careers at the world's leading companies.
            </p>
          </div>
        </div>

        {/* Two-row marquee */}
        <div ref={marqueeRef} className="relative space-y-12">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1 - scrolling left */}
          <div className={`flex items-center w-max ${marqueeInView ? 'animate-marquee-left' : ''}`}>
            {[...alumniCompanies, ...alumniCompanies].map((company, index) => (
              <div
                key={`row1-${company}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                {companiesWithLogos[company] ? (
                  <img
                    src={companiesWithLogos[company]}
                    alt={company}
                    className="h-7 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-slate-600 whitespace-nowrap">
                    {company}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Row 2 - scrolling right */}
          <div className={`flex items-center w-max ${marqueeInView ? 'animate-marquee-right' : ''}`}>
            {[...[...alumniCompanies].reverse(), ...[...alumniCompanies].reverse()].map((company, index) => (
              <div
                key={`row2-${company}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                {companiesWithLogos[company] ? (
                  <img
                    src={companiesWithLogos[company]}
                    alt={company}
                    className="h-7 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-slate-600 whitespace-nowrap">
                    {company}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marquee-left 40s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 40s linear infinite;
          }
          .animate-marquee-left:hover,
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="animate-on-scroll grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/dstory-256.webp"
                alt="DataStory leadership team"
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
                Join our family
              </h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                We recruit at the beginning of every semester. All experience levels welcome—we're looking for passionate individuals ready to grow.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/25"
                >
                  Apply now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:datastory.president@gmail.com"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition-colors"
                >
                  Contact us
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
