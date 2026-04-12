import { Link } from "react-router-dom"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedSection } from "@/components/AnimatedSection"
import { GlowingCard } from "@/components/GlowingCard"
import { StaggeredList } from "@/components/StaggeredList"
import { GridBackground } from "@/components/GridBackground"
import { PageTransition } from "@/components/PageTransition"
import { motion } from "framer-motion"

// Team member type
interface TeamMember {
  name: string
  role: string
  image: string
  year: string
  major: string
  linkedin: string
}

// Team data structure
const executiveBoard: TeamMember[] = [
  {
    name: "Katie Zhang",
    role: "President",
    image: "/images/katie-zhang-headshot.webp",
    year: "Junior",
    major: "Data Science, Economics",
    linkedin: "https://www.linkedin.com/in/katie-h-zhang/"
  },
  {
    name: "Hasset Mekuria",
    role: "External VP",
    image: "/images/hasset-mekuria-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Political Science",
    linkedin: "https://www.linkedin.com/in/hasset-mekuria-2189b8271"
  },
  {
    name: "Julia Shvartsman",
    role: "Internal VP",
    image: "/images/julia-shvartsman-headshot.webp",
    year: "Junior",
    major: "Data Science, Psychology",
    linkedin: "https://www.linkedin.com/in/julia-shvartsman-156489270/"
  },
  {
    name: "Piya Shah",
    role: "Operations VP",
    image: "/images/piya-shah-headshot.webp",
    year: "Junior",
    major: "Data Science, Statistics",
    linkedin: "https://www.linkedin.com/in/piya-shah-58a4a6244/"
  },
  {
    name: "Neil Thomas",
    role: "Tech VP",
    image: "/images/neil-thomas-headshot.webp",
    year: "Junior",
    major: "Data Science, Computer Science",
    linkedin: "https://www.linkedin.com/in/neilkthomas/"
  },
  {
    name: "Kayle Marsh",
    role: "Tech VP",
    image: "/images/kayle-marsh-headshot.webp",
    year: "Junior",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/kayle-marsh/"
  },
  {
    name: "Rayan Sudeora",
    role: "VP of Professional Development",
    image: "/images/rayan-sudeora-headshot.webp",
    year: "Junior",
    major: "Data Science, Cognitive Science",
    linkedin: "https://www.linkedin.com/in/rayansudeora/"
  },
  {
    name: "Tony Getsin",
    role: "Co-Dir. of Jr Consultants",
    image: "/images/tony-getsin-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Computer Science",
    linkedin: "https://www.linkedin.com/in/tonygetsin/"
  },
  {
    name: "Kathy Yun",
    role: "Co-Dir. of Jr Consultants",
    image: "/images/kathy-yun-headshot.webp",
    year: "Sophomore",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/kathy-yun-2b4128314/"
  },
  {
    name: "Kira Pan",
    role: "Dir. of Marketing",
    image: "/images/kira-pan-headshot.webp",
    year: "Sophomore",
    major: "Cognitive Science",
    linkedin: "https://www.linkedin.com/in/kira-z-pan"
  },
  {
    name: "Cathryn Chang",
    role: "Jr VP of Operations",
    image: "/images/cathryn-chang-headshot.webp",
    year: "Sophomore",
    major: "Computer Science, Data Science",
    linkedin: "https://www.linkedin.com/in/cathryn-chang/"
  },
  {
    name: "Chiara Rignot",
    role: "Jr External VP",
    image: "/images/chiara-rignot-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Philosophy",
    linkedin: "https://www.linkedin.com/in/chiara-rignot1/"
  },
  {
    name: "Casey Colson",
    role: "Co-Jr Internal VP",
    image: "/images/casey-colson-headshot.webp",
    year: "Sophomore",
    major: "Statistics",
    linkedin: "https://www.linkedin.com/in/caseycolson/"
  },
  {
    name: "Vrushtee Shah",
    role: "Co-Jr Internal VP",
    image: "/images/vrushtee-shah-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Legal Studies",
    linkedin: "https://www.linkedin.com/in/vrushteeshah13/"
  },
]

