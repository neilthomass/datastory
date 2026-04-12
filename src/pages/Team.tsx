import { useState, useEffect, useRef, useCallback } from 'react'
import { Linkedin, Coffee } from 'lucide-react'
import * as d3 from 'd3-force'
import gsap from 'gsap'

// Obsidian-style animations
const styles = `
@keyframes pop-in {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-pop-in {
  animation: pop-in 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fade-in 0.1s ease-out forwards;
}

@keyframes slide-up-fade {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-up-delay-1 {
  opacity: 0;
  animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
}

.animate-slide-up-delay-2 {
  opacity: 0;
  animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.animate-slide-up-delay-3 {
  opacity: 0;
  animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
}

.animate-slide-up-delay-4 {
  opacity: 0;
  animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

.animate-slide-up-delay-5 {
  opacity: 0;
  animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
}
`

interface Node {
  id: string
  name: string
  role: string
  major: string
  linkedin: string
  year: string
  description: string
  interests: string[]
  workHistory: string[]
  x: number
  y: number
  vx: number
  vy: number
  fx?: number | null
  fy?: number | null
}

interface LinkType {
  source: Node
  target: Node
}

// All team members with majors from git history
const teamData = [
  // Executive
  { name: 'Katie Zhang', role: 'President', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/katie-h-zhang/', year: 'Senior', description: 'Leading DataStory with a passion for data-driven decision making and organizational growth.', interests: ['Machine Learning', 'Economic Policy', 'Leadership'], workHistory: ['DataStory President', 'Previous Consulting Intern'] },
  { name: 'Hasset Mekuria', role: 'External VP', major: 'Data Science, Political Science', linkedin: 'https://www.linkedin.com/in/hasset-mekuria-2189b8271', year: 'Junior', description: 'Building external partnerships and expanding DataStory\'s reach across campus and industry.', interests: ['Political Analytics', 'Data Visualization', 'Public Policy'], workHistory: ['DataStory External VP', 'Research Assistant'] },
  { name: 'Shaivi Shah', role: 'Co-Internal VP', major: 'Data Science', linkedin: 'http://www.linkedin.com/in/shaivi-shah-6b9b30305', year: 'Junior', description: 'Fostering community and professional development within the DataStory team.', interests: ['Team Building', 'Data Analytics', 'Event Planning'], workHistory: ['DataStory Co-Internal VP', 'Data Analyst Intern'] },
  { name: 'Nikhil Rajgopal', role: 'Co-Internal VP', major: 'Data Science, Economics', linkedin: 'http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6', year: 'Junior', description: 'Driving internal initiatives and member engagement at DataStory.', interests: ['Econometrics', 'Statistical Modeling', 'Finance'], workHistory: ['DataStory Co-Internal VP', 'Economics Research'] },
  { name: 'Yash Chitambar', role: 'Co-VP of Projects', major: 'Computer Science, Data Science', linkedin: 'https://www.linkedin.com/in/yash-chitambar-b3139829a/', year: 'Junior', description: 'Overseeing client projects and ensuring high-quality deliverables.', interests: ['Software Engineering', 'ML Systems', 'Project Management'], workHistory: ['DataStory Co-VP of Projects', 'Software Engineering Intern'] },
  { name: 'Ajay Kankipati', role: 'Co-VP of Projects', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/ajay-kankipati-86895b271/', year: 'Junior', description: 'Managing project timelines and client relationships for DataStory.', interests: ['Data Engineering', 'Business Analytics', 'Consulting'], workHistory: ['DataStory Co-VP of Projects', 'Data Science Intern'] },
  { name: 'Julia Shvartsman', role: 'VP of Operations', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/julia-shvartsman-4a89692ab/', year: 'Junior', description: 'Streamlining operations and processes to keep DataStory running smoothly.', interests: ['Operations Research', 'Process Optimization', 'Analytics'], workHistory: ['DataStory VP of Operations', 'Operations Analyst'] },
  { name: 'Rayan Sudeora', role: 'VP of Professional Development', major: 'Data Science, Cognitive Science', linkedin: 'https://www.linkedin.com/in/rayansudeora/', year: 'Junior', description: 'Creating learning opportunities and career development resources for members.', interests: ['Cognitive Computing', 'Education', 'Career Development'], workHistory: ['DataStory VP of Professional Development', 'Teaching Assistant'] },
  { name: 'Tony Getsin', role: 'Co-Director of Junior Consultants', major: 'Data Science, Computer Science', linkedin: 'https://www.linkedin.com/in/tonygetsin/', year: 'Sophomore', description: 'Mentoring and developing the next generation of DataStory consultants.', interests: ['Full-Stack Development', 'Data Pipelines', 'Mentorship'], workHistory: ['DataStory Co-Director of Junior Consultants', 'Software Developer'] },
  { name: 'Kathy Yun', role: 'Co-Director of Junior Consultants', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/kathy-yun-2b4128314/', year: 'Sophomore', description: 'Training junior consultants and fostering their growth in data science.', interests: ['Data Visualization', 'Training', 'Analytics'], workHistory: ['DataStory Co-Director of Junior Consultants', 'Data Analyst'] },
  { name: 'Kira Pan', role: 'Director of Marketing', major: 'Cognitive Science', linkedin: 'https://www.linkedin.com/in/kira-z-pan', year: 'Junior', description: 'Leading marketing efforts and brand strategy for DataStory.', interests: ['UX Research', 'Marketing Analytics', 'Design'], workHistory: ['DataStory Director of Marketing', 'Marketing Intern'] },
  { name: 'Cathryn Chang', role: 'Junior VP of Operations', major: 'Computer Science, Data Science', linkedin: 'https://www.linkedin.com/in/cathryn-chang/', year: 'Sophomore', description: 'Supporting operational excellence and team coordination.', interests: ['Systems Design', 'Automation', 'Project Management'], workHistory: ['DataStory Junior VP of Operations', 'Software Engineering Intern'] },
  { name: 'Chiara Rignot', role: 'Junior External VP', major: 'Data Science, Philosophy', linkedin: 'https://www.linkedin.com/in/chiara-rignot1/', year: 'Sophomore', description: 'Building relationships with external partners and sponsors.', interests: ['Ethics in AI', 'Business Development', 'Philosophy'], workHistory: ['DataStory Junior External VP', 'Research Assistant'] },
  { name: 'Casey Colson', role: 'Co-Junior Internal VP', major: 'Statistics', linkedin: 'https://www.linkedin.com/in/caseycolson/', year: 'Sophomore', description: 'Supporting internal programs and member engagement initiatives.', interests: ['Statistical Analysis', 'Community Building', 'Event Planning'], workHistory: ['DataStory Co-Junior Internal VP', 'Statistics Tutor'] },
  { name: 'Vrushtee Shah', role: 'Co-Junior Internal VP', major: 'Data Science, Legal Studies', linkedin: 'https://www.linkedin.com/in/vrushteeshah13/', year: 'Sophomore', description: 'Fostering member connections and internal development programs.', interests: ['Data Privacy', 'Legal Tech', 'Community'], workHistory: ['DataStory Co-Junior Internal VP', 'Legal Research'] },
  // Project Managers
  { name: 'Himani Balaga', role: 'Project Manager', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/himani-balaga/', year: 'Junior', description: 'Leading project teams to deliver impactful data solutions for clients.', interests: ['Project Management', 'Data Analytics', 'Client Relations'], workHistory: ['DataStory Project Manager', 'Data Analyst Intern'] },
  { name: 'Arjun Kelkar', role: 'Project Manager', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/arjun-kelkar-924598350/', year: 'Junior', description: 'Managing end-to-end project delivery with a focus on economic insights.', interests: ['Financial Modeling', 'Econometrics', 'Leadership'], workHistory: ['DataStory Project Manager', 'Economics Research'] },
  { name: 'Viktor Gonzalez', role: 'Project Manager', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/viktor-gonzalez-ab974a343/', year: 'Junior', description: 'Driving project success through effective team coordination and planning.', interests: ['Machine Learning', 'Data Engineering', 'Agile'], workHistory: ['DataStory Project Manager', 'ML Engineer Intern'] },
  { name: 'Dhruv Hebbar', role: 'Project Manager', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/dhruvhebbar', year: 'Junior', description: 'Delivering data-driven solutions with strong economic foundations.', interests: ['Business Intelligence', 'Finance', 'Analytics'], workHistory: ['DataStory Project Manager', 'Finance Intern'] },
  { name: 'Oscar Araujo', role: 'Project Manager', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/oscara-raujo', year: 'Junior', description: 'Leading consulting projects with a blend of data and economic expertise.', interests: ['Consulting', 'Data Strategy', 'Economics'], workHistory: ['DataStory Project Manager', 'Consulting Intern'] },
  // Consultants
  { name: 'Avyukth Harish', role: 'Consultant', major: 'Data Science', linkedin: 'http://linkedin.com/in/avy-harish', year: 'Sophomore', description: 'Contributing to data analysis and insights generation for client projects.', interests: ['Deep Learning', 'Computer Vision', 'Research'], workHistory: ['DataStory Consultant', 'Research Assistant'] },
  { name: 'Alexander Zhao', role: 'Consultant', major: 'Statistics, Data Science', linkedin: 'https://www.linkedin.com/in/alexander-zhao-/', year: 'Sophomore', description: 'Analyzing data to uncover actionable insights for clients.', interests: ['Data Mining', 'Visualization', 'Analytics'], workHistory: ['DataStory Consultant', 'Data Analyst'] },
  { name: 'Anthony Kobzar', role: 'Consultant', major: 'Applied Math, Data Science', linkedin: 'https://www.linkedin.com/in/anthony-kobzar-182889252/', year: 'Sophomore', description: 'Combining data science with economic analysis for comprehensive solutions.', interests: ['Econometrics', 'Financial Analysis', 'Modeling'], workHistory: ['DataStory Consultant', 'Finance Intern'] },
  { name: 'Jayden Burton', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/jaydenburton/', year: 'Sophomore', description: 'Building analytical solutions and supporting project deliverables.', interests: ['Data Engineering', 'Python', 'Automation'], workHistory: ['DataStory Consultant', 'Software Developer'] },
  { name: 'Paulo Trento', role: 'Consultant', major: 'Applied Math, Data Science', linkedin: 'https://www.linkedin.com/in/paulo-trento-469175382/', year: 'Sophomore', description: 'Contributing technical expertise to data-driven consulting projects.', interests: ['Machine Learning', 'Data Analysis', 'Statistics'], workHistory: ['DataStory Consultant', 'Data Science Intern'] },
  { name: 'Rohan Dash', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/rohan-dash-6b83312b1', year: 'Sophomore', description: 'Developing data solutions and supporting client engagements.', interests: ['NLP', 'Data Visualization', 'Research'], workHistory: ['DataStory Consultant', 'Research Assistant'] },
  { name: 'Krishna Narayanasamy', role: 'Consultant', major: 'Data Science', linkedin: 'http://www.linkedin.com/in/krishna-narayanasamy', year: 'Sophomore', description: 'Applying data science skills to solve real-world business problems.', interests: ['AI/ML', 'Cloud Computing', 'Analytics'], workHistory: ['DataStory Consultant', 'Cloud Engineer Intern'] },
  { name: 'Diya Pendyala', role: 'Consultant', major: 'Data Science, Comp Bio', linkedin: '', year: 'Sophomore', description: 'Working on data analysis and visualization for client projects.', interests: ['Data Visualization', 'Storytelling', 'Analytics'], workHistory: ['DataStory Consultant'] },
  { name: 'Cole Dickerson', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/cole-dickerson-43b499324/', year: 'Sophomore', description: 'Contributing to data-driven solutions and client deliverables.', interests: ['Statistical Modeling', 'R Programming', 'Analysis'], workHistory: ['DataStory Consultant', 'Statistics Tutor'] },
  { name: 'Ria Voodi', role: 'Consultant', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/riavoodi/', year: 'Sophomore', description: 'Supporting data analysis and insights generation for projects.', interests: ['Data Science', 'Healthcare Analytics', 'Research'], workHistory: ['DataStory Consultant', 'Health Research'] },
  { name: 'Akshay Anand', role: 'Consultant', major: 'Computer Science', linkedin: 'https://www.linkedin.com/in/akshay-anand-968b27230/', year: 'Sophomore', description: 'Building data pipelines and analytical models for clients.', interests: ['Data Engineering', 'Big Data', 'Python'], workHistory: ['DataStory Consultant', 'Data Engineer Intern'] },
  { name: 'Dennis Vengerov', role: 'Consultant', major: 'Data Science, Computer Science', linkedin: 'https://www.linkedin.com/in/dennis-vengerov-a78376294/', year: 'Sophomore', description: 'Applying analytical skills to deliver insights for client projects.', interests: ['Machine Learning', 'Sports Analytics', 'Statistics'], workHistory: ['DataStory Consultant', 'Sports Data Analyst'] },
  // Senior Advisors
  { name: 'Piya Shah', role: 'Advisor', major: 'Data Science, Statistics', linkedin: 'https://www.linkedin.com/in/piya-shahh/', year: 'Senior', description: 'Providing guidance and mentorship to current DataStory members.', interests: ['Data Strategy', 'Mentorship', 'Analytics'], workHistory: ['DataStory Advisor', 'Former Executive', 'Data Scientist Intern'] },
  { name: 'Katelyn Jo', role: 'Advisor', major: 'Data Science, Cognitive Science', linkedin: 'https://www.linkedin.com/in/katelyn-jo/', year: 'Senior', description: 'Sharing experience and expertise to guide DataStory\'s growth.', interests: ['Product Analytics', 'Leadership', 'Career Development'], workHistory: ['DataStory Advisor', 'Product Analyst Intern'] },
  { name: 'Sara Miller', role: 'Advisor', major: 'Computer Science, Data Science', linkedin: 'https://www.linkedin.com/in/sara-jade-miller/', year: 'Senior', description: 'Mentoring members and advising on strategic initiatives.', interests: ['Business Analytics', 'Consulting', 'Data Science'], workHistory: ['DataStory Advisor', 'Consulting Analyst'] },
  { name: 'Hannah Chung', role: 'Advisor', major: 'Statistics', linkedin: 'https://www.linkedin.com/in/hannah-c-8714121b2/', year: 'Senior', description: 'Supporting the organization with industry insights and mentorship.', interests: ['Tech Industry', 'Data Analytics', 'Networking'], workHistory: ['DataStory Advisor', 'Tech Company Intern'] },
  { name: 'Simon Cha', role: 'Advisor', major: 'Statistics', linkedin: 'https://www.linkedin.com/in/simon-cha/', year: 'Senior', description: 'Providing strategic advice and connecting members with opportunities.', interests: ['Startups', 'Entrepreneurship', 'Data Products'], workHistory: ['DataStory Advisor', 'Startup Experience'] },
  { name: 'Bryan Hwang', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/bryanhwangg/', year: 'Senior', description: 'Guiding DataStory with experience from past leadership roles.', interests: ['Machine Learning', 'Finance', 'Leadership'], workHistory: ['DataStory Advisor', 'ML Engineer Intern'] },
  { name: 'Ethan Wei', role: 'Advisor', major: 'Data Science, Statistics', linkedin: 'https://www.linkedin.com/in/ethan-wei-b24345235/', year: 'Senior', description: 'Mentoring consultants and sharing technical expertise.', interests: ['Data Infrastructure', 'Engineering', 'Mentoring'], workHistory: ['DataStory Advisor', 'Data Engineer'] },
  { name: 'Pulak Dugar', role: 'Advisor', major: 'Computer Science', linkedin: 'https://www.linkedin.com/in/pulak-dugar/', year: 'Senior', description: 'Advising on technical and strategic matters for DataStory.', interests: ['AI Research', 'Deep Learning', 'Strategy'], workHistory: ['DataStory Advisor', 'AI Research Intern'] },
  { name: 'Kayle Marsh', role: 'Advisor', major: 'Computer Science', linkedin: 'http://www.linkedin.com/in/kaylemarsh', year: 'Senior', description: 'Bringing engineering expertise to advise DataStory projects.', interests: ['Systems Engineering', 'Hardware', 'Software'], workHistory: ['DataStory Advisor', 'Engineering Intern'] },
  { name: 'Divya Madgula', role: 'Advisor', major: 'Applied Math, Data Science', linkedin: 'https://www.linkedin.com/in/divya-madgula/', year: 'Senior', description: 'Supporting members with guidance and industry knowledge.', interests: ['Healthcare Data', 'Analytics', 'Research'], workHistory: ['DataStory Advisor', 'Healthcare Analytics'] },
  { name: 'Arav Sachdeva', role: 'Advisor', major: 'Computer Science, Data Science', linkedin: 'https://www.linkedin.com/in/aravs/', year: 'Senior', description: 'Mentoring members and advising on career development.', interests: ['Product Management', 'Data Science', 'Startups'], workHistory: ['DataStory Advisor', 'Product Intern'] },
  { name: 'Reid Trussler', role: 'Advisor', major: 'Computer Science, EEP', linkedin: 'https://www.linkedin.com/in/reid-trussler-77a674264/', year: 'Senior', description: 'Providing insights from industry experience to guide members.', interests: ['Finance Analytics', 'Quantitative Research', 'Trading'], workHistory: ['DataStory Advisor', 'Quant Intern'] },
  { name: 'Avyuktha Mattupalli', role: 'Advisor', major: 'Data Science, MCB', linkedin: 'http://linkedin.com/in/avyuktha-mattupalli-9134a8249', year: 'Senior', description: 'Sharing experience and mentoring current DataStory members.', interests: ['Data Visualization', 'Storytelling', 'Education'], workHistory: ['DataStory Advisor', 'Data Analyst'] },
  { name: 'Riley Hansen', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/riley-hansenn/', year: 'Senior', description: 'Advising on projects and connecting members with resources.', interests: ['Business Intelligence', 'Dashboards', 'Analytics'], workHistory: ['DataStory Advisor', 'BI Analyst Intern'] },
  { name: 'Ashika Thomas', role: 'Advisor', major: 'Data Science, Economics', linkedin: 'http://www.linkedin.com/in/ashikathomas', year: 'Senior', description: 'Supporting DataStory with mentorship and industry insights.', interests: ['NLP', 'Text Analytics', 'Research'], workHistory: ['DataStory Advisor', 'NLP Research'] },
  { name: 'Jack White', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/jack-white-568761272', year: 'Senior', description: 'Bringing technical engineering expertise to advise projects.', interests: ['Software Engineering', 'Systems', 'Architecture'], workHistory: ['DataStory Advisor', 'Software Engineer Intern'] },
  { name: 'Matthew Ho', role: 'Advisor', major: 'Data Science, Public Health', linkedin: 'https://www.linkedin.com/in/matthewho88/', year: 'Senior', description: 'Mentoring members and advising on technical initiatives.', interests: ['Machine Learning', 'Computer Vision', 'Research'], workHistory: ['DataStory Advisor', 'ML Research Intern'] },
  { name: 'Neil Thomas', role: 'Advisor', major: 'Electrical Engineering and Computer Sciences', linkedin: 'https://www.linkedin.com/in/neiltthomas', year: 'Senior', description: 'Interested in anything that provides me dopamine.', interests: ['Philosophy', 'Design', 'Photography'], workHistory: ['Figma', 'DeepLearning.AI', 'Visa', 'BAIR'] },
  { name: 'Rohan Gopalam', role: 'Advisor', major: 'Electrical Engineering and Computer Sciences', linkedin: 'https://www.linkedin.com/in/rohan-gopalam/', year: 'Senior', description: 'Providing guidance and support to DataStory members.', interests: ['Data Engineering', 'Cloud', 'Infrastructure'], workHistory: ['DataStory Advisor', 'Data Engineer Intern'] },
  { name: 'Peyton Schales', role: 'Advisor', major: 'Computer Science', linkedin: 'https://www.linkedin.com/in/peytons224/', year: 'Senior', description: 'Sharing industry experience and mentoring consultants.', interests: ['Sports Analytics', 'Statistics', 'Modeling'], workHistory: ['DataStory Advisor', 'Sports Analyst'] },
]

const roleColors: Record<string, string> = {
  'President': '#10b981',
  'External VP': '#10b981',
  'Co-Internal VP': '#10b981',
  'Co-VP of Projects': '#10b981',
  'VP of Operations': '#10b981',
  'VP of Professional Development': '#10b981',
  'Co-Director of Junior Consultants': '#10b981',
  'Director of Marketing': '#10b981',
  'Junior VP of Operations': '#10b981',
  'Junior External VP': '#10b981',
  'Co-Junior Internal VP': '#10b981',
  'Project Manager': '#34d399',
  'Consultant': '#a7f3d0',
  'Advisor': '#86efac',
}

// Group roles for linking - executives all connect together
const executiveRoles = [
  'President',
  'External VP',
  'Co-Internal VP',
  'Co-VP of Projects',
  'VP of Operations',
  'VP of Professional Development',
  'Co-Director of Junior Consultants',
  'Director of Marketing',
  'Junior VP of Operations',
  'Junior External VP',
  'Co-Junior Internal VP',
]

export default function Team() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node[]>([])
  const linksRef = useRef<LinkType[]>([])
  const simulationRef = useRef<d3.Simulation<Node, LinkType> | null>(null)
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const draggedNodeRef = useRef<Node | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const hoveredNodeRef = useRef<Node | null>(null)
  const selectedNodeRef = useRef<Node | null>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const legendRef = useRef<HTMLDivElement>(null)

  // GSAP intro animation for title and legend
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      gsap.set(['.team-title', '.team-desc', '.team-hint'], { opacity: 0, y: 30 })
      gsap.set(legendRef.current, { opacity: 0, x: 20 })

      tl.to('.team-title', { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
        .to('.team-desc', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to('.team-hint', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to(legendRef.current, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4')
    }, infoRef)

    return () => ctx.revert()
  }, [])

  // Initialize nodes and simulation
  useEffect(() => {
    if (!containerRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight
    setDimensions({ width, height })

    // Create nodes
    const nodes: Node[] = teamData.map((member) => ({
      id: member.name,
      name: member.name,
      role: member.role,
      major: member.major,
      linkedin: member.linkedin,
      year: member.year,
      description: member.description,
      interests: member.interests,
      workHistory: member.workHistory,
      x: width / 2 + (Math.random() - 0.5) * 800,
      y: height / 2 + (Math.random() - 0.5) * 600,
      vx: 0,
      vy: 0,
    }))

    // Create links - executives all connect together, others chain within their group
    const links: LinkType[] = []
    const executives: Node[] = []
    const roleGroups: Record<string, Node[]> = {}

    nodes.forEach(node => {
      if (executiveRoles.includes(node.role)) {
        executives.push(node)
      } else {
        if (!roleGroups[node.role]) roleGroups[node.role] = []
        roleGroups[node.role].push(node)
      }
    })

    // Connect all executives in a chain
    for (let i = 0; i < executives.length - 1; i++) {
      links.push({ source: executives[i], target: executives[i + 1] })
    }

    // Connect nodes in a chain within each non-executive role group
    Object.values(roleGroups).forEach(group => {
      for (let i = 0; i < group.length - 1; i++) {
        links.push({ source: group[i], target: group[i + 1] })
      }
    })

    nodesRef.current = nodes
    linksRef.current = links

    // Define cluster positions for each role group
    const getRolePosition = (role: string): { x: number, y: number } => {
      if (executiveRoles.includes(role)) return { x: width * 0.5, y: height * 0.35 } // Executives top center
      if (role === 'Project Manager') return { x: width * 0.35, y: height * 0.55 } // PMs left
      if (role === 'Consultant') return { x: width * 0.65, y: height * 0.55 } // Consultants right
      if (role === 'Advisor') return { x: width * 0.5, y: height * 0.7 } // Advisors bottom center
      return { x: width * 0.5, y: height * 0.5 }
    }

    // Create force simulation with clustering by role
    const simulation = d3.forceSimulation<Node>(nodes)
      .force('charge', d3.forceManyBody<Node>().strength(-40))
      .force('collision', d3.forceCollide<Node>().radius(35))
      .force('link', d3.forceLink<Node, LinkType>(links).distance(40).strength(0.5))
      .force('x', d3.forceX<Node>((d: Node) => getRolePosition(d.role).x).strength(0.1))
      .force('y', d3.forceY<Node>((d: Node) => getRolePosition(d.role).y).strength(0.1))
      .alphaDecay(0.015)
      .velocityDecay(0.5)

    simulationRef.current = simulation

    // Animation loop
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    let animationId: number

    const render = () => {
      // Keep nodes within bounds
      const padding = 60
      nodesRef.current.forEach(node => {
        node.x = Math.max(padding, Math.min(width - padding, node.x))
        node.y = Math.max(padding, Math.min(height - padding, node.y))
      })

      ctx.clearRect(0, 0, width, height)

      // Clear with white background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // Draw links
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.lineWidth = 1
      linksRef.current.forEach(link => {
        ctx.beginPath()
        ctx.moveTo(link.source.x, link.source.y)
        ctx.lineTo(link.target.x, link.target.y)
        ctx.stroke()
      })

      // Draw nodes
      nodesRef.current.forEach(node => {
        const isHovered = hoveredNodeRef.current?.id === node.id
        const isSelected = selectedNodeRef.current?.id === node.id
        const color = roleColors[node.role] || '#10b981'
        const radius = 8

        // Node circle
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()

        // Full name label
        ctx.fillStyle = isHovered || isSelected ? '#0f172a' : '#64748b'
        ctx.font = '10px system-ui'
        ctx.textAlign = 'center'
        ctx.fillText(node.name, node.x, node.y + radius + 16)
      })

      animationId = requestAnimationFrame(render)
    }

    simulation.on('tick', () => {
      // Render is already running via requestAnimationFrame
    })

    render()

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      setDimensions({ width: newWidth, height: newHeight })

      canvas.width = newWidth * dpr
      canvas.height = newHeight * dpr
      ctx.scale(dpr, dpr)

      // Update role positions for new dimensions
      const getNewRolePosition = (role: string): { x: number, y: number } => {
        if (executiveRoles.includes(role)) return { x: newWidth * 0.5, y: newHeight * 0.35 }
        if (role === 'Project Manager') return { x: newWidth * 0.35, y: newHeight * 0.55 }
        if (role === 'Consultant') return { x: newWidth * 0.65, y: newHeight * 0.55 }
        if (role === 'Advisor') return { x: newWidth * 0.5, y: newHeight * 0.7 }
        return { x: newWidth * 0.5, y: newHeight * 0.5 }
      }

      simulation.force('x', d3.forceX<Node>((d: Node) => getNewRolePosition(d.role).x).strength(0.1))
      simulation.force('y', d3.forceY<Node>((d: Node) => getNewRolePosition(d.role).y).strength(0.1))
      simulation.alpha(0.3).restart()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      simulation.stop()
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Find node at position
  const getNodeAtPosition = useCallback((x: number, y: number): Node | null => {
    for (const node of nodesRef.current) {
      const dx = node.x - x
      const dy = node.y - y
      if (dx * dx + dy * dy < 625) { // 25px radius
        return node
      }
    }
    return null
  }, [])

  // Mouse handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseRef.current = { x, y }

    if (draggedNodeRef.current) {
      draggedNodeRef.current.fx = x
      draggedNodeRef.current.fy = y
      simulationRef.current?.alpha(0.3).restart()
    } else {
      const node = getNodeAtPosition(x, y)
      hoveredNodeRef.current = node
      if (canvasRef.current) {
        canvasRef.current.style.cursor = node ? 'grab' : 'default'
      }
    }
  }, [getNodeAtPosition])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const node = getNodeAtPosition(x, y)

    if (node) {
      draggedNodeRef.current = node
      node.fx = x
      node.fy = y
      simulationRef.current?.alphaTarget(0.3).restart()
      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grabbing'
      }
    }
  }, [getNodeAtPosition])

  const handleMouseUp = useCallback(() => {
    if (draggedNodeRef.current) {
      draggedNodeRef.current.fx = null
      draggedNodeRef.current.fy = null
      simulationRef.current?.alphaTarget(0)
    }
    draggedNodeRef.current = null
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'default'
    }
  }, [])

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (draggedNodeRef.current) return

    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const node = getNodeAtPosition(x, y)

    if (node) {
      selectedNodeRef.current = node
      setSelectedNode(node)
    }
  }, [getNodeAtPosition])

  return (
    <div className="h-screen bg-white overflow-hidden relative">
      <style>{styles}</style>
      {/* Graph - Full screen */}
      <div
        ref={containerRef}
        className="w-full h-full bg-white"
      >
        <canvas
          ref={canvasRef}
          style={{ width: dimensions.width, height: dimensions.height, display: 'block' }}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleClick}
        />
      </div>

      {/* Bottom left corner - Title/Person details, Description, and Legend */}
      <div ref={infoRef} className="absolute bottom-8 left-8 text-left max-w-md">
        {selectedNode ? (
          // Person details when a node is selected
          <div key={selectedNode.id} className="pt-8">
            <span
              className="px-3 py-1 rounded-full text-sm font-medium text-white inline-block mb-3 animate-slide-up"
              style={{ backgroundColor: roleColors[selectedNode.role] || '#10b981' }}
            >
              {selectedNode.role}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-slate-900 animate-slide-up-delay-1">
              {selectedNode.name}
            </h1>

            <p className="mt-4 text-lg text-slate-600 animate-slide-up-delay-2">
              {selectedNode.major}
            </p>

            <div className="mt-5 animate-slide-up-delay-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Interests</h3>
              <p className="mt-2 text-slate-600 text-sm">
                {selectedNode.interests.join(', ')}
              </p>
            </div>

            <div className="mt-5 animate-slide-up-delay-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Experience</h3>
              <p className="mt-2 text-slate-600 text-sm">
                {selectedNode.workHistory.join(', ')}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 animate-slide-up-delay-5">
              {selectedNode.linkedin && (
                <a
                  href={selectedNode.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                <Coffee className="w-4 h-4" />
                Coffee Chat
              </a>
            </div>
          </div>
        ) : (
          // Default team view
          <>
            <h1 className="team-title text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-slate-900">
              Our Team
            </h1>
            <p className="team-desc mt-3 mb-5 text-lg text-slate-500 max-w-lg">
              Meet the talented individuals who drive DataStory forward. Our team combines diverse backgrounds in data science, business, and technology to deliver exceptional results.
            </p>
            <p className="team-hint text-slate-400 text-xs mt-4">
              Drag nodes to rearrange. Click for details.
            </p>
          </>
        )}
      </div>

      {/* Legend - Bottom right corner */}
      <div ref={legendRef} className="absolute bottom-8 right-8">
        <div className="flex flex-col gap-2">
          {[
            { label: 'Executive', color: '#10b981' },
            { label: 'Project Managers', color: '#34d399' },
            { label: 'Consultants', color: '#a7f3d0' },
            { label: 'Advisors', color: '#86efac' },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
