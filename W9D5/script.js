document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const appendPlace = (e) => {
    e.preventDefault();
    inputEl = document.getElementsByClassName("favorite-input")[0];
    inputText = inputEl.value;
    li = document.createElement("li");
    li.textContent = inputText;
    ul = document.getElementById("restaurants");
    inputEl.value = "";
    ul.appendChild(li);
  }

  document.querySelector(".list-container > form").addEventListener("submit", appendPlace);


  // adding new photos

  // --- your code here!

  const showPhotoForm = (e) => {
    e.preventDefault();
    toggleHidden(document.querySelector(".photo-form-container"));
  }

  const toggleHidden = (ele) => {
    let cl = ele.classList; 
    if (cl.contains("hidden")) { cl.remove("hidden") }
    else { cl.add("hidden") }
  }

  const appendPhoto = (e) => {
    e.preventDefault();
    inputEl = document.getElementsByClassName("photo-url-input")[0];
    inputText = inputEl.value;
    li = document.createElement("li");
    img = document.createElement("img");
    img.src = inputText;
    ul = document.querySelector(".dog-photos");
    inputEl.value = "";
    li.appendChild(img);
    ul.appendChild(li);
  }

  document.querySelector(".photo-show-button").addEventListener("click", showPhotoForm);
  document.querySelector(".photo-form-container > form").addEventListener("submit", appendPhoto);
});
