//TODO 📚 Module 4 - Lesson 12.02: Execution Context in Action - Challenge


//TODO  🛠️ Step 4: Project Lesson Challenge — Stack Trace Simulator

//  🎯 Challenge Title: "Call Stack Debugger: Trace the Flow"


//* 🧩 Scenario
//  We are building a simplified stack trace simulator to help junior developers visualize how function calls stack and unstack in JavaScript. The project will demonstrate:
//  • How execution contexts are created and destroyed
//  • How errors bubble through the stack
//  • How lexical scope determines variable access

//* 📋 Challenge Requirements
//  1. Simulate at least 3 nested function calls where each function logs:
//  • Its start
//  • Any variable access it makes
//  • Its return or finish
//  2. Deliberately trigger a ReferenceError in one of the nested calls (e.g., accessing an undefined variable), and observe the output.
//  3. Manually narrate or comment the stack state at key moments (e.g., “At this point, the stack has: Global → A → B”).
//  4. Demonstrate scope lookup behavior by declaring a variable in an outer function and accessing it in an inner one.
//  5. Optional: Add a mechanism that logs function entry/exit like:
//  > Entering: functionX
//  > Exiting: functionX

//* 🧠 Learning Goals
//  • Cement mental model of the call stack
//  • Connect console errors to the order of function calls
//  • Understand how and why functions “clean up” after execution
//  • Observe lexical scoping in action (what is accessible from where)

//* 🧾 Reflection Questions
//  • What did the stack look like just before the error occurred?
//! Answer:

//  • In what order did the functions exit?
//! Answer:

//  • Where did JavaScript find the variables you used?
//! Answer:

//  • How would you modify this pattern to trace bugs in a real app?
//! Answer:


//! Solution

(() => {
    function one() {
        console.log("Its start");
        two();
    }

    function two() {
        console.log("Any variable access it makes");
        three();
    }

    function three() {
        //  At this point, the stack has: Global → one → two → three
        console.log("Its return or finish");

        try {
            throw new ReferenceError("Hello");
        } catch (e) {
            console.log(e instanceof ReferenceError);
        }
    }

    // Trigger Execution
    one();                                  
})();

function outer() {
    const outerVar = 'functionX';
    console.log(`Exiting: ${outerVar}`);

    function inner() {
        console.log(`Entering: ${outerVar}`);
    }
    inner();
}

outer();
