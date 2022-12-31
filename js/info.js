$("#private-contents").hide()
auCheck((b, d)=>{
    if(b){
        $("#private-contents").show()
        $('#email-user').html(d.email)
    }else{
        $("#private-contents").hide()
    }
})