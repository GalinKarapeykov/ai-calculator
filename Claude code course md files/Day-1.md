# DAY 1: Setup + Git/GitHub + Prompt Engineering
## Time: ~1.5 hours

---

## PART 1: WHY THIS MATTERS (5 min read)

Your friend is building apps with AI without knowing how to code. Here's the secret:
**He's not coding. He's PROMPTING.** He tells AI what to build, and AI writes the code.

But here's where YOU have the advantage: **you actually understand JavaScript.**
That means you can:
- Fix AI's mistakes (AI makes mistakes ALL the time)
- Understand what the code does
- Modify and improve what AI gives you
- Build things your friend literally cannot

**Vibe coding** = You describe what you want + AI writes it + You understand and fix it

This is the #1 skill employers will want in 2026-2030. You're starting at 16.
By 20, you'll be years ahead of everyone.

---

## PART 2: SETUP (30 min)

### Step 1: Create a GitHub Account
1. Go to https://github.com/signup
2. Use your real name (this becomes your developer identity)
3. Pick a clean username (like galin-dev or your actual name)
4. This is basically your coding resume - employers look at this

### Step 2: Install Git
1. Download from https://git-scm.com/download/win
2. Install with all default settings
3. Open VS Code terminal (Ctrl + `) and type:
```
git --version
```
You should see something like "git version 2.xx.x"

### Step 3: Configure Git
In VS Code terminal, type these (replace with YOUR info):
```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 4: Install Cursor AI Editor
1. Go to https://cursor.com
2. Download and install
3. Sign up for free account
4. It looks exactly like VS Code but with AI built in

### Step 5: Install Node.js
1. Go to https://nodejs.org
2. Download the LTS (Long Term Support) version
3. Install with defaults
4. In terminal type: `node --version` to verify

---

## PART 3: GIT & GITHUB BASICS (30 min)

### What is Git?
Think of it like "Save Game" for your code. Every time you make changes,
you create a "save point" (called a commit). If you mess up, you go back.

### What is GitHub?
It's like Google Drive but for code. Your code lives online.
Anyone can see it (if public). Employers check your GitHub.

### The 4 Git Commands You Need Today:
```
git init              -> Start tracking a project
git add .             -> Stage all your changes (prepare to save)
git commit -m "msg"   -> Save your changes with a message
git push              -> Upload to GitHub
```

### HANDS-ON: Create Your First Repo

1. In VS Code, open your course folder
2. Create a new folder called "my-first-repo"
3. Open terminal in that folder
4. Type these commands one by one:

```bash
git init
```
This creates a hidden .git folder. Your project is now tracked!

5. Create a file called `index.html` with this content:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello! I'm [Your Name]</h1>
    <p>I'm 16 and learning to code with AI.</p>
</body>
</html>
```

6. Now save it to Git:
```bash
git add .
git commit -m "my first commit - added index page"
```

7. Go to GitHub.com -> Click "+" -> "New Repository"
   - Name: my-first-repo
   - Make it Public
   - DON'T check any boxes
   - Click Create

8. GitHub will show you commands. Copy the ones that look like:
```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-repo.git
git branch -M main
git push -u origin main
```

9. Refresh GitHub page. YOUR CODE IS ONLINE!

---

## PART 4: PROMPT ENGINEERING (20 min)

This is THE most important skill in AI-assisted development.

### What is Prompt Engineering?
It's how you talk to AI to get exactly what you want.

### BAD vs GOOD Prompts:

**BAD:** "make me a website"
- Too vague. AI doesn't know what kind, what style, what content.

**GOOD:** "Create a single HTML page with a dark theme. It should have:
- A header with my name 'Galin'
- A section listing 3 skills I'm learning (JavaScript, AI Development, Web Design)
- A contact section with a placeholder email
- Use modern CSS with flexbox for layout
- Make it responsive for mobile"

### The PROMPT FORMULA:
```
[WHAT] + [DETAILS] + [CONSTRAINTS] + [STYLE/FORMAT]
```

Example:
- WHAT: "Create a JavaScript function"
- DETAILS: "that takes an array of numbers"
- CONSTRAINTS: "and returns only the even numbers"
- FORMAT: "use arrow function syntax, add comments"

### The 5 Prompt Patterns You MUST Know:

**1. The Builder Pattern**
"Build me a [thing] that does [specific features]. Use [technology].
The style should be [description]."

**2. The Fixer Pattern**
"Here is my code: [paste code]. I'm getting this error: [paste error].
Fix it and explain what was wrong."

**3. The Explainer Pattern**
"Explain this code to me like I'm a beginner: [paste code].
Tell me what each line does."

**4. The Improver Pattern**
"Here is my code: [paste code]. Make it better by:
- Adding error handling
- Making it more readable
- Following best practices"

**5. The Step-by-Step Pattern**
"I want to build [thing]. Give me a step-by-step plan.
Don't write the code yet, just tell me the steps."

---

## QUIZ - TEST YOURSELF

Answer these in your head (or write them down):

1. What does `git add .` do?
   a) Deletes all files
   b) Stages all changes for commit
   c) Pushes code to GitHub

2. What does `git commit -m "message"` do?
   a) Uploads code to GitHub
   b) Creates a save point with a description
   c) Downloads code from GitHub

3. Which is a better prompt?
   a) "make me a calculator"
   b) "Create a calculator in HTML/CSS/JS that can add, subtract, multiply,
      and divide. Use a grid layout for the buttons. Dark theme."

4. What is "vibe coding"?
   a) Coding while listening to music
   b) Describing what you want to AI and it writes the code
   c) Copying code from the internet

### ANSWERS:
1. b) Stages all changes
2. b) Creates a save point
3. b) The detailed one - always be specific with AI
4. b) You describe, AI writes, you understand and fix

---

## CHALLENGE (Optional but recommended)

Open ChatGPT or Claude and try this prompt:

"Create a simple personal webpage using HTML and CSS.
My name is [YOUR NAME]. I'm 16 years old and learning web development.
Use a dark theme with a modern font. Include:
- A hero section with my name and a short bio
- A skills section showing: JavaScript, HTML, CSS
- A simple footer
Make it look professional and clean."

Save the result as `index.html`, open it in your browser, and see what AI built for you!
Then push it to a NEW GitHub repo called "my-portfolio-v0".

---

## DONE WITH DAY 1?
Go to -> Day-2.md
