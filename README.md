# DataStory Website

A modern, high-performance website for DataStory, UC Berkeley's premier student-led data science consulting organization.

**Built by [Neil Thomas](https://linkedin.com/in/neiltthomas)**

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **GSAP** for smooth, performant animations
- **React Router** for client-side routing
- **Lucide React** for icons

## Design Decisions

### Visual Identity

The design balances professionalism with approachability—reflecting DataStory's dual identity as a serious consulting organization and a close-knit student community.

- **Color Palette**: Emerald green (`emerald-600`) as the primary accent, paired with slate grays for text hierarchy. The green conveys growth and data/tech while remaining distinctive.
- **Typography**: System font stack with tight letter-spacing (`tracking-[-0.02em]` to `tracking-[-0.03em]`) for headlines, creating a modern, premium feel.
- **Spacing**: Generous whitespace with consistent section padding (`py-32`) to let content breathe.

### Navigation

Implemented a **floating pill navigation** inspired by modern SaaS products:

- Starts at full width (`max-w-[90rem]`) when at top of page
- Shrinks to a compact floating pill (`max-w-7xl`) on scroll
- Gains `backdrop-blur-xl`, rounded corners, and subtle shadow when scrolled
- Smooth 700ms ease-out transitions for all state changes
- Separate simplified mobile navigation

### Animation Philosophy

Animations serve a purpose—they guide attention and provide feedback, never distract:

- **GSAP ScrollTrigger** for scroll-based reveals with `power3.out` easing
- **Staggered animations** for card groups to create visual rhythm
- **Subtle hover states** with transform and color transitions
- **ScrollScaleSection component** creates depth by scaling content sections as they enter/exit viewport

### Component Patterns

#### ScrollScaleSection
A reusable wrapper that creates an immersive effect where sections scale up from 95% to 100% as they scroll into view, with rounded corners that flatten at full scale.

#### TiltCard
Interactive cards with subtle 3D tilt effect on hover, adding tactile feedback without overwhelming the design.

#### DelicateAsciiDots / SlidingEaseVerticalBars
Custom background components that add visual interest to hero sections without competing with content.

### Image Strategy

- **WebP format** throughout for optimal compression
- Images served from `/public/images/` for direct static serving
- Company logos as **optimized SVGs** with cropped viewBoxes to eliminate whitespace
- Lazy loading where appropriate

### Logo Carousel

The alumni companies section uses a dual-row infinite marquee:
- Row 1 scrolls left, Row 2 scrolls right (reversed company order)
- CSS animations with `animation-play-state: paused` on hover
- Gradient masks on edges for smooth fade effect
- SVG logos normalized to consistent height (`h-7`)

### Responsive Design

Mobile-first approach with breakpoints:
- Base styles for mobile
- `md:` (768px) for tablet adjustments
- `lg:` (1024px) for desktop layouts

Key responsive patterns:
- Single column → multi-column grids
- Reduced padding on mobile
- Simplified navigation with hamburger menu
- Touch-friendly tap targets

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DelicateAsciiDots.tsx
│   ├── ScrollScaleSection.tsx
│   ├── SlidingEaseVerticalBars.tsx
│   └── TiltCard.tsx
├── pages/              # Route components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   └── Apply.tsx
├── Layout.tsx          # Main layout with nav/footer
└── main.tsx           # App entry point

public/
├── images/            # Static images (WebP)
└── logos/             # Company logos (SVG)
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```

## Performance Considerations

- **No heavy dependencies** - avoided large component libraries
- **GSAP over Framer Motion** for animation-heavy pages (smaller bundle for our use case)
- **SVG optimization** - manually cropped viewBoxes to remove padding
- **Minimal JavaScript** - CSS transitions where possible, JS animations only when needed
- **Static assets** in public folder bypass bundling for faster builds

## Design References

Navigation shrink effect inspired by modern product sites like Linear and Vercel, adapted to fit DataStory's brand identity.
