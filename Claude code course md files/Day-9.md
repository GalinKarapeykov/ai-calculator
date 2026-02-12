# DAY 9: Developer Essentials - Git Branching, Terminal, npm & .env
## Time: ~1.5 hours

---

## PART 1: GIT BRANCHING - WORK WITHOUT BREAKING THINGS (30 min)

You know `git add`, `git commit`, `git push`. That's the basics.
But real developers use **branches** to work on features without
breaking the main code.

### What Is a Branch?

Think of your code like a tree:
- **main** = the trunk (your stable, working code)
- **branches** = experimental copies where you try new things

If the experiment works, you **merge** it back into main.
If it fails, you delete the branch. Main stays safe.

```
main:     A --- B --- C --- F (merge)
                 \       /
feature:          D --- E
```

### Essential Branch Commands:

```bash
# See all branches (* = you're on this one)
git branch

# Create a new branch and switch to it
git checkout -b feature-dark-mode

# Switch between branches
git checkout main
git checkout feature-dark-mode

# Push a branch to GitHub
git push -u origin feature-dark-mode

# Merge a branch into main (while on main)
git checkout main
git merge feature-dark-mode

# Delete a branch after merging
git branch -d feature-dark-mode
```

### Exercise: Try Branching

1. Go to your portfolio project folder
2. Create a branch:
```bash
git checkout -b test-branch
```
3. Make a small change (edit the footer text or something)
4. Commit it:
```bash
git add .
git commit -m "testing branches"
```
5. Switch back to main:
```bash
git checkout main
```
6. Notice your change is GONE — it's only on the other branch!
7. Merge it:
```bash
git merge test-branch
```
8. Now the change is on main too.
9. Delete the test branch:
```bash
git branch -d test-branch
```

### Pull Requests (PRs)

On GitHub, instead of merging directly, teams use **Pull Requests**.
A PR says: "Hey, I made changes on this branch. Can someone review
them before we merge?"

This is how every company works. You'll need this for jobs/freelancing.

### When to Use Branches:

- Adding a new feature → `git checkout -b feature-name`
- Fixing a bug → `git checkout -b fix-bug-name`
- Experimenting → `git checkout -b experiment-name`
- ALWAYS branch before making big changes

---

## PART 2: TERMINAL CONFIDENCE (20 min)

You've been using the terminal through Claude Code. But you should
be comfortable using it WITHOUT AI too.

### Commands You Must Know:

| Command | What It Does | Example |
|---------|-------------|---------|
| `cd` | Change directory | `cd my-portfolio` |
| `cd ..` | Go up one folder | `cd ..` |
| `ls` (or `dir` on Windows) | List files | `ls` |
| `mkdir` | Create folder | `mkdir new-project` |
| `rm` | Delete file | `rm old-file.js` |
| `rm -r` | Delete folder | `rm -r old-folder` |
| `pwd` | Show current path | `pwd` |
| `clear` | Clear the screen | `clear` |
| `code .` | Open VS Code here | `code .` |

### Navigation Practice:

Open a terminal (not Claude Code, just a regular terminal) and:

```bash
# See where you are
pwd

# Go to your Desktop
cd ~/Desktop

# List what's there
ls

# Go into your course folder
cd "Claude vibe coding"

# List again
ls

# Go back up
cd ..
```

### Pro Tips:

1. **Tab completion** — Start typing a folder name, press Tab,
   it auto-completes. Saves tons of typing.
2. **Up arrow** — Press up to cycle through previous commands
3. **Ctrl + C** — Cancel/stop whatever is running
4. **Ctrl + L** — Clear screen (same as `clear`)

---

## PART 3: npm & package.json - HOW NODE PROJECTS WORK (25 min)

When you created your Next.js app, it made a `package.json` file.
Every Node.js project has one. Time to understand what it does.

### What is npm?

**npm** = Node Package Manager. It's like an app store for code.

Instead of writing everything from scratch, you install **packages**
(libraries other people wrote) that do common things.

### package.json = Your Project's ID Card

```json
{
  "name": "my-nextjs-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  }
}
```

| Section | What It Means |
|---------|-------------|
| `name` | Your project's name |
| `version` | Current version |
| `scripts` | Commands you can run with `npm run [name]` |
| `dependencies` | Packages your app needs to run |
| `devDependencies` | Packages only needed during development |

