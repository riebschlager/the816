# the816.com Design

## Visual Principles
- **Clean and fast** - Performance is part of the aesthetic
- **Subtle but memorable** - Interaction that rewards attention without demanding it
- **Technically expressive** - The design should demonstrate technical capability
- **Avoid scroll-jacking** - Respect user control, enhance don't hijack
- **Intentional interaction** - Every interactive element has purpose

## Homepage: Experimental Canvas

### Concept
Geometric grid with Perlin noise creating organic movement within structured form. The effect should feel like watching systems respond to invisible forces - echoing the nature of interactive installations.

### Technical Approach
- Three.js canvas element
- Grid-based geometry (planes, lines, or points)
- Perlin/Simplex noise driving subtle vertex displacement
- Responds to mouse position (subtle, not aggressive)
- May respond to scroll position for transition to content
- Monochromatic or subtle color palette
- 60fps performance target

### Interaction Characteristics
- **Subtle** - Noticeable but not distracting
- **Organic** - Feels fluid and natural, not mechanical
- **Responsive** - Acknowledges user presence without pandering
- **Performance-conscious** - Degrades gracefully on lower-end devices

### Visual References/Inspiration
- Structured systems with organic behavior
- Architectural forms that breathe
- Data visualization aesthetics
- Real-time creative coding aesthetics

## Project Pages

### Layout
- Large hero image/video at top
- Clean typography for body content
- Technical details presented clearly without cluttering narrative
- Image galleries where appropriate
- Video embeds for process/outcome documentation

### Content Hierarchy
1. Visual impact first (hero media)
2. Context and story (challenge/approach)
3. Technical depth (interesting problems/solutions)
4. Outcome (how it lived in the world)

### Media Handling
- High-quality project documentation
- Process images/diagrams where relevant
- Video clips showing interaction and experience
- Optimized for web delivery

## Blog/Writing Pages

### Layout
- Generous reading width (60-70 characters)
- Clean typography prioritizing readability
- Code syntax highlighting for technical posts
- Inline images and diagrams
- Project embeds/demos where appropriate

### Content Style
Based on existing Medium posts:
- Technical but approachable
- Story-driven with real context
- Genuine enthusiasm
- Practical examples and downloadable resources
- Mix of tutorials, project narratives, and thinking pieces

## Typography
- **Headings**: Modern sans-serif with personality (consider: Inter, Space Grotesk, or similar)
- **Body**: Highly readable serif or sans-serif (consider: Georgia, Merriweather, or Inter for sans)
- **Code**: Monospace with good distinction (Fira Code, JetBrains Mono)

## Color Palette
TBD - but considerations:
- Start with near-monochrome (grays, single accent color)
- High contrast for readability
- Colors that work with project imagery
- Sophisticated, not garish

## Interaction & Animation Patterns

### Scroll Effects
- Subtle parallax where it enhances understanding (not gratuitous)
- Fade-in on scroll for progressive revelation
- Smooth transitions between sections
- **Never** hijack native scroll behavior

### Mouse/Touch Effects
- Hover states that provide clear feedback
- Cursor changes for interactive elements
- Responsive project thumbnails (subtle scale, glow, or movement)
- Touch-friendly hit targets (min 44x44px)

### Page Transitions
- Fast and subtle
- Consider fade or slide transitions between routes
- Loading states for heavy content

## Components to Design

### Navigation
- Clean, minimal header
- Fixed or smart hide/show on scroll
- Clear current page indication
- Mobile hamburger menu (if needed)

### Project Grid
- Responsive grid (1-3 columns depending on viewport)
- Thumbnail + title + brief description
- Subtle interaction on hover
- Clear visual hierarchy

### Footer
- Contact information
- Social/professional links (LinkedIn, GitHub, etc.)
- Secondary navigation (Resources, Resume)
- Copyright/attribution

## Responsive Breakpoints
- Mobile: <640px
- Tablet: 640-1024px
- Desktop: >1024px
- Large screens: >1440px

## Accessibility
- Semantic HTML throughout
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where appropriate
- Color contrast meeting WCAG AA standards
- Interactive canvas has fallback or skip option

## Technical Considerations
- **Interactive elements**: Use Astro's client:* directives for hydration control
- **Images**: Use Astro's Image component for optimization
- **Performance**: Bundle size monitoring, lazy loading
- **Dark mode**: Consider supporting later, but not v1 requirement

## Things to Avoid
- Overly aggressive animations
- Auto-playing video with sound
- Modal/popup overload
- Unnecessary complexity
- Generic "creative agency" aesthetics
- Scroll-jacking or disabled native scroll
