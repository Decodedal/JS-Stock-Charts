async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


    let data = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=44924b3388f340179f8ea015ef7cb09f')
    let result = data.json()
    console.log(result)

   const { GME, MSFT, DIS, BNTX } = result;

   const stocks = [GME, MSFT, DIS, BNTX];


// var ctx = document.getElementById('myChart').getContext('2d');
new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            // borderWidth: 1
        }]
     },
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
});

                                                 
// stocks[0].values.map(value => value.datetime )
console.log(GME.values)
}

main()