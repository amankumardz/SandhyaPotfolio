import { motion } from 'framer-motion'

const experience = [
  {
    role: 'Customer Support Executive',
    company: 'Teleperformance',
    note: 'Handled customer queries, escalations, and maintained CSAT through efficient resolution and clear communication.',
  },
  {
    role: 'Soft Skills Trainer',
    company: 'SGRS Academic Private Limited',
    note: 'Conducted communication and leadership training sessions with focus on confidence and workplace readiness.',
  },
  {
    role: 'Process Executive',
    company: 'Nimbus BPO',
    note: 'Managed process workflows, ticket handling, and service-level adherence for client-facing operations.',
  },
]

const skills = [
  'Customer Support', 'Escalation Handling', 'CSAT', 'FCR', 'AHT', 'CRM Tools', 'Ticket Management',
  'Manual Testing Basics', 'Test Case Writing', 'Bug Reporting', 'Excel', 'Canva', 'Adobe Photoshop',
  'Communication', 'Leadership'
]

const education = [
  'Graduation — Doranda College',
  'Intermediate — Ranchi Women’s College',
  '10th — Cluny Convent School',
]

const interests = ['Art & Craft', 'Mind Games', 'Creative Activities']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

const Section = ({ title, children, id }) => (
  <motion.section id={id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="glass rounded-3xl p-6 md:p-10">
    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-5">{title}</h2>
    {children}
  </motion.section>
)

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-cream via-white to-mint/50">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-mint/70 blur-3xl" />
      <div className="pointer-events-none absolute top-52 -right-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-warm blur-3xl" />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-14 space-y-8 md:space-y-10 relative z-10">
        <section className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="inline-block px-4 py-1 rounded-full bg-mint text-stone-700 font-medium mb-4">Ranchi, Jharkhand</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-stone-800 leading-tight">Kumari Sandhya</h1>
            <p className="text-lg md:text-2xl text-stone-600 mt-3">Customer Support Executive | Aspiring QA Analyst</p>
            <p className="mt-4 text-stone-600">I blend customer empathy with analytical thinking and I am transitioning into QA to build reliable, user-focused digital experiences.</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-stone-800 text-white hover:bg-stone-700 transition">Contact Me</a>
              <a href="/resume-kumari-sandhya.pdf" download className="px-5 py-3 rounded-xl bg-white border border-stone-200 hover:-translate-y-0.5 transition">Download Resume</a>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div animate={{ y: [0, -10, 0], boxShadow: ['0 0 0 rgba(0,0,0,0.08)', '0 0 35px rgba(184, 223, 199, 0.9)', '0 0 0 rgba(0,0,0,0.08)'] }} transition={{ repeat: Infinity, duration: 4.5 }} className="h-64 w-64 md:h-80 md:w-80 rounded-full p-2 bg-gradient-to-br from-mint via-white to-gold/40">
              <img src="/profile.jpg" alt="Kumari Sandhya" className="h-full w-full object-cover rounded-full border-4 border-white/70" />
            </motion.div>
          </div>
        </section>

        <Section title="About">
          <p className="text-stone-600 leading-relaxed">With practical experience in high-volume customer support roles, I have developed strong problem-solving, communication, and process discipline. I am now focused on transitioning into Quality Assurance by applying manual testing fundamentals, writing clear test cases, and reporting bugs effectively. My support background helps me approach QA with user empathy and outcome-driven quality thinking.</p>
        </Section>

        <Section title="Experience Timeline">
          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item.role} className="bg-white/60 border border-white/70 rounded-2xl p-4 hover:-translate-y-1 transition">
                <h3 className="font-semibold text-stone-800">{item.role} <span className="text-stone-500">· {item.company}</span></h3>
                <p className="text-stone-600 mt-2">{item.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} className="px-4 py-2 rounded-full bg-white/70 border border-white font-medium text-stone-700 hover:bg-mint/60 transition">
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-8">
          <Section title="Education">
            <ul className="space-y-3 text-stone-600">
              {education.map((e) => <li key={e} className="bg-white/60 rounded-xl p-3 border border-white/70">{e}</li>)}
            </ul>
          </Section>

          <Section title="Interests">
            <div className="flex flex-wrap gap-3">
              {interests.map((it) => <span key={it} className="px-4 py-2 rounded-full bg-white/70 border border-white/70 text-stone-700">{it}</span>)}
            </div>
          </Section>
        </div>

        <Section title="Contact" id="contact">
          <div className="space-y-2 text-lg">
            <p><span className="font-semibold text-stone-800">Email:</span> <a href="mailto:16sandhya04@gmail.com" className="text-stone-700 underline">16sandhya04@gmail.com</a></p>
            <p><span className="font-semibold text-stone-800">Phone:</span> <a href="tel:+918797031600" className="text-stone-700 underline">+91 8797031600</a></p>
          </div>
        </Section>
      </main>
    </div>
  )
}
