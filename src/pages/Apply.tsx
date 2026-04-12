import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, BookOpen, Trophy, CheckCircle } from 'lucide-react'

const timeline = [
  { step: '1', title: 'Submit Application', description: 'Complete our online form with your resume and responses.' },
  { step: '2', title: 'Coffee Chat', description: 'Meet with current members to learn more about DataStory.' },
  { step: '3', title: 'Interview', description: 'Behavioral and case-based interview with our team.' },
  { step: '4', title: 'Welcome!', description: 'Join the DataStory family and start your journey.' },
]

const faqs = [
  {
    q: 'What experience do I need?',
    a: 'None! Our Junior Consultant Program is designed for students new to data science. We value curiosity and willingness to learn over technical experience.',
  },
  {
    q: 'What is the time commitment?',
    a: 'Members typically spend 5-10 hours per week on DataStory activities including project work, meetings, and professional development.',
  },
  {
    q: 'When do you recruit?',
    a: 'We recruit at the beginning of each semester (Fall and Spring). Applications typically open 2 weeks before classes start.',
  },
  {
    q: 'What majors do you accept?',
    a: 'All majors are welcome! Our members come from Data Science, CS, Statistics, Business, Engineering, and many other fields.',
  },
]

export default function Apply() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(226 232 240) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Fall 2026 Applications Open</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900">
              Join UC Berkeley's premier data consulting club
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              No experience required. We're looking for curious, driven students who want to
              develop their skills through real-world projects and a supportive community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://forms.gle/kG7JohsYbtfapJct5"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25"
              >
                Apply now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:border-slate-300 transition-all"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-semibold tracking-[-0.02em]">What you'll get</h2>
            <p className="mt-4 text-xl text-slate-400">
              More than just a club—a launchpad for your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Community', description: 'Join 100+ passionate students building lasting relationships.' },
              { icon: BookOpen, title: 'Training', description: 'Develop skills through workshops, mentorship, and hands-on projects.' },
              { icon: Trophy, title: 'Experience', description: 'Work on real consulting projects with industry-leading clients.' },
              { icon: CheckCircle, title: 'Results', description: 'Launch your career at top companies in tech, finance, and consulting.' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-slate-900 rounded-2xl">
                <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-900">Application process</h2>
            <p className="mt-4 text-xl text-slate-600">
              A straightforward process designed to get to know you.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={item.step} className="relative">
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 right-0 h-0.5 bg-slate-200" />
                )}
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-semibold text-white mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-900">Frequently asked</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="p-12 md:p-20 bg-emerald-600 rounded-3xl text-white text-center">
            <h2 className="text-4xl font-semibold mb-6">Ready to get started?</h2>
            <p className="text-xl text-emerald-100 max-w-xl mx-auto mb-10">
              Applications take about 15 minutes. We can't wait to meet you.
            </p>
            <a
              href="https://forms.gle/kG7JohsYbtfapJct5"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
            >
              Apply now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
