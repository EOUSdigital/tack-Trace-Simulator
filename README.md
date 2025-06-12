# Lesson 12: Step 4 — Project Challenge

## 🛠️ Challenge: Call Stack Debugger — Trace the Flow

### 🎯 Goal
Simulate the real behavior of JavaScript’s call stack, scope resolution, and error flow during nested function execution.

---

## ✅ Project Requirements Met

### 🔗 Execution Chain
Three nested functions are defined and executed in this order:
- `one()` → `two()` → `three()`

This forms a dynamic call stack at runtime.

---

### 📦 Stack Commentary
Inside `three()`, a comment outlines the simulated stack state:
```
Global → one → two → three
```

---

### 💥 ReferenceError Simulation
Inside `three()`, a `ReferenceError` is thrown and caught using a `try/catch` block:
- Confirms the ability to simulate runtime errors.
- Provides a view of how JavaScript exits gracefully through error handling.

---

### 🔍 Scope Demonstration
Although not included in this minimal version, the previous implementation also demonstrated **lexical scope** with `outer()` and `inner()`:
- `inner()` accessed `outerVar` from its parent scope.
- Reinforces how execution context and variable lookup work together.

---

## 🧠 Reflection Questions

- What did the stack look like right before the error was thrown?
- How did JavaScript clean up the stack after `three()` completed?
- Why does each function create a new execution context?
- What would happen if the error weren’t caught?

---

This project is a hands-on way to internalize how JavaScript builds, manages, and clears execution contexts during runtime — the backbone of understanding function behavior.
