/**
 * ==========================================
 * ⚛️ REACT.JS INTERVIEW CHEAT SHEET
 * ==========================================
 * 
 * 1. CORE CONCEPTS
 * ----------------
 * - Virtual DOM: A lightweight copy of the real DOM. React compares the new V-DOM 
 *   with the previous one (Diffing) and updates only changed elements (Reconciliation).
 * - JSX: Syntax extension for JS. Looks like HTML, but is JavaScript.
 * - Components: Reusable UI building blocks (Functional vs Class).
 */

// ==========================================
// 2. IMPORTANT HOOKS (Functional Components)
// ==========================================

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

function ReactHooksDemo() {
    // A. useState: Manages local state
    const [count, setCount] = useState(0);

    // B. useEffect: Handles side effects (API calls, subscriptions)
    // Runs after every render by default.
    useEffect(() => {
        console.log("Component Mounted or Updated");

        return () => {
            console.log("Cleanup (Component Unmounted)");
        }
    }, [count]); // Dependency array: Runs only when 'count' changes. 
    // Empty [] = Runs only once (Mount).

    // C. useMemo: Caches a calculated VALUE to prevent expensive re-calcs.
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]);

    // D. useCallback: Caches a FUNCTION definition to prevent re-creation on renders.
    // Useful when passing functions to child components to prevent their re-render.
    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []); // No dependencies, function stays the same.

    // E. useRef: Persists values between renders WITHOUT causing re-render.
    // Also used to access DOM elements directly.
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Double: {expensiveCalculation}</h2>
            <button onClick={increment}>Increment</button>

            <input ref={inputRef} placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

/**
 * 3. COMPONENT LIFECYCLE (Class vs Functional)
 * --------------------------------------------
 * 
 * | Phase      | Class Component Method    | Functional Hook Equivalent       |
 * |------------|---------------------------|----------------------------------|
 * | Mounting   | componentDidMount()       | useEffect(() => {}, [])          |
 * | Updating   | componentDidUpdate()      | useEffect(() => {}, [prop/state])|
 * | Unmounting | componentWillUnmount()    | useEffect(() => { return cleanup }, []) |
 */

// ==========================================
// 4. COMMON INTERVIEW QUESTIONS
// ==========================================

/*
Q1: What is Prop Drilling? How to avoid it?
A: Passing data through many layers of components. 
   Avoid using: Context API, Redux, or Component Composition.

Q2: Controlled vs Uncontrolled Components?
A: Controlled: Form data is handled by React state (value={state}).
   Uncontrolled: Form data is handled by the DOM (ref).

Q3: What is the "key" prop?
A: A unique string attribute that helps React identify which items have changed, 
   added, or removed. Crucial for performance in lists.

Q4: React.memo?
A: A Higher Order Component (HOC) that skips re-rendering a component 
   if its props haven't changed.
*/

// ==========================================
// 5. CONTEXT API EXAMPLE (Global State)
// ==========================================

const ThemeContext = React.createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return <ThemedButton />;
}

function ThemedButton() {
    // Consuming the context
    const theme = React.useContext(ThemeContext);
    return <button style={{ background: theme === 'dark' ? '#333' : '#fff' }}>I am {theme}</button>;
}