### Essential npm Commands:

```bash
# Install all packages from package.json
npm install

# Install a specific package
npm install axios

# Install a dev-only package
npm install --save-dev eslint

# Run a script from package.json
npm run dev
npm run build

# See what's installed
npm list --depth=0

# Update all packages
npm update
```

### node_modules - The Heavy Folder

When you run `npm install`, it creates a `node_modules` folder with
ALL the code from your packages. This folder is HUGE.

**NEVER** push node_modules to GitHub. That's what `.gitignore` is for:
```
# .gitignore
node_modules/
```

Anyone who clones your project runs `npm install` to get the packages.

### Exercise: Explore package.json

1. Open your Next.js app's `package.json`
2. Read through it — can you identify the dependencies?
3. Run `npm list --depth=0` to see installed packages
4. Try `npm run dev` to start the dev server

---

## PART 4: ENVIRONMENT VARIABLES & .env FILES (20 min)

Remember Day 5 where you learned to NEVER put API keys in code?
Here's the proper way to handle secrets.

### What Are Environment Variables?

They're values stored OUTSIDE your code that your app can read.
Like a locked safe that only your app has the key to.

### .env Files:

Create a file called `.env` in your project root:
```
# .env
API_KEY=sk-abc123your-secret-key
DATABASE_URL=mongodb://localhost:27017/mydb
SECRET_TOKEN=super-secret-value
```

### Reading .env in JavaScript (Node.js):

Install the `dotenv` package:
```bash
npm install dotenv
```

Then in your code:
```javascript
require('dotenv').config();

// Now you can use them
var apiKey = process.env.API_KEY;
var dbUrl = process.env.DATABASE_URL;

console.log(apiKey); // "sk-abc123your-secret-key"
```

### The Golden Rules:

1. **ALWAYS add .env to .gitignore:**
```
# .gitignore
.env
.env.local
```

2. **Create a .env.example** — Shows what variables are needed
   WITHOUT the actual values:
```
# .env.example (this IS pushed to GitHub)
API_KEY=your-api-key-here
DATABASE_URL=your-database-url-here
```

3. **NEVER share .env files** — Not on GitHub, not in Discord,
   not in screenshots.

### Why This Matters for Your SoftUni Course:

Your AI Integrations course will have you connecting to
OpenAI, Anthropic, and OpenRouter APIs. Every one needs an API key.
If you don't use .env files, you'll accidentally leak your keys
and someone will rack up charges on your account.

### Exercise: Practice

1. Create a `.env` file in your portfolio project with a fake key:
```
MY_SECRET=this-is-not-a-real-key
```
2. Make sure `.env` is in your `.gitignore`
3. Create a `.env.example`:
```
MY_SECRET=your-secret-here
```
4. Run `git status` — you should NOT see `.env` in the list

---

## QUIZ

1. Why use Git branches?
   a) To make the project slower
   b) To work on features without breaking the main stable code
   c) Branches are required by GitHub

2. What does `npm install` do?
   a) Installs Node.js
   b) Downloads all packages listed in package.json
   c) Creates a new project

3. Why should node_modules NEVER be pushed to GitHub?
   a) It's too large, and anyone can recreate it with `npm install`
   b) It contains secrets
   c) GitHub doesn't support folders

4. Where should you store API keys?
   a) Directly in your JavaScript code
   b) In a .env file that's listed in .gitignore
   c) In the README

5. What does `git checkout -b feature-name` do?
   a) Deletes a branch
   b) Creates a new branch AND switches to it
   c) Pushes to GitHub

### ANSWERS:
1. b) Work without breaking main code
2. b) Downloads packages from package.json
3. a) Too large, recreatable with npm install
4. b) .env file + .gitignore
5. b) Creates and switches to new branch

---

## CHALLENGE

1. Create a new branch in your portfolio project
2. On that branch, make a visible change (like changing the accent color)
3. Commit it, switch back to main, see the change disappear
4. Merge it, see the change come back
5. Set up a `.env` and `.env.example` in your Next.js project

---

## DONE WITH DAY 9?
Go to -> Day-10.md
