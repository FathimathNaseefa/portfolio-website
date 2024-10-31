function sendMail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_e8zp3ta","template_12onhpj",parms).then(alert("Email Sent!.."))
}