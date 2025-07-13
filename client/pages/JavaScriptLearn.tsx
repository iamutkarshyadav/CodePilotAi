import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Code,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Play,
  RotateCcw,
  Copy,
  Eye,
  CheckCircle,
  Star,
  Zap,
  MessageCircle,
  HelpCircle,
  Target,
  Brain,
  Trophy,
  ArrowRight,
  Home,
  Book,
  Monitor,
  Send,
  Lightbulb,
  Save,
  ChevronLeft,
  X,
} from "lucide-react";
import { toast } from "../lib/toast";

// Lesson Data Structure
interface Challenge {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  solution: string;
  testCases: Array<{
    input?: any;
    expected: any;
    description: string;
  }>;
}

interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  sectionIndex: number;
  lessonIndex: number;
  challenges: Challenge[];
}

interface CurriculumSection {
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: number;
}

const LESSONS_DATA: Lesson[] = [
  // MODULE 1: Getting Started
  {
    id: "intro-javascript",
    title: "Intro to JavaScript",
    slug: "intro-javascript",
    description: `🎯 **Welcome to JavaScript!**

JavaScript is the language that brings websites to life! Think of it as the magic that makes buttons clickable, forms interactive, and pages dynamic.

Let's start with the most fundamental concept: **console.log()** — your best friend for debugging and learning.

\`\`\`js
console.log("Hello, World!");
\`\`\`

This simple line tells the computer to display text. It's like having a conversation with your browser!

👉 In the sandbox below, try writing your first message to the world!`,
    sectionIndex: 0,
    lessonIndex: 0,
    challenges: [
      {
        id: "hello-world",
        title: "Your First Program",
        description:
          "Write a simple console.log statement to display 'Hello, World!'",
        starterCode: `// Welcome to JavaScript!
// Write your first program below

`,
        solution: `console.log("Hello, World!");`,
        testCases: [
          {
            expected: "Hello, World!",
            description: "Should output 'Hello, World!'",
          },
        ],
      },
      {
        id: "variables",
        title: "Store Information",
        description: "Create a variable to store your name and display it",
        starterCode: `// Create a variable to store your name
// Then display it using console.log

`,
        solution: `const myName = "Developer";
console.log(myName);`,
        testCases: [
          {
            expected: "string",
            description: "Should create a variable and log it",
          },
        ],
      },
    ],
  },
  {
    id: "setting-up-environment",
    title: "Setting up the Environment",
    slug: "setting-up-environment",
    description: `🛠️ **Your Coding Workspace**

Every great coder needs the right tools! The browser console is your first debugging companion — it's where you'll see your code come to life.

Here's how to open it:
- **Chrome/Firefox**: Press F12 or right-click → "Inspect" → "Console"
- **Safari**: Develop menu → "Show Web Inspector"

\`\`\`js
console.log("I'm ready to code!");
\`\`\`

👉 Try running this code and watch the magic happen in your console!`,
    sectionIndex: 0,
    lessonIndex: 1,
    challenges: [
      {
        id: "browser-console",
        title: "Using Browser Console",
        description: "Practice using the browser's developer console",
        starterCode: `// This is the browser console
console.log("Setting up my environment!");
`,
        solution: `console.log("Setting up my environment!");`,
        testCases: [
          {
            expected: "Setting up my environment!",
            description: "Should log setup message",
          },
        ],
      },
    ],
  },
  {
    id: "writing-first-script",
    title: "Writing Your First Script",
    slug: "writing-first-script",
    description: `📝 **Your First Real Script**

Now that you know the basics, let's write a more meaningful program! Scripts are sequences of instructions that solve problems.

Think of a script like a recipe:
1. Get ingredients (variables)
2. Follow steps (functions)
3. Serve the result (output)

\`\`\`js
const greeting = "Welcome to coding!";
const name = "Future Developer";
console.log(greeting + " " + name);
\`\`\`

👉 Try creating your own greeting script with different messages!`,
    sectionIndex: 0,
    lessonIndex: 2,
    challenges: [
      {
        id: "personal-script",
        title: "Personal Greeting Script",
        description: "Create a script that introduces yourself",
        starterCode: `// Create variables for your name, age, and favorite hobby
// Then create a greeting message using all three

`,
        solution: `const name = "Alex";
const age = 25;
const hobby = "coding";
console.log("Hi, I'm " + name + ", I'm " + age + " years old and I love " + hobby + "!");`,
        testCases: [
          {
            expected: "greeting message",
            description: "Should create a personal greeting",
          },
        ],
      },
    ],
  },

  // MODULE 2: Variables & Constants
  {
    id: "let-const-var",
    title: "let, const, and var",
    slug: "let-const-var",
    description: `📦 **Storing Information with Variables**

Variables are like labeled boxes where you store information. JavaScript gives you three ways to create these boxes:

- **\`const\`** — for values that never change (like your birthday)
- **\`let\`** — for values that might change (like your age)
- **\`var\`** — old style, avoid using it

\`\`\`js
const birthday = "January 1st";  // Never changes
let age = 25;                   // Changes every year
age = 26;                       // Updated!
\`\`\`

👉 Practice choosing the right type of variable for different situations!`,
    sectionIndex: 1,
    lessonIndex: 0,
    challenges: [
      {
        id: "declare-variables",
        title: "Declare Variables",
        description: "Practice declaring variables with let, const, and var",
        starterCode: `// Declare a constant for PI (never changes)
// Declare a variable for a counter (will change)
// Display both values

`,
        solution: `const PI = 3.14159;
let counter = 0;
console.log("PI:", PI);
console.log("Counter:", counter);`,
        testCases: [
          {
            expected: "3.14159",
            description: "Should declare and use constants",
          },
        ],
      },
    ],
  },
  {
    id: "naming-conventions",
    title: "Naming & Conventions",
    slug: "naming-conventions",
    description: `🏷️ **Naming Your Variables Like a Pro**

Good variable names are like good street signs — they tell you exactly where you're going!

**Good Names:**
\`\`\`js
const userAge = 25;
const firstName = "Alex";
const isLoggedIn = true;
\`\`\`

**Bad Names:**
\`\`\`js
const x = 25;        // What is x?
const data = "Alex"; // What kind of data?
const flag = true;   // What does this flag mean?
\`\`\`

👉 Practice writing descriptive variable names that other developers (and future you) will thank you for!`,
    sectionIndex: 1,
    lessonIndex: 1,
    challenges: [
      {
        id: "good-naming",
        title: "Practice Good Naming",
        description: "Rename vague variables to be more descriptive",
        starterCode: `// Fix these poorly named variables
const x = "iPhone 15";
const y = 999;
const z = true;

// Print them with clear labels
`,
        solution: `const productName = "iPhone 15";
const productPrice = 999;
const isInStock = true;

console.log("Product:", productName);
console.log("Price: $" + productPrice);
console.log("In Stock:", isInStock);`,
        testCases: [
          {
            expected: "descriptive names",
            description: "Should use clear, descriptive variable names",
          },
        ],
      },
    ],
  },
  {
    id: "data-types-overview",
    title: "Data Types Overview",
    slug: "data-types-overview",
    description: `🎭 **Types of Information in JavaScript**

JavaScript works with different types of information, just like you do in real life:

**Strings** (text): \`"Hello"\`, \`'World'\`
**Numbers**: \`42\`, \`3.14\`, \`-100\`
**Booleans** (true/false): \`true\`, \`false\`
**Arrays** (lists): \`[1, 2, 3]\`
**Objects** (collections): \`{name: "Alex", age: 25}\`

\`\`\`js
const message = "Hello!";     // String
const count = 42;             // Number
const isAwesome = true;       // Boolean
\`\`\`

👉 Experiment with different data types and see how JavaScript handles them!`,
    sectionIndex: 1,
    lessonIndex: 2,
    challenges: [
      {
        id: "data-types-practice",
        title: "Working with Data Types",
        description: "Create variables of different types and display them",
        starterCode: `// Create variables of different types:
// A string with your favorite quote
// A number with your lucky number
// A boolean indicating if you like coding

`,
        solution: `const favoriteQuote = "Code is poetry";
const luckyNumber = 7;
const likesCode = true;

console.log("Quote:", favoriteQuote);
console.log("Lucky Number:", luckyNumber);
console.log("Likes Coding:", likesCode);`,
        testCases: [
          {
            expected: "different data types",
            description: "Should create and display different data types",
          },
        ],
      },
    ],
  },

  // MODULE 3: Functions Fundamentals
  {
    id: "function-declaration",
    title: "Function Declaration and Invocation",
    slug: "function-declaration",
    description: `⚡ **What are Functions in JavaScript?**

Functions are the building blocks of JavaScript. They allow us to wrap a set of instructions and reuse them whenever needed.

Let's say you want to print a welcome message five times — would you copy and paste the same line five times? That's where a function comes in.

Here's how to **declare** a function:

\`\`\`js
function greet() {
  console.log("Hello, coder!");
}
\`\`\`

Now, you can **call** this function:

\`\`\`js
greet(); // Output: Hello, coder!
\`\`\`

You've just written your first reusable piece of logic! 🎉

👉 In the sandbox below, try declaring your own function and calling it!`,
    sectionIndex: 2,
    lessonIndex: 0,
    challenges: [
      {
        id: "basic-function",
        title: "Create Your First Function",
        description: "Write a function that greets a user by name",
        starterCode: `// Create a function called 'greet' that takes a name parameter
// The function should return a greeting message

`,
        solution: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Developer"));`,
        testCases: [
          {
            input: "Alice",
            expected: "Hello, Alice!",
            description: "Should greet Alice",
          },
        ],
      },
    ],
  },
  {
    id: "function-parameters-return",
    title: "Function Parameters and Return Values",
    slug: "function-parameters-return",
    description: `📥📤 **Making Functions More Powerful**

Functions become really useful when they can accept **inputs** (parameters) and give back **outputs** (return values).

Think of a function like a vending machine:
- You put in money (parameter)
- You press a button (call the function)
- You get a snack (return value)

\`\`\`js
function makeSnack(money) {
  if (money >= 2) {
    return "🍫 Chocolate bar";
  }
  return "Not enough money";
}

console.log(makeSnack(3)); // 🍫 Chocolate bar
\`\`\`

👉 Create your own function that takes inputs and returns something useful!`,
    sectionIndex: 2,
    lessonIndex: 1,
    challenges: [
      {
        id: "function-parameters",
        title: "Function with Parameters",
        description: "Learn how to pass multiple parameters to functions",
        starterCode: `// Create a function that adds two numbers
function add(a, b) {
  // Your code here
}

console.log(add(5, 3));`,
        solution: `function add(a, b) {
  return a + b;
}

console.log(add(5, 3));`,
        testCases: [
          { input: [5, 3], expected: 8, description: "Should add 5 + 3 = 8" },
        ],
      },
    ],
  },
  {
    id: "scope-closures",
    title: "Scope and Closures",
    slug: "scope-closures",
    description: `🔒 **Understanding Variable Scope**

Scope determines where your variables can be "seen" and used. It's like having different rooms in a house — some things are private to each room, others are shared.

**Global Scope** (the living room — everyone can access):
\`\`\`js
const globalMessage = "I'm available everywhere!";
\`\`\`

**Function Scope** (a private bedroom — only this function can access):
\`\`\`js
function myRoom() {
  const privateMessage = "Only I can see this!";
  console.log(globalMessage); // ✅ Can access global
  console.log(privateMessage); // ✅ Can access private
}
\`\`\`

👉 Experiment with variable scope and see what's accessible where!`,
    sectionIndex: 2,
    lessonIndex: 2,
    challenges: [
      {
        id: "scope-practice",
        title: "Understanding Scope",
        description: "Practice with global and local variables",
        starterCode: `// Create a global variable
const globalVar = "I'm global!";

function testScope() {
  // Create a local variable
  const localVar = "I'm local!";

  // Try accessing both variables
  console.log(globalVar);
  console.log(localVar);
}

testScope();
// Try accessing localVar here (it will cause an error)
`,
        solution: `const globalVar = "I'm global!";

function testScope() {
  const localVar = "I'm local!";
  console.log(globalVar);
  console.log(localVar);
}

testScope();`,
        testCases: [
          {
            expected: "scope demonstration",
            description: "Should demonstrate variable scope",
          },
        ],
      },
    ],
  },

  // MODULE 4: Control Structures
  {
    id: "if-else-ternary",
    title: "If/Else and Ternary Operators",
    slug: "if-else-ternary",
    description: `🛤️ **Making Decisions in Code**

Life is full of decisions: "If it's raining, bring an umbrella." Programming is the same! We use **if/else statements** to make our code smart.

**Basic If Statement:**
\`\`\`js
const weather = "rainy";

if (weather === "rainy") {
  console.log("Bring an umbrella! ☔");
} else {
  console.log("Enjoy the sunshine! ☀️");
}
\`\`\`

**Ternary Operator** (shorthand for simple if/else):
\`\`\`js
const message = weather === "rainy" ? "Bring umbrella!" : "Enjoy sunshine!";
\`\`\`

👉 Practice making your code intelligent with conditional logic!`,
    sectionIndex: 3,
    lessonIndex: 0,
    challenges: [
      {
        id: "conditional-logic",
        title: "Smart Decisions",
        description: "Create conditional logic for different scenarios",
        starterCode: `// Create a function that checks if someone can vote
// (age 18 or older)
function canVote(age) {
  // Your if/else logic here
}

console.log(canVote(20)); // Should return true
console.log(canVote(16)); // Should return false
`,
        solution: `function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(20));
console.log(canVote(16));`,
        testCases: [
          {
            input: 20,
            expected: true,
            description: "Should allow voting for age 20",
          },
        ],
      },
    ],
  },
  {
    id: "loops",
    title: "Loops (for, while, do...while)",
    slug: "loops",
    description: `🔄 **Repeating Actions Efficiently**

Imagine writing "I will not talk in class" 100 times by hand. Exhausting, right? Loops let computers do repetitive tasks for us!

**For Loop** (when you know how many times):
\`\`\`js
for (let i = 1; i <= 3; i++) {
  console.log("Counting: " + i);
}
// Output: Counting: 1, Counting: 2, Counting: 3
\`\`\`

**While Loop** (when you don't know how many times):
\`\`\`js
let countdown = 3;
while (countdown > 0) {
  console.log(countdown + "...");
  countdown--;
}
console.log("Blast off! 🚀");
\`\`\`

👉 Master the art of repetition without copying and pasting!`,
    sectionIndex: 3,
    lessonIndex: 1,
    challenges: [
      {
        id: "counting-loop",
        title: "Counting with Loops",
        description: "Use a for loop to count from 1 to 5",
        starterCode: `// Write a for loop that counts from 1 to 5
// and prints each number

`,
        solution: `for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}`,
        testCases: [
          {
            expected: "1 to 5",
            description: "Should count from 1 to 5",
          },
        ],
      },
    ],
  },
  {
    id: "switch-statements",
    title: "Switch Statements",
    slug: "switch-statements",
    description: `🔀 **Multiple Choice Selection**

When you have many possible options, switch statements are cleaner than multiple if/else statements. Think of it like a restaurant menu — you pick one option from many.

**Switch Statement:**
\`\`\`js
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week 💼");
    break;
  case "Friday":
    console.log("TGIF! 🎉");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend vibes! 🏖️");
    break;
  default:
    console.log("Just another day");
}
\`\`\`

👉 Create your own switch statement for different scenarios!`,
    sectionIndex: 3,
    lessonIndex: 2,
    challenges: [
      {
        id: "switch-practice",
        title: "Switch Statement Practice",
        description: "Create a switch statement for grading system",
        starterCode: `// Create a function that converts letter grades to descriptions
function getGradeDescription(grade) {
  switch (grade) {
    // Add cases for A, B, C, D, F
  }
}

console.log(getGradeDescription("A"));
`,
        solution: `function getGradeDescription(grade) {
  switch (grade) {
    case "A":
      return "Excellent work!";
    case "B":
      return "Good job!";
    case "C":
      return "Average performance";
    case "D":
      return "Needs improvement";
    case "F":
      return "Please try again";
    default:
      return "Invalid grade";
  }
}

console.log(getGradeDescription("A"));`,
        testCases: [
          {
            input: "A",
            expected: "Excellent work!",
            description: "Should return description for grade A",
          },
        ],
      },
    ],
  },

  // MODULE 5: Objects & Arrays
  {
    id: "object-literals",
    title: "Object Literals and Property Access",
    slug: "object-literals",
    description: `📋 **Organizing Information with Objects**

Objects are like filing cabinets — they store related information together. Instead of having separate variables for a person's name, age, and email, you can group them!

**Creating an Object:**
\`\`\`js
const person = {
  name: "Alex",
  age: 25,
  city: "New York",
  isStudent: false
};
\`\`\`

**Accessing Properties:**
\`\`\`js
console.log(person.name);        // "Alex"
console.log(person["age"]);      // 25
console.log(person.city);        // "New York"
\`\`\`

👉 Create your own objects to organize complex information!`,
    sectionIndex: 4,
    lessonIndex: 0,
    challenges: [
      {
        id: "create-object",
        title: "Create Your First Object",
        description: "Create an object representing a car",
        starterCode: `// Create an object called 'car' with properties:
// brand, model, year, color, isElectric

`,
        solution: `const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  color: "red",
  isElectric: true
};

console.log(car.brand);
console.log(car.model);
console.log(car.isElectric);`,
        testCases: [
          {
            expected: "car object",
            description: "Should create a car object with properties",
          },
        ],
      },
    ],
  },
  {
    id: "array-methods",
    title: "Arrays and Array Methods (push, map, filter)",
    slug: "array-methods",
    description: `📚 **Working with Lists of Data**

Arrays are ordered lists of items — like a shopping list or playlist. JavaScript gives you powerful methods to work with these lists.

**Creating Arrays:**
\`\`\`js
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
\`\`\`

**Useful Array Methods:**
\`\`\`js
fruits.push("grape");           // Add to end
const doubled = numbers.map(n => n * 2);  // Transform each item
const evens = numbers.filter(n => n % 2 === 0);  // Keep only even numbers
\`\`\`

👉 Practice manipulating arrays like a data wizard!`,
    sectionIndex: 4,
    lessonIndex: 1,
    challenges: [
      {
        id: "array-manipulation",
        title: "Array Methods Practice",
        description: "Practice with push, map, and filter methods",
        starterCode: `// Start with an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Add the number 6 to the array
// Create a new array with all numbers doubled
// Create a new array with only odd numbers

`,
        solution: `const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log("After push:", numbers);

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const odds = numbers.filter(n => n % 2 === 1);
console.log("Odd numbers:", odds);`,
        testCases: [
          {
            expected: "array manipulation",
            description: "Should manipulate arrays with various methods",
          },
        ],
      },
    ],
  },
  {
    id: "looping-objects-arrays",
    title: "Looping through Objects and Arrays",
    slug: "looping-objects-arrays",
    description: `🔁 **Iterating Through Collections**

When you have collections of data, you need ways to go through each item. It's like checking each box in a storage room.

**Looping through Arrays:**
\`\`\`js
const colors = ["red", "green", "blue"];

// Traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Modern forEach
colors.forEach(color => {
  console.log(color);
});
\`\`\`

**Looping through Objects:**
\`\`\`js
const person = {name: "Alex", age: 25};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
\`\`\`

👉 Master different ways to iterate through your data!`,
    sectionIndex: 4,
    lessonIndex: 2,
    challenges: [
      {
        id: "iteration-practice",
        title: "Iteration Practice",
        description: "Loop through arrays and objects",
        starterCode: `// Given array and object
const hobbies = ["reading", "coding", "gaming"];
const student = {
  name: "Sarah",
  grade: "A",
  age: 20
};

// Loop through the hobbies array and print each hobby
// Loop through the student object and print each property

`,
        solution: `const hobbies = ["reading", "coding", "gaming"];
const student = {
  name: "Sarah",
  grade: "A",
  age: 20
};

// Loop through hobbies
hobbies.forEach(hobby => {
  console.log("Hobby:", hobby);
});

// Loop through student object
for (let property in student) {
  console.log(property + ":", student[property]);
}`,
        testCases: [
          {
            expected: "iteration results",
            description: "Should iterate through arrays and objects",
          },
        ],
      },
    ],
  },
];

