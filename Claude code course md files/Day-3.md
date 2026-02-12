# DAY 3: Claude Code Multi-File Power - Build a Full Website
## Time: ~1.5 hours

---

## PART 1: GOING BEYOND SINGLE FILES (10 min read)

On Day 2 you built a calculator with Copilot - one file at a time.
But real projects have MANY files: HTML, CSS, JavaScript, images...

**Claude Code** (the tool you're using right now) can handle ALL of this.
It can create, edit, and manage multiple files at once - your entire project.

### Why Claude Code is perfect for multi-file work:

| Feature | What It Means |
|---------|---------------|
| Sees your whole project | It reads ALL your files at once |
| Creates multiple files | Ask for a full website, get all files |
| Edits across files | Change a color? It updates CSS, HTML, JS |
| Runs commands | It can run git, npm, open files |
| Code review | It checks your code for bugs and security |
| Context memory | It remembers what you said earlier in the conversation |

**You don't need a separate editor for this. Claude Code + VS Code = everything you need.**

---

## PART 2: CLAUDE CODE MULTI-FILE WORKFLOW (15 min)

### How to Think in Projects, Not Files

When you want to build something, don't ask file by file.
Give Claude Code the FULL picture in one prompt.

### The 3-Step Workflow:

**Step 1: Describe the whole project**
Tell Claude Code everything at once - what you want, how it should look,
what files you need.

**Step 2: Review what it builds**
Open the files in VS Code. Check the browser. Does it look right?

**Step 3: Iterate with feedback**
Tell Claude Code what to fix: "The header is too big" or "Add a hover
effect to the buttons."

### Key Phrases That Work:

| Say This | To Get This |
|----------|-------------|
| "Create a project with..." | Multiple files created at once |
| "Look at my project and improve..." | AI reviews and edits existing files |
| "Add [feature] to all pages" | Cross-file editing |
| "Fix the bug where..." | Targeted debugging |
| "Make it responsive" | Mobile-friendly updates across CSS |

---

## PART 3: BUILD A MULTI-PAGE PORTFOLIO SITE (40 min)

This is the big exercise. You're going to ask Claude Code to build a
full multi-page website from scratch.

### Exercise: Build It

Copy and paste this prompt to Claude Code (yes, right here in the terminal):

```
Create a personal portfolio website in a new folder called "my-portfolio".
I need these files:

1. index.html - Landing page with my name "Galin", a short bio saying
   I'm a 16-year-old developer learning AI-assisted development,
   and a navigation bar linking to other pages
2. projects.html - A projects page with cards for:
   - "AI Calculator" (my first project)
   - "Portfolio Website" (this project)
   - Leave space for more projects
3. contact.html - A simple contact form (name, email, message)
4. css/style.css - Modern dark theme, responsive design, smooth animations
5. js/script.js - Mobile menu toggle, smooth scrolling, form validation

Use this color scheme: background #0a0a0a, accent color #646cff,
text white. Use a clean sans-serif font.
Make it look professional.
```

### After Claude Code Creates Everything:

1. Open `my-portfolio/index.html` in your browser
2. Click through ALL pages - do the links work?
3. Resize the browser window - does it look good on mobile?
4. Press F12 -> Console - any red errors?

---

## PART 4: THE ART OF ITERATING (20 min)

Your portfolio probably isn't perfect on the first try. That's normal.
The skill is knowing HOW to ask for improvements.

### Exercise: Fix and Improve

Try these one at a time. Type each to Claude Code:

**Fix 1:** Look at the site in your browser. Something look off?
Tell Claude Code:
"I opened my portfolio and [describe what's wrong]. Fix it."

**Fix 2:** The contact form doesn't actually send emails (it can't without
a backend). Tell Claude Code:
"Make the contact form show a success message when submitted instead of
actually sending. Add a nice animation to the success message."

