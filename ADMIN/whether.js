function addWeatherRow(location, temperature, date) {
    const weatherTableBody = document.querySelector('tbody'); 

    
    const row = document.createElement('tr');
    row.className = 'bg-blue-100 border-2 border-gray-300'; 

   
    const locationCell = document.createElement('td');
    locationCell.className = 'py-2 px-6 border-b text-center font-semibold'; 
    locationCell.textContent = location;

    const temperatureCell = document.createElement('td');
    temperatureCell.className = 'py-2 px-6 border-b text-center font-semibold'; 
    temperatureCell.textContent = temperature;

    const dateCell = document.createElement('td');
    dateCell.className = 'py-2 px-6 border-b text-center font-semibold'; 
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
