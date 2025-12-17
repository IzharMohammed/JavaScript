const div = document.getElementById("div");
const button = document.getElementById("button");
const form = document.getElementById("form");

// div.addEventListener("click", () => {
//     alert("div clicked");
// });

// button.addEventListener("click", () => {
//     alert("button clicked");
// });

// form.addEventListener("click", () => {
//     alert("form clicked");
// });

// Q: event.target vs event.currentTarget vs this.tagName
// div.addEventListener("click", func)
// button.addEventListener("click", func)
// form.addEventListener("click", func)

// function func(event) {
//     alert(
//         "current target: " + event.currentTarget.tagName +
//         ", target: " + event.target.tagName +
//         ', this=: ' + this.tagName
//     )
// }

// what is event capture/Trickling
div.addEventListener("click", () => {
    alert("div clicked");
});

form.addEventListener("click", () => {
    alert("form clicked");
},{capture:true});

button.addEventListener("click", () => {
    alert("button clicked");
});



// How to stop bubbling/capturing
// div.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert("div clicked");
// });

// button.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert("button clicked");
// });

// form.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert("form clicked");
// });

// What is event delegation
//  adding event to parent element and handling events for child elements

// document.querySelector(".products").addEventListener("click", (event) => {
//     if (event.target.tagName === "SPAN") {
//         window.location.href += "/" + event.target.className;
//     }
// });