// from data.js
var tableData = data;


// Making a table

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


// using a form to filter by date
var form = d3.select("#form");
var button = d3.select("button");

form.on("submit", filterTable);
button.on("click", filterTable);

function filterTable() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    var filteredData = tableData.filter(instance => instance.datetime === inputValue);
    console.log(filteredData);

    d3.select('tbody').html("")

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
          });
      });
}