**Fix 3:** Tell Claude Code:
"Add a dark/light theme toggle button to ALL pages of my portfolio.
Save the user's preference in localStorage so it persists when they
refresh or navigate between pages."

**After each change:** Refresh the browser. Does it work? If not,
copy the error from the console (F12) and tell Claude Code.

### Pro Tips for Getting Good Results:

1. **Be specific** - "Make the header bigger" is better than "improve the design"
2. **One thing at a time** - Don't ask for 10 changes at once
3. **Describe what's wrong** - "The text overlaps the image on mobile" beats "it looks bad"
4. **Reference files** - "In style.css, change the button color to blue"

---

## PART 5: UNDERSTANDING THE CODE (10 min)

Don't just let AI build everything blindly. UNDERSTAND what it wrote.

Open each file Claude Code created. For each one, ask Claude Code:

"Explain what [filename] does. Break it down section by section.
I'm a beginner who knows JavaScript basics up to switch/case."

### Key Things to Look For:

**In HTML files:**
- How are pages structured? (header, main, footer)
- How do links between pages work? (the `<a href="...">` tags)
- What does `<meta viewport>` do? (makes mobile work)

**In CSS files:**
- How does `@media` work? (responsive design)
- What are CSS custom properties? (`--variable-name: value`)
- How do animations work? (`transition`, `@keyframes`)

**In JavaScript files:**
- How do event listeners work? (`addEventListener`)
- How does `localStorage` work? (saving data in the browser)
- What is `querySelector`? (finding HTML elements)

For anything you don't understand, ask Claude Code to explain it simply.

---

## PART 6: MULTI-FILE EDITING POWER MOVES (15 min)

Now let's try something more advanced. These prompts show you the real
power of Claude Code working across multiple files:

### Power Move 1: Global Style Change
"Change the accent color on my entire portfolio from #646cff to #00d4aa.
Update every file that uses the old color."

Watch Claude Code find and update the color everywhere.

### Power Move 2: Add a New Page
"Add an 'about.html' page to my portfolio with a timeline of my
learning journey. Add a link to it in the navigation of ALL pages."

Claude Code creates the new page AND updates every nav bar.

### Power Move 3: Code Review
"Review all my portfolio files for:
1. Bugs or broken features
2. Security issues (especially in the contact form)
3. Accessibility problems
4. Things that could be improved
Give me a simple report."

This is a skill the SoftUni course teaches. You're doing it now.

---

## QUIZ

1. What is the best way to ask Claude Code to build a full project?
   a) Ask for one file at a time
   b) Describe the whole project at once with all details
   c) Just say "make me a website"

2. Your site looks bad on mobile. What do you tell Claude Code?
   a) "Fix everything"
   b) "The navigation overlaps the content on mobile screens. Fix the CSS."
   c) "Make it better"

3. You built a portfolio site with multiple files. Without AI, this takes:
   a) 10 minutes
   b) 2-5 hours minimum
   c) It's impossible

4. Your site has a bug. Best approach?
   a) Delete everything and start over
   b) Check the browser console (F12), copy the error, tell Claude Code
   c) Ignore the bug

5. Why should you read the code AI generates, not just use it blindly?
   a) It's fun to read code
   b) So you can fix problems, learn patterns, and get better over time
   c) AI never makes mistakes so you don't need to

### ANSWERS:
1. b) Full project description with details
2. b) Specific description of the problem
3. b) 2-5 hours at least - AI did it in minutes
4. b) Console error + tell Claude Code
5. b) Understanding code is your superpower

---

## CHALLENGE

Use Claude Code to add ONE of these to your portfolio:
- A blog page where you can write posts (stored in localStorage)
- An interactive skills section with progress bars that animate
- A "my journey" timeline showing your learning path
- A mini-game page (like a typing speed test)

Pick ONE. Then push everything to GitHub:
```bash
git add .
git commit -m "portfolio website with AI features"
git push
```

---

## DONE WITH DAY 3?
Go to -> Day-4.md
