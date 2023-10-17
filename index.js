const ratingState = document.querySelector(".rating-state-container");
const thankYouState = document.querySelector(".thank-you-state-container");
const userRating = document.querySelector(".user-rating p");
const submitButton = document.getElementsByClassName("submit-button")[0];
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rate-btn");


submitButton.onclick = function() {
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
}

rates.forEach(rate => {
    rate.onclick = function() {
        rating.innerHTML = rate.innerHTML;
    }
})