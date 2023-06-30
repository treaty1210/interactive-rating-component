//Query selector for submit button
let submit = document.querySelector(".submit");
let ratePage = document.querySelector(".ratePage");
let thankPage = document.querySelector(".thankPage");

//Event display to call switch on click
submit.addEventListener("click", () => {
    switchDisplay();
    console.log("test")
})

//function to change display
const switchDisplay = () => {
    ratePage.style.display = "none";
    thankPage.style.display = "block";
}