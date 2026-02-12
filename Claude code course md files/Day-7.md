# DAY 7: Next.js Intro + Deploy Everything + Security + Final Review
## Time: ~2.5 hours

---

## PART 1: DEPLOY YOUR PROJECTS TO THE INTERNET (30 min)

Right now your projects are on GitHub but not "live" for people to visit.
Let's fix that. We'll use two FREE hosting services.

### Method 1: GitHub Pages (simplest)

For each of your projects (portfolio, calculator, tool):

1. Go to the repo on GitHub.com
2. Click Settings (gear icon)
3. Scroll to "Pages" in the left sidebar
4. Under "Source" select "main" branch
5. Click Save
6. Wait 2-3 minutes
7. Your site is live at: `https://your-username.github.io/repo-name`

### Method 2: Netlify (more professional)

The SoftUni course teaches Netlify. Here's how:

1. Go to https://www.netlify.com
2. Sign up with your GitHub account (FREE)
3. Click "Add new site" -> "Import an existing project"
4. Select GitHub
5. Choose your portfolio repo
6. Click "Deploy"
7. Wait 1-2 minutes
8. You get a URL like: `https://random-name.netlify.app`
9. Go to Site Settings -> Change site name to something clean
   like `galin-portfolio.netlify.app`

**Do this for your portfolio at minimum.** This is the link you share
with potential clients.

---

## PART 2: CONNECT A CUSTOM DOMAIN (Optional but impressive)

Want `www.galin.dev` instead of `galin-portfolio.netlify.app`?

- `.dev` domains cost about $12/year
- `.com` domains cost about $10/year
- Buy from: Namecheap, Google Domains, or Cloudflare

For now, the free Netlify URL is perfectly fine.
Get a custom domain when you land your first client.

---

## PART 3: YOUR FIRST NEXT.JS APP (45 min)

You've been building with plain HTML, CSS, and JavaScript. That's great
for learning. But most professional web apps in 2026 use a **framework**.

### What is Next.js?

**Next.js** is a framework built on top of **React** (the most popular
JavaScript library in the world). Think of it like this:

| Plain HTML/CSS/JS | Next.js |
|-------------------|---------|
| You manage every file yourself | Organized file structure built in |
| No routing - you make separate HTML files | File-based routing (create a file = create a page) |
| No server features | Built-in API routes, server-side rendering |
| Manual optimization | Automatic image optimization, fast loading |
| Deploy anywhere | Perfect deployment on Vercel (free) |

**Why learn Next.js?**
- It's what companies use to build real production websites
- Freelance clients will pay MORE for Next.js apps
- Vercel (the company behind Next.js) gives you FREE hosting
- AI tools like Claude Code are amazing at writing Next.js code
- Your SoftUni AI courses will be easier if you already know a framework

### Step 1: Create Your First Next.js Project (10 min)

Open your terminal and run:
```bash
npx create-next-app@latest my-nextjs-app
```

It will ask you some questions. Choose these:
```
Would you like to use TypeScript? -> No
Would you like to use ESLint? -> Yes
Would you like to use Tailwind CSS? -> Yes
Would you like your code inside a `src/` directory? -> Yes
Would you like to use App Router? -> Yes
Would you like to use Turbopack? -> Yes
Would you like to customize the import alias? -> No
```

Then:
```bash
cd my-nextjs-app
npm run dev
```

Open `http://localhost:3000` in your browser. You have a running Next.js app!

### Step 2: Understand the File Structure (5 min)

```
my-nextjs-app/
  src/
    app/
      page.js        <- This is your homepage (like index.html)
      layout.js      <- The wrapper around all pages (nav, footer)
      globals.css    <- Global styles
  public/            <- Images and static files go here
  package.json       <- Project dependencies
```

**The magic:** Every file named `page.js` inside `app/` becomes a page.
- `src/app/page.js` -> `localhost:3000/`
- `src/app/about/page.js` -> `localhost:3000/about`
- `src/app/projects/page.js` -> `localhost:3000/projects`

No more creating separate HTML files and linking them manually!

### Step 3: Build a Simple Portfolio with Next.js (20 min)

Ask Claude Code:
```
Look at my new Next.js app in my-nextjs-app folder.
Replace the default content with a simple portfolio:

1. src/app/page.js - Homepage with my name "Galin",
   a short bio, and links to other pages
2. src/app/projects/page.js - Projects page showing
   my AI Calculator and Portfolio projects
3. src/app/contact/page.js - Simple contact page
4. src/app/layout.js - Add a navigation bar with links
   to all pages

Use Tailwind CSS for styling. Dark theme with accent color #646cff.
Keep it simple and clean. Use Next.js Link component for navigation.
```

After Claude Code builds it, refresh `localhost:3000` and click around.
Notice how page transitions are INSTANT - no full page reload. That's
Next.js's superpower.

### Step 4: Deploy to Vercel (10 min)

**Vercel** made Next.js. They give you FREE hosting for Next.js apps.

