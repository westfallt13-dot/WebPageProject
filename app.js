//Declare The Array
let inquiryContact = [];

//Put it all in a function
function inquirySubmit() {
    //Establish Variables And Grab Info From Form
    let nameValue = document.getElementById('contactName').value;
    let emailValue = document.getElementById('contactEmail').value;
    let summaryValue = document.getElementById('briefSummary').value;
    
    //Shove All That Info Into An Object
    let contactObject = {
        name: nameValue,
        email: emailValue,
        summary: summaryValue
    };
    
    //Log to console
    console.log(contactObject);
    
    //Add to your array
    inquiryContact.push(contactObject);
}