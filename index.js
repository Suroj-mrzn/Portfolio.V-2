//hdiuasgrfuoyiasgt  tryna make so what then i click the button on the side it slides up
//but idk how to make
//lets js try and see what happens

const UpBtn = document.getElementById("Up-btn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        UpBtn.style.display = "block";
    }
    else
    {
        UpBtn.style.display = "none";
    }
});

UpBtn.addEventListener("click", () => {
   window.scrollTo({
    top: 0,
    behavior: "smooth",
   });
});

