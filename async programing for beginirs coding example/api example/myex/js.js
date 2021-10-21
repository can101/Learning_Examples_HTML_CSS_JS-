function api() {
    // fetch("http://api.weatherapi.com/v1/current.json?key=056c268bcfb844ff879161401211103&q=Turkey&aqi=no")
    fetch(" http://api.weatherapi.com/v1/forecast.json?key=056c268bcfb844ff879161401211103&q=turkey&days=14")
        .then(data => {
            return data.json();
        })
        .then(x => console.log(x))
}
api();

var chart = document.getElementById('Chart').getContext('2d');

var mychart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['sunday', 'monday', 'tuesday', 'wednesday', 'thurstday', 'friday', 'saturday'],
        datasets: [{
            label: "Weather information board",
            data: [15, 10, 7, 8, 19, 23]
        }]
    }
});