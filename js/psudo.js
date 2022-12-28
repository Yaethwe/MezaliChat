document.getElementById("send-button").addEventListener("click", function() {
    // Get the message from the input field
    const message = document.getElementById("message-input").value;
  
    // Save the message to the Firebase Realtime Database
    database.ref("messages").push({
      message: message
    });
  
    // Clear the input field
    document.getElementById("message-input").value = "";
});

database.ref("messages").on("child_added", function(snapshot) {
    // Get the message from the snapshot
    const d = snapshot.val();

    // Create a new element to display the message
    const messageElement = document.createElement("p");
    const l = document.createElement("label");
    messageElement.textContent = d.message;
    l.textContent = "email : "+d.email;
    // Add the message to the chat window
    document.getElementById("chat-window").appendChild(messageElement);
});
  