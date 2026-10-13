const resources = [
  {
    id: "oop-java", category: "Java", icon: "J", read: "6 min read",
    title: "OOP Concepts in Java: A Beginner's Guide",
    description: "Understand encapsulation, inheritance, polymorphism, and abstraction with simple examples.",
    body: `
      <span class="dialog-tag">Java · Interview basics</span>
      <h2 id="dialogTitle">OOP Concepts in Java: A Beginner's Guide</h2>
      <p>Object-Oriented Programming (OOP) organizes code around classes and objects. The four concepts below are common in fresher interviews.</p>
      <h3>1. Encapsulation</h3>
      <p>Encapsulation bundles data with the methods that operate on it and controls access. A common Java approach is to make fields private and expose carefully chosen public methods.</p>
      <pre><code>class Student {
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}</code></pre>
      <h3>2. Inheritance</h3>
      <p>Inheritance lets a class extend another class and reuse accessible behaviour. Java uses <code class="inline">extends</code> for class inheritance.</p>
      <pre><code>class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}</code></pre>
      <h3>3. Polymorphism</h3>
      <p>Polymorphism allows the same method name or interface to represent different behaviour. Overloading uses different parameter lists; overriding provides a subclass implementation of an inherited instance method.</p>
      <h3>4. Abstraction</h3>
      <p>Abstraction exposes essential operations while hiding implementation details. Java supports it through abstract classes and interfaces.</p>
      <h3>Quick revision</h3>
      <ul><li>Encapsulation: controlled access to data.</li><li>Inheritance: reuse accessible class behaviour.</li><li>Polymorphism: one interface, different behaviours.</li><li>Abstraction: focus on essential functionality.</li></ul>
      <h3>Practise these questions</h3>
      <ol><li>What is the difference between a class and an object?</li><li>Overloading vs overriding?</li><li>Can Java classes extend multiple classes?</li><li>How does an interface differ from an abstract class?</li></ol>
      <p><strong>Practice tip:</strong> Write a tiny program for each concept and explain it aloud in your own words.</p>`
  },
  {
    id: "string-java", category: "Java", icon: "Aa", read: "5 min read",
    title: "== vs .equals() in Java",
    description: "Learn the difference between reference comparison and logical equality, with a common interview trap.",
    body: `
      <span class="dialog-tag">Java · Strings</span><h2 id="dialogTitle">== vs .equals() in Java</h2>
      <p>In Java, <code class="inline">==</code> compares primitive values, but for objects it compares whether two references point to the same object. The <code class="inline">equals()</code> method can compare logical content when a class implements it appropriately.</p>
      <pre><code>String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);      // false
System.out.println(a.equals(b)); // true</code></pre>
      <h3>Why?</h3><p><code class="inline">a</code> and <code class="inline">b</code> refer to two different String objects, so <code class="inline">==</code> is false. Their text is the same, so String's overridden <code class="inline">equals()</code> returns true.</p>
      <h3>Interview reminder</h3><ul><li>Use <code class="inline">==</code> for primitive value comparison.</li><li>Use <code class="inline">equals()</code> when you need content equality for objects.</li><li>Be careful with null references before calling an instance method.</li></ul>`
  },
  {
    id: "arraylist", category: "Java", icon: "[]", read: "7 min read",
    title: "ArrayList vs LinkedList",
    description: "Compare how the two List implementations store data and where their performance differs.",
    body: `
      <span class="dialog-tag">Java · Collections</span><h2 id="dialogTitle">ArrayList vs LinkedList</h2>
      <p>Both ArrayList and LinkedList implement the List interface, but their internal structures differ.</p>
      <ul><li><strong>ArrayList:</strong> backed by a resizable array. It offers fast indexed access in typical use.</li><li><strong>LinkedList:</strong> a doubly linked list. Accessing an element by index requires traversal.</li></ul>
      <h3>Simple comparison</h3><p>Choose ArrayList as a general default when you need frequent reads or indexed access. LinkedList can be useful for particular insertion/removal patterns when you already have a relevant position or iterator, but it is not automatically faster for every insertion or deletion.</p>
      <pre><code>List<String> names = new ArrayList<>();
names.add("Asha");
names.add("Ravi");
System.out.println(names.get(0)); // Asha</code></pre>
      <h3>Interview questions</h3><ol><li>Which provides faster random access?</li><li>Do both allow duplicate elements?</li><li>Which interfaces do they implement?</li></ol>`
  },
  {
    id: "sql-joins", category: "SQL", icon: "DB", read: "6 min read",
    title: "SQL JOINs Explained with Examples",
    description: "Understand INNER JOIN and LEFT JOIN using a small Employees and Departments example.",
    body: `
      <span class="dialog-tag">SQL · Query fundamentals</span><h2 id="dialogTitle">SQL JOINs Explained with Examples</h2>
      <p>A JOIN combines rows from tables using a related column. Imagine an Employees table with a department_id and a Departments table with department_id and department_name.</p>
      <h3>INNER JOIN</h3><p>Returns rows with matching department IDs in both tables.</p>
      <pre><code>SELECT e.name, d.department_name
FROM Employees e
INNER JOIN Departments d
  ON e.department_id = d.department_id;</code></pre>
      <h3>LEFT JOIN</h3><p>Returns every row from Employees and matching department data when available. If there is no match, the department columns are NULL.</p>
      <pre><code>SELECT e.name, d.department_name
FROM Employees e
LEFT JOIN Departments d
  ON e.department_id = d.department_id;</code></pre>
      <h3>Remember</h3><ul><li>INNER JOIN: matching rows only.</li><li>LEFT JOIN: all rows from the left table plus matches.</li><li>The join condition determines how rows match.</li></ul>
      <p>Practise by adding an employee whose department_id does not exist and compare the outputs.</p>`
  },
  {
    id: "where-having", category: "SQL", icon: "SQL", read: "4 min read",
    title: "WHERE vs HAVING in SQL",
    description: "Learn when to filter individual rows and when to filter grouped results.",
    body: `
      <span class="dialog-tag">SQL · Aggregation</span><h2 id="dialogTitle">WHERE vs HAVING in SQL</h2>
      <p><code class="inline">WHERE</code> filters rows before grouping. <code class="inline">HAVING</code> filters groups after GROUP BY has formed them.</p>
      <pre><code>SELECT department_id, COUNT(*) AS total
FROM Employees
WHERE salary > 30000
GROUP BY department_id
HAVING COUNT(*) >= 3;</code></pre>
      <p>This query first keeps employees earning more than 30,000, groups the remaining rows by department, and then keeps departments with at least three qualifying employees.</p>
      <h3>Interview shortcut</h3><ul><li>WHERE: row-level filtering.</li><li>HAVING: group-level filtering, often using aggregates.</li></ul>
      <p>Try writing a query to find departments whose average salary exceeds 50,000.</p>`
  },
  {
    id: "second-salary", category: "SQL", icon: "SQL", read: "5 min read",
    title: "Find the Second-Highest Salary in SQL",
    description: "A classic fresher interview question, with a solution that handles duplicate salaries.",
    body: `
      <span class="dialog-tag">SQL · Interview question</span><h2 id="dialogTitle">Find the Second-Highest Salary in SQL</h2>
      <p>Assume a table named Employees has a salary column. One portable approach is to select the maximum salary that is lower than the maximum salary overall.</p>
      <pre><code>SELECT MAX(salary) AS second_highest_salary
FROM Employees
WHERE salary < (
  SELECT MAX(salary)
  FROM Employees
);</code></pre>
      <p>Because the query uses MAX, duplicate occurrences of the highest salary do not change the answer. If there is no distinct second-highest salary, the result is NULL.</p>
      <h3>Think about edge cases</h3><ul><li>What if the table is empty?</li><li>What if all employees have the same salary?</li><li>How would you return the third-highest distinct salary?</li></ul>`
  },
  {
    id: "array-practice", category: "Coding", icon: "{}", read: "8 min read",
    title: "3 Array Problems Every Fresher Should Practise",
    description: "Start with frequency counting, finding duplicates, and the Two Sum pattern.",
    body: `
      <span class="dialog-tag">Coding · Arrays</span><h2 id="dialogTitle">3 Array Problems Every Fresher Should Practise</h2>
      <h3>1. Count frequencies</h3><p>Use a HashMap to store each value and its count. This is useful when you need to know how often a number appears.</p>
      <h3>2. Find duplicates</h3><p>Use a HashSet to track values already seen. When adding a value returns false, that value has appeared before.</p>
      <h3>3. Two Sum</h3><p>For each number x, calculate target - x and check whether the complement has already been seen in a map. This can reduce a simple nested-loop approach from O(n²) to expected O(n) time.</p>
      <pre><code>Map<Integer, Integer> seen = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int need = target - nums[i];
    if (seen.containsKey(need)) {
        System.out.println(seen.get(need) + ", " + i);
        break;
    }
    seen.put(nums[i], i);
}</code></pre>
      <p>Assumption: the problem asks for one pair of distinct indices, and the code stops after finding the first pair.</p>`
  },
  {
    id: "project-interview", category: "Career", icon: "↗", read: "6 min read",
    title: "How to Explain Your College Project in an Interview",
    description: "Use a clear structure to explain the problem, your role, the technology, and the result.",
    body: `
      <span class="dialog-tag">Career · Interview preparation</span><h2 id="dialogTitle">How to Explain Your College Project in an Interview</h2>
      <p>A good project explanation is clear, specific, and honest. You do not need to claim that your project is revolutionary; show that you understand the decisions you made.</p>
      <h3>Use this five-part structure</h3><ol><li><strong>Problem:</strong> What user need or problem did you address?</li><li><strong>Solution:</strong> What does the application do?</li><li><strong>Technology:</strong> Which tools did you use and why?</li><li><strong>Your contribution:</strong> Which parts did you personally implement?</li><li><strong>Challenge:</strong> What went wrong, and how did you resolve it?</li></ol>
      <h3>Example opening</h3><p>“I built a recipe management application that lets users browse and organize recipes. I worked on the interface, connected it to the backend, and stored recipe information in a database. One challenge was handling data consistently between the interface and the API.”</p>
      <p>Only use details that accurately describe your own project. Be ready to explain the code, database schema, and trade-offs.</p>`
  }
];

