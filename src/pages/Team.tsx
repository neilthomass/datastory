import { useState, useEffect, useRef, useCallback } from 'react'
import { Linkedin, Coffee, X } from 'lucide-react'
import * as d3 from 'd3-force'

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
`

interface Node {
  id: string
  name: string
  role: string
  major: string
  linkedin: string
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
  { name: 'Katie Zhang', role: 'President', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/katie-h-zhang/' },
  { name: 'Hasset Mekuria', role: 'External VP', major: 'Data Science, Political Science', linkedin: 'https://www.linkedin.com/in/hasset-mekuria-2189b8271' },
  { name: 'Shaivi Shah', role: 'Co-Internal VP', major: 'Data Science', linkedin: 'http://www.linkedin.com/in/shaivi-shah-6b9b30305' },
  { name: 'Nikhil Rajgopal', role: 'Co-Internal VP', major: 'Data Science, Economics', linkedin: 'http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6' },
  { name: 'Yash Chitambar', role: 'Co-VP of Projects', major: 'Computer Science, Data Science', linkedin: 'https://www.linkedin.com/in/yash-chitambar-b3139829a/' },
  { name: 'Ajay Kankipati', role: 'Co-VP of Projects', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/ajay-kankipati-86895b271/' },
  { name: 'Julia Shvartsman', role: 'VP of Operations', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/julia-shvartsman-4a89692ab/' },
  { name: 'Rayan Sudeora', role: 'VP of Professional Development', major: 'Data Science, Cognitive Science', linkedin: 'https://www.linkedin.com/in/rayansudeora/' },
  { name: 'Tony Getsin', role: 'Co-Director of Junior Consultants', major: 'Data Science, Computer Science', linkedin: 'https://www.linkedin.com/in/tonygetsin/' },
  { name: 'Kathy Yun', role: 'Co-Director of Junior Consultants', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/kathy-yun-2b4128314/' },
  { name: 'Kira Pan', role: 'Director of Marketing', major: 'Cognitive Science', linkedin: 'https://www.linkedin.com/in/kira-z-pan' },
  { name: 'Cathryn Chang', role: 'Junior VP of Operations', major: 'Computer Science, Data Science', linkedin: 'https://www.linkedin.com/in/cathryn-chang/' },
  { name: 'Chiara Rignot', role: 'Junior External VP', major: 'Data Science, Philosophy', linkedin: 'https://www.linkedin.com/in/chiara-rignot1/' },
  { name: 'Casey Colson', role: 'Co-Junior Internal VP', major: 'Statistics', linkedin: 'https://www.linkedin.com/in/caseycolson/' },
  { name: 'Vrushtee Shah', role: 'Co-Junior Internal VP', major: 'Data Science, Legal Studies', linkedin: 'https://www.linkedin.com/in/vrushteeshah13/' },
  // Project Managers
  { name: 'Himani Balaga', role: 'Project Manager', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/himani-balaga/' },
  { name: 'Arjun Kelkar', role: 'Project Manager', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/arjun-kelkar-924598350/' },
  { name: 'Viktor Gonzalez', role: 'Project Manager', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/viktor-gonzalez-ab974a343/' },
  { name: 'Dhruv Hebbar', role: 'Project Manager', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/dhruvhebbar' },
  { name: 'Oscar Araujo', role: 'Project Manager', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/oscara-raujo' },
  // Consultants
  { name: 'Avyukth Harish', role: 'Consultant', major: 'Data Science', linkedin: 'http://linkedin.com/in/avy-harish' },
  { name: 'Alexander Zhao', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/alexander-zhao-/' },
  { name: 'Anthony Kobzar', role: 'Consultant', major: 'Data Science, Economics', linkedin: 'https://www.linkedin.com/in/anthony-kobzar-182889252/' },
  { name: 'Jayden Burton', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/jaydenburton/' },
  { name: 'Paulo Trento', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/paulo-trento-469175382/' },
  { name: 'Rohan Dash', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/rohan-dash-6b83312b1' },
  { name: 'Krishna Narayanasamy', role: 'Consultant', major: 'Data Science', linkedin: 'http://www.linkedin.com/in/krishna-narayanasamy' },
  { name: 'Diya Pendyala', role: 'Consultant', major: 'Data Science', linkedin: '' },
  { name: 'Cole Dickerson', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/cole-dickerson-43b499324/' },
  { name: 'Ria Voodi', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/riavoodi/' },
  { name: 'Akshay Anand', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/akshay-anand-968b27230/' },
  { name: 'Dennis Vengerov', role: 'Consultant', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/dennis-vengerov-a78376294/' },
  // Senior Advisors
  { name: 'Piya Shah', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/piya-shahh/' },
  { name: 'Katelyn Jo', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/katelyn-jo/' },
  { name: 'Sara Miller', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/sara-jade-miller/' },
  { name: 'Hannah Chung', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/hannah-c-8714121b2/' },
  { name: 'Simon Cha', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/simon-cha/' },
  { name: 'Bryan Hwang', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/bryanhwangg/' },
  { name: 'Ethan Wei', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/ethan-wei-b24345235/' },
  { name: 'Pulak Dugar', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/pulak-dugar/' },
  { name: 'Kayle Marsh', role: 'Advisor', major: 'Electrical Engineering and Computer Science', linkedin: 'http://www.linkedin.com/in/kaylemarsh' },
  { name: 'Divya Madgula', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/divya-madgula/' },
  { name: 'Arav Sachdeva', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/aravs/' },
  { name: 'Reid Trussler', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/reid-trussler-77a674264/' },
  { name: 'Avyuktha Mattupalli', role: 'Advisor', major: 'Data Science', linkedin: 'http://linkedin.com/in/avyuktha-mattupalli-9134a8249' },
  { name: 'Riley Hansen', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/riley-hansenn/' },
  { name: 'Ashika Thomas', role: 'Advisor', major: 'Data Science', linkedin: 'http://www.linkedin.com/in/ashikathomas' },
  { name: 'Jack White', role: 'Advisor', major: 'Electrical Engineering and Computer Science', linkedin: 'https://www.linkedin.com/in/jack-white-568761272' },
  { name: 'Matthew Ho', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/matthewho88/' },
  { name: 'Neil Thomas', role: 'Advisor', major: 'Data Science, Electrical Engineering and Computer Science', linkedin: 'https://www.linkedin.com/in/neiltthomas' },
  { name: 'Rohan Gopalam', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/rohan-gopalam/' },
  { name: 'Peyton Schales', role: 'Advisor', major: 'Data Science', linkedin: 'https://www.linkedin.com/in/peytons224/' },
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
  'Project Manager': '#6ee7b7',
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
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const draggedNodeRef = useRef<Node | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

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
      x: width / 2 + (Math.random() - 0.5) * 400,
      y: height / 2 + (Math.random() - 0.5) * 400,
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

    // Create force simulation with stronger containment
    const simulation = d3.forceSimulation<Node>(nodes)
      .force('charge', d3.forceManyBody<Node>().strength(-80))
      .force('center', d3.forceCenter<Node>(width / 2, height / 2))
      .force('collision', d3.forceCollide<Node>().radius(40))
      .force('link', d3.forceLink<Node, LinkType>(links).distance(60).strength(0.4))
      .force('x', d3.forceX<Node>(width / 2).strength(0.12))
      .force('y', d3.forceY<Node>(height / 2).strength(0.12))
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
        const isHovered = hoveredNode?.id === node.id
        const isSelected = selectedNode?.id === node.id
        const color = roleColors[node.role] || '#10b981'
        const radius = isHovered || isSelected ? 12 : 8

        // Glow effect
        if (isHovered || isSelected) {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 35)
          gradient.addColorStop(0, color + '40')
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(node.x, node.y, 35, 0, Math.PI * 2)
          ctx.fill()
        }

        // Node circle
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()

        // Full name label
        ctx.fillStyle = isHovered || isSelected ? '#1e293b' : '#64748b'
        ctx.font = isHovered || isSelected ? 'bold 11px system-ui' : '10px system-ui'
        ctx.textAlign = 'center'
        ctx.fillText(node.name, node.x, node.y + radius + 16)
      })

      requestAnimationFrame(render)
    }

    simulation.on('tick', render)
    render()

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      setDimensions({ width: newWidth, height: newHeight })

      canvas.width = newWidth * dpr
      canvas.height = newHeight * dpr
      ctx.scale(dpr, dpr)

      simulation.force('center', d3.forceCenter<Node>(newWidth / 2, newHeight / 2))
      simulation.force('x', d3.forceX<Node>(newWidth / 2).strength(0.12))
      simulation.force('y', d3.forceY<Node>(newHeight / 2).strength(0.12))
      simulation.alpha(0.3).restart()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      simulation.stop()
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
      setHoveredNode(node)
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

      {/* Bottom left corner - Title, Description, and Legend */}
      <div className="absolute bottom-8 left-8 text-left">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-slate-900">
          Our Team
        </h1>
        <p className="mt-3 mb-5 text-lg text-slate-500 max-w-lg">
          Meet the talented individuals who drive DataStory forward. Our team combines diverse backgrounds in data science, business, and technology to deliver exceptional results.
        </p>
        <div className="flex flex-wrap gap-5">
          {[
            { label: 'Executive', color: '#10b981' },
            { label: 'Project Managers', color: '#6ee7b7' },
            { label: 'Consultants', color: '#a7f3d0' },
            { label: 'Advisors', color: '#86efac' },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-base text-slate-500">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-xs mt-4">
          Drag nodes to rearrange. Click for details.
        </p>
      </div>

      {/* Selected Node Modal - Obsidian-style pop-in */}
      {selectedNode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedNode(null)}
        >
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
          <div
            className="relative bg-white rounded-xl p-6 max-w-xs w-full shadow-lg border border-slate-200/50 animate-pop-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            <div className="text-center">
              {/* Node representation */}
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: (roleColors[selectedNode.role] || '#10b981') + '20' }}
              >
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: roleColors[selectedNode.role] || '#10b981' }}
                />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                {selectedNode.name}
              </h3>
              <p className="mt-1 text-slate-600">
                {selectedNode.role}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {selectedNode.major}
              </p>

              <div className="mt-8 flex gap-3 justify-center">
                {selectedNode.linkedin && (
                  <a
                    href={selectedNode.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-full text-sm font-medium hover:bg-[#006699] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-900 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  <Coffee className="w-4 h-4" />
                  Coffee Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
