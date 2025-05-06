// Sample data for 2024 and 2025 rankings
const rankingsData = {
    '2024': [
        { rank: 1, name: 'Roger', points: 2490, location: '' },
        { rank: 2, name: 'Fabio', points: 2055, location: '' },
        { rank: 3, name: 'Filipe', points: 1490, location: '' },
        { rank: 4, name: 'Mario', points: 1400, location: '' },
        { rank: 5, name: 'Mikio', points: 1370, location: '' },
        { rank: 6, name: 'Jardel', points: 1310, location: '' },
        { rank: 7, name: 'Thiago', points: 1260, location: '' },
        { rank: 8, name: 'Koshiro', points: 1250, location: '' },
        { rank: 9, name: 'Victor', points: 825, location: '' },
        { rank: 10, name: 'Farley', points: 790, location: '' },
        { rank: 11, name: 'Thais', points: 640, location: '' },
        { rank: 12, name: 'Raphael', points: 600, location: '' },
        { rank: 13, name: 'Marcela', points: 510, location: '' },
        { rank: 14, name: 'Hugo', points: 500, location: '' },
        { rank: 15, name: 'Niels', points: 450, location: '' },
        { rank: 16, name: 'Catarina', points: 360, location: '' },
        { rank: 17, name: 'Felipe', points: 360, location: '' },
        { rank: 18, name: 'Giullia', points: 345, location: '' },
        { rank: 19, name: 'Alex', points: 180, location: '' },
        { rank: 20, name: 'Bruno', points: 180, location: '' },
        { rank: 21, name: 'Eduardo', points: 135, location: '' },
        { rank: 22, name: 'Mauri', points: 90, location: '' }



        // Add more players as needed
    ],
    '2025': [
        { rank: 1, name: 'Julia', points: 4100, location: '' },
        { rank: 2, name: 'Filipe', points: 2720, location: '' },
        { rank: 3, name: 'Fabio', points: 2270, location: '' },
        { rank: 4, name: 'Roger', points: 2040, location: '' },
        { rank: 5, name: 'Luiza', points: 1920, location: '' },
        { rank: 6, name: 'Koshiro', points: 1720, location: '' },
        { rank: 7, name: 'Victor', points: 1650, location: '' },
        { rank: 8, name: 'Marcela', points: 1400, location: '' },
        { rank: 9, name: 'Jardel', points: 1260, location: '' },
        { rank: 10, name: 'Emi', points: 1200, location: '' },
        { rank: 11, name: 'Mikio', points: 990, location: '' },
        { rank: 12, name: 'Felipe', points: 900, location: '' },
        { rank: 13, name: 'Raphael', points: 720, location: '' },
        { rank: 14, name: 'Mario', points: 540, location: '' },
        { rank: 15, name: 'Hugo', points: 450, location: '' },
        { rank: 16, name: 'Thais', points: 450, location: '' },
        { rank: 17, name: 'Camilly', points: 450, location: '' },
        { rank: 18, name: 'Thiago', points: 450, location: '' },
        { rank: 19, name: 'Niels', points: 360, location: '' },
        { rank: 20, name: 'Gabriel', points: 360, location: '' },
        { rank: 21, name: 'Farley', points: 180, location: '' },
        { rank: 22, name: 'Cláudio', points: 180, location: '' },
        { rank: 23, name: 'Eduardo', points: 90, location: '' },
        { rank: 24, name: 'Alex', points: 90, location: '' }

    ]
};

// Function to toggle between 2024 and 2025 rankings
function toggleRankings(year) {
    // Update the heading
    document.getElementById('rankingYear').textContent = `Ranking - ${year}`;

    // Update the table
    const table = document.getElementById('rankingTable');
    table.innerHTML = ''; // Clear existing table content

    // Populate the table with new data
    rankingsData[year].forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>${player.points}</td>
            <td>${player.location}</td>
        `;
        table.appendChild(row);
    });

    // Update active button styling
    document.getElementById('btn2024').classList.remove('active');
    document.getElementById('btn2025').classList.remove('active');
    document.getElementById(`btn${year}`).classList.add('active');
}

// Initialize with 2024 rankings
toggleRankings('2024');
