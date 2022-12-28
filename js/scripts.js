let userdb= {
    uid:"",
}


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

$("#logout-btn").click(()=>{
    $('#login-link').click()
    logout()
})

auCheck((c,d)=>{
    if(c){
        userdb=d
        $('#login-div').hide()
        $('#signup-div').hide()
        $('#chat-div').show() 
        $('#email-user').html(userdb.email)
    }else{
        $('#login-div').show()
        $('#signup-div').hide()
        $('#chat-div').hide()
    }
})

document.getElementById("message-input").addEventListener("keypress", function(e) {
    if(e.code=="Enter"){
        document.getElementById("send-btn").click()
    }
})

document.getElementById("send-btn").addEventListener("click", function() {
    // Get the message from the input field
    const message = document.getElementById("message-input").value;
    let d = new Date()
  
    // Save the message to the Firebase Realtime Database
    db.child("messages").push({
      message: message,
      senderID: userdb.uid,
      email: userdb.email,
      time: `${d.getFullYear()}:${d.getMonth()+1}:${d.getDate()}:${d.getHours()-12}:${d.getMinutes()} ${amPm(d.getHours())}`
    });
  
    // Clear the input field
    document.getElementById("message-input").value = "";
});

db.child("messages").on("child_added", function(snapshot) {
    console.log(snapshot.getRef().getKey())
    // Get the message from the snapshot
    const div = document.createElement('div')
    div.className = "alert alert-primary"
    div.role = "alert"
    const d = snapshot.val();

    // Create a new element to display the message
    const messageElement = document.createElement("p");
    const content = document.createElement("div");
    messageElement.textContent=d.message
    content.innerHTML=`
    <div class="flex">
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">email</span>
            </div>
            <input type="text" value="${d.email}" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" readonly>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">time</span>
            </div>
            <input type="text" value="${d.time}" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" readonly>
        </div>
    </div>
    `
    div.appendChild(messageElement)
    div.appendChild(content)
    // Add the message to the chat window
    document.getElementById("chat-div").appendChild(div);
});