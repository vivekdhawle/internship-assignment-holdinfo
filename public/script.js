document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8000/api/data/getdata')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#tickers-table tbody');
            data.forEach(ticker => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${ticker.name}</td>
                    <td>${ticker.last}</td>
                    <td>${ticker.buy}</td>
                    <td>${ticker.sell}</td>
                    <td>${ticker.volume}</td>
                    <td>${ticker.base_unit}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
