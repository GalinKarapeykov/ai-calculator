# DAY 6: Build Your Useful Tool
## Time: ~2 hours (this is build day!)

---

## PART 1: PICKING YOUR PROJECT (10 min)

You said you want to build a useful tool. Here are 5 ideas ranked by
how impressive they look + how achievable they are with your current skills:

### OPTION A: Study Buddy (Best for you as a student)
A web app where you paste your notes and AI generates:
- Flashcards
- Quiz questions
- Summaries
Uses localStorage to save everything. No backend needed.

### OPTION B: Budget Tracker
Track your income and expenses. Features:
- Add income/expenses with categories
- See a visual chart of where your money goes
- Monthly summary
- Data saved in localStorage

### OPTION C: Link Saver / Bookmark Manager
Save links with tags and notes. Features:
- Add links with title, URL, description, tags
- Search/filter by tags
- Export bookmarks
- Clean UI with categories

### OPTION D: Pomodoro Timer + Task Manager
A productivity tool. Features:
- 25-min work / 5-min break timer
- Task list to track what you're working on
- Statistics (how many sessions today)
- Notification when time's up

### OPTION E: Quick Website Builder
A simple tool where users fill in their info and get a basic website.
This is META - you'd be building a tool that builds websites.
Features:
- Form: name, bio, skills, color scheme
- Preview the generated website
- Download as HTML file

---

**Pick ONE** and let's build it. I recommend **Option A (Study Buddy)** or
**Option E (Website Builder)** because they're the most impressive for a portfolio.

But ANY of these is great. Pick what excites you.

---

## PART 2: THE BUILD PROCESS (90 min)

### Step 1: Plan Before You Prompt (10 min)

Before asking AI to build anything, write a quick plan:

```
PROJECT: [Your choice]
FEATURES:
  1. [Feature 1]
  2. [Feature 2]
  3. [Feature 3]
PAGES/VIEWS:
  - Main view: [what it shows]
  - Secondary view: [what it shows]
COLOR SCHEME:
  - Background: [dark/light]
  - Accent color: [pick one]
TECH:
  - HTML, CSS, JavaScript
  - localStorage for saving data
  - No external libraries (keep it simple)
```

### Step 2: Create Project Structure (5 min)

Create a new folder for your project. Example for Study Buddy:
```
study-buddy/
  index.html
  css/
    style.css
  js/
    app.js
    storage.js
```

### Step 3: Use Cursor Agent Mode for the Big Build (30 min)

Open your project folder in Cursor. Press Ctrl + I (Agent mode).

Here's a template prompt. Modify it for YOUR chosen project:

```
Build a [PROJECT NAME] web application.

WHAT IT DOES:
[Describe what it does in 2-3 sentences]

FEATURES:
1. [Feature 1 - be specific]
2. [Feature 2 - be specific]
3. [Feature 3 - be specific]
4. [Feature 4 - be specific]
5. Data persists using localStorage

DESIGN:
- Modern dark theme with [your accent color]
- Clean, minimal UI
- Responsive (works on mobile)
- Smooth animations
- Professional looking

TECHNICAL:
- Pure HTML, CSS, JavaScript (no frameworks)
- Organize code into separate files
- Add comments explaining key functions
- Use CSS custom properties for theming

Make it look like a real app, not a school project.
```

### Step 4: Test Everything (15 min)

Open in browser and test:
```
[ ] Does the main feature work?
[ ] Does data save when I refresh the page? (localStorage)
[ ] Does it look good on mobile? (F12 -> device toggle)
[ ] Are there any console errors? (F12 -> Console)
[ ] Do all buttons work?
[ ] Does it handle edge cases? (empty input, very long text, etc.)
```

### Step 5: Fix and Polish with Claude Code (20 min)

Ask Claude Code (yes, me!):
"Look at my [project name] project and:
1. Fix any bugs
2. Improve the UI/design
3. Add smooth animations
4. Make error messages user-friendly
5. Make it fully mobile-responsive"

### Step 6: Add to Portfolio (10 min)

1. Push to GitHub:
```bash
cd your-project-folder
git init
git add .
git commit -m "built [project name] with AI assistance"
```
Create repo on GitHub and push.

2. Add it to your portfolio website's projects section
3. Take a screenshot of your app for the project card

---

## PART 3: WHAT YOU JUST LEARNED (5 min read)

Think about what happened today:

1. You PLANNED a project (this is what real developers do)
2. You wrote a DETAILED prompt (prompt engineering from Day 1)
3. You let AI build it (vibe coding)
4. You TESTED it (quality assurance)
5. You FIXED bugs (debugging from Day 5)
6. You DEPLOYED it (pushing to GitHub)

This is the EXACT workflow of an AI-assisted developer in 2026.
The SoftUni course teaches this same process over 5 weeks.
You just did it in 6 days.

---

## PART 4: MAKING YOUR TOOL STAND OUT (10 min)

### Small things that make a BIG difference:

**1. Add a favicon** (the little icon in the browser tab)
Ask AI: "Create a simple SVG favicon for my [project name] and add it to my HTML"

**2. Add a loading state**
When something is processing, show a spinner or animation.

**3. Add keyboard shortcuts**
Ask AI: "Add keyboard shortcuts: Ctrl+N for new item, Escape to close modals"

**4. Add a "Made by" footer**
```html
<footer>
    Built by Galin with AI-Assisted Development | 2026
</footer>
```

**5. Smooth empty states**
When there's no data yet, don't show a blank screen.
Show a friendly message: "No items yet. Click + to add your first one!"

---

## QUIZ

1. What should you do BEFORE asking AI to build a project?
   a) Nothing, just ask
   b) Write a plan with features, design, and tech decisions
   c) Watch a YouTube tutorial

2. Your app works but looks ugly. What do you do?
   a) It's fine, ship it
   b) Ask AI to improve the design with specific requests
   c) Start over with a new project

3. Where does localStorage save data?
   a) On a server in the cloud
   b) In the user's browser (locally on their computer)
   c) In a database

4. You built an app in one day with AI. Is this normal in 2026?
   a) No, that's impossibly fast
   b) Yes, this is what AI-assisted development enables
   c) No, real apps take months

### ANSWERS:
1. b) Plan first, then prompt
2. b) Ask AI to improve with specific requests
3. b) localStorage saves data in the browser
4. b) Yes, AI makes this possible and it's becoming standard

---

## CHALLENGE

Add ONE advanced feature to your tool. Pick one:
- Dark/light theme toggle
- Export data as JSON file
- Import data from JSON file
- Undo/redo functionality
- Search/filter functionality
- Drag-and-drop to reorder items

Use Cursor or Claude Code. Push to GitHub when done.

---

## DONE WITH DAY 6?
Go to -> Day-7.md (Final day!)
