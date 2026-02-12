# DAY 5: Debugging, Testing & Security with AI
## Time: ~1.5 hours

---

## PART 1: WHY DEBUGGING MATTERS (10 min)

AI writes code fast. But AI makes mistakes. A LOT.

Your friend who can't code? When AI gives him broken code, he's stuck.
He copies the error back into ChatGPT and hopes for the best.

**YOU** will understand HOW to debug. This is your #1 advantage.

### The 3 Types of Bugs:

**1. Syntax Errors** - Typos in code (missing brackets, semicolons)
- Easiest to fix. The browser/editor tells you exactly where.
- Example: `console.log("hello"` (missing closing parenthesis)

**2. Logic Errors** - Code runs but does the wrong thing
- Hardest to find. No error message. It just... doesn't work right.
- Example: Using `=` instead of `===` in an if statement

**3. Runtime Errors** - Code crashes while running
- Something unexpected happened (dividing by zero, accessing null)
- Example: `document.getElementById("btn").click()` when "btn" doesn't exist

---

## PART 2: DEBUGGING TOOLS (20 min)

### Tool 1: Browser Console (F12)

This is your BEST friend for debugging web projects.

1. Open your portfolio website in Chrome/Edge
2. Press F12
3. Click the "Console" tab
4. Red text = errors. Read the error message.

**Exercise:** Add this broken code to your portfolio's JS:
```javascript
// Add this at the top of your main.js temporarily
let myArray = null;
console.log(myArray.length);
```
Open the browser. Press F12. See the error:
`TypeError: Cannot read properties of null (reading 'length')`

This tells you: you tried to use `.length` on something that's `null`.
Fix: Check if the variable exists first.

```javascript
if (myArray && myArray.length) {
    console.log(myArray.length);
}
```

Remove the broken test code after understanding this.

### Tool 2: console.log() - The Simple Debugger

When you don't know what a variable contains, log it:
```javascript
function calculateTotal(items) {
    console.log("items received:", items);  // What did we get?
    let total = 0;
    for (let item of items) {
        console.log("current item:", item);  // What's each item?
        total += item.price;
    }
    console.log("final total:", total);  // What's the result?
    return total;
}
```

### Tool 3: AI Debugging (The Killer Combo)

When you have a bug:
1. Copy the error message from the console
2. Copy the relevant code
3. Give both to AI:

```
I have this error: [paste error]
In this code: [paste code]
What's wrong and how do I fix it?
```

**Exercise with Claude Code:** Open your portfolio project with Claude Code.
Type this prompt:
"Check all my JavaScript files for potential bugs. Look for:
- Variables that might be null or undefined
- Event listeners on elements that might not exist
- Any logic that could fail"

---

## PART 3: TESTING YOUR CODE (20 min)

### What is Testing?
Testing = Making sure your code works correctly.

### Manual Testing Checklist for Your Portfolio:

Go through this list. Check each one:

```
[ ] Site loads without console errors (F12 -> Console)
[ ] All links work (click every link)
[ ] Navigation works on all pages
[ ] Site looks good on mobile (F12 -> toggle device toolbar, the phone icon)
[ ] Contact form validates (try submitting empty)
[ ] Animations play smoothly
[ ] Dark/light toggle works (if you added it)
[ ] All images load (no broken image icons)
[ ] Text is readable (not too small, good contrast)
[ ] Buttons do what they should
```

### Using AI to Write Tests:

Ask Claude Code:
"Write simple test cases for my JavaScript functions.
For each function, test:
- Does it return the correct result with normal input?
- What happens with empty input?
- What happens with wrong input type?
Use console.log with descriptions to show pass/fail."

Example output AI might give you:
```javascript
// Testing the greet function
function testGreet() {
    console.log("Test 1:", greet("Galin") === "Hello, Galin" ? "PASS" : "FAIL");
    console.log("Test 2:", greet("") === "Hello, " ? "PASS" : "FAIL");
    console.log("Test 3:", typeof greet("Galin") === "string" ? "PASS" : "FAIL");
}
testGreet();
```

---

## PART 4: SECURITY BASICS (20 min)

The SoftUni course covers "security and compliance when working with AI."
Here's what you MUST know:

### Rule 1: NEVER Put Secrets in Code

```javascript
// NEVER DO THIS:
const apiKey = "sk-abc123mySecretKey";
const password = "myPassword123";
const databaseUrl = "mongodb://user:pass@server.com";
```

If you push this to GitHub, ANYONE can see your secrets.
Hackers have bots that scan GitHub for exposed API keys.

**What to do instead:** Use environment variables (you'll learn this later)
or a `.env` file that you add to `.gitignore`.

### Rule 2: NEVER Trust User Input

If your contact form takes a name, someone could type:
```html
<script>alert('hacked!')</script>
```

If your code puts this directly into the page, the script RUNS.
This is called **XSS (Cross-Site Scripting)**.

**Fix:** Always sanitize user input:
```javascript
// BAD - directly inserting user input
element.innerHTML = userInput;

// GOOD - escaping the input
element.textContent = userInput;  // textContent is safe
```

### Rule 3: AI Can Write Insecure Code

When AI writes code, it often skips security. Always ask:
"Review this code for security vulnerabilities, especially XSS and injection attacks"

### Rule 4: Check AI-Generated Dependencies

If AI tells you to install a package (npm install something),
Google it first. Make sure it's:
- A well-known package (many downloads, many stars on GitHub)
- Not deprecated or abandoned
- From a trusted source

### Exercise: Security Audit

Ask Claude Code:
"Do a security audit of my portfolio website.
Check for:
1. XSS vulnerabilities in my contact form
2. Any hardcoded secrets
3. Missing input validation
4. Any other security issues
Give me a simple report."

---

## QUIZ

1. You see `TypeError: Cannot read properties of undefined` in the console. What happened?
   a) Your internet is down
   b) You tried to access a property on something that doesn't exist
   c) Your CSS is broken

2. What is XSS?
   a) A CSS framework
   b) When attackers inject malicious scripts through user input
   c) A JavaScript library

3. Why should you NEVER put API keys in your code?
   a) It slows down the code
   b) Anyone who sees your code on GitHub can steal your keys
   c) It causes bugs

4. Best way to debug with AI?
   a) Just say "fix my code"
   b) Give AI the error message + the relevant code
   c) Ask AI to rewrite everything

### ANSWERS:
1. b) Accessing property on undefined
2. b) Script injection through user input
3. b) Anyone can steal exposed keys
4. b) Error message + relevant code = best results

---

## CHALLENGE

Ask Claude Code to do a FULL review of your portfolio:
"Review my entire portfolio project. Give me a score out of 10 for each:
1. Code quality
2. Security
3. Design/UX
4. Mobile responsiveness
5. Performance
Then fix the top 3 issues you find."

Push the improved version:
```bash
git add .
git commit -m "security audit and bug fixes"
git push
```

---

## DONE WITH DAY 5?
Go to -> Day-6.md
