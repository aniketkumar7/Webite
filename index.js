var toggles = document.querySelectorAll(".s5-top");

toggles.forEach(function (toggle) {
  
  toggle.addEventListener("click", function () {
    
    var content = this.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";

    var title = this.querySelector("h3");
    var icon = this.querySelector(".toggle");
    
    if (title.style.color === "black") {
      title.style.color = "rgb(130, 71, 255)";
      icon.innerHTML =
        "<i class='fa-solid fa-circle-xmark' style='color: ;'></i>";
    } 
      
    else {
      title.style.color = "black";
      icon.innerHTML = "<i class='fa-solid fa-plus' style='color: ;'></i>";
    }
    
  });
});

// function to change the body background color on scroll
window.onscroll = function () {
  myFunction();
};


function myFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("main").style.backgroundColor =
      "rgb(255, 255, 255)";
  } else {
    document.getElementById("main").style.backgroundColor =
      "rgb(253, 242, 236)";
  }

  document.add.classList("transition");
}


// Get the menu button element by its id
var menuBtn = document.getElementById("menu-btn");

// Get the header element by its class name
var header = document.getElementsByClassName("header")[0];

// Add a click event listener to the menu button
menuBtn.addEventListener("click", function() {
  // Check if the header element is displayed or not
  if (header.style.display === "none" ) {
    // If the header element is not displayed, set its display to block
    header.style.display = "flex";
    menuBtn.add.classList.toggle("fa-circle-xmark");
    menuBtn.remove.classList.toggle("fa-bars");
  } 
  
  else {
    // If the header element is displayed, set its display to none
    header.style.display = "none";
    menuBtn.add.classList.toggle("fa-bars");
    menuBtn.remove.classList.toggle("fa-circle-xmark");
  }
  
});


