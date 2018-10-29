var image = document.getElementById("img")
window.addEventListener("resize", imageSize)
image.style.margin = "0px"

function imageSize() {
  var timer = setInterval(imageSize, 1000)
  var heights = window.innerHeight
  var widths = window.innerWidth

  image.height = heights
  image.width = widths
  clearInterval(timer)
}
imageSize()

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
      var price = popp.data.quotes.USD.price / popp.data.quotes.LTC.price
      var priceconvert = price.toFixed(6)
      $("#bit").text("LTC price = " + priceconvert + " USD")
      $("#bit2").text("Total in LTC USD = " + (priceconvert * 0).toFixed(4))
      var total = ((priceconvert - 160) / (160) * (100)).toFixed(4)
      $("#bit2p").text(total + "%")
      if (total <= 0) {
        $("#bit2p").css("color", "red")
      }else{
        $("#bit2p").css("color", " green")

      }


    }
  }



  xhr.open("GET", " https://api.coinmarketcap.com/v2/ticker/1/?convert=LTC", true)
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
  xhr.open("GET", "https://api.coinmarketcap.com/v2/ticker/1/?convert=EMB", true)
  xhr.send(null)
}
callForEmbercoin()



    function callForLtc() {


      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status === 200) {

          var popp = JSON.parse(xhr.responseText)
          console.log(popp.data.quotes.USD.price)
          var price = popp.data.quotes.USD.price
          var priceconvert = price.toFixed(4)
          $("#bit4").text(" Total in BTC USD = " + priceconvert )

          var total = (priceconvert - 9100)/(9100)*(100.0)
          $("#bit4p").text(total.toFixed(4) + "%")


          if (total <= 0) {

            $("#bit4p").css("color", " red")

          }else{
            $("#bit4p").css("color", " green")

          }

        }
      }

      xhr.open("GET", " https://api.coinmarketcap.com/v2/ticker/1/?convert=LTC", true)
      xhr.send(null);

    }
    callForLtc();




    function callForDime() {

          var price = $(".price").text()
          parseInt(price)
          console.log(price)
            price.toFixed(6)
          $("#bit").text("Dime price = " + priceconvert + " USD")

          var totals =92796092.58755217

          $("#bit5").text(" Total in Dime USD = "  + totals * price)

          var total = ((priceconvert - 0.000092) / (0.000092) * (100.0)).toFixed(4)
          $("#bit5p").text(total + "%")
          if (total <= 0) {
            $("#bit5p").css("color", " red")
          }else{
            $("#bit5p").css("color", " green")

          }


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