// Helper functions
const findLessonBySlug = (slug: string): Lesson | null => {
  return LESSONS_DATA.find((lesson) => lesson.slug === slug) || null;
};

const getCurrentLessonIndex = (currentLesson: Lesson): number => {
  return LESSONS_DATA.findIndex((lesson) => lesson.id === currentLesson.id);
};

const getNextLesson = (currentLesson: Lesson): Lesson | null => {
  const currentIndex = getCurrentLessonIndex(currentLesson);
  return currentIndex < LESSONS_DATA.length - 1
    ? LESSONS_DATA[currentIndex + 1]
    : null;
};

const getPreviousLesson = (currentLesson: Lesson): Lesson | null => {
  const currentIndex = getCurrentLessonIndex(currentLesson);
  return currentIndex > 0 ? LESSONS_DATA[currentIndex - 1] : null;
};

// Navigation Component
const Navigation = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-gradient flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">
              CodePilot AI
            </span>
          </Link>

          <Link
            to="/course/javascript"
            className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

// Progress Bar Component
const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <motion.div
      className="fixed top-20 left-0 right-0 z-40 h-1 bg-gray-800"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="h-full bg-neon-gradient"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

// Breadcrumb Component
const Breadcrumb = ({ lesson }: { lesson: Lesson }) => {
  return (
    <motion.div
      className="flex items-center gap-2 text-sm text-gray-400 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="hover:text-neon-blue transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        to="/course/javascript"
        className="hover:text-neon-blue transition-colors"
      >
        JavaScript Course
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-300">{lesson.title}</span>
    </motion.div>
  );
};

