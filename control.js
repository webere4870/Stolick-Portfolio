$().ready(()=>
{
    $('.hamburger').on('click',(evt)=>
    {
        console.log("here")
        evt.stopPropagation()
        $(".mobileNavigation").slideToggle(1000);
    })

    $('.cancelForm').click((evt)=>
    {
        $('.formCover').toggle(500)
    })

    $('.openForm').click((evt)=>
    {
        $('.formCover').toggle(500)
    })
    $('.backBtn').click((evt)=>
    {
        history.back()
    })

    $(".iframe").click((evt)=>
    {
        $('.xBtn').toggle(400)
        $("." + evt.target.id).toggle(400)
    })


    $('.xBtn').click((evt)=>
    {
        $('.xBtn').toggle(400)
        $('.courses').toggle(400)
    })
})

$(window).ready(()=>
{
    $('.preloader').fadeOut(500)
})

let latitude = 41.037660;
let longitude = -83.649540;
let mymap = L.map('mapid', {tap: false}).setView([latitude, longitude], 13);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileURL, {attribution: attribution});
tiles.addTo(mymap);
var marker = L.marker([latitude, longitude]).addTo(mymap);
marker.bindPopup("113 East Crawford Street, Findlay, OH 45840");
marker.on("click", function (event) {
    event.target.openPopup();
    });
mymap.invalidateSize();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}