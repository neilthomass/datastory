import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: 'UNICEF',
    title: 'Social Media Intelligence Platform',
    description: 'Built web scrapers and sentiment analysis tools to identify potential partner organizations from social media data.',
    tags: ['Python', 'NLP', 'Web Scraping'],
  },
  {
    company: 'EA Games',
    title: 'Game Leak Detection System',
    description: 'Developed a web scraper to capture game leak data, integrated with an ETL pipeline into Snowflake for real-time monitoring.',
    tags: ['Python', 'Snowflake', 'ETL'],
  },
  {
    company: 'Seagate',
    title: 'Automated AP Framework',
    description: 'Created a PostgreSQL-integrated priority scoring framework for automating accounts payable and cost modeling.',
    tags: ['PostgreSQL', 'Python', 'ML'],
  },
]

const services = [
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights through visualization and statistical analysis.',
  },
  {
    title: 'Machine Learning',
    description: 'Build predictive models and AI solutions tailored to your business needs.',
  },
  {
    title: 'Software Development',
    description: 'Develop custom tools, dashboards, and applications to streamline operations.',
  },
  {
    title: 'Business Strategy',
    description: 'Data-driven recommendations to optimize processes and drive growth.',
  },
]

const partners = [
  'UNICEF',
  'EA Games',
  'Seagate',
  'Meta',
  'Scale AI',
  'CrowdStrike',
  'Accenture',
  'EY',
  'EPRI',
  'Good360',
  'The FarmLink Project',
  'Education Trust',
]

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Our work</h1>
          <p className="mt-6 text-xl text-neutral-600 max-w-2xl leading-relaxed">
            We partner with organizations to solve real data challenges and deliver measurable impact.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Featured projects</h2>
          <div className="mt-12 space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-8 bg-white border border-neutral-200 rounded-2xl"
              >
                <div className="text-sm text-neutral-500 font-medium">{project.company}</div>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">What we offer</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 border border-neutral-200 rounded-2xl">
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Our partners</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div key={partner} className="text-neutral-500 font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Have a project in mind?</h2>
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Let's discuss how we can help bring your ideas to life.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
