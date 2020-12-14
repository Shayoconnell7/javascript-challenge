// from data.js
var tableData = data;

// YOUR CODE HERE!


// Making a table

var tbody = d3.select("tbody");

console.log(tableData)

data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
  });



// using a form to filter by date
// var form = d3.select("#form")

// form.on("submit", makeTable())

// function makeTable() {

// }