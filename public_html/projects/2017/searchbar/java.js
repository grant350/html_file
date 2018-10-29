
$('input').on('keyup',function(){

  /*
  var reg = /^(\w+){1,}\s{0,1}(\w+){0,}\s{0,1}(\w+){0,}$/ig

 //console.log(reg.test(filter))
var match =reg.exec(filter)
var newstring;
  text = text.replace(/ [\s]{0,}/g,'')
  console.log('text = ' + text)
*/
  var filter= $('input').val();

 var item = $('.spec li')
 console.log(item)
  var items = $('.spec  li').length
  console.log(items)
  console.log($(item[3]).children(0).text())

  for (var i= 0; i<=items; i++){
  if ($(item[i]).children(0).text().indexOf(filter)
 > -1){
     $(item[i]).css('display','block')
   }
    else{
          $(item[i]).css('display','none')
   }


  }

             })
