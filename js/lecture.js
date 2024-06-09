function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve data
    fetch(request, init)
        .then(conversion) //Step 4 convert data to usable form
        .then(callback) //Step 5 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    //Example 2.5 line 23...
    console.log(JSON.stringify(response));
}

window.onload = jsAjax();