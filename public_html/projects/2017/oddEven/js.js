
$(".btnOne").on("click", function(){
$(".odd").css("display", "block")
$(".cont").css({"display": "flex", "justify-content" : "space-around"})

$(".btnOne").remove()
$(".btnTwo").remove()
})

$("p").on("click", function(){

var text = $(this).text()
console.log(text)
var total = ran + Number.parseInt(text)
$(".number").text("your number is sadly " + text  +  " lol " + " the computer random number is "  + ran +  " adding them together is equal to "  + total)

$(".odd").remove()
$(".even").remove()
$(".number").css("display","block")

})





$(".btnTwo").on("click", function(){
$(".even").css("display", "block")
$(".cont").css({"display": "flex", "justify-content" : "space-around"})

$(".btnOne").remove()
$(".btnTwo").remove()
})

var ran = Math.floor(Math.random()*10)
