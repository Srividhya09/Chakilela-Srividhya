# Portfolio Website Specification for Chakilela Srividhya

## Project Overview
- **Project Name**: Srividhya's Portfolio
- **Type**: Single-page professional portfolio website
- **Core Functionality**: A high-end, FAANG-level portfolio showcasing AIML student skills, projects, education, and achievements with a sophisticated dark theme
- **Target Users**: Recruiters from top tech companies (FAANG), hiring managers, technical recruiters

## Target User
- **Name**: Chakilela Srividhya
- **Role**: B.Tech Final Year Student - AIML (Artificial Intelligence & Machine Learning)
- **Goal**: Attract attention from FAANG companies with a professional, polished portfolio

## Color Scheme (FAANG-Level Professional)
- **Primary Background**: `#0a0a0f` (Deep black with slight blue undertone)
- **Secondary Background**: `#12121a` (Card backgrounds)
- **Tertiary Background**: `#1a1a24` (Hover states)
- **Primary Accent**: `#00d4aa` (Teal/Mint - professional, tech-forward)
- **Secondary Accent**: `#7c3aed` (Violet - for gradients/highlights)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a0a0b0`
- **Text Muted**: `#6b6b7b`
- **Border Color**: `#2a2a3a`
- **Success/Glow**: `#00d4aa` with subtle glow effects

## Typography
- **Primary Font**: "Sora" (Google Fonts) - Modern, geometric, distinctive
- **Secondary Font**: "JetBrains Mono" (Google Fonts) - For code/technical elements
- **Heading Sizes**: 
  - H1: 4rem (hero), H2: 2.5rem (sections), H3: 1.5rem (cards)
- **Body**: 1rem, line-height 1.7
- **Small**: 0.875rem

## Sections Required

### 1. Navigation (Fixed)
- Logo with animated glow effect
- Nav links: Home, About, Education, Projects, Skills, Internships, Certifications, Resume, Contact
- Smooth scroll behavior
- Mobile hamburger menu

### 2. Hero Section
- Animated typing effect for roles (AIML Engineer, Data Scientist, ML Enthusiast)
- Name with gradient text effect
- Brief tagline
- Two CTA buttons: "View Projects" and "Contact Me"
- Floating particle/grid background animation
- Scroll indicator

### 3. About Me
- Professional photo placeholder with border animation
- Brief bio highlighting AIML focus
- Key highlights in a grid
- "Why Hire Me" section

### 4. Education
- Timeline layout (vertical line with nodes)
- Degree details: B.Tech AIML
- CGPA/Percentage highlight
- Relevant coursework
- Awards/achievements

### 5. Projects (Card Grid)
- Project cards with hover effects
- Tech stack badges
- GitHub/Live demo links
- Brief description
- Image placeholders for projects (4-6 projects)
- Filter by category (if applicable)

### 6. Skills
- Technical Skills: Programming languages, ML frameworks, tools
- Visual progress bars or circular charts
- Categorized: Languages, ML/DL, Tools, Soft Skills

### 7. Internships
- Timeline or card format
- Company name, role, duration
- Key responsibilities/achievements

### 8. Certifications
- Grid of certification cards
- Issuing organization
- Date earned
- Verification links (if applicable)

### 9. Resume
- Download button (prominent)
- Quick preview section
- Key highlights

### 10. Contact
- Contact form (name, email, message)
- Social links: LinkedIn, GitHub, Twitter, LeetCode
- Email display
- Location (if comfortable)

## Additional Features

### Animations & Effects
- Smooth page scroll animations (fade-in on scroll)
- Hover effects on all interactive elements
- Cursor trail or custom cursor (optional)
- Gradient text on headings
- Glassmorphism cards
- Subtle parallax on hero section

### Responsive Design
- Desktop: Full layout (>1024px)
- Tablet: 2-column where needed (768px-1024px)
- Mobile: Single column, hamburger menu (<768px)

### Performance
- Lazy loading for images
- Optimized CSS animations
- Clean, semantic HTML

## Extra Sections to Add
- **Achievements/Hackathons**: Highlight competitive programming
- **Research/Publications**: If any
- **Blog**: Optional, if writing technical articles
- **Testimonials**: If available

## File Structure
```
Portfolio/
├── index.html
├── styles.css
├── script.js
├── images/
│   └── (placeholder for photo)
└── SPEC.md
```

## Acceptance Criteria
1. ✓ All sections present and properly styled
2. ✓ Smooth scroll navigation works
3. ✓ Mobile responsive
4. ✓ Animations are smooth and professional
5. ✓ Color scheme is cohesive and FAANG-level
6. ✓ All interactive elements have hover states
7. ✓ Typography is readable and professional
8. ✓ Contact form is functional (can use formspree or similar)
9. ✓ Resume download button works
10. ✓ Page loads without errors
