/**
 * ==========================================
 * ⚡ EVENT PROPAGATION IN JAVASCRIPT
 * ==========================================
 * 
 * 1. WHAT IS EVENT PROPAGATION?
 * -----------------------------
 * It describes the order in which event handlers are called when an event occurs 
 * on an element that is nested inside other elements.
 * 
 * There are two main phases:
 * 1. CAPTURING PHASE (Trickling): Event goes down from window -> document -> root -> target.
 * 2. BUBBLING PHASE: Event bubbles up from target -> parent -> root -> document -> window.
 * 
 * By default, events are handled in the BUBBLING phase.
 */

const div = document.getElementById("div");
const form = document.getElementById("form");
const button = document.getElementById("button");

// ==========================================
// 2. EVENT BUBBLING (Default Behavior)
// ==========================================
// Events bubble up from the target element to its parents.
// Clicking the BUTTON triggers: Button -> Form -> Div

/*
div.addEventListener("click", () => alert("div clicked (Bubbling)"));
form.addEventListener("click", () => alert("form clicked (Bubbling)"));
button.addEventListener("click", () => alert("button clicked (Bubbling)"));
*/

// ==========================================
// 3. EVENT CAPTURING (Trickling)
// ==========================================
// Events go down from the top to the target.
// We enable this by passing `{ capture: true }` as the third argument.
// Clicking the BUTTON triggers: Div -> Form -> Button

/*
div.addEventListener("click", () => {
    alert("div clicked (Capturing)");
}, { capture: true });

form.addEventListener("click", () => {
    alert("form clicked (Capturing)");
}, { capture: true });

button.addEventListener("click", () => {
    alert("button clicked (Capturing)");
}, { capture: true });
*/

// ==========================================
// 4. STOPPING PROPAGATION
// ==========================================
// `event.stopPropagation()` stops the event from moving to the next part of the flow.

/*
div.addEventListener("click", () => alert("div clicked"));

button.addEventListener("click", (event) => {
    event.stopPropagation(); // Stops event here. Div won't see it.
    alert("button clicked (Propagation Stopped)");
});
*/

// ==========================================
// 5. EVENT OBJECT: target vs currentTarget
// ==========================================
// event.target: The element that triggered the event (e.g., the button you actually clicked).
// event.currentTarget: The element that the event listener is attached to (e.g., the div).

function infoFunc(event) {
    alert(
        "target: " + event.target.tagName + // What you clicked
        "\ncurrentTarget: " + event.currentTarget.tagName // Where listener is attached
    );
}

div.addEventListener("click", infoFunc);
button.addEventListener("click", infoFunc);


// ==========================================
// 6. EVENT DELEGATION
// ==========================================
// Instead of adding listeners to every child, add ONE listener to the parent.
// This uses Bubbling to catch events from children.
// Efficient for dynamic lists or large numbers of elements.

const productsContainer = document.querySelector(".products");

productsContainer.addEventListener("click", (event) => {
    // Check if the clicked element is a SPAN
    if (event.target.tagName === "SPAN") {
        // Redirect or perform action based on the specific child
        console.log("Navigating to: /" + event.target.className);
        // window.location.href += "/" + event.target.className;
    }
});

console.log("Event Propagation script loaded. Uncomment sections to test!");