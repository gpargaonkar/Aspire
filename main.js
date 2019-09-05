//listen for submit form
document.getElementById("contactForm").addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();
    var fname = getValues('name');
    var message = getValues('subject');
    var templateParams = {
        from_name: fname,
        message_html: message
        
    };
     
    
    emailjs.send('gmail', 'Test template template_aWDxDmG2', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });

        alert("message sent!");

}

function getValues(id){
    return document.getElementById(id).value;
}