1. Push your Next.js app to GitHub:
```bash
cd my-nextjs-app
git init
git add .
git commit -m "my first Next.js app"
```
Create a new repo on GitHub and push to it.

2. Go to https://vercel.com
3. Sign up with your GitHub account (FREE)
4. Click "Add New Project"
5. Import your `my-nextjs-app` repo
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your Next.js app is LIVE with a URL like `my-nextjs-app.vercel.app`

That's it. Vercel auto-deploys every time you push to GitHub.

### What You Just Learned:

- **React basics** - Components, JSX (HTML-like code inside JavaScript)
- **Next.js routing** - File-based pages (no manual linking)
- **Tailwind CSS** - Utility-first CSS (style directly in your HTML)
- **Vercel deployment** - Professional hosting in 2 minutes
- **The modern web stack** - This is what most companies use in 2026

You don't need to master Next.js today. But now you KNOW what it is,
how it works, and how to start a project. When you build your next
project, try using Next.js instead of plain HTML files.

---

## PART 4: SECURITY CHECKLIST (20 min)

Before sharing your projects with the world, go through this:

### Security Audit Checklist:

```
[ ] No API keys or passwords in ANY file
    Search your project: Ctrl+Shift+F -> search for "key", "password",
    "secret", "token"

[ ] .gitignore file exists and includes:
    .env
    node_modules/
    .DS_Store
    *.log

[ ] Contact form is safe:
    - Uses textContent instead of innerHTML for user input
    - Has input validation (max length, required fields)
    - Doesn't execute user input as code

[ ] No sensitive personal info exposed:
    - No real phone number in code
    - No home address
    - No school name (if you don't want it public)

[ ] External links use target="_blank" AND rel="noopener noreferrer"
    (prevents a security issue called "tabnabbing")

[ ] All form inputs have validation
```

### Ask Claude Code to Verify:

"Scan ALL my project files for security issues:
1. Exposed secrets or API keys
2. XSS vulnerabilities
3. Missing input validation
4. Any other security concerns
Be thorough."

---

## PART 5: FINAL POLISH (20 min)

### Performance Check:

1. Open your portfolio in Chrome
2. Press F12 -> Lighthouse tab (or Audits)
3. Run audit for Performance, Accessibility, Best Practices, SEO
4. Aim for 80+ on each score

If scores are low, tell Claude Code:
"My Lighthouse scores are: Performance [X], Accessibility [X],
Best Practices [X], SEO [X]. Help me improve them to 90+."

### Accessibility Check:

Your site should be usable by everyone:
```
[ ] All images have alt text
[ ] Text has enough contrast against background
[ ] Site is navigable with keyboard (Tab key)
[ ] Font size is readable (minimum 16px for body text)
[ ] Links are descriptive (not just "click here")
```

### Cross-Browser Testing:

Open your site in:
- Chrome
- Edge
- Firefox (if installed)
- On your phone's browser

Does it look good everywhere? Fix any issues.

---

## PART 6: YOUR DEVELOPER PROFILE (15 min)

You now have:
- A portfolio website (live on the internet)
- A calculator project
- A useful tool project
- A GitHub profile with real repos

### Polish Your GitHub Profile:

1. Go to GitHub -> Your Profile
2. Click "Edit profile"
3. Add a bio: "16-year-old web developer | AI-assisted development"
4. Add your portfolio URL

### Create a README for each repo:

Ask Claude Code for each project:
"Create a README.md for my [project name] with:
- Project title and description
- Screenshot placeholder
- Features list
- Technologies used
- How to run it locally
- Live demo link
Make it professional."

---

## PART 7: WHAT'S NEXT? (10 min read)

### You just completed in 7 days what the SoftUni course covers.
Here's what you learned:

| SoftUni Topic | Your Day |
|---------------|----------|
| GitHub Copilot - inline, chat, refactor | Day 2 |
| Claude Code - multi-file editing, agent | Day 3 |
| Claude Code - large-context review | Day 4 |
| Prompt patterns for code and debug | Days 1-4 |
| Test generation and documentation | Day 5 |
| Security and compliance with AI | Days 5 + 7 |
| Building real projects | Days 4 + 6 |
| Deployment | Day 7 |
| Next.js intro + Vercel | Day 7 |

### Continue Learning - Your Roadmap:

**Now (February 2026) -> AI Integrations for Developers (SoftUni)**
You're signed up for this. It starts Feb 23. Here's what you'll learn:

| Week | Topic | What You'll Build |
|------|-------|-------------------|
| 1 | LLM API Integration | Connect to OpenAI, Anthropic, OpenRouter APIs |
| 2 | Vector Databases, Embeddings & RAG | Build a chatbot that knows YOUR data |
| 3 | Images, Speech, Audio & Video | Multimodal AI apps |
| 4 | Fine-Tuning AI Models | Customize AI models for specific tasks |
| 5 | Workshop: Real Life Project | Full project with everything combined |
| 6 | Workshop: Local AI | Run AI models on your own computer |

This takes your skills from "building websites with AI" to "building
apps that USE AI as a feature." Huge level up.

