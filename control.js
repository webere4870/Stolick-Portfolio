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

    $('#work').click((evt)=>
    {
      evt.preventDefault()
      $("#dd1").toggle(300)
      $('#carrot').toggleClass("rotated", 300)
    })

    $('#about').click((evt)=>
    {
      evt.preventDefault()
      console.log('here')
      $("#dd2").toggle(300)
      $('#carrot2').toggleClass("rotated", 300)
    })

    $('#worker').click((evt)=>
    {
      $("#dd3").toggle(300)
      $('#carrot3').toggleClass("rotated", 300)
    })

    $('#swapper').click((evt)=>
    {
        document.querySelectorAll('.innerSlide .slideBox')[0].style.display="no"
        //$('.innerSlide').toggleClass("sliderProperty")
        //$('.innerSlide').css("transform", "translateX(200px)")
        /*let pixelValue = document.querySelectorAll(".innerSlide")[0].style.transform
        let newValue = ""
        for(let counter = 0; counter < pixelValue.length; counter++)
        {
            if(Number.isInteger(parseInt(pixelValue[counter])))
            {
                newValue += pixelValue[counter]
            }
        }
        let newPixels = 0
        if(newValue)
        {
            newPixels = 200
        }
        else
        {
            newPixels = parseInt(newValue) + 200
        }
        */
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

