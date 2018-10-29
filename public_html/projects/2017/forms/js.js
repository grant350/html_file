var input =  document.getElementById("input")
 input.addEventListener(onsubmit, pickFromArray)




$(document).ready(function() {

  $("#input").val("From Jquery")

})



function box(err){
console.log("we have no error for this function")
if (err){
console.log("there was an error in this function ")
}


}

var data = "this has been sent as a sting"
JSON.stringify(data)

function pickFromArray(){
$.ajax({
type:  "POST",
url: "localhost://1880"
data: data,
success: box()

})
}pickFromArray()




/*
var input = document.getElementById("input")
window.addEventListener("resize", sizeup)

function sizeup() {
  var timer = setInterval(sizeup, 1000)
  var widths = window.container.innerWidth
  input.width = widths
  clearInterval(timer)
console.log(input.width )
}
sizeup()
*/
