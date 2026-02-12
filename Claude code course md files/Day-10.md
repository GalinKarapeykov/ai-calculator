# DAY 10: APIs, JSON & TypeScript - Prep for the Real World
## Time: ~2 hours

---

## PART 1: JSON - THE LANGUAGE MACHINES SPEAK (20 min)

Every API, every config file, every data exchange on the web uses
**JSON** (JavaScript Object Notation). You MUST be fluent in it.

### What JSON Looks Like:

```json
{
  "name": "Galin Karapeykov",
  "age": 16,
  "isStudent": true,
  "skills": ["JavaScript", "HTML", "CSS"],
  "location": {
    "country": "Bulgaria",
    "continent": "Europe"
  },
  "portfolio": null
}
```

### The Rules:

| Rule | Right | Wrong |
|------|-------|-------|
| Keys must be in double quotes | `"name"` | `name` or `'name'` |
| Strings use double quotes | `"hello"` | `'hello'` |
| No trailing commas | `"a": 1}` | `"a": 1,}` |
| No comments allowed | — | `// comment` |

### Data Types in JSON:

| Type | Example |
|------|---------|
| String | `"hello"` |
| Number | `42` or `3.14` |
| Boolean | `true` or `false` |
| Null | `null` |
| Array | `[1, 2, 3]` |
| Object | `{"key": "value"}` |

### Working with JSON in JavaScript:

```javascript
// Convert JS object to JSON string
var person = { name: "Galin", age: 16 };
var jsonString = JSON.stringify(person);
// Result: '{"name":"Galin","age":16}'

// Convert JSON string back to JS object
var text = '{"name":"Galin","age":16}';
var parsed = JSON.parse(text);
console.log(parsed.name); // "Galin"
```

### Exercise: JSON Practice

Create a file called `data.json` with your profile:
```json
{
  "developer": {
    "name": "Galin Karapeykov",
    "age": 16,
    "skills": ["JavaScript", "HTML", "CSS"],
    "tools": ["Claude Code", "GitHub Copilot", "VS Code"],
    "learning": ["Next.js", "TypeScript", "AI Integrations"],
    "projects": [
      {
        "name": "AI Calculator",
        "tech": ["HTML", "CSS", "JavaScript"]
      },
      {
        "name": "Portfolio Website",
        "tech": ["HTML", "CSS", "JavaScript"]
      }
    ]
  }
}
```

Now in a JS file, try reading it:
```javascript
var data = require('./data.json');
console.log(data.developer.name);
console.log(data.developer.skills.length + " skills");
```

---

## PART 2: APIs & HTTP - HOW THE INTERNET TALKS (30 min)

An **API** (Application Programming Interface) is how programs
talk to each other over the internet. When your weather app shows
today's forecast, it asked a weather API for that data.

### HTTP Methods (The Verbs):

| Method | What It Does | Example |
|--------|-------------|---------|
| GET | Read/fetch data | Get a list of users |
| POST | Send/create data | Submit a contact form |
| PUT | Update existing data | Edit your profile |
| DELETE | Remove data | Delete a post |

### What an API Request Looks Like:

```
GET https://api.example.com/users/123
Headers:
  Content-Type: application/json
  Authorization: Bearer sk-your-api-key
```

### What a Response Looks Like:

```json
{
  "status": 200,
  "data": {
    "id": 123,
    "name": "Galin",
    "email": "galin@example.com"
  }
}
```

### HTTP Status Codes (The Important Ones):

| Code | Meaning | When You See It |
|------|---------|----------------|
| 200 | OK - it worked! | Successful request |
| 201 | Created | Successfully made something new |
| 400 | Bad Request | You sent wrong data |
| 401 | Unauthorized | Missing or wrong API key |
| 403 | Forbidden | You don't have permission |
| 404 | Not Found | The thing doesn't exist |
| 429 | Too Many Requests | You're calling too fast (rate limited) |
| 500 | Server Error | Something broke on their end |

### Making API Calls in JavaScript:

```javascript
// Using fetch (built into browsers and Node 18+)
fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
```

### Exercise: Call a Real API

Try this in your browser console (F12 -> Console):
```javascript
fetch('https://api.github.com/users/GalinKarapeykov')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    console.log('Name:', data.name);
    console.log('Repos:', data.public_repos);
    console.log('Profile:', data.html_url);
  });
```

This calls the GitHub API and gets YOUR profile data. No API key
needed for public GitHub data!

### Headers & Authentication:

Most APIs need an API key to know who's calling:
```javascript
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.API_KEY
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});
```

Notice the API key comes from `process.env` (your .env file from Day 9).

### This Is What Your SoftUni Course Builds On:

Your AI Integrations course is entirely about calling AI APIs
(OpenAI, Anthropic, OpenRouter). Now you understand the
foundation — HTTP methods, JSON, headers, authentication.

---

## PART 3: TYPESCRIPT BASICS - JAVASCRIPT WITH SAFETY (30 min)

**TypeScript** = JavaScript + types. It catches bugs BEFORE you
run your code.

### The Problem TypeScript Solves:

```javascript
// JavaScript - no error until you RUN it
function add(a, b) {
  return a + b;
}

add(5, "hello"); // Returns "5hello" - probably not what you wanted!
```

