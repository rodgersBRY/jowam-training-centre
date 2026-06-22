# AGENTS.md

## Project: Jowam Coffee Training Centre Website

## Stack: Next.js (App Router), TypeScript, Tailwind CSS

---

# 1. CORE BUILD PRINCIPLES (NON-NEGOTIABLE)

The AI agent MUST:

- NEVER invent features, pages, content, or sections not defined here
- NEVER guess missing requirements
- STOP and request clarification if something is unclear
- ONLY implement what is explicitly defined in this document
- Prioritize premium UX, storytelling, performance, and SEO
- Ensure mobile-first responsive design
- Keep all components modular and reusable

This project is NOT a template-style education site. It is a premium, sensory, coffee-branded experience website.

---

# 2. CORE BRAND DIRECTION

The website must reflect:

## Brand Concept

"Learn Anywhere. Practice Like a Professional."

## Positioning

Jowam Coffee Training Centre is a flexible coffee education system offering:

- Daytime physical classes (morning & afternoon)
- Evening online theory classes
- Saturday hands-on practical training

## Key Differentiator

Flexible learning paths for modern learners.

Target users:

- Working professionals
- University students
- Entrepreneurs
- Hospitality workers
- Remote learners

---

# 3. VISUAL DESIGN DIRECTION

## Style

- Premium coffee brand aesthetic
- NOT a generic education template
- Modern, sensory, immersive design

## Color Palette (STRICT)

- Coffee Brown: #4A2A16
- Jowam Orange: #F24D1E
- Cream Background: #F8F5F0
- Dark Sections: #1A120D

## Typography

- Modern, clean sans-serif
- High readability
- Large headings, minimal clutter

## Visual Tone

- Real coffee training imagery ONLY
- Espresso machines, latte art, students
- Avoid stock corporate education visuals

---

# 4. WEBSITE PAGES (STRICT STRUCTURE)

ONLY these pages are allowed:

## 4.1 Home (/)

Must include:

1. Hero Section (see Section 5)
2. Flexible Learning Paths Section
3. Why Jowam Section
4. Courses Overview
5. Saturday Practical Training Section
6. Student Gallery
7. Testimonials
8. FAQ
9. Final CTA

---

## 4.2 About (/about)

- Story of Jowam
- Mission
- Training philosophy
- Facilities

NO extra sections.

---

## 4.3 Courses (/courses)

- Static course cards only
- No CMS
- No filtering

---

## 4.4 Course Detail (/courses/[slug])

Must include:

- Overview
- Curriculum
- Duration
- Outcomes
- CTA → Apply

NO pricing unless provided.

---

## 4.5 Admissions (/admissions)

Must include:

- Monthly intake explanation
- Learning paths overview
- Application process
- CTA

---

## 4.6 Apply (/apply)

Contains ONLY Full Application Form

---

## 4.7 Contact (/contact)

ONLY:

- Contact Form
- Phone placeholder
- Email placeholder
- Location placeholder

---

# 5. HERO SECTION (HIGH PRIORITY EXPERIENCE DESIGN)

The hero MUST use ONE of the following (do not mix unless approved):

## Option A: Latte Art Video Hero

- Full-width muted video background:
  - Espresso extraction
  - Milk steaming
  - Latte art pouring
  - Students training

## Scroll behavior:

- Text fades upward on scroll
- Background slightly zooms

## Headline options:

- "Coffee Education That Fits Your Schedule"
- "Train as a Professional Barista — Anytime, Anywhere"
- "Flexible Coffee Training for Modern Learners"

## CTA:

- Enroll Now
- Download Course Guide

---

## Option B: Coffee Journey Animation (Optional advanced version)

Sequence:

Coffee Bean → Espresso → Latte Art → Certification → Career Briefcase

Represents:
Coffee Knowledge → Skills → Certification → Career

---

# 6. CORE UX EXPERIENCE SYSTEM

## 6.1 Flexible Learning Paths Section (KEY DIFFERENTIATOR)

Three learning modes must be displayed:

### Morning Classes

- Full-time learners
- Instructor-led
- Practical sessions

### Afternoon Classes

- Same curriculum
- Flexible daytime option

### Evening Online Classes

- Live theory sessions
- Remote learning
- For working professionals

### Saturday Practical Sessions (GLOBAL ANCHOR)