const consultants: TeamMember[] = [
  {
    name: "Himani Balaga",
    role: "Project Manager",
    image: "/images/himani-balaga-headshot.webp",
    year: "Sophomore",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/himani-balaga/"
  },
  {
    name: "Arjun Kelkar",
    role: "Project Manager",
    image: "/images/arjun-kelkar-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Economics",
    linkedin: "https://www.linkedin.com/in/arjun-kelkar-924598350/"
  },
  {
    name: "Viktor Gonzalez",
    role: "Project Manager",
    image: "/images/viktor-gonzalez-headshot.webp",
    year: "Sophomore",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/viktorggonzalez/"
  },
  {
    name: "Divya Madgula",
    role: "Project Manager",
    image: "/images/divya-madgula-headshot.webp",
    year: "Sophomore",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/divya-madgula-72aa902b5/"
  },
  {
    name: "Hannah Chung",
    role: "Consultant",
    image: "/images/hannah-chung-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Business",
    linkedin: "https://www.linkedin.com/in/hannah-chung-3b41a3271/"
  },
  {
    name: "Reya Puri",
    role: "Consultant",
    image: "/images/reya-puri-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Computer Science",
    linkedin: "https://www.linkedin.com/in/reya-puri-26b1842b9/"
  },
  {
    name: "Ria Voodi",
    role: "Consultant",
    image: "/images/ria-voodi-headshot.webp",
    year: "Sophomore",
    major: "Computer Science, Data Science",
    linkedin: "https://www.linkedin.com/in/ria-voodi-12b085333/"
  },
  {
    name: "Shaivi Shah",
    role: "Consultant",
    image: "/images/shaivi-shah-headshot.webp",
    year: "Sophomore",
    major: "Data Science, Business",
    linkedin: "https://www.linkedin.com/in/shaivi-shah1/"
  },
  {
    name: "Akshay Anand",
    role: "Consultant",
    image: "/images/akshay-anand-headshot.webp",
    year: "Freshman",
    major: "Data Science, Business",
    linkedin: "https://www.linkedin.com/in/akshay-anand-908519279/"
  },
  {
    name: "Ashika Thomas",
    role: "Consultant",
    image: "/images/ashika-thomas-headshot.webp",
    year: "Freshman",
    major: "Data Science, Computer Science",
    linkedin: "https://www.linkedin.com/in/ashika-thomas-a66b162a5/"
  },
  {
    name: "Avyuktha Mattupalli",
    role: "Consultant",
    image: "/images/Avyuktha-mattupalli-headshot.webp",
    year: "Freshman",
    major: "Data Science, Business",
    linkedin: "https://www.linkedin.com/in/avyuktha-mattupalli-89568b329/"
  },
  {
    name: "Bryan Hwang",
    role: "Consultant",
    image: "/images/bryan-hwang-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/bryan-hwang-20b88532b/"
  },
  {
    name: "Dennis Vengerov",
    role: "Consultant",
    image: "/images/dennis-vengerov-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/dennis-vengerov/"
  },
  {
    name: "Dhruv Hebbar",
    role: "Consultant",
    image: "/images/dhruv-hebbar-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/dhruv-hebbar-b29361312/"
  },
  {
    name: "Ethan Wei",
    role: "Consultant",
    image: "/images/ethan-wei-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/ethan-wei-5a95542b2/"
  },
  {
    name: "Hailey Holcomb",
    role: "Consultant",
    image: "/images/hailey-holcomb-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/hailey-holcomb-43a172339/"
  },
  {
    name: "Iman Hundal",
    role: "Consultant",
    image: "/images/iman-hundal-headshot.webp",
    year: "Freshman",
    major: "Data Science, Computer Science",
    linkedin: "https://www.linkedin.com/in/iman-hundal-51917532b/"
  },
  {
    name: "Iris Chao",
    role: "Consultant",
    image: "/images/iris-chao-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/iris-chao-8600692b5/"
  },
  {
    name: "Jack White",
    role: "Consultant",
    image: "/images/jack-white-headshot.webp",
    year: "Freshman",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/jack-white-32a1932b5/"
  },
  {
    name: "Katelyn Jo",
    role: "Consultant",
    image: "/images/katelyn-jo-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/katelyn-jo-42b69b31b/"
  },
  {
    name: "Kirin Desai",
    role: "Consultant",
    image: "/images/kirin-desai-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/kirin-desai-53aa1a32c/"
  },
  {
    name: "Kruna Masic",
    role: "Consultant",
    image: "/images/kruna-masic-headshot.webp",
    year: "Freshman",
    major: "Data Science, Computer Science",
    linkedin: "https://www.linkedin.com/in/kruna-masic-78b20b292/"
  },
  {
    name: "Mason Borgerding",
    role: "Consultant",
    image: "/images/mason-borgerding-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/mason-borgerding-8aa5b032c/"
  },
  {
    name: "Matthew Ho",
    role: "Consultant",
    image: "/images/matthew-ho-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/matthew-ho-7024a532b/"
  },
  {
    name: "Oscar Araujo",
    role: "Consultant",
    image: "/images/oscar-araujo-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/oscar-araujo-42a5b1321/"
  },
  {
    name: "Pulak Dugar",
    role: "Consultant",
    image: "/images/pulak-dugar-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/pulakdugar/"
  },
  {
    name: "Riley Hansen",
    role: "Consultant",
    image: "/images/riley-hansen-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/riley-hansen-96aa04339/"
  },
  {
    name: "Sara Miller",
    role: "Consultant",
    image: "/images/sara-miller-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/sara-miller-19b25a332/"
  },
  {
    name: "Simon Cha",
    role: "Consultant",
    image: "/images/simon-cha-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/simon-cha-7b31b6321/"
  },
]

