# Gambali Seshasai Chaitanya — Personal & Academic Website

This repository hosts the source code for my personal academic portfolio, accessible at [https://gs-chaitanya.github.io/](https://gs-chaitanya.github.io/).

Rebuilt using **Hugo Extended** with a custom, minimalistic academic theme inspired by [andlukyane.com](https://andlukyane.com/), [moving](https://github.com/Jekyll-Theme-List/moving), and [merox.dev](https://merox.dev/).

---

## Quick Start

### Prerequisites
- [Hugo Extended](https://gohugo.io/) (v0.120+ recommended, tested on v0.153.0)

### Local Development
```bash
# Clone the repository
git clone https://github.com/gs-chaitanya/gs-chaitanya.github.io.git
cd gs-chaitanya.github.io

# Start local preview server with drafts enabled
hugo server -D
```
Open [http://localhost:1313](http://localhost:1313) in your browser.

### Production Build
```bash
hugo --cleanDestinationDir --minify
```

---

## Content Organization

- **Experience & Appointments**: Edit [`data/experience.yaml`](data/experience.yaml)
- **Publications & Preprints**: Edit [`data/publications.yaml`](data/publications.yaml)
- **Education & Degrees**: Edit [`data/education.yaml`](data/education.yaml)
- **Honors & Awards**: Edit [`data/achievements.yaml`](data/achievements.yaml)
- **Technical Skills**: Edit [`data/skills.yaml`](data/skills.yaml)
- **Projects**: Add/edit Markdown files in [`content/projects/`](content/projects/)
- **PDFs & Media**: Place documents in [`static/research/`](static/research/) and assets in [`static/`](static/)
- **Global Settings & Menus**: Edit [`hugo.toml`](hugo.toml)

---

## Architecture & Developer Context

For comprehensive technical context, design tokens, data schemas, verification scripts, and deployment instructions, refer to **[CONTEXT.md](CONTEXT.md)**.
