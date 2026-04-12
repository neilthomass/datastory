import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react'
import SlidingEaseVerticalBars from '@/components/SlidingEaseVerticalBars'
import { CompanyLogo } from '@/components/CompanyLogos'
import gsap from 'gsap'

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

const alumniCompanies = [
  'Google', 'Meta', 'Apple', 'Amazon', 'Microsoft', 'McKinsey', 'BCG', 'Bain',
  'Goldman Sachs', 'BlackRock', 'Citadel', 'JPMorgan', 'Stripe', 'Airbnb',
  'Netflix', 'Uber', 'Salesforce', 'Adobe', 'Visa', 'Capital One'
]

export default function Home() {
  const [activePillar, setActivePillar] = useState('projects')

  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const currentPillar = pillars.find(p => p.id === activePillar)!

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
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
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
                  src="/images/club-pic-2025.webp"
                  alt="DataStory club members 2025"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Interactive Pillars Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
              More Than Consulting
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              We prioritize helping our members create unforgettable memories throughout their undergraduate experience.
            </p>
          </div>

          {/* Pillar Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 rounded-full p-1">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activePillar === pillar.id
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {pillar.title}
                </button>
              ))}
            </div>
          </div>

          {/* Pillar Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              key={currentPillar.id}
              className="animate-fade-in"
            >
              <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                {currentPillar.subtitle}
              </div>
              <h3 className="text-4xl font-semibold text-slate-900 mb-6">
                {currentPillar.title}
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {currentPillar.description}
              </p>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Learn more about {currentPillar.title.toLowerCase()}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div
              key={`img-${currentPillar.id}`}
              className="rounded-2xl overflow-hidden shadow-lg animate-fade-in"
            >
              <img
                src={currentPillar.image}
                alt={`DataStory ${currentPillar.title.toLowerCase()}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <style>{`
            @keyframes fade-in {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in {
              animation: fade-in 0.4s ease-out forwards;
            }
          `}</style>
        </div>
      </section>

      {/* Alumni Companies Marquee */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
              Where our alumni work
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our members go on to the world's top companies.
            </p>
          </div>
        </div>

        {/* Two-row marquee */}
        <div className="relative space-y-4">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Row 1 - scrolling left */}
          <div className="flex animate-scroll-left">
            {[...alumniCompanies.slice(0, 10), ...alumniCompanies.slice(0, 10)].map((company, index) => (
              <div
                key={`row1-${company}-${index}`}
                className="flex-shrink-0 mx-3"
              >
                <div className="px-6 py-4 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center min-w-[120px]">
                  <CompanyLogo name={company} />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - scrolling right */}
          <div className="flex animate-scroll-right">
            {[...alumniCompanies.slice(10), ...alumniCompanies.slice(10)].map((company, index) => (
              <div
                key={`row2-${company}-${index}`}
                className="flex-shrink-0 mx-3"
              >
                <div className="px-6 py-4 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center min-w-[120px]">
                  <CompanyLogo name={company} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
    </>
  )
}
