// it works

//$('.slide-ct').css();
var i=5

setInterval(function(){

  $('.image-'+i).fadeOut()


i--

  if (i<1){
  $('.image-'+5).fadeIn()
  $('.image-'+4).fadeIn()
  $('.image-'+3).fadeIn()
  $('.image-'+2).fadeIn()
  $('.image-'+1).fadeIn()
        i=5
  }

}, 4000);
