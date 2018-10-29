var senddata = {
  "Sender": "Grant",
  "To": "Node-Server",
  "Password": "NodeSender12",
  "data": []
}



  $(".pass").attr({
    "type": "password"
  });

  $(".flexer").on("click", function() {
    $(".images").css({
      "filter": "blur(8px)"
    });
  })

  $(".images").on("click", function() {
    $(".images").css({
      "filter": "blur(0px)"
    });
    $(".user").attr({
      "placeholder": "Please Enter Username"
    });
    $(".pass").attr({
      "placeholder": "Please Enter Password"
    });
  })


  $("form").on("submit", onchanges)




  function onchanges() {
    // data for the events and dates
 var tArray =[$(".user").val(),$(".pass").val()]
console.log(tArray)

    for (var i = 0; i <= 1; i++) {
      var hashes = md5(tArray[i]);
      senddata.data.push(hashes)
      // "2063c1608d6e0baf80249c42e2be5804"
      console.log(hashes  + senddata.data[i] + " these are hashes ")

    }



    grabAndPut()

        return false;
  }



  function grabAndPut() {

var senddataString = JSON.stringify(senddata)
console.log(senddataString )

    $.ajax({
      method: 'POST',
      url: '/people',
      data: senddataString,
      contentType: 'application/json',
      success: function() {
        console.log("has sent the data to localhost:8080/serverBox")
      }
    })
    cutOff()


  }

  function cutOff(){
    console.log("has removed data")
senddata.data.splice(0,2)
console.log(senddata.data)
}
