// from data.js
var tableData = data;

// Populate UFO Sightings Table
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
    });
  });
};

// Clear the TBody
function deleteTBody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

// Display All UFO Sightings
console.log(tableData);
tableDisplay(tableData);

// Filter Button
var button = d3.select("#filter-btn");

// Add On Click Functionality
button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTBody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      // display the whole database if the date field has no date
      var filteredData = tableData;
    } else {
      // otherwise, display the filtered dataset  
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    // display message if no records found
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Results Match</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });

// Field Object
var fieldDate = d3.select("#datetime");

// Add On Enter Functionality
fieldDate.on("keypress", function(event) {
    if(d3.event.keyCode === 32 || d3.event.keyCode === 13){
        d3.event.preventDefault();
        deleteTBody();
        var dateInput = d3.select("#datetime").property("value");
        
        if (dateInput.trim() === "" ) {
          // display the whole database if the date field has no date
          var filteredData = tableData;
        } else {
          // otherwise, display the filtered dataset  
          var filteredData = tableData.filter(ufoSighting => 
            ufoSighting.datetime === dateInput.trim());
        };
      
        // display message if no records found
        if (filteredData.length == 0) {
          d3.select("tbody")
            .append("tr")
            .append("td")
              .attr("colspan", 7)
              .html("<h4>No Results Match</h4>");
        };
      
        console.log(filteredData);
        tableDisplay(filteredData);
        }
  });