let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName('myslides');
    let demo = document.getElementsByClassName('demo');
    
    if(n > slides.length){
       slideIndex = 1
    }
    if(n < 1){
      slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

     for(let i = 0; i < demo.length; i++){
        demo[i].className = demo[i].className.replace("active")
     }
     
    slides[slideIndex-1].style.display ="block";
    demo[slideIndex-1].className += "active"

}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n)
}


function openModel() {
   document.getElementById('myModel').style.display = "block";
}


function closeModel() {
    document.getElementById("myModel").style.display = "none";
}

function goWhatsapp() {
    window.open("https://wa.me/8562097848290?text=ສະບາຍດີ🙏 ລູກຄ້ານ່າຮັກ❤️ສົນໃຈລາຍລະອຽດຕິດຕໍ່ມາເດີ້","_blank");
}




document.getElementById("skills").addEventListener("click", function (e) {
   e.preventDefault();

   document.getElementById("skill").scrollIntoView({
    behavior:"smooth",
    block:"start"
   });
});
document.getElementById("Sv").addEventListener("click", function (e) {
   e.preventDefault();

   document.getElementById("service").scrollIntoView({
    behavior:"smooth",
    block:"start"
   });
});



function myFunction(x) {
   x.classList.toggle("change")
};

const hamIcon = document.getElementById('hamIcon');
const mobileMenu = document.getElementById('mobileMenu');

   hamIcon.addEventListener("click", () => {

      if(mobileMenu.style.display === "block") {
         mobileMenu.style.display = "none";
      }else{
         mobileMenu.style.display = "block";
      }
      // mobileMenu.style.display = "block";
   })