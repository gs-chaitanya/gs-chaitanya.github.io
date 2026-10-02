# Project Context & Architecture Reference: gs-chaitanya.github.io

This document preserves the complete technical context, architecture, design decisions, data schemas, and deployment instructions for Gambali Seshasai Chaitanya's personal and academic portfolio.

---

## 1. Project Background & Transformation

- **Owner**: Gambali Seshasai Chaitanya
- **Affiliations**: B.Tech in Electronics & Communication Engineering, IIT (BHU) Varanasi; Visiting Student Researcher at the National University of Singapore (NUS)
- **Live Site**: [https://gs-chaitanya.github.io/](https://gs-chaitanya.github.io/)
- **Repository**: [gs-chaitanya/gs-chaitanya.github.io](https://github.com/gs-chaitanya/gs-chaitanya.github.io)
- **Git Branches**:
  - `main`: Previous production branch (contained monolithic vibecoded HTML files).
  - `hugo_trial`: Current development & migration branch containing the full Hugo rewrite.

### The Transformation
The previous website consisted of monolithic, hard-coded HTML files (`index.html` at 828 lines, `projects.html` at 302 lines, and loose `.html` files in `projects/`) created via Claude Code with heavy CDN Tailwind scripts, inline styles, and unmaintainable duplicate markup.

The site has been completely reconstructed using **Hugo Extended (v0.153+)**, transforming it into a high-performance, maintainable, data-driven academic website.

---

## 2. Design System & Aesthetics

### Inspirations & Influences
1. **[merox.dev](https://merox.dev/)**: Floating glassmorphism pill navigation, metrics highlight counter grid, clean responsive layout.
2. **[andlukyane.com](https://andlukyane.com/)**: Clean academic structure, institution logos on experience cards, publication action badges (`[PDF]`, `[IEEE Xplore]`, `[IOP Science]`, `[Scholar]`), chronological research listing.
3. **[moving (Hugo YinYang / Jekyll)](https://github.com/Jekyll-Theme-List/moving)**: Radically clean typography, content-first reading experience, zero distraction.
4. **[akcube.github.io (Quartz)](https://akcube.github.io/)**: Crisp academic digital garden feel with high contrast and readable line lengths.

### Minimalist Academic Palette (No AI Gradients)
All generic AI-startup gradients, pulsating radar pings, and neon mint/teal colors have been eliminated in favor of a solid, authoritative academic palette:

| Token | Light Theme | Dark Theme (`html.dark`) | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg` | `#ffffff` (Solid crisp white) | `#09090b` (Obsidian neutral zinc) | Canvas background; no gradients |
| `--surface` | `#ffffff` | `#121215` | Card backgrounds |
| `--surface-alt` | `#f8fafc` | `#18181b` | Subtle section & chip fills |
| `--surface-hover` | `#f1f5f9` | `#222226` | Interactive hover fill |
| `--border` | `#e2e8f0` | `#27272a` | Clean 1px card & divider borders |
| `--border-hover` | `#cbd5e1` | `#3f3f46` | Subtle elevation on hover |
| `--text-primary` | `#0f172a` (Slate black) | `#f4f4f5` (Zinc-100) | Headings and titles |
| `--text-secondary` | `#334155` (Editorial charcoal) | `#cbd5e1` (Slate-300) | Body paragraphs & lists |
| `--text-muted` | `#64748b` | `#828a99` | Dates, venues, metadata |
| `--accent` | `#1d4ed8` (University Blue) | `#60a5fa` (Readable Blue) | Active links and subtle focus |
| `--tag-bg` | `#f8fafc` | `#18181b` | Pill tag background |
| `--tag-text` | `#475569` | `#cbd5e1` | Pill tag text |

### Component Design Details
- **Hero & Status**: Clean circular portrait with a 1px border. Current appointment pill features a calm, static 6.5px emerald dot (`#10b981`) instead of an animated ping circle.
- **Buttons**:
  - `View CV / Resume`: High-contrast inverted button (`#0f172a` with white text in light; `#f4f4f5` with dark text in dark).
  - Social Links: Rounded rectangular chips (`border-radius: 6px`) with 1px borders.
- **Publication Badges**:
  - `[PDF]`: Light crimson background (`#fef2f2`) with red text (`#dc2626`) and border (`#fecaca`).
  - `[IEEE Xplore]`, `[IOP Science]`, `[Scholar]`: Clean neutral buttons with hover state.
- **Navigation**: Floating capsule pill (`border-radius: 9999px`) with `backdrop-filter: blur(12px)`, theme switcher, and mobile drawer.
- **Dark Mode Script**: Anti-flash inline script in `<head>` checks `localStorage` and `prefers-color-scheme` synchronously before DOM renders to prevent theme flashing.

---

## 3. Directory Layout & File Responsibilities

```
gs-chaitanya.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD to deploy Hugo to GitHub Pages
├── assets/
│   ├── css/
│   │   └── main.css                # Pure vanilla CSS design system (no Tailwind/Bootstrap runtime)
│   └── js/
│       └── main.js                 # Theme switcher, mobile drawer, smooth back-to-top
├── content/
│   ├── _index.md                   # Bio, research statement, and affiliations
│   └── projects/
│       ├── _index.md               # Projects listing page (alias: /projects.html)
│       ├── pynq-video-pipeline.md   # 1080p 60fps video processing (alias: /projects/pynq-video-pipeline.html)
│       ├── nand-controller.md       # FPGA raw NAND flash controller (alias: /projects/nand-controller.html)
│       ├── risc-v-cpu.md            # RV32IM 5-stage CPU & 130nm ASIC (alias: /projects/risc-v-cpu.html)
│       ├── nn-fpga.md               # Neural Network FPGA edge inference
│       └── systolic-accelerator.md  # Systolic hardware matrix unit (Udyam'24 2nd Prize)
├── data/
│   ├── experience.yaml             # All 8 research & engineering appointments
│   ├── publications.yaml           # Journal & conference papers with action pills
│   ├── education.yaml              # Degrees, institutes, grades, graduation years
│   ├── achievements.yaml           # Hackathon, scholarship, and competition honors
│   └── skills.yaml                 # Categorized technical skills & research interests
├── layouts/
│   ├── _default/
│   │   ├── baseof.html             # Base layout shell
│   │   ├── list.html               # Generic list fallback
│   │   └── single.html             # Generic single page fallback
│   ├── partials/
│   │   ├── head.html               # SEO meta, OpenGraph, font loading, anti-flash script, bundled CSS
│   │   ├── nav.html                # Floating glassmorphic pill nav and mobile drawer
│   │   └── footer.html             # Clean footer with copyright, affiliation, back-to-top
│   ├── projects/
│   │   ├── list.html               # Dedicated projects gallery grid layout
│   │   └── single.html             # Dedicated project page layout with video/image embeds
│   └── index.html                  # Academic homepage combining hero, metrics, bio, timeline, pubs, awards
├── static/
│   ├── 2026_resume.pdf             # Resume/CV file (accessible at /2026_resume.pdf)
│   ├── cropped_circle_image.png    # Profile headshot
│   ├── logos/                      # Institution logos (NUS, UCB, GSoC, JLR, RISC-V, UMich, IITB)
│   ├── projects/                   # Project media (img_zynq.mp4, nand-setup.jpg)
│   └── research/                   # Published paper PDFs (CoNGA25, icee2025, IOP, iwpsd, nvmts, sces, EMC/)
├── hugo.toml                       # Global Hugo site configuration, parameters, and menus
├── .gitignore                      # Ignores public/, resources/_gen/, .hugo_build.lock
└── CONTEXT.md                      # This architecture and context reference file
```

---

## 4. Structured Data Schemas

All dynamic content is cleanly decoupled into YAML data files in `data/` and Markdown files in `content/`.

### 4.1 Experience (`data/experience.yaml`)
```yaml
- title: "Visiting Student Researcher"
  org: "National University of Singapore (NUS)"
  advisor: "with Prof. Massimo Alioto"
  period: "Dec 2024 – Present"
  location: "Singapore"
  logo: "logos/NUS.jpg"
  bullets:
    - "Research on ultra-low-power edge computing architectures..."
```

### 4.2 Publications (`data/publications.yaml`)
Separated into `journals:` and `conferences:`.
```yaml
journals:
  - title: "Full Paper Title Here"
    authors: "<strong>Gambali Seshasai Chaitanya</strong>, Author Two, Author Three"
    venue: "Journal Name"
    year: "2025"
    status: "Published"
    links:
      - label: "PDF"
        url: "/research/IOP.pdf"
        icon: "pdf"
      - label: "IOP Science"
        url: "https://doi.org/..."
        icon: "external"
```
Supported icon identifiers: `pdf`, `external`, `scholar`, `code`.

### 4.3 Projects (`content/projects/<slug>.md`)
```markdown
---
title: "Real-Time Video Processing Pipeline on Pynq"
subtitle: "Xilinx Pynq-Z2 · Verilog and HLS"
date: 2024-05-15
featured: true
badge: "Demo"
github: "https://github.com/gs-chaitanya/"
tags: ["Pynq-Z2", "Verilog / HLS", "Python", "AXI4-Stream", "HDMI"]
aliases:
  - /projects/pynq-video-pipeline.html
stats:
  - label: "Resolution"
    value: "1080p"
  - label: "Frame Rate"
    value: "60fps"
video: "/projects/img_zynq.mp4"
summary: "Designed and implemented a real-time video processing pipeline on the Xilinx Pynq-Z2..."
---

## Overview
Project write-up in standard Markdown...
```

### 4.4 URL Backwards Compatibility
To ensure existing external links and bookmarks do not break, Hugo `aliases` are configured:
- `/projects.html` ➔ `/projects/`
- `/projects/pynq-video-pipeline.html` ➔ `/projects/pynq-video-pipeline/`
- `/projects/nand-controller.html` ➔ `/projects/nand-controller/`
- `/projects/risc-v-cpu.html` ➔ `/projects/risc-v-cpu/`

---

## 5. Build, Verification, and Deployment

### 5.1 Local Development
Run Hugo development server with drafts enabled:
```bash
hugo server -D
```
The site runs at `http://localhost:1313/` with live reload.

### 5.2 Production Build
Compile minified static assets to `public/`:
```bash
hugo --cleanDestinationDir --minify
```
*Typical build performance: ~140ms for 60 pages and 24 static files.*

### 5.3 Site-Wide Verification Script
Run Python script to verify 100% of internal links, images, PDFs, stylesheets, scripts, and anchors:
```bash
python3 -c '
from bs4 import BeautifulSoup
import os, glob

all_pages = glob.glob("public/**/*.html", recursive=True)
total_checked = 0
errors = []

for page in all_pages:
    with open(page) as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    for tag in soup.find_all(["a", "img", "link", "script", "video", "source"]):
        src = tag.get("src") or tag.get("href")
        if not src or src.startswith("http") or src.startswith("mailto:") or src.startswith("data:"):
            continue
        total_checked += 1
        if src.startswith("/#") or src.startswith("#"):
            continue
        path = src.split("?")[0].lstrip("/")
        if not os.path.exists(os.path.join("public", path)):
            errors.append((page, tag.name, src))

print(f"Total checked links & assets: {total_checked}")
if errors:
    print("Found errors:", errors)
else:
    print("ALL links and assets are 100% VALID!")
'
```

### 5.4 GitHub Pages Deployment
The automated workflow is located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To push and deploy:
```bash
# To test on hugo_trial:
git push origin hugo_trial

# To release live to main (GitHub Pages):
git checkout main
git merge hugo_trial
git push origin main
```
On push to `main`, GitHub Actions will:
1. Check out repository with full submodule depth.
2. Setup Hugo Extended v0.153.0.
3. Build the site with `--minify`.
4. Deploy the `public/` directory directly to GitHub Pages.

---

## 6. Important Notes for Future Updates

1. **Hugo Scoping in Templates**:
   Inside range loops (e.g. `{{ range site.Data.experience }}`), the root context `$` refers to the Page, not the collection item. When creating sub-scopes with `{{ with .logo }}`, always capture the item variable beforehand:
   ```html
   {{ range site.Data.experience }}
     {{ $exp := . }}
     {{ with .logo }}
       <img src="{{ . | relURL }}" alt="{{ $exp.org }}">
     {{ end }}
   {{ end }}
   ```
2. **Static Assets**:
   Any files placed in `static/` (e.g. `static/research/mypaper.pdf`) are served directly at the root URL (e.g. `/research/mypaper.pdf`). Never use relative prefixes like `../../static/` in templates or markdown.
3. **No External Frameworks Needed**:
   All styling is contained in [`assets/css/main.css`](assets/css/main.css). Hugo's asset pipeline handles minification and fingerprinting via `resources.Get "css/main.css" | resources.Minify | resources.Fingerprint`. Do not add npm, webpack, or external Tailwind scripts unless strictly necessary.
