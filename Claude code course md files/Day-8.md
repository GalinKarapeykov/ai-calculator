# DAY 8: Claude Code Power User - MCPs, Memory, Skills & Context
## Time: ~1.5 hours

---

## PART 1: CONTEXT WINDOWS - WHY AI "FORGETS" (15 min)

Every AI model has a **context window** — the maximum amount of text
it can see at one time. Think of it like the AI's short-term memory.

### The Numbers:

| Model | Context Window |
|-------|---------------|
| Claude (what you use) | 200,000 tokens (~150,000 words) |
| GPT-4 | 128,000 tokens |
| Gemini | 1,000,000 tokens |

A **token** is roughly 3/4 of a word. So 200k tokens = about 500 pages of text.

### Why This Matters:

When your conversation gets too long, the AI starts "forgetting" the
earlier parts. You might have noticed Claude Code saying the context
is getting full. That's the context window filling up.

**Try it now:** Type `/context` in Claude Code.
You'll see a bar showing how full your context window is.

### Context Engineering = Being Smart About It

**Context engineering** is the skill of giving AI exactly the right
information it needs — not too much, not too little.

**Bad prompt:**
"Fix my code" (AI has no context)

**Better prompt:**
"In my-portfolio/js/script.js, the mobile menu doesn't close when
I click a link. Fix the click handler in the menu toggle section."
(AI knows exactly where to look)

**Pro tips:**
1. **Be specific about files** — Don't make AI read your whole project
   when the bug is in one file
2. **Use `/compact`** — When context is getting full, this compresses
   the conversation history so you can keep going
3. **Start fresh for new tasks** — If you're switching from building
   a portfolio to fixing a calculator, start a new Claude Code session
4. **Front-load important info** — Put the most important details at
   the START of your prompt, not buried at the end

### Exercise: Check Your Context

Type `/context` right now. Look at:
- How many tokens you've used
- What's taking up the most space (messages, tools, system prompt)
- How much free space you have left

---

## PART 2: MEMORY FILES - MAKE AI REMEMBER YOU (20 min)

By default, every Claude Code conversation starts fresh. It doesn't
remember what you did yesterday. **Memory files** fix that.

### CLAUDE.md - Your Project's Brain

The `CLAUDE.md` file in your project root is special. Claude Code
reads it AUTOMATICALLY at the start of every conversation.

You already have one in this course! It tells Claude Code:
- What this project is
- Who you are (16, learning JS, etc.)
- How to write content for you

### How to Create CLAUDE.md for Any Project:

In your project folder, create a file called `CLAUDE.md`:
```markdown
# CLAUDE.md

## Project
This is a portfolio website built with HTML, CSS, and JavaScript.

## Tech Stack
- Pure HTML/CSS/JS, no frameworks
- CSS custom properties for theming
- localStorage for data persistence

## My Preferences
- Dark theme with purple accent (#9333ea)
- Keep code simple, I'm a beginner
- Use var instead of let/const (I know var better)
- Always add comments explaining what code does

## Important Files
- index.html - Single page with all sections
- css/style.css - All styles, uses CSS variables
- js/script.js - Interactivity, form validation, theme toggle
```

Now every time you open Claude Code in that folder, it already knows
your project, your preferences, and your skill level.

### Exercise: Create a CLAUDE.md

Go to your `my-portfolio` folder and create a `CLAUDE.md` file.
Ask Claude Code:

"Create a CLAUDE.md file for my portfolio project. Include:
- What the project is
- The tech stack
- My coding preferences
- The important files and what they do"

### Auto Memory - Cross-Project Memory

Claude Code also has an auto memory directory that persists across
ALL your projects. This is where it saves patterns it notices about
you across conversations.

You can see it by checking:
`~/.claude/projects/[your-project]/memory/MEMORY.md`

You can also tell Claude Code directly:
"Remember that I always prefer dark themes" and it'll save it.

---

## PART 3: MCPs - GIVING AI SUPERPOWERS (25 min)

**MCP** stands for **Model Context Protocol**. Think of MCPs as
**plugins** that give Claude Code extra abilities.

### What MCPs Can Do:

Without MCPs, Claude Code can:
- Read/write files
- Run terminal commands
- Search your code

With MCPs, Claude Code can ALSO:
- Talk to your VS Code editor directly
- Connect to databases
- Access external APIs
- Pull data from the web
- Interact with GitHub, Slack, etc.

### You're Already Using One!

Remember when you ran `/context` and saw `mcp__ide__getDiagnostics`?
That's an MCP! It lets Claude Code see errors and warnings from
your VS Code editor in real time.