**April 2026 -> AI Agent and Workflows for Developers (SoftUni)**
After the integrations course, this one goes even deeper:

| Week | Topic | What You'll Learn |
|------|-------|-------------------|
| 1 | LangChain Agents & Tools | Build AI agents that use tools |
| 2 | LangChain Memory & Human-in-the-Loop | AI that remembers + safety guardrails |
| 3 | LangGraph Multi-Agent Systems | Multiple AI agents working together |
| 4 | Workshop: Real Life Project | Production-ready AI agent project |

Skills you'll gain: agent design, memory management, multi-agent
coordination, retries/fallbacks, observability, logging, and
deploying AI systems to production.

**Between Courses (keep building):**
- Finish your JavaScript basics (arrays, loops, functions, objects)
- Build 2 more projects using Next.js (you learned the basics on Day 7!)
- Learn HTML/CSS deeper (Flexbox, Grid)
- Go deeper into React + Next.js + Tailwind CSS

**By 17:**
- You'll understand AI integrations (APIs, RAG, embeddings)
- You'll know how to build AI agents and workflows
- You could have a real freelance income
- You could have 10+ projects on your portfolio
- You could apply for junior developer internships
- You could be building AI-powered apps that others pay for

### Project Ideas to Keep Building:

1. **Weather App** - Uses a free weather API
2. **Chat Room** - Real-time messaging (learn WebSockets)
3. **Blog Platform** - Create, edit, delete posts (learn databases)
4. **E-commerce page** - Product listings with cart
5. **AI Chatbot** - Integrate Claude API into a web app (great prep for the SoftUni course!)
6. **Browser Extension** - Build something useful for Chrome
7. **RAG App** - Chat with your own documents (after the AI Integrations course)
8. **AI Agent** - An agent that automates tasks for you (after the AI Agents course)
9. **Habit Tracker** - Track daily habits with streaks
10. **Game** - Snake, Tetris, or a quiz game

### Resources (All Free):

- **JavaScript:** javascript.info (best free JS resource)
- **HTML/CSS:** web.dev (by Google)
- **React:** react.dev (official docs, very good)
- **Next.js:** nextjs.org/learn (free interactive tutorial)
- **Practice:** codewars.com (coding challenges)
- **YouTube:** Web Dev Simplified, Fireship, Traversy Media
- **AI Tools:** Keep using Claude Code, Copilot
- **SoftUni Courses:**
  - AI Integrations for Developers (Feb 2026): https://softuni.bg/trainings/5221/ai-integrations-for-developers-february-2026
  - AI Agent and Workflows (April 2026): https://softuni.bg/trainings/5275/ai-agent-and-workflows-for-developers-april-2026

---

## FINAL QUIZ - THE BIG TEST

1. What is "vibe coding"?
   a) Coding while vibing to music
   b) Describing what you want to AI, AI writes code, you verify and fix
   c) Copy-pasting from StackOverflow

2. Name the 2 AI coding tools you learned (answer out loud):
   Answer: GitHub Copilot, Claude Code

3. Why is YOUR approach better than someone who just uses AI without knowing code?
   a) It's not, AI does everything
   b) You can fix AI's mistakes, understand the code, and build things AI can't do alone
   c) Knowing code is outdated

4. What should you NEVER put in code that goes on GitHub?
   a) Comments
   b) API keys, passwords, secrets
   c) CSS

5. Someone hires you to build them a landing page. Your process is:
   a) Tell them it'll take 2 weeks and charge a lot
   b) Plan the page, use AI to build it in hours, test it, deploy it
   c) Tell them to use Wix

6. What is the FIRST thing you do when your code has a bug?
   a) Delete the file
   b) Check the browser console (F12) for error messages
   c) Ask on Reddit

7. How do you make a great prompt for AI?
   a) "make me a thing"
   b) Be specific: what you want, details, constraints, style
   c) Use big words

8. Your portfolio is live at a Netlify URL. A local shop owner needs a website.
   What do you show them?
   a) Your GitHub commits
   b) Your live portfolio with project examples
   c) Your school report card

### ANSWERS:
1. b
2. GitHub Copilot, Claude Code
3. b - Understanding code is your superpower
4. b - NEVER expose secrets
5. b - Plan, build with AI, test, deploy
6. b - Console first, always
7. b - Specific, detailed prompts
8. b - Show your live portfolio

---

## CONGRATULATIONS!

You just completed a course that covers the same material as a paid
SoftUni course - in 7 days, for free, at 16 years old.

**What you have now:**
- A live portfolio website
- 2-3 real projects on GitHub
- Skills in 2 AI development tools
- Understanding of debugging, testing, and security
- A path to making money with web development

**Your advantage over your friend:**
He builds with AI but doesn't understand the code.
You build with AI AND understand every line.
When things break (and they will), YOU can fix them. He can't.

**Next step:** Keep building. Every project you finish makes you better.
Ask me (Claude Code) anytime you need help building something new.

---

## YOUR COURSE IS COMPLETE.
Go build something amazing.