const juniorConsultants: TeamMember[] = [
  {
    name: "Ajay Kankipati",
    role: "Junior Consultant",
    image: "/images/ajay-kankipati-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/ajay-kankipati-75a5b9330/"
  },
  {
    name: "Alexander Zhao",
    role: "Junior Consultant",
    image: "/images/alexander-zhao-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/alexander-zhao-93679b321/"
  },
  {
    name: "Anthony Kobzar",
    role: "Junior Consultant",
    image: "/images/anthony-kobzar-headshot.webp",
    year: "Freshman",
    major: "Data Science, Economics",
    linkedin: "https://www.linkedin.com/in/anthony-kobzar-2a6a5b321/"
  },
  {
    name: "Arav Sachdeva",
    role: "Junior Consultant",
    image: "/images/arav-sachdeva-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/arav-sachdeva-58b19b321/"
  },
  {
    name: "Avyukth Harish",
    role: "Junior Consultant",
    image: "/images/avyukth-harish-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/avyukth-harish/"
  },
  {
    name: "Cole Dickerson",
    role: "Junior Consultant",
    image: "/images/cole-dickerson-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/cole-dickerson-91a7a8321/"
  },
  {
    name: "Diya Pendyala",
    role: "Junior Consultant",
    image: "/images/diya-pendyala-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/diya-pendyala-5a9b5b321/"
  },
  {
    name: "Jayden Burton",
    role: "Junior Consultant",
    image: "/images/jayden-burton-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/jayden-burton-8aa5b9321/"
  },
  {
    name: "Krishna Narayanasamy",
    role: "Junior Consultant",
    image: "/images/krishna-narayanasamy-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/krishna-narayanasamy-9a85b9321/"
  },
  {
    name: "Paulo Trento",
    role: "Junior Consultant",
    image: "/images/paulo-trento-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/paulo-trento-3a95b9321/"
  },
  {
    name: "Peyton Schales",
    role: "Junior Consultant",
    image: "/images/peyton-schales-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/peyton-schales-7a95b9321/"
  },
  {
    name: "Rohan Dash",
    role: "Junior Consultant",
    image: "/images/rohan-dash-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/rohan-dash-6a85b9321/"
  },
  {
    name: "Rohan Gopalam",
    role: "Junior Consultant",
    image: "/images/rohan-gopalam-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/rohan-gopalam-9a75b9321/"
  },
  {
    name: "Ryan Chan",
    role: "Junior Consultant",
    image: "/images/Ryan-chan-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/ryan-chan-5a95b9321/"
  },
  {
    name: "Victor Shi",
    role: "Junior Consultant",
    image: "/images/victor-shi-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/victor-shi-8a95b9321/"
  },
  {
    name: "Yash Chitambar",
    role: "Junior Consultant",
    image: "/images/yash-chitambar-headshot.webp",
    year: "Freshman",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/yash-chitambar-4a85b9321/"
  },
]

const advisors: TeamMember[] = [
  {
    name: "Aileen Huang",
    role: "Advisor",
    image: "/images/aileen-professional-headshot.webp",
    year: "Alumna",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/aileen-huang/"
  },
  {
    name: "Nikhil Rajgopal",
    role: "Advisor",
    image: "/images/nikhil-rajgopal-headshot.webp",
    year: "Alumnus",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/nikhilrajgopal/"
  },
  {
    name: "Reid Trussler",
    role: "Advisor",
    image: "/images/reid-trussler-headshot.webp",
    year: "Alumnus",
    major: "Data Science",
    linkedin: "https://www.linkedin.com/in/reidtrussler/"
  },
]

