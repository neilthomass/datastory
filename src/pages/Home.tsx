import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react'
import SlidingEaseVerticalBars from '@/components/SlidingEaseVerticalBars'
import ScrollScaleSection from '@/components/ScrollScaleSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'Meaningful professional work',
    description: 'Each semester, we tackle a new slate of client projects, providing compelling research insights and actionable recommendations. Our goal is producing meaningful results within our client organizations and broader society.',
    image: '/images/dstory-084.webp',
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'A close-knit family',
    description: 'We prioritize helping our members create unforgettable memories throughout their undergraduate experience. From weekly socials to semester retreats, we foster a close-knit community where lasting friendships thrive.',
    image: '/images/dstory-153.webp',
  },
  {
    id: 'growth',
    title: 'Growth',
    subtitle: 'Career guidance',
    description: 'We provide our members with mentorship from alumni and industry professionals, enabling them to acquire invaluable experience. Our Junior Consultant Program, technical workshops, and case competitions prepare you for top careers.',
    image: '/images/dstory-107.webp',
  },
]

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
  const [activePillar, setActivePillar] = useState('projects')
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

      // Set initial states
      gsap.set([headlineRef.current, subheadRef.current, ctaRef.current], {
        opacity: 0,
        y: 60,
      })

      // Animate headline with split effect
      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
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
              <h1 ref={headlineRef} className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
                Where data meets
                <br />
                <span className="text-emerald-600">community</span>
              </h1>

              <p ref={subheadRef} className="mt-8 text-xl md:text-2xl text-slate-600 leading-relaxed">
                DataStory is a student-run data science consulting organization at UC Berkeley.
                We are established on the principles of professionalism, cohesion, and career guidance—providing
                our members with mentorship and invaluable experience while adding value to companies through consulting engagements.
              </p>

              <div ref={ctaRef} className="mt-12 flex flex-wrap gap-4">
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

            <div className="hidden lg:block lg:scale-110 lg:translate-x-8">
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


      {/* Interactive Pillars Section - with scroll scale effect */}
      <ScrollScaleSection bgColor="bg-emerald-950" className="text-white">
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="animate-on-scroll text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white">
                More Than Consulting
              </h2>
              <p className="mt-4 text-xl text-emerald-100/80">
                We prioritize helping our members create unforgettable memories throughout their undergraduate experience.
              </p>
            </div>

            {/* Pillar Tabs */}
            <div className="animate-on-scroll flex justify-center mb-12">
              <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
                {pillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activePillar === pillar.id
                        ? 'bg-white text-emerald-950 shadow-lg'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {pillar.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Pillar Content */}
            <div className="animate-on-scroll grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative min-h-[280px]">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    className={`transition-all duration-500 ease-out ${
                      activePillar === pillar.id
                        ? 'opacity-100 translate-y-0 relative'
                        : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      {pillar.subtitle}
                    </div>
                    <h3 className="text-4xl font-semibold text-white mb-6">
                      {pillar.title}
                    </h3>
                    <p className="text-xl text-emerald-100/80 leading-relaxed mb-8">
                      {pillar.description}
                    </p>
                    <Link
                      to="/services"
                      className="group inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                    >
                      Learn more about {pillar.title.toLowerCase()}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                {pillars.map((pillar) => (
                  <img
                    key={pillar.id}
                    src={pillar.image}
                    alt={`DataStory ${pillar.title.toLowerCase()}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
                      activePillar === pillar.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollScaleSection>

      {/* Alumni Companies Marquee - no background to avoid horizontal line effect */}
      <section className="py-32 overflow-hidden">
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
