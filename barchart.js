// Load the Google Charts visualization library
google.charts.load('current', { 'packages': ['bar'] });

// Set a callback to run when the Google Charts library is loaded
google.charts.setOnLoadCallback(drawChart);

// Create a function to draw the chart
function drawChart() {
    // Define the data as an array
    var data = google.visualization.arrayToDataTable([
        ['State', 'Ranking'],
        ['Andhra Pradesh', 8],
        ['Arunachal Pradesh', 30],
        ['Assam', 16],
        ['Bihar', 15],
        ['Chhattisgarh', 11],
        ['Goa', 21],
        ['Gujarat', 10],
        ['Haryana', 13],
        ['Himachal Pradesh', 22],
        ['Jammu and Kashmir', 18],
        ['Jharkhand', 20],
        ['Karnataka', 5],
        ['Kerala', 4],
        ['Madhya Pradesh', 2],
        ['Maharashtra', 6],
        ['Manipur', 25],
        ['Meghalaya', 27],
        ['Mizoram', 35],
        ['Nagaland', 28],
        ['Odisha', 12],
        ['Punjab', 17],
        ['Rajasthan', 7],
        ['Sikkim', 32],
        ['Tamil Nadu', 1],
        ['Telangana', 9],
        ['Tripura', 26],
        ['Uttarakhand', 24],
        ['Uttar Pradesh', 3],
        ['West Bengal', 14],
        ['Andaman and Nicobar Islands', 31],
        ['Chandigarh', 29],
        ['Dadra and Nagar Haveli', 34],
        ['Daman and Diu', 33],
        ['Delhi', 19],
        ['Lakshadweep', 36],
        ['Puducherry', 23]
    ]);

    // Define chart options
    var options = {
        chart: {
            title: 'Ranking of Accidents by State in 2019'
        },
        bars: 'vertical',
        // width: 1200,
        height: 400
    };

    // Create a new Bar Chart and attach it to the specified HTML element
    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    // Draw the chart with the defined data and options
    chart.draw(data, google.charts.Bar.convertOptions(options));
}