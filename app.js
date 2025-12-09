//Establish Variables For Database So That We Can POST Data To It
let url = "https://wiindbcmuzsxitfcnitu.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaW5kYmNtdXpzeGl0ZmNuaXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDk2MDksImV4cCI6MjA4MDQyNTYwOX0.IQCFxwXd5yWU0Tnuoh7DK8YbLekoFtDlAeoiFgUZa0A";
let urlProducts = "https://wiindbcmuzsxitfcnitu.supabase.co/rest/v1/products?select=*";

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


//Initial message to CPU defining the function
async function getProducts(){

    //Promise = is an operation, JS loading in the background
    let response = await fetch(urlProducts, {
        method: "GET",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }
    });

    //Define data and cardsContainer variables for the computer
    let data = await response.json();

    let cardsContainer = document.getElementById("cardsContainer");

    //For loop that's supposed to GET the information/images from Supabase
    for(let i = 0; i < data.length; i++){
        cardsContainer.innerHTML += `
        <div class="col-md-6 col-lg-3 mb-3 mr-10">
        <div class="card" style="width: 18rem">
          <img src="${data[i].image_url}" class="card-img-top" alt="${data[i].name}" />
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">
              ${data[i].description}
            </p>
            <p class="btn btn-primary">${data[i].price}</p>
          </div>
        </div>
      </div>
        `
    }
  }
