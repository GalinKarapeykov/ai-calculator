# DAY 2: GitHub Copilot + JavaScript Practice with AI
## Time: ~1.5 hours

---

## PART 1: WHAT IS GITHUB COPILOT? (10 min read)

GitHub Copilot is an AI that lives INSIDE your code editor.
As you type, it suggests the next lines of code. Like autocomplete on steroids.

### How it works:
1. You start typing code or a comment
2. Copilot reads what you wrote and predicts what you want
3. Grey text appears = Copilot's suggestion
4. Press TAB to accept, or keep typing to ignore

### Copilot Features:
- **Inline suggestions** - auto-completes your code as you type
- **Chat** - ask questions about your code (like ChatGPT but inside your editor)
- **Refactor** - highlight code, ask Copilot to improve it
- **Tests** - Copilot can write tests for your code
- **Docs** - Copilot can write documentation/comments

### Getting Copilot (FREE for students!):
1. Go to https://github.com/education/students
2. Verify you're a student (school email or ID)
3. You get GitHub Copilot FREE
4. If you can't get student access, the free tier gives you limited completions

### Install in VS Code:
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search "GitHub Copilot"
4. Install both "GitHub Copilot" and "GitHub Copilot Chat"
5. Sign in with your GitHub account

---

## PART 2: YOUR JS KNOWLEDGE + COPILOT (20 min)

You know JavaScript basics up to switch/case. Let's use Copilot to practice
what you know AND learn new things faster.

### Exercise 1: Copilot Inline Suggestions

Create a file called `practice.js`. Type this comment and watch Copilot:

```javascript
// Function that takes a number and returns "positive", "negative", or "zero"
```

Copilot should suggest something like:
```javascript
function checkNumber(num) {
    if (num > 0) return "positive";
    if (num < 0) return "negative";
    return "zero";
}
```

Press TAB to accept. Now YOU understand this because you know if/else!

### Exercise 2: Switch/Case with Copilot

Type this comment:
```javascript
// Function that takes a day number (1-7) and returns the day name using switch
```

Copilot will write the switch/case for you. Check if it matches what you'd write!

### Exercise 3: Learn Something New - Arrays

You might not know arrays yet. Type:
```javascript
// Create an array of 5 fruits and log each one
```

Copilot will show you. Read it. This is how you learn with AI:
**AI writes it -> You READ it -> You UNDERSTAND it -> You can DO it**

---

## PART 3: COPILOT CHAT (20 min)

### Opening Copilot Chat:
- Press Ctrl+Shift+I (or click the chat icon in sidebar)
- This is like ChatGPT but it knows your entire project

### Try These Chat Commands:

**Ask it to explain:**
Type in chat: "Explain what arrays are in JavaScript. I'm a beginner."

**Ask it to generate:**
Type in chat: "Create a simple calculator function that takes two numbers
and an operator (+, -, *, /) and returns the result. Use switch/case."

**Ask it to fix:**
Paste this broken code in a file, then ask chat to fix it:
```javascript
function greet(name) {
    console.log("Hello, " + name)
    if (name = "Galin") {
        console.log("Welcome back!)
    }
}
```
(There are 2 bugs - can you spot them before Copilot does?)

---

## PART 4: BUILD AN INTERACTIVE CALCULATOR (30 min)

This is your first real project with AI assistance.

### Step 1: Create project structure
Make a new folder called `ai-calculator` with these files:
- index.html
- style.css
- script.js

### Step 2: Use this prompt in Copilot Chat or Claude:

"I'm building a calculator web app. Create the HTML structure with:
- A display area showing the current number
- Buttons for digits 0-9
- Buttons for +, -, *, /, =, and C (clear)
- Use a CSS grid layout for the buttons
- Dark theme with rounded buttons
- The display should be at the top
Give me just the HTML file with embedded CSS for now."

### Step 3: Now add JavaScript

In your script.js, type comments and let Copilot complete:

```javascript
// Store the current display value
// Store the previous value
// Store the current operator

// Function to append a number to the display

// Function to set the operator

// Function to calculate the result

// Function to clear the display

// Add click event listeners to all buttons
```

Let Copilot fill in each function. READ what it writes. You should understand
most of it because you know variables, if/else, and switch/case!

### Step 4: Test it
Open index.html in your browser. Does it work? If not:
1. Open browser console (F12 -> Console)
2. Copy any errors
3. Paste into Copilot Chat: "Fix this error: [paste error]"

### Step 5: Push to GitHub
```bash
git init
git add .
git commit -m "calculator app built with AI assistance"
```
Create a new repo on GitHub called "ai-calculator" and push it.

---

## PART 5: UNDERSTANDING WHAT AI WROTE (10 min)

This is what separates YOU from your friend who can't code.

Open your script.js. For EACH function, answer:
1. What does this function do?
2. What are the parameters?
3. What does it return?
4. Could I write this myself? (Be honest)

If you can't answer these, highlight the function and ask Copilot Chat:
"Explain this function line by line"

---

## QUIZ

1. What key do you press to accept a Copilot suggestion?
   a) Enter
   b) Tab
   c) Space

2. You see grey text appearing as you type in VS Code. What is that?
   a) An error
   b) A Copilot suggestion
   c) A comment

3. Your code has a bug. What's the fastest way to fix it with Copilot?
   a) Delete everything and start over
   b) Highlight the code, open Copilot Chat, describe the error
   c) Google the error

4. What's wrong with this code? `if (name = "Galin")`
   a) Nothing, it's correct
   b) Should be == or === (comparison, not assignment)
   c) Missing parentheses

### ANSWERS:
1. b) Tab
2. b) Copilot suggestion
3. b) Use Copilot Chat with the error
4. b) = is assignment, == or === is comparison

---

## CHALLENGE

Make your calculator BETTER. Ask Copilot Chat:
"Add these features to my calculator:
- A history of past calculations shown below the calculator
- Keyboard support (so I can type numbers and press Enter)
- A percentage button
- A backspace button"

This is real vibe coding - you describe features, AI adds them, you verify they work.

---

## DONE WITH DAY 2?
Go to -> Day-3.md
