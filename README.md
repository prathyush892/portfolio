# Prathyush Prathipati — Portfolio (React SPA)

A futuristic, single-page portfolio built with **React 18** and CSS Modules.  
Zero external dependencies — pure React + CSS.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              # HTML shell + Google Fonts
├── src/
│   ├── styles/
│   │   └── global.css          # CSS variables, base styles, utilities
│   ├── data/
│   │   └── portfolioData.js    # ✏️  All content lives here
│   ├── hooks/
│   │   └── useAnimations.js    # useReveal, useCounter, useParallax, useCursor...
│   ├── components/
│   │   ├── Cursor.jsx / .module.css
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── Marquee.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── App.js                  # Root component
│   └── index.js                # ReactDOM entry
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
# → opens http://localhost:3000

# 3. Production build
npm run build
# → optimised output in /build
```

---

## ✏️ Customisation

### Update your info
All content is in **`src/data/portfolioData.js`**:
- `personalInfo` — name, role, bio, contact details
- `experiences`  — add / remove work history
- `projects`     — swap in real project links
- `skillCards`   — edit tech stack pills
- `marqueeItems` — scrolling tech banner

### Add your photo
Replace the initials placeholder in `About.jsx`:
```jsx
// src/components/About.jsx  →  photoPlaceholder div
<img src="/photo.jpg" alt="Prathyush" className={styles.photo} />
```
Drop `photo.jpg` in `/public`.

### Add your GitHub link
In `portfolioData.js`:
```js
github: 'https://github.com/YOUR_USERNAME',
```

### Add your resume download
In `portfolioData.js` add `resumeUrl`, then update the button in `Contact.jsx`:
```jsx
<a href={personalInfo.resumeUrl} download className="btn-primary">
  Download Resume
</a>
```
Drop your `resume.pdf` in `/public`.

---

## 🌐 Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the /build folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/portfolio",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## ✨ Features

| Feature | Detail |
|---|---|
| Custom cursor | Dot + lagging ring, scales on hover |
| Parallax | Hero BG + orb layers scroll at different speeds |
| Scroll reveals | Every section fades up on enter |
| Staggered lists | Skills + projects animate in sequence |
| Skill bars | Fill with easing on scroll into view |
| Counters | 0 → target animation on first view |
| Glitch text | CSS keyframe glitch on hero name |
| Tech marquee | Infinite smooth scroll banner |
| Responsive | Mobile hamburger nav, fluid grid layouts |
| CSS Modules | Scoped styles, zero class conflicts |

---

## 🛠 Tech Stack

- **React 18** — UI framework
- **CSS Modules** — scoped component styles
- **Custom hooks** — IntersectionObserver-based animations
- **No external UI libs** — lightweight & fast

---

*Built for Prathyush Prathipati · Toronto, ON*
