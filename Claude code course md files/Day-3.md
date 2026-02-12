# DAY 3: Cursor AI Editor - The Best Vibe Coding Tool
## Time: ~1.5 hours

---

## PART 1: WHY CURSOR IS A GAME-CHANGER (10 min read)

VS Code + Copilot is good. But Cursor is on another level.

**Cursor** is a code editor (looks identical to VS Code) that has AI deeply
integrated. The difference:

| Feature | VS Code + Copilot | Cursor |
|---------|-------------------|--------|
| Inline autocomplete | Yes | Yes (better) |
| Chat with AI | Yes | Yes (better) |
| Edit multiple files at once | No | YES |
| Agent mode (AI does tasks for you) | No | YES |
| Understands your whole project | Partially | YES |
| Built-in terminal AI | No | YES |

**The SoftUni course charges 220 BGN to teach you this. You're learning it free.**

---

## PART 2: CURSOR SETUP (15 min)

### Step 1: Open Cursor
If you installed it on Day 1, open it now. If not, download from https://cursor.com

### Step 2: Import VS Code Settings
Cursor will ask if you want to import VS Code settings. Say YES.
All your extensions and preferences come over.

### Step 3: Know Your Shortcuts

| Action | Shortcut |
|--------|----------|
| Open AI Chat | Ctrl + L |
| Inline Edit (edit selected code) | Ctrl + K |
| Open Composer (multi-file agent) | Ctrl + I |
| Accept suggestion | Tab |
| Toggle AI panel | Ctrl + Shift + L |

### Step 4: Settings to Enable
1. Go to Settings (Ctrl + ,)
2. Search for "cursor"
3. Make sure "Cursor Tab" is enabled (better autocomplete)

---

## PART 3: CURSOR'S 3 SUPERPOWERS (30 min)

### SUPERPOWER 1: Inline Edit (Ctrl + K)

This lets you select code and tell AI to change it.

**Try it:**
1. Create a file called `demo.js`
2. Write this basic function:
```javascript
function greet(name) {
    return "Hello, " + name;
}
```
3. Select the ENTIRE function
4. Press Ctrl + K
5. Type: "Make this support multiple languages - English, Bulgarian, Spanish.
   Add a language parameter with a default of English."
6. Press Enter

Watch Cursor rewrite your function with a switch/case for languages!

**Try again:**
1. Select the function
2. Press Ctrl + K
3. Type: "Add input validation - if name is empty, throw an error"
4. Enter

You're EDITING code with English words. This is vibe coding.

### SUPERPOWER 2: Chat (Ctrl + L)

Like Copilot Chat but smarter. It sees your ENTIRE project.

**Try it:**
1. Press Ctrl + L to open chat
2. Type: "Look at all my project files. What could I improve?"
3. Cursor will analyze your code and suggest improvements

**Try:**
- "Create a new file called utils.js with 5 useful helper functions for web development"
- "Explain how my calculator from yesterday works"
- "What JavaScript concepts am I using in this project?"

### SUPERPOWER 3: Composer / Agent Mode (Ctrl + I)

THIS is the most powerful feature. Agent mode can:
- Create multiple files at once
- Edit existing files
- Run terminal commands
- Build entire features

**Try it:**
1. Press Ctrl + I to open Composer
2. Make sure "Agent" mode is selected (not "Normal")
3. Type this prompt:

```
Create a personal portfolio website with these pages:
1. index.html - Landing page with my name "Galin", a short bio saying
   I'm a 16-year-old developer learning AI-assisted development,
   and links to other pages
2. projects.html - A projects page with cards for:
   - "AI Calculator" (my first project)
   - "Portfolio Website" (this project)
   - Leave space for more projects
3. contact.html - A simple contact form (name, email, message)
4. style.css - Modern dark theme, responsive design, smooth animations
5. script.js - Mobile menu toggle, smooth scrolling, form validation

Use this color scheme: background #0a0a0a, accent color #646cff,
text white. Use a clean sans-serif font.
Make it look professional.
```

4. Watch Cursor create ALL files. This would take hours by hand.
5. Review each file. Open index.html in your browser.

---

## PART 4: THE ART OF MULTI-FILE EDITING (20 min)

Your friend who can't code? He uses Cursor Agent mode for everything.
But when something breaks, he's stuck. You won't be.

### Exercise: Fix and Improve

Your portfolio probably isn't perfect. Try these one by one:

**Fix 1:** Open the site in browser. Something look wrong? Tell Cursor:
Press Ctrl + L, then: "I opened my portfolio and [describe what's wrong].
Fix it."

**Fix 2:** The contact form doesn't actually send emails (it can't without
a backend). Ask Cursor:
"Make the contact form show a success message when submitted instead of
actually sending. Add a nice animation."

**Fix 3:** Ask Cursor Agent (Ctrl + I):
"Add a dark/light theme toggle button to all pages. Save the user's
preference in localStorage so it persists."

After each change: Check the browser. Does it work? If not, tell Cursor the error.

---

## PART 5: UNDERSTANDING THE CODE (10 min)

Open each file Cursor created. For each one, write a comment at the top:

```javascript
// THIS FILE: [what it does in your own words]
// CONCEPTS I KNOW: [list JS concepts you recognize]
// CONCEPTS I DON'T KNOW YET: [list things that look new]
```

For anything you don't understand:
1. Select it
2. Press Ctrl + L
3. Ask: "Explain this code simply, I'm a beginner"

---

## QUIZ

1. What is Cursor's Agent mode?
   a) A regular chatbot
   b) AI that can create and edit multiple files and run commands
   c) An antivirus

2. Ctrl + K in Cursor does what?
   a) Saves the file
   b) Lets you edit selected code with AI
   c) Opens settings

3. You built a portfolio site with multiple files. Without AI, this takes:
   a) 10 minutes
   b) 2-5 hours minimum
   c) It's impossible

4. Your site has a bug. Best approach in Cursor?
   a) Delete everything and start over
   b) Tell Cursor Chat what's wrong and let it fix it
   c) Ignore the bug

### ANSWERS:
1. b) Multi-file AI assistant
2. b) Inline AI edit
3. b) 2-5 hours at least - AI did it in minutes
4. b) Describe the problem, let AI fix it

---

## CHALLENGE

Use Cursor Agent to add ONE of these to your portfolio:
- A blog page where you can write posts (stored in localStorage)
- An interactive skills section with progress bars that animate
- A "my journey" timeline showing your learning path
- A mini-game page (like a typing speed test)

Pick ONE. Use Agent mode. Then push everything to GitHub:
```bash
git add .
git commit -m "portfolio website with AI features"
git push
```

---

## DONE WITH DAY 3?
Go to -> Day-4.md
