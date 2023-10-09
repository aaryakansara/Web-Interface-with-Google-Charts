google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Charts library is loaded
google.charts.setOnLoadCallback(drawLineChart);

// Define data for the line chart (example data for 2017, 2018, and 2019)
var chartData = {
    '2017': [
        ['State', 'Accidents per Lakh Population'],
        ['Andhra Pradesh', 28.89537822],
        ['Arunachal Pradesh', 18.16126601],
        ['Assam', 22.91287867],
        ['Bihar', 7.912768988],
        ['Chhattisgarh', 52.47497971],
        ['Goa', 217.7035913],
        ['Gujarat', 34.79347394],
        ['Haryana', 40.88510391],
        ['Himachal Pradesh', 44.65116279],
        ['Jammu and Kashmir', 44.29503181],
        ['Jharkhand', 14.65588969],
        ['Karnataka', 71.18831564],
        ['Kerala', 110.491353],
        ['Madhya Pradesh', 69.305939],
        ['Maharashtra', 33.21063327],
        ['Manipur', 20.75617284],
        ['Meghalaya', 22.35845655],
        ['Mizoram', 7.80809031],
        ['Nagaland', 3.151260504],
        ['Odisha', 24.79342734],
        ['Punjab', 23.88018686],
        ['Rajasthan', 31.61978396],
        ['Sikkim', 32.45749614],
        ['Tamil Nadu', 102.9324457],
        ['Tripura', 14.55828542],
        ['Uttarakhand', 14.96425884],
        ['Uttar Pradesh', 16.32918822],
        ['West Bengal', 14.51630144],
        ['Andaman and Nicobar Islands', 43.19419238],
        ['Chandigarh', 24.04494382],
        ['Dadra and Nagar Haveli', 16.58767773],
        ['Daman and Diu', 21.51515152],
        ['Delhi', 34.64881372],
        ['Lakshadweep', 1.234567901],
        ['Puducherry', 105.8118634]
    ],
    '2018': [
        ['State', 'Accidents per Lakh Population'],
        ['Andhra Pradesh', 27.2881337],
        ['Arunachal Pradesh', 20.6562267],
        ['Assam', 24.86884158],
        ['Bihar', 9.040229019],
        ['Chhattisgarh', 52.34068257],
        ['Goa', 179.3520309],
        ['Gujarat', 29.22518763],
        ['Haryana', 39.77630694],
        ['Himachal Pradesh', 43.15847905],
        ['Jammu and Kashmir', 47.20094749],
        ['Jharkhand', 15.6424905],
        ['Karnataka', 65.74761567],
        ['Kerala', 111.4219955],
        ['Madhya Pradesh', 64.21253842],
        ['Maharashtra', 29.05569204],
        ['Manipur', 22.71352986],
        ['Meghalaya', 14.08898305],
        ['Mizoram', 4.884792627],
        ['Nagaland', 17.69547325],
        ['Odisha', 26.11054438],
        ['Punjab', 21.6978903],
        ['Rajasthan', 29.03557502],
        ['Sikkim', 27.27272727],
        ['Tamil Nadu', 91.25301583],
        ['Tripura', 14.13210445],
        ['Uttarakhand', 13.48397171],
        ['Uttar Pradesh', 18.93350057],
        ['West Bengal', 13.35835725],
        ['Andaman and Nicobar Islands', 44.17391304],
        ['Chandigarh', 16.2802679],
        ['Dadra and Nagar Haveli', 17.69911504],
        ['Daman and Diu', 21.16991643],
        ['Delhi', 28.92598677],
        ['Lakshadweep', 3.614457831],
        ['Puducherry', 88.82091212]
    ],
    '2019': [
        ['State', 'Accidents per Lakh Population'],
        ['Andhra Pradesh', 24.34628584],
        ['Arunachal Pradesh', 17.50369276],
        ['Assam', 24.91347416],
        ['Bihar', 9.326796716],
        ['Chhattisgarh', 51.89679636],
        ['Goa', 162.4940954],
        ['Gujarat', 26.26866592],
        ['Haryana', 38.22430233],
        ['Himachal Pradesh', 39.57845433],
        ['Jammu and Kashmir', 45.35211268],
        ['Jharkhand', 14.95399432],
        ['Karnataka', 63.59171672],
        ['Kerala', 113.437819],
        ['Madhya Pradesh', 62.47641829],
        ['Maharashtra', 26.48279523],
        ['Manipur', 25.14029181],
        ['Meghalaya', 16.85314685],
        ['Mizoram', 5.656934307],
        ['Nagaland', 14.58842706],
        ['Odisha', 25.46375144],
        ['Punjab', 21.25351547],
        ['Rajasthan', 30.96481511],
        ['Sikkim', 24.28785607],
        ['Tamil Nadu', 81.35448652],
        ['Tripura', 16.59908768],
        ['Uttarakhand', 12.27974569],
        ['Uttar Pradesh', 18.65949016],
        ['West Bengal', 10.59504563],
        ['Andaman and Nicobar Islands', 39.11564626],
        ['Chandigarh', 15.03944773],
        ['Dadra and Nagar Haveli', 14.52991453],
        ['Daman and Diu', 18.44919786],
        ['Delhi', 24.21861509],
        ['Lakshadweep', 1.19047619],
        ['Puducherry', 74.51820128]
    ],

};

// Initialize the current year
var currentYear = '2019';
var currentYearTitle = '2019';

// Create a function to draw the line chart
function drawLineChart() {
    // Define the data for the current year
    var data = google.visualization.arrayToDataTable(chartData[currentYear]);

    // Create a new Line Chart and attach it to the specified HTML element
    var chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));

    var options = {
        title: 'Accidents per Lakh Population by State (' + currentYearTitle + ')',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    // Draw the chart with the defined data and options
    chart.draw(data, options);

    // Add a button to change the year
    var yearButton = document.createElement('button');

    yearButton.innerHTML = 'Year';
    yearButton.onclick = function () {
        // Cycle between 2017, 2018, and 2019
        if (currentYear === '2017') {
            currentYear = '2018';
            currentYearTitle = '2018';
            var options = {
                title: 'Accidents per Lakh Population by State (' + currentYearTitle + ')',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
        } else if (currentYear === '2018') {
            currentYear = '2019';
            currentYearTitle = '2019';
            var options = {
                title: 'Accidents per Lakh Population by State (' + currentYearTitle + ')',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
        } else {
            currentYear = '2017';
            currentYearTitle = '2017';
            var options = {
                title: 'Accidents per Lakh Population by State (' + currentYearTitle + ')',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
        }

        // Redraw the chart with the updated data for the new year
        data = google.visualization.arrayToDataTable(chartData[currentYear]);

        chart.draw(data, options);

        document.getElementById('chart_title').innerText = 'Accidents per Lakh Population by State (' + currentYearTitle + ')';
    };

    // Append the button to the HTML element
    document.getElementById('line_chart_div').appendChild(yearButton);
}
