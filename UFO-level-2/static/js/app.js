// from data.js
var tableData = data;


// Making initial table

var tbody = d3.select("tbody");

console.log(tableData)

tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
  });


// // using a form to filter by date
var form = d3.select("#form");
var button = d3.select("button");

form.on("submit", filterTable);
button.on("click", filterTable);

//filtering function
function filterTable() {
    d3.event.preventDefault();

    var filteredData = tableData;
    
    var inputElement1 = d3.select("#datetime");
    var inputValue1 = inputElement1.property("value");

    var inputElement2 = d3.select("#shape");  
    var inputValue2 = inputElement2.property("value");

    var dropdown1 = d3.select("#country");
    var dropdownValue1 = dropdown1.property("value");

    var dropdown2 = d3.select("#state");  
    var dropdownValue2 = dropdown2.property("value");

    var inputElement3 = d3.select("#city");  
    var inputValue3 = inputElement3.property("value");

    switch (dateFilter(inputValue1)) {
        case "":
            console.log("no parameter entered for date");
        break;
        default:
            filteredData = filteredData.filter(dateFilter);
    };
    switch (shapeFilter(inputValue2)) {
        case "":
            console.log("no parameter entered for shape");
        break;
        default:
            filteredData = filteredData.filter(shapeFilter);
    };
    switch (countryFilter(dropdownValue1)) {
        case "":
            console.log("no parameter entered for country");
        break;
        default:
            filteredData = filteredData.filter(countryFilter);
    };
    switch (stateFilter(dropdownValue2)) {
        case "":
            console.log("no parameter entered for state");
        break;
        default:
            filteredData = filteredData.filter(stateFilter);
    };
    switch (cityFilter(inputValue3)) {
        case "":
            console.log("no parameter entered for city");      
        break;
        default:
            filteredData = filteredData.filter(cityFilter);           
    };



    // if (inputValue1 === true) {
    //     filteredData = filteredData.filter(dateFilter);
    //     console.log(filteredData);

    //     if (inputValue2 === true) {
    //         var filteredData = filteredData.filter(shapeFilter);
    //         console.log(filteredData);

    //         if (dropdownValue1 === true) {
    //             var filteredData = filteredData.filter(countryFilter);
    //             console.log(filteredData)

    //             if (dropdownValue2 === true) {
    //                 var filteredData = filteredData.filter(stateFilter);
    //                 console.log(filteredData);

    //                 if (inputValue3 === true) {
    //                     var filteredData = filteredData.filter(cityFilter);
    //                     console.log(filteredData);
    //                 };

    //             } else if (inputValue3 === true) {
    //                 var filteredData = filteredData.filter(cityFilter);
    //                 console.log(filteredData);
    //             };

    //         } else if (dropdownValue2 === true) {
    //             var filteredData = filteredData.filter(stateFilter);
    //             console.log(filteredData);

    //             if (inputValue3 === true) {
    //                 var filteredData = filteredData.filter(cityFilter);
    //                 console.log(filteredData);
    //             };
    //         } else if (inputValue3 === true) {
    //             var filteredData = filteredData.filter(cityFilter);
    //             console.log(filteredData);
    //         };

    //     } else if (inputValue2 === true) {
    //         var filteredData = filteredData.filter(shapeFilter);
    //         console.log(filteredData);

    //         if (dropdownValue1 === true) {
    //             var filteredData = filteredData.filter(countryFilter);
    //             console.log(filteredData)

    //             if (dropdownValue2 === true) {
    //                 var filteredData = filteredData.filter(stateFilter);
    //                 console.log(filteredData);

    //                 if (inputValue3 === true) {
    //                     var filteredData = filteredData.filter(cityFilter);
    //                     console.log(filteredData);
    //                 };

    //             } else if (inputValue3 === true) {
    //                 var filteredData = filteredData.filter(cityFilter);
    //                 console.log(filteredData);
    //             };
    //         } else if (dropdownValue2 === true) {
    //             var filteredData = filteredData.filter(stateFilter);
    //             console.log(filteredData);

    //             if (inputValue3 === true) {
    //                 var filteredData = filteredData.filter(cityFilter);
    //                 console.log(filteredData);

    //             };
    //         } else if (inputValue3 === true) {
    //             var filteredData = filteredData.filter(cityFilter);
    //             console.log(filteredData);
    //         };
    //     };    
    // }; 

    
    // {if (inputValue2 === true) {
    //     var filteredData = filteredData.filter(shapeFilter);
    //     console.log(filteredData);
    // } else {filteredData = filteredData;
    // };
    // };

    
    // {if (dropdownValue1 === true) {
    //     var filteredData = filteredData.filter(countryFilter);
    //     console.log(filteredData);
    // } else {filteredData = filteredData;
    // };
    // };

    
    // {if (dropdownValue2 === true) {
    //     var filteredData = filteredData.filter(stateFilter);
    //     console.log(filteredData);
    // } else {filteredData = filteredData;
    // };
    // };

    
    // {if (inputValue3 === true) {
    //     var filteredData = filteredData.filter(cityFilter);
    // console.log(filteredData);
    // } else {filteredData = filteredData;
    // };
    // };
    
    // reset table to be empty
    d3.select('tbody').html("")

    // fill with filtered data
    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
          });
      });

};


function dateFilter(row){
    console.log(row);
    console.log(row.datetime);
    var inputElement1 = d3.select("#datetime");
    
    var inputValue1 = inputElement1.property("value");
    
    console.log(inputValue1);
    
    return row.datetime === inputValue1;
 };

 
function shapeFilter(row){
    var inputElement2 = d3.select("#shape");  
    var inputValue2 = inputElement2.property("value");
    console.log(inputValue2);
    return row.shape === inputValue2;
};

function countryFilter(row){
    var dropdown1 = d3.select("#country");
    var dropdownValue1 = dropdown1.property("value");
    console.log(dropdownValue1);
    return row.country === dropdownValue1;
};


function stateFilter(row){
    var dropdown2 = d3.select("#state");  
    var dropdownValue2 = dropdown2.property("value");
    console.log(dropdownValue2);
    return row.state === dropdownValue2;
};

function cityFilter(row){
    var inputElement3 = d3.select("#city");  
    var inputValue3 = inputElement3.property("value");
    console.log(inputValue3);
    return row.city === inputValue3;
};