// Lesson Header Component
const LessonHeader = ({ lesson }: { lesson: Lesson }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Breadcrumb lesson={lesson} />

      <h1 className="text-4xl font-bold mb-4 text-gradient">{lesson.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
        <span>Self-paced</span>
        <span>•</span>
        <span>Beginner Level</span>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span>Rated 4.9 by 13k+ learners</span>
        </div>
      </div>

      {/* Lesson Description */}
      <div className="card-glow p-6 bg-gray-900/50 mb-6">
        <div className="prose prose-invert max-w-none">
          {lesson.description.split("\n").map((paragraph, index) => {
            if (paragraph.trim() === "") return <br key={index} />;

            // Handle code blocks
            if (paragraph.includes("```js")) {
              return null; // Will be handled in the next iteration
            }
            if (paragraph.includes("```")) {
              return null; // Closing code block
            }

            // Handle inline code
            let formattedParagraph = paragraph;
            formattedParagraph = formattedParagraph.replace(
              /`([^`]+)`/g,
              '<code class="bg-gray-800 px-2 py-1 rounded text-neon-blue">$1</code>',
            );

            // Handle bold text
            formattedParagraph = formattedParagraph.replace(
              /\*\*([^*]+)\*\*/g,
              '<strong class="text-neon-blue">$1</strong>',
            );

            // Handle headers
            if (
              paragraph.startsWith("🎯 **") ||
              paragraph.startsWith("📦 **") ||
              paragraph.startsWith("⚡ **")
            ) {
              return (
                <h3
                  key={index}
                  className="text-xl font-bold text-gradient mb-4 mt-6"
                  dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                />
              );
            }

            return (
              <p
                key={index}
                className="text-gray-300 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: formattedParagraph }}
              />
            );
          })}

          {/* Handle code blocks separately */}
          {lesson.description.includes("```js") && (
            <div className="my-6">
              {lesson.description
                .split("```js")
                .slice(1)
                .map((codeBlock, index) => {
                  const code = codeBlock.split("```")[0];
                  return (
                    <div
                      key={index}
                      className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4"
                    >
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{code.trim()}</code>
                      </pre>
                    </div>
                  );
                })}
            </div>
          )}

          {/* Call to action */}
          <div className="mt-6 p-4 bg-neon-blue/10 border border-neon-blue/30 rounded-lg">
            <p className="text-neon-blue font-medium">
              👉 Ready to practice? Let's dive into the interactive challenges
              below!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Curriculum Sidebar Component
const CurriculumSidebar = ({
  isOpen,
  onToggle,
  currentLesson,
  onLessonSelect,
}: {
  isOpen: boolean;
  onToggle: () => void;
  currentLesson: Lesson;
  onLessonSelect: (lesson: Lesson) => void;
}) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([
    currentLesson.sectionIndex,
  ]);

  const curriculum = [
    {
      title: "Getting Started",
      duration: "45 min",
      lessons: LESSONS_DATA.filter((l) => l.sectionIndex === 0),
    },
    {
      title: "Variables & Constants",
      duration: "60 min",
      lessons: LESSONS_DATA.filter((l) => l.sectionIndex === 1),
    },
    {
      title: "Functions Fundamentals",
      duration: "75 min",
      lessons: LESSONS_DATA.filter((l) => l.sectionIndex === 2),
    },
    {
      title: "Control Structures",
      duration: "90 min",
      lessons: LESSONS_DATA.filter((l) => l.sectionIndex === 3),
    },
    {
      title: "Objects & Arrays",
      duration: "105 min",
      lessons: LESSONS_DATA.filter((l) => l.sectionIndex === 4),
    },
  ];

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-y-0 left-0 z-40 w-80 bg-dark-darker/95 backdrop-blur-xl border-r border-white/10 overflow-y-auto"
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          exit={{ x: -320 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="p-6 pt-28">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Course Curriculum</h3>
              <button
                onClick={onToggle}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex} className="card-glow overflow-hidden">
                  <button
                    onClick={() => toggleSection(sectionIndex)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h4 className="font-medium mb-1">{section.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span>{section.lessons.length} lessons</span>
                        <span>•</span>
                        <span>{section.duration}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${expandedSections.includes(sectionIndex)
                        ? "rotate-180"
                        : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedSections.includes(sectionIndex) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-white/10"
                      >
                        {section.lessons.map((lesson, lessonIndex) => (
                          <motion.button
                            key={lesson.id}
                            onClick={() => onLessonSelect(lesson)}
                            className={`w-full text-left p-3 pl-6 text-sm hover:bg-white/5 transition-colors flex items-center gap-3 ${lesson.id === currentLesson.id
                              ? "bg-neon-blue/10 border-l-2 border-neon-blue text-neon-blue"
                              : "text-gray-400"
                              }`}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: lessonIndex * 0.05 }}
                          >
                            {lesson.id === currentLesson.id ? (
                              <Play className="w-4 h-4" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-gray-600" />
                            )}
                            {lesson.title}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Code Sandbox Component
const CodeSandbox = ({
  challenge,
  onCodeChange,
  onRunCode,
  onReset,
  output,
  isRunning,
}: {
  challenge: Challenge;
  onCodeChange: (code: string) => void;
  onRunCode: () => void;
  onReset: () => void;
  output: string;
  isRunning: boolean;
}) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [isSaved, setIsSaved] = useState(false);
  const [hint, setHint] = useState("");
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [showHintSection, setShowHintSection] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCode(challenge.starterCode);
  }, [challenge.starterCode]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange(newCode);

    // Auto-save to localStorage
    localStorage.setItem(`code-${challenge.id}`, newCode);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  useEffect(() => {
    // Load saved code
    const savedCode = localStorage.getItem(`code-${challenge.id}`);
    if (savedCode) {
      setCode(savedCode);
      onCodeChange(savedCode);
    }
  }, [challenge.id]);

  const handleReset = () => {
    setCode(challenge.starterCode);
    onCodeChange(challenge.starterCode);
    localStorage.removeItem(`code-${challenge.id}`);
    setHint("");
    setShowHintSection(false);
    onReset();
  };

  // Get AI hint for current challenge
  const getAIHint = async () => {
    setIsLoadingHint(true);
    try {
      const response = await fetch("/api/ai-hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code,
          challenge: `${challenge.title}: ${challenge.description}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setHint(data.message || "Try breaking down the problem step by step!");
      setShowHintSection(true);
    } catch (error) {
      console.error("Failed to get hint:", error);
      toast.error("Hint service temporarily unavailable");
      setHint(
        "I'm having trouble connecting right now. Try breaking down the problem into smaller steps!",
      );
      setShowHintSection(true);
    } finally {
      setIsLoadingHint(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Challenge Header */}
      <div className="p-4 border-b border-white/10 bg-gray-900/50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-neon-blue" />
            <span className="font-medium">{challenge.title}</span>
            {isSaved && (
              <div className="flex items-center gap-1 text-neon-green text-xs">
                <Save className="w-3 h-3" />
                Saved
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
              title="Reset Code"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
              title="Copy Code"
              onClick={() => navigator.clipboard.writeText(code)}
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
              title="Show Solution"
              onClick={() => handleCodeChange(challenge.solution)}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-400">{challenge.description}</p>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => handleCodeChange(e.target.value)}
          className="flex-1 p-4 bg-gray-900/80 text-gray-300 font-mono text-sm resize-none border-none outline-none"
          placeholder="Write your code here..."
          style={{ minHeight: "200px" }}
        />
      </div>

      {/* Controls */}
      <div className="p-4 border-t border-white/10 bg-gray-900/50 space-y-3">
        <div className="flex gap-2">
          <motion.button
            onClick={onRunCode}
            disabled={isRunning}
            className="btn-neon flex-1 py-3 flex items-center justify-center gap-2 disabled:opacity-50"
            whileHover={{ scale: isRunning ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isRunning ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Run Code
              </>
            )}
          </motion.button>

          <motion.button
            onClick={getAIHint}
            disabled={isLoadingHint}
            className="btn-ghost-neon px-4 py-3 flex items-center gap-2 disabled:opacity-50 relative overflow-hidden"
            whileHover={{ scale: isLoadingHint ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoadingHint ? (
              <>
                <div className="w-5 h-5 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin" />
                Getting Hint...
              </>
            ) : (
              <>
                <Lightbulb className="w-5 h-5" />
                Need a Hint?
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-neon-blue/20 opacity-0 animate-pulse" />
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* AI Hint Section */}
      <AnimatePresence>
        {showHintSection && hint && (
          <motion.div
            className="p-4 bg-neon-blue/10 border-t border-neon-blue/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-neon-blue" />
                <span className="text-neon-blue font-medium">AI Hint</span>
              </div>
              <button
                onClick={() => setShowHintSection(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {hint}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Output Console */}
      {output && (
        <motion.div
          className="p-4 bg-black/50 border-t border-white/10 font-mono text-sm max-h-40 overflow-y-auto"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-gray-400">Console Output</span>
          </div>
          <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
        </motion.div>
      )}
    </div>
  );
};

// AI Companion Component
const AICompanion = ({
  currentCode,
  currentChallenge,
  lessonId,
}: {
  currentCode: string;
  currentChallenge?: Challenge;
  lessonId: string;
}) => {
  const [activeTab, setActiveTab] = useState("explain");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: Date.now(),
      type: "ai",
      content:
        "👋 **Hi there!** I'm your AI coding companion.\n\nI can help you with:\n• **Explaining concepts** clearly\n• **Debugging code** issues\n• **Providing hints** for challenges\n\nWhat would you like to know?",
      timestamp: Date.now(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: "explain",
      label: "Explain Code",
      icon: <Brain className="w-4 h-4" />,
    },
    { id: "fix", label: "Fix My Code", icon: <Zap className="w-4 h-4" /> },
    {
      id: "question",
      label: "Ask Question",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      id: "challenge",
      label: "Challenge",
      icon: <Target className="w-4 h-4" />,
    },
  ];

  // Load chat history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem(`chat-history-${lessonId}`);
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setChatHistory(parsed);
      } catch (error) {
        console.error("Failed to load chat history:", error);
      }
    }
  }, [lessonId]);

  // Save chat history to localStorage
  const saveChatHistory = (history: ChatMessage[]) => {
    localStorage.setItem(`chat-history-${lessonId}`, JSON.stringify(history));
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Send message to AI API
  const sendToAI = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: userMessage }],
          currentCode:
            activeTab === "explain" || activeTab === "fix"
              ? currentCode
              : undefined,
          challengeDescription: currentChallenge?.description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setIsOnline(true);
      return (
        data.message || "I couldn't generate a response. Please try again."
      );
    } catch (error) {
      console.error("AI API error:", error);
      setIsOnline(false);
      toast.error("AI is temporarily unavailable. Please try again later.");
      return "I'm having trouble connecting right now. Please check your internet connection and try again.";
    }
  };

  const sendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || message;
    if (!messageToSend.trim()) return;

    // Create user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      type: "user",
      content: messageToSend,
      timestamp: Date.now(),
    };

    // Update chat history with user message
    const newHistoryWithUser = [...chatHistory, userMessage];
    setChatHistory(newHistoryWithUser);
    saveChatHistory(newHistoryWithUser);
    setMessage("");
    setIsTyping(true);

    try {
      // Get AI response
      const aiResponse = await sendToAI(messageToSend);

      // Create AI message
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: aiResponse,
        timestamp: Date.now(),
      };

      // Update chat history with AI response
      const finalHistory = [...newHistoryWithUser, aiMessage];
      setChatHistory(finalHistory);
      saveChatHistory(finalHistory);
    } catch (error) {
      console.error("Failed to get AI response:", error);

      // Add error message
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        type: "ai",
        content:
          "I'm sorry, I'm having technical difficulties. Please try again later.",
        timestamp: Date.now(),
      };

      const finalHistory = [...newHistoryWithUser, errorMessage];
      setChatHistory(finalHistory);
      saveChatHistory(finalHistory);
    } finally {
      setIsTyping(false);
    }
  };

  // Quick prompt suggestions based on active tab
  const getQuickPrompts = () => {
    switch (activeTab) {
      case "explain":
        return [
          "Explain this code step by step",
          "What does this function do?",
          "How does this work?",
          "Break down this syntax",
        ];
      case "fix":
        return [
          "What's wrong with my code?",
          "Why isn't this working?",
          "Fix my syntax errors",
          "Debug this for me",
        ];
      case "question":
        return [
          "What is a variable?",
          "How do functions work?",
          "Explain JavaScript basics",
          "Give me an example",
        ];
      case "challenge":
        return [
          "Give me a hint",
          "Am I on the right track?",
          "What should I try next?",
          "Show me a similar example",
        ];
      default:
        return [
          "Explain this code",
          "Check for errors",
          "Give me a hint",
          "Show an example",
        ];
    }
  };

  const quickPrompts = getQuickPrompts();

  return (
    <div className="h-full flex flex-col">
      {/* Connection Status */}
      {!isOnline && (
        <div className="bg-red-500/20 border border-red-500/30 p-2 text-center text-red-400 text-sm">
          ⚠️ AI is temporarily unavailable
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-white/10 bg-gray-900/50 flex-shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 p-4 text-sm transition-colors ${activeTab === tab.id
              ? "text-neon-blue border-b-2 border-neon-blue bg-neon-blue/5"
              : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
              }`}
          >
            {tab.icon}
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Area - Fixed height with scroll */}
      <div
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0"
        id="chat-container"
      >
        {chatHistory.map((msg) => (
          <motion.div
            key={msg.id}
            className={`flex gap-3 ${msg.type === "user" ? "justify-end" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.type === "ai" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                AI
              </div>
            )}
            <div
              className={`max-w-xs p-3 rounded-lg ${msg.type === "ai"
                ? "bg-gray-800 text-gray-300"
                : "bg-neon-blue/20 border border-neon-blue/30 text-white"
                }`}
            >
              {msg.type === "ai" ? (
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code: ({ node, inline, className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline ? (
                          <pre className="bg-gray-900 p-2 rounded text-xs overflow-x-auto">
                            <code className={className} {...props}>
                              {children}
                            </code>
                          </pre>
                        ) : (
                          <code className="bg-gray-700 px-1 py-0.5 rounded text-xs" {...props}>
                            {children}
                          </code>
                        );
                      },
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                      li: ({ children }) => <li className="text-sm">{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              )}
              <div className="text-xs opacity-60 mt-1">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
            {msg.type === "user" && (
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                You
              </div>
            )}
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white text-xs font-bold">
              AI
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 bg-gray-900/50 flex-shrink-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => sendMessage(prompt)}
              disabled={isTyping}
              className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isTyping && sendMessage()}
            placeholder={`Ask about ${activeTab === "explain" ? "the code" : activeTab === "fix" ? "debugging" : "programming"}...`}
            disabled={isTyping}
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all disabled:opacity-50"
          />
          <motion.button
            onClick={() => sendMessage()}
            disabled={isTyping || !message.trim()}
            className="p-2 rounded-lg bg-neon-blue hover:bg-neon-purple transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isTyping ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// Lesson Navigation Component
const LessonNavigation = ({
  currentLesson,
  onNavigate,
}: {
  currentLesson: Lesson;
  onNavigate: (lesson: Lesson) => void;
}) => {
  const previousLesson = getPreviousLesson(currentLesson);
  const nextLesson = getNextLesson(currentLesson);

  return (
    <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/10">
      {previousLesson ? (
        <motion.button
          onClick={() => onNavigate(previousLesson)}
          className="btn-ghost-neon px-6 py-3 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5" />
          Previous: {previousLesson.title}
        </motion.button>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <motion.button
          onClick={() => onNavigate(nextLesson)}
          className="btn-neon px-6 py-3 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next: {nextLesson.title}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      ) : (
        <motion.button
          className="btn-neon px-6 py-3 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Trophy className="w-5 h-5" />
          Complete Course
        </motion.button>
      )}
    </div>
  );
};

// Main JavaScript Learn Component
export default function JavaScriptLearn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get lesson from URL or default to first lesson
  const lessonSlug = searchParams.get("lesson") || "intro-javascript";
  const currentLesson = findLessonBySlug(lessonSlug) || LESSONS_DATA[0];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [currentCode, setCurrentCode] = useState(
    currentLesson.challenges[0]?.starterCode || "",
  );
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // Calculate progress
  const currentLessonIndex = getCurrentLessonIndex(currentLesson);
  const progress = Math.round(
    ((currentLessonIndex + 1) / LESSONS_DATA.length) * 100,
  );

  // Handle lesson navigation
  const handleLessonSelect = (lesson: Lesson) => {
    setSearchParams({ lesson: lesson.slug });
    setCurrentChallengeIndex(0);
    setCurrentCode(lesson.challenges[0]?.starterCode || "");
    setOutput("");
    setSidebarOpen(false);
  };

  const handleNavigateLesson = (lesson: Lesson) => {
    handleLessonSelect(lesson);
  };

  // Handle code execution
  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      try {
        // Simple code execution simulation
        const lines = currentCode.split("\n");
        const outputs: string[] = [];

        lines.forEach((line) => {
          if (line.trim().startsWith("console.log(")) {
            const match = line.match(/console\.log\((.*)\)/);
            if (match) {
              try {
                const result = eval(match[1]);
                outputs.push(String(result));
              } catch {
                outputs.push(match[1].replace(/['"]/g, ""));
              }
            }
          }
        });

        setOutput(outputs.join("\n") || "Code executed successfully!");
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
      setIsRunning(false);
    }, 1500);
  };

  const resetCode = () => {
    const challenge = currentLesson.challenges[currentChallengeIndex];
    setCurrentCode(challenge?.starterCode || "");
    setOutput("");
  };

  const currentChallenge = currentLesson.challenges[currentChallengeIndex];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <ProgressBar progress={progress} />
      <CurriculumSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentLesson={currentLesson}
        onLessonSelect={handleLessonSelect}
      />

      {/* Main Content */}
      <div className="pt-24 min-h-screen">
        <div className="container-wide section-padding">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <LessonHeader lesson={currentLesson} />
            </div>
            <button
              onClick={() => setSidebarOpen(true)}
              className="btn-ghost-neon px-4 py-2 flex items-center gap-2"
            >
              <Book className="w-5 h-5" />
              Curriculum
            </button>
          </div>

          {/* Learning Interface */}
          <div className="grid lg:grid-cols-2 gap-8 h-[600px]">
            {/* Code Sandbox */}
            <motion.div
              className="card-glow overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentChallenge && (
                <CodeSandbox
                  challenge={currentChallenge}
                  onCodeChange={setCurrentCode}
                  onRunCode={runCode}
                  onReset={resetCode}
                  output={output}
                  isRunning={isRunning}
                />
              )}
            </motion.div>

            {/* AI Companion */}
            <motion.div
              className="card-glow overflow-hidden h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AICompanion
                currentCode={currentCode}
                currentChallenge={currentChallenge}
                lessonId={currentLesson.id}
              />
            </motion.div>
          </div>

          {/* Lesson Navigation */}
          <LessonNavigation
            currentLesson={currentLesson}
            onNavigate={handleNavigateLesson}
          />
        </div>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
