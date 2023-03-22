const searchIcon = document.getElementById("search-icon");
const searchBarContainer = document.getElementById("search-bar-container");

searchIcon.addEventListener("click", function() {
  if (searchBarContainer.style.display === "none") {
    searchBarContainer.style.display = "flex";
  } else {
    searchBarContainer.style.display = "none";
  }
});
