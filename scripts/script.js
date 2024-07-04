
document.addEventListener("DOMContentLoaded", () => {
    if (document.title.includes("Wojciech Grodzicki - Portfolio")) {
        handleCategoryDropdown();
    }
});

// Handles the behaviour of the Portfolio page category dropdown button
function handleCategoryDropdown() {
    const categories = document.getElementById("portfolio-dropdown").getElementsByClassName("dropdown-item");
    
    for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener("click", () => {
            document.getElementById("portfolio-dropdown-btn").innerHTML = categories[i].innerHTML; // Display category in the button
            filterByCategory(categories[i].innerHTML.toLowerCase());
        });
    }
}

// Filters Portfolio page by category in the <span> element
function filterByCategory(category) {

    const cards = document.getElementsByClassName("col");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "initial"; // Make sure the display is refreshed on each filtering

        if (category == "all") {
            continue; // Keep all cards displayed
        }

        if (cards[i].getElementsByTagName("span").length <= 0) {
            continue;
        }

        if (!cards[i].getElementsByTagName("span").item(0).innerHTML.includes(category)) {
            cards[i].style.display = "none";
        }
    }
}