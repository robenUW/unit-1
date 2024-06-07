//initialize function called when the script loads
function initialize(){
    cities();
}

//function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];
    
    //create the table element
    var table = document.createElement("table");
    
    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
    }

    //append the table to the DOM
    document.querySelector("#mydiv").appendChild(table);
    
    //call the addColumns function to add the City Size column

    //calll the addEvents function to add the eventlistener
    addColumns(cityPop);
    addEvents();
}

//function that adds the City Size column
function addColumns(cityPop){
    //adds a row for each item in cityPop
    document.querySelectorAll("tr").forEach(function(row, i){
        //adds header and then loops through cityPop to evaluate size of population and classify into either small, medium, or large city
        if (i == 0){
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            //citySize variable created wit parameters
            var citySize;
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            //adds city sizes to the table
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

//function to add mouse over and click events to the table
function addEvents(){
    //adds the event listener actions
    document.querySelector("table").addEventListener("mouseover", function(){
        //sets color variable
        var color = "rgb(";
        //chooses random number multiplied by 255 to select a hue of random color
        for (var i=0; i<3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i<2){
                color += ",";
            
            } else {
                color += ")";
            }
        }
    //changes the color of the text in the table
    this.style.color = color;
    
    });
    //adds function to bring up text if user clicks any part of the table
    function clickme(){
        //text that appears after the click
        alert('Hey, you clicked me!');
    };
    //adds the click me feature from the clickme function
    document.querySelector("table").addEventListener("click", clickme)
}


//add event listener for DOMContentLoaded to initialize the script
document.addEventListener('DOMContentLoaded', initialize);