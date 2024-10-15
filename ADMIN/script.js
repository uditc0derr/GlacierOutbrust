
const tableData = [
  { location: 'Location 1', depth: '15 meters', time: '12:00 PM', region: 'Region A', status: 'Stable' },
  { location: 'Location 2', depth: '20 meters', time: '12:30 PM', region: 'Region B', status: 'Alert' },
  { location: 'Location 3', depth: '18 meters', time: '01:00 PM', region: 'Region C', status: 'Stable' },
  { location: 'Location 4', depth: '22 meters', time: '01:30 PM', region: 'Region D', status: 'Alert' },
  { location: 'Location 5', depth: '17 meters', time: '02:00 PM', region: 'Region E', status: 'Stable' },
  { location: 'Location 6', depth: '16 meters', time: '02:30 PM', region: 'Region F', status: 'Alert' },
  { location: 'Location 7', depth: '19 meters', time: '03:00 PM', region: 'Region G', status: 'Stable' },
  { location: 'Location 8', depth: '21 meters', time: '03:30 PM', region: 'Region H', status: 'Alert' },
  { location: 'Location 9', depth: '23 meters', time: '04:00 PM', region: 'Region I', status: 'Stable' },
  { location: 'Location 10', depth: '25 meters', time: '04:30 PM', region: 'Region J', status: 'Alert' }
];


while (tableData.length < 50) {
  tableData.push(...tableData.slice(0, 10)); 
}

const rowsPerPage = 8; 
let currentPage = 1;
const totalRows = tableData.length;
const totalPages = Math.ceil(totalRows / rowsPerPage);

const tableBody = document.getElementById('table-body');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');


function renderTable() {
  tableBody.innerHTML = ''; 
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
  const visibleRows = tableData.slice(startIndex, endIndex);

  visibleRows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
          <td class="border border-gray-300 px-4 py-2">${row.location}</td>
          <td class="border border-gray-300 px-4 py-2">${row.depth}</td>
          <td class="border border-gray-300 px-4 py-2">${row.time}</td>
          <td class="border border-gray-300 px-4 py-2">${row.region}</td>
          <td class="border border-gray-300 px-4 py-2">${row.status}</td>
      `;
      tableBody.appendChild(tr);
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Event listeners for pagination
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
      currentPage--;
      renderTable();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
      currentPage++;
      renderTable();
  }
});

// Initial table render
renderTable();

// Handle map click event to update marker position
const mapElement = document.getElementById('map');
const markerElement = document.getElementById('marker');

mapElement.addEventListener('click', function(event) {
  const { offsetX, offsetY } = event;

  // Update marker position based on click coordinates
  markerElement.style.left = `${offsetX}px`;
  markerElement.style.top = `${offsetY}px`;
});
