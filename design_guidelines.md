# Design Guidelines - Piese Auto Marketplace

## Design Approach: E-commerce Reference with Automotive Identity

**Selected Approach**: Reference-based drawing from modern e-commerce leaders (Shopify, AutoZone, eMag Romania) with automotive-specific visual language that emphasizes trust, performance, and technical precision.

**Key Design Principles**:
- Automotive Performance Aesthetic: Dynamic, energetic visual language inspired by racing and automotive engineering
- Romanian Market Optimization: Clear typography, familiar patterns for Romanian e-commerce users
- Trust Through Clarity: Transparent pricing, detailed specs, clear product imagery
- Technical Precision: Clean data presentation for specifications and compatibility

## Core Design Elements

### A. Color Palette

**Primary Colors** (Dark Mode):
- Primary Racing Red: 355 85% 55% - CTAs, active states, important highlights
- Deep Charcoal: 220 15% 12% - Main background
- Steel Blue: 215 20% 25% - Secondary backgrounds, cards

**Primary Colors** (Light Mode):
- Racing Red: 355 85% 48% - CTAs, highlights
- Clean White: 0 0% 98% - Main background
- Light Gray: 220 10% 95% - Card backgrounds

**Accent & Supporting**:
- Performance Orange: 25 95% 55% - Special offers, urgency indicators
- Metallic Silver: 210 8% 75% - Borders, dividers, subtle elements
- Success Green: 145 60% 45% - Available stock, positive states
- Warning Amber: 40 95% 60% - Low stock alerts

### B. Typography

**Font Families**:
- Primary: 'Inter' (Google Fonts) - Clean, modern, excellent Romanian character support
- Secondary: 'Rajdhani' (Google Fonts) - Headers, automotive technical feel

**Hierarchy**:
- H1: Rajdhani Bold 3xl-4xl - Hero titles, main headings
- H2: Rajdhani SemiBold 2xl-3xl - Section headers
- H3: Inter SemiBold xl-2xl - Category titles, product names
- Body: Inter Regular base-lg - Descriptions, content
- Technical Specs: Inter Medium sm - Product specifications
- Price: Rajdhani Bold xl-2xl - Pricing display

### C. Layout System

**Spacing Primitives**: Tailwind units of 3, 4, 6, 8, 12, 16
- Tight spacing: p-3, gap-4 (cards, compact lists)
- Standard spacing: p-6, gap-6 (sections, product grids)
- Generous spacing: p-12, py-16 (hero, major sections)

**Grid System**:
- Container: max-w-7xl mx-auto
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Category Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-6
- Detail Layout: Two-column lg:grid-cols-2 (image gallery + specs)

### D. Component Library

**Navigation**:
- Sticky header with logo, search bar, category mega-menu, account/cart icons
- Secondary navigation bar with main categories (Motor, Frânare, Suspensie, Caroserie, etc.)
- Breadcrumb navigation on product pages
- Mobile: Hamburger menu with slide-out drawer

**Product Cards**:
- Image with hover zoom effect
- Badge overlay (Nou, Redus, Stoc limitat)
- Product name (2 line truncate)
- Compatibility info (Marca/Model if applicable)
- Price display with Allegro source indicator
- Quick view button on hover

**Filters & Search**:
- Left sidebar filter panel (desktop) / bottom sheet (mobile)
- Multi-select filters: Category, Brand, Model, Year, Price range
- Active filter chips with clear-all option
- Search with autocomplete suggestions
- Sort dropdown (Preț: crescător, descrescător, Relevantă, Cele mai noi)

**Product Detail Page**:
- Large image gallery with thumbnails
- Sticky add-to-cart section
- Tabbed information (Descriere, Specificații, Compatibilitate)
- Allegro source attribution with external link
- Related products carousel

**Forms & Inputs**:
- Rounded lg inputs with focus ring
- Icon prefixes for search/email inputs
- Dropdown selects with custom styling
- Radio buttons for filter options
- Range slider for price filtering

**Data Display**:
- Specification tables with alternating row colors
- Compatibility matrix (vehicle make/model/year)
- Stock availability indicators
- Price comparison badges

**CTAs & Buttons**:
- Primary: Racing red bg with white text, rounded-lg, shadow hover
- Secondary: Outline with red border, transparent bg blur when on images
- Ghost: Text only for tertiary actions

### E. Animations

**Strategic Use Only**:
- Product card hover: Subtle scale(1.02) + shadow increase
- Image gallery: Smooth crossfade transitions
- Filter panel: Slide-in/out (300ms ease)
- Search suggestions: Fade-in stagger effect
- Avoid: Excessive page transitions, scroll animations

## Marketing/Landing Design

**Hero Section** (80vh):
- Full-width background image: Modern auto parts warehouse or mechanic workspace
- Centered overlay with semi-transparent dark gradient
- Bold headline: "Piese Auto de Calitate - Import Direct Allegro"
- Search bar prominently featured
- Trust indicators: "10,000+ piese disponibile" | "Livrare rapidă" | "Prețuri competitive"

**Category Showcase** (6-column grid desktop, 2 mobile):
- Icon + name cards for main categories
- Hover effect with red accent border
- Direct navigation to filtered results

**Featured Products Carousel**:
- "Cele Mai Căutate" section
- 4 products visible (desktop), swipeable on mobile
- Auto-play with pause on hover

**Benefits Section** (3 columns):
- Import Direct: Quality assurance from Allegro
- Prețuri Transparente: Real-time pricing
- Căutare Avansată: Find exact parts for your vehicle

**Footer**:
- 4-column layout: Categorii, Ajutor, Legal, Contact
- Newsletter signup with email input
- Social media icons
- Payment/security badges
- Copyright and Allegro attribution

## Images

**Hero Image**: High-quality photo of organized auto parts warehouse with modern lighting - conveys professionalism and extensive inventory

**Category Icons**: Use Font Awesome automotive icons (fa-engine, fa-car-brake, fa-car-battery, etc.)

**Product Images**: Import directly from Allegro API - ensure minimum resolution, fallback placeholder for missing images

**Trust Badges**: Secure payment icons, delivery service logos in footer

This design creates a distinct automotive marketplace identity that's modern, trustworthy, and optimized for Romanian users while clearly differentiating from Allegro's visual style.