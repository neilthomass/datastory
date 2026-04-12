import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import DelicateAsciiDots from '@/components/DelicateAsciiDots'
import TiltCard from '@/components/TiltCard'

const services = [
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights through statistical analysis and visualization. We help organizations make data-driven decisions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Machine Learning',
    description: 'Build predictive models and AI solutions to automate decisions, uncover patterns, and drive innovation across your organization.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Software Development',
    description: 'Design and build custom applications, dashboards, and data pipelines tailored to your specific business needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Data Visualization',
    description: 'Create compelling visual stories that communicate complex data clearly to stakeholders at all levels.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'Business Strategy',
    description: 'Provide data-driven recommendations to optimize operations, identify growth opportunities, and improve decision-making.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data infrastructure, ETL pipelines, and scalable databases to support your analytics initiatives.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
]

const clients = [
  'UNICEF', 'EA Games', 'Seagate', 'Visa', 'Capital One', 'Scale AI',
  'Accenture', 'Good360', 'The Education Trust', 'EPRI', 'FarmLink', 'Oracle', 'Arista Networks'
]

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[47vh] flex items-center overflow-hidden" style={{ isolation: 'isolate' }}>
        <DelicateAsciiDots />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Since 2005, we have collaborated with a wide variety of companies, from startups and nonprofits to industry leaders and large-scale corporations. Each semester, we tackle a new slate of client projects, providing compelling research insights and actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Berkeley's Brightest */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/dstory-123.webp"
                alt="DataStory team members"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Our Team</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
                Berkeley's Brightest
              </h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                DataStory is comprised of consultants selected from among the top students at UC Berkeley through a rigorous recruitment process. Each consultant participates in regular training sessions to ensure that only the highest quality of work is delivered to our clients.
              </p>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Our consultants are adept at breaking down and critically analyzing the most challenging data problems. As a result, DataStory alumni have consistently gone on to work at top-tier firms.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Project Structure */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">How We Work</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
                Project Structure
              </h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Projects typically span 12-14 weeks, with each consultant committing around 10-14 project-dedicated hours per week. We work in week-long cycles, engaging with our client on a regular basis to ensure our work is customized and relevant.
              </p>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                We present formal deliverables with research reports and mockups, plus additional midpoint deliverables upon request.
              </p>
            </div>

            {/* Visual representation */}
            <div className="space-y-4">
              <TiltCard className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-3xl font-bold text-emerald-600">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Discovery</h3>
                  <p className="text-slate-500 text-sm">Define scope and explore data</p>
                </div>
                <div className="ml-auto text-slate-400 text-sm">Weeks 1-4</div>
              </TiltCard>

              <TiltCard className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-3xl font-bold text-emerald-600">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Development</h3>
                  <p className="text-slate-500 text-sm">Build and iterate with feedback</p>
                </div>
                <div className="ml-auto text-slate-400 text-sm">Weeks 5-10</div>
              </TiltCard>

              <TiltCard className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-3xl font-bold text-emerald-600">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Delivery</h3>
                  <p className="text-slate-500 text-sm">Present reports and recommendations</p>
                </div>
                <div className="ml-auto text-slate-400 text-sm">Weeks 11-14</div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <TiltCard
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Past Clients */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
              Our Clients
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Organizations we've partnered with to deliver meaningful results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-medium"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Sample Work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900">
              Past Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TiltCard className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">UNICEF</h3>
              <p className="text-slate-600 leading-relaxed">
                Created web scrapers to identify potential partner organizations for UNICEF by utilizing sentiment analysis on social media posts to target organizations with a higher propensity to join.
              </p>
            </TiltCard>
            <TiltCard className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">EA Games</h3>
              <p className="text-slate-600 leading-relaxed">
                Developed a web scraper to capture game leak data, integrating it with an ETL pipeline into Snowflake. Enhanced classification accuracy using confusion matrices and initiated predictive analytics on sentiment and revenue trends.
              </p>
            </TiltCard>
            <TiltCard className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Seagate</h3>
              <p className="text-slate-600 leading-relaxed">
                Developed a PostgreSQL-integrated priority scoring framework for automating accounts payable and cost modeling. Built Tableau dashboards with drill-down analytics and streamlined ETL workflows using Metabase and Streamlit.
              </p>
            </TiltCard>
            <TiltCard className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">EPRI</h3>
              <p className="text-slate-600 leading-relaxed">
                Built generative machine learning models including LSTM, GANs, and VAEs to synthesize ultrasonic A-scans for non-destructive testing.
              </p>
            </TiltCard>
            <TiltCard className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The Education Trust</h3>
              <p className="text-slate-600 leading-relaxed">
                Constructed an ETL Snowflake pipeline to automate collection and data. Generated multiple Tableau visualizations using piped data.
              </p>
            </TiltCard>
            <TiltCard className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The Farmlink Project</h3>
              <p className="text-slate-600 leading-relaxed">
                Conducted an ML-driven data analysis to segment donors. Identified key factors to increase donations from newsletters.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/cta-background.webp"
            alt=""
            className="w-full h-full object-cover" style={{ objectPosition: '50% 25%' }}
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white">
            Interested in working with us?
          </h2>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
            We're always looking for new partners. Reach out to discuss how DataStory can help your organization.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:datastory.president@gmail.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/25"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Join our team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