```typescript
// TypeScript - error BEFORE you run it
function add(a: number, b: number): number {
  return a + b;
}

add(5, "hello"); // ERROR: "hello" is not a number
```

TypeScript tells you about the bug in your editor, before the
code ever runs. This saves hours of debugging.

### Basic Types:

```typescript
// Simple types
var name: string = "Galin";
var age: number = 16;
var isStudent: boolean = true;

// Arrays
var skills: string[] = ["JavaScript", "HTML", "CSS"];
var scores: number[] = [95, 87, 92];

// Objects
var person: { name: string; age: number } = {
  name: "Galin",
  age: 16
};
```

### Interfaces - Defining Shapes:

```typescript
// Define what a Project looks like
interface Project {
  name: string;
  tech: string[];
  url?: string;  // ? means optional
}

// Now TypeScript knows the shape
var calculator: Project = {
  name: "AI Calculator",
  tech: ["HTML", "CSS", "JavaScript"]
  // url is optional, so we can skip it
};
```

### Functions with Types:

```typescript
// Parameters AND return value have types
function greet(name: string): string {
  return "Hello, " + name;
}

// TypeScript knows greet returns a string
var message: string = greet("Galin"); // works
var wrong: number = greet("Galin");   // ERROR: can't assign string to number
```

### Why Learn TypeScript?

1. **Next.js supports it out of the box** (remember Day 7)
2. **Most job listings require it** — it's the industry standard
3. **AI tools are better with it** — Claude Code writes better TS code
   because the types give it more context about what you want
4. **Catches bugs early** — Way fewer "undefined is not a function" errors
5. **Your SoftUni courses use it** — You'll be ahead if you know basics

### How to Start Using TypeScript:

1. Files end in `.ts` instead of `.js`
2. Install TypeScript:
```bash
npm install -g typescript
```
3. Compile TS to JS:
```bash
tsc myfile.ts
```
4. Or just use it in Next.js — it handles compilation automatically!

### Exercise: Try TypeScript

Ask Claude Code:
"Create a file called `practice.ts` in my portfolio project.
Write 5 simple functions with TypeScript types:
1. A function that adds two numbers
2. A function that greets someone by name
3. A function that checks if someone is old enough (takes age, returns boolean)
4. A function that joins an array of strings with commas
5. A function that takes a project object and returns its name

Add comments explaining each type annotation."

Read through the code. Notice how every variable and function
clearly states what type of data it expects.

---

## PART 4: PUTTING IT ALL TOGETHER (20 min)

You now understand the building blocks of modern web development:

| Day 8 | Day 9 | Day 10 |
|-------|-------|--------|
| Context windows | Git branching | JSON |
| CLAUDE.md memory | Terminal skills | APIs & HTTP |
| MCPs (plugins) | npm & packages | TypeScript |
| Skills & workflows | .env secrets | Authentication |

### How This Connects to Your Next Steps:

**SoftUni AI Integrations (February):**
- Day 10's API knowledge → You'll call LLM APIs from day 1
- Day 9's .env knowledge → You'll store API keys safely
- Day 10's JSON → Every API response is JSON
- Day 10's TypeScript → Course examples use TypeScript

**SoftUni AI Agents (April):**
- Day 8's MCPs → Same concept as LangChain tools
- Day 8's context engineering → Critical for agent memory
- Day 10's TypeScript → LangChain uses TypeScript
- Day 9's npm → You'll install LangChain packages

### Your Toolkit After 10 Days:

```
Frontend:  HTML, CSS, JavaScript, Next.js basics
Tools:     Claude Code, GitHub Copilot, VS Code
Workflow:  Git (branching, PRs), npm, terminal
Security:  .env files, input validation, XSS prevention
AI Skills: Prompt engineering, context engineering, MCPs
Modern JS: TypeScript basics, JSON, API calls
```

Not bad for a 16-year-old. Most junior developers don't know
half of this when they start their first job.

---

## QUIZ

1. What format does nearly every web API use?
   a) XML
   b) JSON
   c) CSV

2. A `401` HTTP status code means:
   a) The page doesn't exist
   b) You're not authenticated (missing or wrong API key)
   c) The server crashed

3. What does TypeScript add to JavaScript?
   a) Makes it run faster
   b) Types that catch bugs before the code runs
   c) New syntax for loops

4. How do you read a .env variable in Node.js code?
   a) `var key = .env.API_KEY`
   b) `var key = process.env.API_KEY`
   c) `var key = env("API_KEY")`

5. What HTTP method would you use to send a message to an AI API?
   a) GET
   b) DELETE
   c) POST

### ANSWERS:
1. b) JSON
2. b) Not authenticated
3. b) Types that catch bugs early
4. b) process.env.API_KEY
5. c) POST (you're sending data to the API)

---

## CHALLENGE

1. Call the GitHub API from your browser console to get your profile
2. Create a `data.json` file and practice parsing it with JavaScript
3. Ask Claude Code to convert one of your existing JS files to TypeScript
4. Try to explain to a friend (or out loud) what an API is, in simple terms

---

## CONGRATULATIONS — EXTENDED COURSE COMPLETE!

You've gone beyond the original 7 days. You now have fundamentals
that will carry you through your SoftUni courses and into real
development work.

**Keep building. Keep learning. Keep shipping.**
