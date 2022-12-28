$('#login-div').show()
$('#signup-div').hide()
$('#chat-div').hide()

$('#login-btn').click(()=>{
    login($('#email-login').val(), $('#pwd-login').val(), f=>{
        $('#login-div').hide()
        $('#signup-div').hide()
        $('#chat-div').show()
    })
})

$('#signup-btn').click(()=>{
    signup($('#email-signup').val(), $('#pwd-signup').val(), f=>{
        $('#login-div').hide()
        $('#signup-div').hide()
        $('#chat-div').show() 
    })
})

$('#login-link').click(()=>{
    $('#login-div').show()
    $('#signup-div').hide()
    $('#chat-div').hide()
})


$('#signup-link').click(()=>{
    $('#login-div').hide()
    $('#signup-div').show()
    $('#chat-div').hide()
})


auCheck(c=>{
    if(c){
        $('#login-div').hide()
        $('#signup-div').hide()
        $('#chat-div').show() 
    }else{
        $('#login-div').show()
        $('#signup-div').hide()
        $('#chat-div').hide()
    }
})