### How MCPs Work (Simple Version):

```
You (type a prompt)
  → Claude Code (thinks about what to do)
    → MCP Server (connects to external service)
      → External Service (VS Code, database, API, etc.)
    ← Gets data back
  ← Shows you the result
```

### Common MCPs You'll Use:

| MCP | What It Does |
|-----|-------------|
| IDE (VS Code) | See editor diagnostics, run code |
| Filesystem | Advanced file operations |
| GitHub | Create PRs, manage issues, review code |
| Database | Query databases directly |
| Web Search | Search the internet |
| Fetch | Get data from URLs/APIs |

### Setting Up MCPs:

MCPs are configured in your Claude Code settings. You can see
which ones are active by running `/mcp` in Claude Code.

For now, the IDE MCP is the most useful one for you. As you
learn APIs and databases (in your SoftUni course), you'll
start using more MCPs.

### Exercise: Explore Your MCPs

1. Type `/mcp` in Claude Code to see active MCP servers
2. Try asking: "What diagnostics does VS Code show for my
   portfolio project?" — This uses the IDE MCP!

---

## PART 4: SKILLS - CUSTOM SLASH COMMANDS (15 min)

**Skills** are custom commands you can create for Claude Code.
They're shortcuts for things you do often.

### Built-in Skills:

You already know some:
- `/help` — Get help
- `/clear` — Clear the conversation
- `/compact` — Compress context when it's getting full
- `/context` — See context usage

### What Custom Skills Look Like:

A skill is a prompt that runs when you type a command. For example,
you could create a `/review` skill that automatically:
1. Reads all your project files
2. Checks for bugs
3. Checks for security issues
4. Gives you a report

Instead of typing that long prompt every time, you just type `/review`.

### Where Skills Live:

Skills are defined as prompt files that Claude Code loads. You can
see available skills in your conversation. The system shows them
in reminder messages.

### For Now:

Focus on the built-in commands. The most useful ones:

| Command | When to Use It |
|---------|---------------|
| `/help` | When you're lost |
| `/clear` | Start fresh |
| `/compact` | Context getting full |
| `/context` | Check how much space you've used |
| `/cost` | See how much your session has cost |

---

## PART 5: ESSENTIAL CLAUDE CODE WORKFLOWS (15 min)

Now that you understand the pieces, here are the workflows
that make you a power user:

### Workflow 1: Starting a New Project

```
1. Create project folder
2. Create CLAUDE.md with project details
3. Open Claude Code in that folder
4. Give it the full project description
5. Build, review, iterate
```

### Workflow 2: Continuing Work

```
1. Open Claude Code in project folder (reads CLAUDE.md)
2. Tell it what you want to do today
3. If context gets full, use /compact
4. When done, commit your changes
```

### Workflow 3: Debugging

```
1. Copy the error message
2. Tell Claude Code: "I'm getting this error: [paste]
   in [filename]. Fix it."
3. If it's a VS Code error, say: "Check the IDE diagnostics
   for my project"
```

### Workflow 4: Code Review

```
1. "Review my [project] for bugs, security issues, and
   improvements. Give me a report."
2. Fix the issues one by one
3. Ask: "Is there anything else to fix?"
```

---

## QUIZ

1. What is a context window?
   a) A pop-up dialog box
   b) The maximum amount of text an AI can see at once
   c) A type of browser window

2. What does CLAUDE.md do?
   a) Nothing, it's just a readme
   b) Gets read automatically by Claude Code to understand your project
   c) Stores your passwords

3. What are MCPs?
   a) Malware protection tools
   b) Plugins that give Claude Code extra abilities (connect to services)
   c) A type of programming language

4. What should you do when Claude Code's context is getting full?
   a) Delete all your files
   b) Use /compact to compress the conversation, or start fresh
   c) Ignore it

5. What is context engineering?
   a) Building context menus
   b) Giving AI exactly the right information to get the best results
   c) A type of software engineering

### ANSWERS:
1. b) Maximum text AI can see at once
2. b) Auto-read by Claude Code for project context
3. b) Plugins for extra abilities
4. b) /compact or start fresh
5. b) Giving AI the right information

---

## CHALLENGE

1. Create a `CLAUDE.md` file for your portfolio project
2. Run `/context` and screenshot your usage
3. Run `/mcp` and see what MCP servers are active
4. Try `/compact` to see how it compresses your conversation

---

## DONE WITH DAY 8?
Go to -> Day-9.md