- Mandatory hands-on training
- Espresso machines
- Latte art
- Brewing practice

---

## 6.2 Interactive Schedule Visualization

A visual weekly planner:

MON - Online Theory  
TUE - Online Theory  
WED - Online Theory  
THU - Online Theory  
FRI - Revision  
SAT - Practical Training  
SUN - Rest

Hover states:

- Day highlights
- Tooltip explanation

---

## 6.3 Student Personas Section

Must include:

- Working Professionals
- University Students
- Entrepreneurs
- Hospitality Workers

Each card:

- Simple description
- Relevance to schedule flexibility

---

## 6.4 Student Journey Timeline (ANIMATED)

Steps:

Enroll  
↓  
Evening Theory Classes  
↓  
Saturday Practicals  
↓  
Assessment  
↓  
Certification

Each step animates on scroll.

---

# 7. INTERACTIVE STORYTELLING SECTIONS

## 7.1 Coffee Transformation Story (SCROLL BASED)

Sections:

1. Coffee Bean

- Slowly rotates

2. Roasting

- Color transformation

3. Brewing

- Steam animation

4. Barista Skills

- Latte art visuals

5. Certification

- Badge reveal animation

---

## 7.2 Interactive Coffee Wheel

Center: Coffee Skills

Segments:

- Brewing
- Espresso
- Latte Art
- Roasting
- Sensory
- Café Management

Interaction:

- Click rotates wheel
- Updates content panel

---

## 7.3 Before vs After Student Slider

Left:

- Beginner / No experience

Right:

- Certified barista / business owner

---

## 7.4 Certification Reveal Animation

- Certificate slides in from envelope
- Badge glow effect
- “Industry Recognized Certification”

---

# 8. ANIMATION RULES (STRICT)

Allowed only:

- Scroll fade-in animations
- Hover lift effects
- Modal transitions
- Banner slide-in
- Counter animations (numbers)

Optional advanced (if approved):

- GSAP scroll storytelling
- Framer Motion transitions

DO NOT over-animate or create distraction-heavy UI.

---

# 9. ENGAGEMENT FEATURES

## 9.1 Course Cards (Interactive)

On hover:

- Expand details
- Show outcomes
- Reveal CTA button

---

## 9.2 Counter Animations

Trigger on scroll:

- Students trained
- Completion rate
- Industry partners

---

## 9.3 Gallery (Masonry Layout)

- Real training photos only
- Hover zoom
- Caption overlay

---

## 9.4 Sticky Mobile CTA

Always visible:

- Call Now
- WhatsApp
- Apply

---

## 9.5 Loading Animation

- Coffee fills J logo
- Steam animation
- Then page loads

---

# 10. FORMS (STRICT LIMIT – ONLY 3)

## 10.1 Quick Inquiry Form

- Name (required)
- Phone (required)
- Email (optional)
- Course Interest (required)

POST /api/quick-inquiry

---

## 10.2 Full Application Form (PRIMARY FORM)

Includes:

Personal:

- Name
- DOB
- Gender
- ID/Passport

Contact:

- Phone
- Email
- Location

Course:

- Course
- Intake Month

Background:

- Education
- Experience (optional)

Emergency:

- Contact name
- Phone
- Relationship

POST /api/apply

---

## 10.3 Contact Form

- Name
- Email
- Subject
- Message

POST /api/contact

---

# 11. SEO REQUIREMENTS

Each page MUST include:

- title
- description
- keywords

Must use:

- semantic HTML
- correct heading structure
- optimized images (Next/Image)

Target keywords:

- barista training Kenya
- coffee academy Nairobi
- barista course Kenya
- coffee training school Nairobi

---

# 12. PERFORMANCE RULES

- Mobile-first design
- Lazy loading images
- Optimized video usage
- No unnecessary libraries
- Fast LCP (Largest Contentful Paint)

---

# 13. FILE STRUCTURE

app/
page.tsx
about/
courses/
courses/[slug]/
admissions/
apply/
contact/
api/
quick-inquiry/
apply/
contact/

components/
layout/
sections/
forms/
ui/

lib/
validation/
utils/

---

# 14. CRITICAL RULE

If anything is unclear:

STOP IMMEDIATELY AND ASK FOR CLARIFICATION.

DO NOT GUESS. DO NOT ASSUME.
