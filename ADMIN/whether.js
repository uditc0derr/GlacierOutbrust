function addWeatherRow(location, temperature, date) {
    const weatherTableBody = document.querySelector('tbody');

    
    const row = document.createElement('tr');
    
    
    row.className = 'hover:bg-blue-200 transition duration-300 ease-in-out bg-white border-b border-gray-200';

   
    const locationCell = document.createElement('td');
    locationCell.className = 'py-4 px-6 text-center font-semibold text-gray-700'; 
    locationCell.textContent = location;


    const temperatureCell = document.createElement('td');
    temperatureCell.className = 'py-4 px-6 text-center font-semibold text-gray-700'; 
    temperatureCell.textContent = `${temperature}°C`;

    const dateCell = document.createElement('td');
    dateCell.className = 'py-4 px-6 text-center font-semibold text-gray-700'; 
    dateCell.textContent = date;


    row.appendChild(locationCell);
    row.appendChild(temperatureCell);
    row.appendChild(dateCell);

   
    weatherTableBody.appendChild(row);
}


document.addEventListener('DOMContentLoaded', () => {
    addWeatherRow('Location A', '25', '2024-10-14');
    addWeatherRow('Location B', '18', '2024-10-15');
    addWeatherRow('Location C', '22', '2024-10-16');
    addWeatherRow('Location D', '30', '2024-10-17');
    addWeatherRow('Location E', '15', '2024-10-18');
});
