//Establish Variables For Database So That We Can POST Data To It
let url = "https://wiindbcmuzsxitfcnitu.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaW5kYmNtdXpzeGl0ZmNuaXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDk2MDksImV4cCI6MjA4MDQyNTYwOX0.IQCFxwXd5yWU0Tnuoh7DK8YbLekoFtDlAeoiFgUZa0A";


//Function For Posting SupaBase
async function createLead(){

    event.preventDefault();

    //Establish Variables As Well As Tell Computer Where To Retrieve Data From
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("briefSummary").value;

    //Define what is a lead; as well as what individual piece of data is used, and where each individual piece of data should go in the Supabase Table
    let lead = {
        "name" : name , 
        "email" : email,
        "message" : message
    }

    //Define what we are doing with the data (POSTing) as well as where to locate needed information to properly POST data to SupaBase
    let response = await fetch(url , {
        method: "POST",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(lead)
    })

    //Log To Console To Verify Function Was Ran Properly
    console.log("Created Lead")

}