// Team member card component
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <GlowingCard className="h-full">
      <motion.div
        className="group relative h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative h-full bg-gradient-to-br from-datastory-surface/80 to-datastory-surfaceLight/60 backdrop-blur-sm rounded-lg p-6 border border-datastory-green/20">
          {/* Profile image with green border glow */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-datastory-green to-datastory-greenBright rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-datastory-green/40 group-hover:border-datastory-green transition-all duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Member info */}
          <div className="text-center space-y-2">
            <h3 className="font-heading text-xl font-bold text-foreground tracking-tight">
              {member.name}
            </h3>
            <p className="font-mono text-sm text-datastory-green font-medium">
              {member.role}
            </p>

            {/* Hover overlay with details */}
            <div className="absolute inset-0 bg-gradient-to-br from-datastory-dark/95 to-datastory-surface/95 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
              <div className="space-y-3 text-center">
                <p className="font-mono text-sm text-datastory-greenBright font-semibold">
                  {member.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.major}
                </p>
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-datastory-green/20 border border-datastory-green/40 hover:bg-datastory-green/30 hover:border-datastory-green transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-datastory-green" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </GlowingCard>
  )
}

export default function Team() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-datastory-dark">
        {/* Grid Background */}
        <GridBackground />

        {/* Mobile Navigation */}
        <MobileNav currentPage="team" />

        {/* Desktop Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 w-full glass-effect border-b border-datastory-green/20 hidden md:block"
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/datastory-logo.webp"
                alt="DataStory Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <nav className="flex items-center gap-8">
              {[
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/development", label: "Development" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-foreground hover-green transition-cyber"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/team"
                className="px-4 py-2 bg-gradient-green text-white font-heading font-semibold rounded-lg"
              >
                Our Team
              </Link>
              <Link to="/apply">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16,185,129,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border-2 border-datastory-green text-datastory-green hover:bg-datastory-green hover:text-white font-heading font-semibold rounded-lg transition-all"
                >
                  Apply Now
                </motion.button>
              </Link>
            </nav>
          </div>
        </motion.header>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial-green blur-3xl opacity-20 animate-float" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-radial-green blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-gradient-green drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  Meet Our Members
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  A diverse team of data scientists, analysts, and consultants driving impact through innovation
                </p>
              </motion.div>
            </div>
          </section>

          {/* Executive Board Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Executive Board
                </h2>
                <div className="h-1 w-24 bg-gradient-green rounded-full mx-auto" />
              </motion.div>

              <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {executiveBoard.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredList>
            </div>
          </section>

          {/* Consultants Section */}
          <section className="py-20 bg-datastory-surface relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Consultants
                </h2>
                <div className="h-1 w-24 bg-gradient-green rounded-full mx-auto" />
              </motion.div>

              <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {consultants.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredList>
            </div>
          </section>

          {/* Junior Consultants Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Junior Consultants
                </h2>
                <div className="h-1 w-24 bg-gradient-green rounded-full mx-auto" />
              </motion.div>

              <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {juniorConsultants.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredList>
            </div>
          </section>

          {/* Advisors Section */}
          <section className="py-20 bg-datastory-surface relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Advisors
                </h2>
                <div className="h-1 w-24 bg-gradient-green rounded-full mx-auto" />
              </motion.div>

              <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {advisors.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredList>
            </div>
          </section>

          {/* Join CTA Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-datastory-green/5 to-datastory-greenBright/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial-green blur-3xl opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Join Our Team
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Be part of Berkeley's premier data consulting organization and work on real-world projects that make an impact.
                </p>
                <Link to="/apply">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-4 bg-gradient-to-r from-datastory-green to-datastory-greenBright text-white font-heading font-bold text-lg rounded-lg overflow-hidden group"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-datastory-greenBright to-datastory-greenGlow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-datastory-darker py-12 border-t border-datastory-green/20 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="md:col-span-2">
                <h3 className="text-xl font-heading font-bold mb-4 text-gradient-green">
                  DataStory at Berkeley
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We are a student group acting independently of the University of California. We take full responsibility
                  for our organization and this website.
                </p>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-4 text-foreground">General</h4>
                <div className="space-y-2">
                  {[
                    { to: "/about", label: "About" },
                    { to: "/projects", label: "Projects" },
                    { to: "/team", label: "Our Team" },
                    { to: "/apply", label: "Apply Now" },
                    { to: "/contact", label: "Contact" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-muted-foreground hover:text-datastory-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-4 text-foreground">Contact</h4>
                <div className="flex gap-4">
                  <a href="mailto:datastory.president@gmail.com">
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-datastory-green cursor-pointer transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/datastoryconsulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-datastory-green cursor-pointer transition-colors" />
                  </a>
                  <a href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-datastory-green cursor-pointer transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}