const grid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const resourceCount = document.getElementById("resourceCount");
const emptyState = document.getElementById("emptyState");
const articleDialog = document.getElementById("articleDialog");
const dialogContent = document.getElementById("dialogContent");
let activeFilter = "All";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
}

function renderResources() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = resources.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.category === activeFilter;
    const haystack = `${item.title} ${item.description} ${item.category}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
  grid.innerHTML = filtered.map((item) => `
    <article class="resource-card">
      <div class="card-top">
        <span class="card-icon" aria-hidden="true">${escapeHTML(item.icon)}</span>
        <span class="card-category ${item.category.toLowerCase()}">${escapeHTML(item.category)}</span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <button class="card-link" data-open="${escapeHTML(item.id)}">Read guide <span aria-hidden="true">→</span></button>
    </article>
  `).join("");
  resourceCount.textContent = `${filtered.length} resource${filtered.length === 1 ? "" : "s"}`;
  emptyState.hidden = filtered.length !== 0;
}

function openArticle(id) {
  const item = resources.find((resource) => resource.id === id);
  if (!item) return;
  dialogContent.innerHTML = item.body;
  if (typeof articleDialog.showModal === "function") {
    articleDialog.showModal();
  } else {
    alert("Your browser does not support the article dialog. Please use a modern browser.");
  }
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (button) openArticle(button.dataset.open);
});
searchInput.addEventListener("input", renderResources);
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderResources();
  });
});

document.getElementById("dialogClose").addEventListener("click", () => articleDialog.close());
articleDialog.addEventListener("click", (event) => {
  if (event.target === articleDialog) articleDialog.close();
});

const quizOptions = [...document.querySelectorAll(".quiz-option")];
const quizFeedback = document.getElementById("quizFeedback");
const quizRetry = document.getElementById("quizRetry");
quizOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const correct = option.dataset.answer === "extends";
    quizOptions.forEach((button) => {
      button.disabled = true;
      if (button.dataset.answer === "extends") button.classList.add("correct");
    });
    if (!correct) option.classList.add("incorrect");
    quizFeedback.hidden = false;
    quizFeedback.innerHTML = correct
      ? "<strong>Correct!</strong> A class uses <code>extends</code> to inherit from another class. A class uses <code>implements</code> to implement an interface."
      : "<strong>Not quite.</strong> The correct answer is <code>extends</code>. Java classes use it to inherit from another class.";
    quizRetry.hidden = false;
  });
});
quizRetry.addEventListener("click", () => {
  quizOptions.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
  quizFeedback.hidden = true;
  quizFeedback.textContent = "";
  quizRetry.hidden = true;
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Thanks! This is a demo form only, so your email was not sent or saved. Connect a mailing-list service before collecting subscribers.";
  note.style.color = "#0369a1";
});
document.getElementById("year").textContent = new Date().getFullYear();
renderResources();
