import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const alumniTestimonials = [
  {
    name: 'Ryan Chan',
    role: 'Software Engineer at Meta',
    quote: 'DataStory helped me improve my professional career tremendously. Half of my first internship behavioral interview questions were about my experiences here.',
  },
  {
    name: 'Hailey Holcomb',
    role: 'Software Engineer at Walmart',
    quote: 'Working on projects that affect more than just your personal grade is super rewarding. DataStory teaches you skills you could never learn in class.',
  },
  {
    name: 'Iris Chao',
    role: 'Marketing Analyst at Adobe',
    quote: 'DataStory showed me the positive impact people can have on your professional and personal life. It was motivating to be surrounded by talented people.',
  },
]

export default function Development() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">How we grow</h1>
          <p className="mt-6 text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Comprehensive training, mentorship, and real-world experience to prepare
            members for successful careers.
          </p>
        </div>
      </section>

      {/* JCP */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Junior Consultant Program</h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                A semester-long training program for members with limited data science experience.
                Participants develop core technical and professional skills through weekly workshops
                covering pandas, data cleaning, visualization, modeling, and tools like Streamlit.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Junior Consultants complete a final project applying these skills end-to-end,
                presenting their work at the semester Project Showcase. Most members complete
                one semester in JCP before transitioning to full consultant roles.
              </p>
            </div>
            <div className="bg-neutral-200 aspect-[4/3] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Growth opportunities</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-neutral-200 rounded-2xl">
              <h3 className="text-xl font-medium">Workshops</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Interactive sessions on technical and behavioral skills. Favorites include
                peer resume reviews and cross-validation labs.
              </p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-2xl">
              <h3 className="text-xl font-medium">Competitions</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                We form teams for premier case and analytics competitions nationwide,
                competing against and learning from the best.
              </p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-2xl">
              <h3 className="text-xl font-medium">Alumni Network</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Speaker events and mentorship programs connect members with industry
                professionals for career guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Recognition</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-neutral-400">2023</div>
              <div className="mt-2 text-xl font-medium">1st Place</div>
              <div className="mt-1 text-neutral-400">Kearney Case Competition</div>
            </div>
            <div>
              <div className="text-sm text-neutral-400">2023</div>
              <div className="mt-2 text-xl font-medium">2nd Place</div>
              <div className="mt-1 text-neutral-400">Milwaukee Bucks Analytics</div>
            </div>
            <div>
              <div className="text-sm text-neutral-400">2024</div>
              <div className="mt-2 text-xl font-medium">2nd Place</div>
              <div className="mt-1 text-neutral-400">Paravel Case Competition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Alumni spotlight</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {alumniTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-8 bg-neutral-50 rounded-2xl">
                <p className="text-neutral-600 leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Start your journey</h2>
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Join DataStory and develop the skills for a successful career in data science.
          </p>
          <div className="mt-8">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              Apply now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
