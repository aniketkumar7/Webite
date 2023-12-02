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
    } else {
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

var copy = document.querySelector(".marquee-container").cloneNode(true);
      document.querySelector(".marquee").appendChild(copy);



  
  


