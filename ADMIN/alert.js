document.getElementById('alert-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const location = document.getElementById('location').value;
    const depth = document.getElementById('depth').value;
    const status = document.getElementById('status').value;
    const date = document.getElementById('date').value;  // Get the selected date

    // Create alert notification
    const notification = document.createElement('div');
    
    // Apply color based on the status
    let borderColor, statusTextColor;
    if (status === 'safe') {
        borderColor = 'border-green-500';
        statusTextColor = 'text-green-600';
    } else if (status === 'warning') {
        borderColor = 'border-yellow-500';
        statusTextColor = 'text-yellow-600';
    } else if (status === 'danger') {
        borderColor = 'border-red-500';
        statusTextColor = 'text-red-600';
    }

    // Assign class for styling
    notification.className = `bg-white border-l-4 ${borderColor} p-4 shadow-md rounded-lg mb-4`;

    notification.innerHTML = `
        <p class="font-semibold text-lg">Location: <span class="text-gray-700">${location}</span></p>
        <p>Depth: <span class="font-medium text-gray-600">${depth} meters</span></p>
        <p>Status: <span class="font-medium ${statusTextColor}">${status.charAt(0).toUpperCase() + status.slice(1)}</span></p>
        <p>Date: <span class="font-medium text-gray-600">${date}</span></p>  <!-- Display the selected date -->
    `;

    // Append notification to the notifications section
    document.getElementById('notifications').appendChild(notification);

    // Reset form after submission
    this.reset();
});
