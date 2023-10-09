// pie-chart.js

// Load the Google Charts visualization library
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Charts library is loaded
google.charts.setOnLoadCallback(drawPieChart);

// Create a function to draw the pie chart
function drawPieChart() {
    // Define the data as an array
    var data = google.visualization.arrayToDataTable([
        ['State', 'Percentage'],
        ['Andhra Pradesh', 5.240405615],
        ['Arunachal Pradesh', 0.059309187],
        ['Assam', 1.766000634],
        ['Andhra Pradesh', 5.240405615],
        ['Arunachal Pradesh', 0.059309187],
        ['Assam', 1.766000634],
        ['Bihar', 2.055480854],
        ['Chhattisgarh', 2.968456933],
        ['Goa', 0.794143592],
        ['Gujarat', 4.018679182],
        ['Haryana', 2.406197275],
        ['Himachal Pradesh', 0.665890152],
        ['Jammu and Kashmir', 1.279965057],
        ['Jharkhand', 1.154923305],
        ['Karnataka', 8.929993748],
        ['Kerala', 8.603257937],
        ['Madhya Pradesh', 11.00474473],
        ['Maharashtra', 7.64745934],
        ['Manipur', 0.128681666],
        ['Meghalaya', 0.085430923],
        ['Mizoram', 0.011347967],
        ['Nagaland', 0.092068413],
        ['Odisha', 2.411335977],
        ['Punjab', 1.376315722],
        ['Rajasthan', 4.655450022],
        ['Sikkim', 0.038540266],
        ['Tamil Nadu', 13.68607669],
        ['Telangana', 4.759722853],
        ['Tripura', 0.118190149],
        ['Uttarakhand', 0.314317281],
        ['Uttar Pradesh', 9.114344687],
        ['West Bengal', 2.720300443],
        ['Andaman and Nicobar Islands', 0.054384598],
        ['Chandigarh', 0.067659578],
        ['Dadra and Nagar Haveli', 0.017129007],
        ['Daman and Diu', 0.016272557],
        ['Delhi', 1.394943517],
        ['Lakshadweep', 0.000642338],
        ['Puducherry', 0.341937805],

    ]);

    // Define chart options
    var options = {
        title: 'Percentage of Accidents in 2019 by State'
    };

    // Create a new Pie Chart and attach it to the specified HTML element
    var chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));

    // Draw the chart with the defined data and options
    chart.draw(data, options);
}
