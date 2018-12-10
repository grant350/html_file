var image = document.getElementById("img")
window.addEventListener("resize", imageSize)
image.style.margin = "0px"


function box() {

  var div = document.createElement("div")
  div.setAttribute("id", "error")
  div.backgroundColor = "red"
  div.fontSize = "40px"
  div.innerText = "Error Error " + " value is below your limit, please sell"
  div.color = "blue"

  document.body.prepend(div)


}

function imageSize() {
  var timer = setInterval(imageSize, 1000)
  var heights = window.innerHeight
  var widths = window.innerWidth

  image.height = heights
  image.width = widths
  clearInterval(timer)
}
imageSize()

//
var times = 0;



var images = document.getElementById("img2")
window.addEventListener("resize", imageSize2)
images.style.margin = "0px"


function imageSize2() {

  var timer = setInterval(imageSize2, 1000)
  var heights = window.innerHeight
  var widths = window.innerWidth

  images.height = heights
  images.width = widths





  var nav = document.getElementById("nav")
  if (window.innerwidth <= 1000) {
    $("#body").width(window.innerWidth)

    $("#navformbar").width(window.innerWidth)
    $("#nav").width(window.innerWidth)
    $("#shark").width("15%")
    $("#bit").width("20%")
    $("#dropAbout").width("20%")

  }









  clearInterval(timer)




}
imageSize2()


function callForApi() {



  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 200) {

      var popp = JSON.parse(xhr.responseText)
      var price = popp.data.quotes.USD.price / popp.data.quotes.ECA.price
      var priceconvert = price.toFixed(6)
      $("#bit").text("Electra price = " + priceconvert + " USD")
      $("#bit2").text("Total in Electra USD = " + (priceconvert * 3192261).toFixed(4))
      var total = ((priceconvert - .002352) / (.002302) * (100)).toFixed(4)
      $("#bit2p").text(total + "%")
      if (total <= 0) {
        $("#bit2p").css("color", "red")
      }else{
        $("#bit2p").css("color", " green")

      }


    }
  }



  xhr.open('GET', ' https://api.coinmarketcap.com/v2/ticker/1/?convert=ECA', true)
  xhr.send(null)
}
callForApi()




function callForEmbercoin() {



  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var popp = JSON.parse(xhr.responseText)
      console.log(popp.data.quotes.USD.price)
      var price = popp.data.quotes.USD.price / popp.data.quotes.EMB.price
      var priceconvert = price.toFixed(8)
      $("#bit").text("Embercoin price = " + priceconvert + " USD")
      $("#bit3").text(" Total in Embercoin USD = " + priceconvert * 549879734)
      var total = ((priceconvert - .00000100) / (.00000100) * (100.0)).toFixed(4)
      $("#bit3p").text(total + "%")
      if (total <= 0) {
        $("#bit3p").css("color", " red")
      }else{
        $("#bit3p").css("color", " green")

      }

    }
  }
  xhr.open('GET', ' https://api.coinmarketcap.com/v2/ticker/1/?convert=EMB', true)
  xhr.send(null)
}
callForEmbercoin()



    function callForLtc() {


      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status === 200) {

          var popp = JSON.parse(xhr.responseText)
          console.log(popp.data.quotes.USD.price)
          var price = popp.data.quotes.USD.price / popp.data.quotes.LTC.price
          var priceconvert = price.toFixed(4)
          $("#bit").text("Litecoin price = " + priceconvert + " USD")
          $("#bit4").text(" Total in Litecoin USD = " + priceconvert * .02)

          var total = (priceconvert - 168)/(168)*(100.0)
          $("#bit4p").text(total.toFixed(4) + "%")

console.log(total)
console.log(total.toFixed(4))
console.log(total)
console.log(priceconvert)

          if (total <= 0) {

            $("#bit4p").css("color", " red")
          }else{
            $("#bit4p").css("color", " green")

          }

        }
      }

      xhr.open('GET', ' https://api.coinmarketcap.com/v2/ticker/1/?convert=LTC', true)
      xhr.send(null);

    }
    callForLtc();




    function callForDime() {



      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var popp = JSON.parse(xhr.responseText)
          console.log(popp.data.quotes.USD.price)
          var price = popp.data.quotes.USD.price / popp.data.quotes.DIME.price
          var priceconvert = price.toFixed(6)
          $("#bit").text("Dime price = " + priceconvert + " USD")
          $("#bit5").text(" Total in Dime USD = " + priceconvert * 16949099.57)
          var total = ((priceconvert - 0.000038) / (0.000038) * (100.0)).toFixed(4)
          $("#bit5p").text(total + "%")
          if (total <= 0) {
            $("#bit5p").css("color", " red")
          }else{
            $("#bit5p").css("color", " green")

          }
        }
      }
      xhr.open('GET', ' https://api.coinmarketcap.com/v2/ticker/1/?convert=DIME', true)
      xhr.send(null)
    }
    callForDime()




    var timezone = 0

    function timer() {

      setTimeout(timer, 10000)
      if (timezone == 4) {
        timezone = 0
      }
      if (timezone == 0) {
        callForApi();
        console.log(timezone)
      }
      if (timezone == 1) {
        callForEmbercoin();
        console.log(timezone)

      }
      if (timezone == 2) {
        callForLtc()

      }
      if (timezone == 3) {
        callForDime()
      }
      timezone++
    }
    timer()
