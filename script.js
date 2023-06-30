//Query selector for submit button
let submit = document.querySelector(".submit");
let ratePage = document.querySelector(".ratePage");
let thankPage = document.querySelector(".thankPage");
let ratings = document.querySelectorAll(".ratings");
let rateScore = document.querySelector(".rateScore");

//Event display to call switch on click
submit.addEventListener("click", () => {
    switchDisplay();
    console.log("test")
})

//function to change display
const switchDisplay = () => {
    ratePage.style.display = "none";
    thankPage.style.display = "grid";
}

//Inserts value chosen in thank you message area
ratings.forEach(rate => rate.addEventListener("click", (e) => {
    rateScore.textContent = `${e.target.textContent}`;
    console.log(`${e.target.textContent}`);
}))