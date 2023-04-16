// API key: uDGRDtHWvG3v4CXGoVTBCKq29BZG4SLn
// apilayer

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#currency-converter").addEventListener("submit", (event) => {
        event.preventDefault();
        const { target: { from, to, amount } } = event;

        let headers = new Headers();
        headers.append("apikey", "uDGRDtHWvG3v4CXGoVTBCKq29BZG4SLn");

        const requestOptions = {
            method: "GET",
            headers,
        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                let { date, query: { from, to, amount }, result } = data;
                document.querySelector(".result").textContent = `On ${date}, ${amount} ${from} is worth ${result.toFixed(2)} ${to}.`;
            })
            .catch(error => console.log(error));
    })

})

// {
//     "success": true,
//     "query": {
//         "from": "USD",
//         "to": "INR",
//         "amount": 5
//     },
//     "info": {
//         "timestamp": 1681634583,
//         "rate": 81.845504
//     },
//     "date": "2023-04-16",
//     "result": 409.22752
// }
