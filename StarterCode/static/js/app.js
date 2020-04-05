  
// from data.js
var tableData = data;

// selecting table body w d3
var tbody = d3.select("tbody");

// table setup
tableData.forEach(function(x) {
    var row = tbody.append("tr");
    Object.entries(x).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
});

// creating filter button and function
var button = d3.select("#filter-btn");
  
button.on("click", function()
{
  d3.event.preventDefault();
    //clear table
    tbody.text("");
    //filter using input date
    var dateInput = d3.select("#datetime");
    var dateValue = dateInput.property("value");
    console.log(dateValue);
    var filteredData = tableData.filter(x => x.datetime === dateValue);
    console.log(filteredData);
    filteredData.forEach(function(x) {
        var row = tbody.append("tr");
        Object.entries(x).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});   