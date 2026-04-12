import { motion } from 'framer-motion'
import { Calendar, User, Coffee, ExternalLink } from 'lucide-react'
import { GlowingCard } from './GlowingCard'
import { StaggeredList } from './StaggeredList'

interface CoffeeChat {
  id: number
  name: string
  role: string
  date: string
  time: string
  topic: string
  link: string
  available: boolean
}

const coffeeChatData: CoffeeChat[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Consultant",
    date: "March 15, 2026",
    time: "2:00 PM - 2:30 PM",
    topic: "Data Science Career Paths",
    link: "https://example.com/coffee-chat-1",
    available: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "ML Engineer",
    date: "March 16, 2026",
    time: "3:00 PM - 3:30 PM",
    topic: "Machine Learning in Practice",
    link: "https://example.com/coffee-chat-2",
    available: true,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Data Analyst",
    date: "March 17, 2026",
    time: "1:00 PM - 1:30 PM",
    topic: "Getting Started with Analytics",
    link: "https://example.com/coffee-chat-3",
    available: false,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Software Engineer",
    date: "March 18, 2026",
    time: "4:00 PM - 4:30 PM",
    topic: "Full-Stack Development",
    link: "https://example.com/coffee-chat-4",
    available: true,
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Product Manager",
    date: "March 19, 2026",
    time: "2:30 PM - 3:00 PM",
    topic: "Data-Driven Product Strategy",
    link: "https://example.com/coffee-chat-5",
    available: true,
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "DevOps Consultant",
    date: "March 20, 2026",
    time: "11:00 AM - 11:30 AM",
    topic: "Cloud Infrastructure & Data Pipelines",
    link: "https://example.com/coffee-chat-6",
    available: false,
  },
  {
    id: 7,
    name: "Lisa Zhang",
    role: "Data Visualization Specialist",
    date: "March 21, 2026",
    time: "3:30 PM - 4:00 PM",
    topic: "Storytelling with Data",
    link: "https://example.com/coffee-chat-7",
    available: true,
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Business Intelligence Lead",
    date: "March 22, 2026",
    time: "1:30 PM - 2:00 PM",
    topic: "BI Tools & Best Practices",
    link: "https://example.com/coffee-chat-8",
    available: true,
  },
]

export function CoffeeChats() {
  const chatCards = coffeeChatData.map((chat) => (
    <div key={chat.id}>
      <GlowingCard className="h-full">
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-green flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">{chat.name}</h3>
                <p className="text-sm text-datastory-green font-mono">{chat.role}</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-mono ${
              chat.available
                ? 'bg-datastory-green/20 text-datastory-greenBright border border-datastory-green/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {chat.available ? 'Available' : 'Booked'}
            </div>
          </div>

          {/* Topic */}
          <div className="mb-4 flex items-start gap-2">
            <Coffee className="w-5 h-5 text-datastory-green mt-0.5 flex-shrink-0" />
            <p className="text-foreground font-medium">{chat.topic}</p>
          </div>

          {/* Date & Time */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-datastory-teal" />
              <span>{chat.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <span className="text-datastory-teal">⏰</span>
              <span>{chat.time}</span>
            </div>
          </div>

          {/* Book Button */}
          <div className="mt-auto">
            {chat.available ? (
              <motion.a
                href={chat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-green text-white py-3 rounded-lg font-heading font-semibold hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Book Coffee Chat
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ) : (
              <button
                disabled
                className="w-full bg-datastory-surface text-muted-foreground py-3 rounded-lg font-heading font-semibold cursor-not-allowed opacity-50"
              >
                Fully Booked
              </button>
            )}
          </div>
        </div>
      </GlowingCard>
    </div>
  ))

  return (
    <div className="w-full">
      <StaggeredList
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.1}
      >
        {chatCards}
      </StaggeredList>
    </div>
  )
}
