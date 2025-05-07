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
    if (window.location.pathname.endsWith('/index.html')) {
    const heading = document.getElementById('rankingYear');
    const table2   = document.getElementById('rankingTable');
    
    if (!heading || !table2) return
   
    document.getElementById('rankingYear').textContent = `Ranking de Torneio (Rating & Nível) - ${year}`;

    // Update the table
    const table = document.getElementById('rankingTable');
    table.innerHTML = ''; // Clear existing table content

    // Populate the table with new data (compute rounded Dan or Kyu)
    rankingsData[year].forEach(player => {
        // calculate raw Dan
        console.log(year)
        var rawDan = player.points / 1000;
        if (year == 2024){
            rawDan = player.points / 500; 
        } 
        
        let displayRank;
        if (rawDan >= 1) {
            // round to nearest whole Dan
            displayRank = `${Math.round(rawDan)} Dan`;
        } else {
            // convert fractional Dan <1 into kyu
            const kyu = Math.ceil((1 - rawDan) * 10);
            displayRank = `${kyu} kyu`;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>${player.points}</td>
            <td>${displayRank}</td>
        `;
        table.appendChild(row);
    });

    // Update active button styling
    document.getElementById('btn2024').classList.remove('active');
    document.getElementById('btn2025').classList.remove('active');
    document.getElementById(`btn${year}`).classList.add('active');
    }
}

// Initialize with 2024 rankings
if (window.location.pathname.endsWith('index.html')) {
    toggleRankings('2024');
  }


async function loadJogadoresRanking() {
    try {
      const jogadores = [
   
        {
            "nome": "Koshiro Hama",
            "rating": 1493.0,
            "jogos": 3,
            "pontuacao_acumulada_bruta": 101800.0,
            "pontuacao_acumulada_ajustada": 6.800000000000001
        },
        {
            "nome": "Roger Cardoso",
            "rating": 1500.0,
            "jogos": 2,
            "pontuacao_acumulada_bruta": 75300.0,
            "pontuacao_acumulada_ajustada": 15.299999999999997
        },
        {
            "nome": "F\u00e1bio Takane",
            "rating": 1504.0,
            "jogos": 1,
            "pontuacao_acumulada_bruta": 29900.0,
            "pontuacao_acumulada_ajustada": 4.9
        },
        {
            "nome": "Luiza Fujii",
            "rating": 1492.0,
            "jogos": 2,
            "pontuacao_acumulada_bruta": 40100.0,
            "pontuacao_acumulada_ajustada": -29.9
        },
        {
            "nome": "Filipe Dias",
            "rating": 1500.0,
            "jogos": 0,
            "pontuacao_acumulada_bruta": 0.0,
            "pontuacao_acumulada_ajustada": 0.0
        },
        {
            "nome": "Camilly Barbosa",
            "rating": 1471.0,
            "jogos": 2,
            "pontuacao_acumulada_bruta": 8300.0,
            "pontuacao_acumulada_ajustada": -81.7
        },
        {
            "nome": "Gabriel Rocha",
            "rating": 1510.0,
            "jogos": 2,
            "pontuacao_acumulada_bruta": 85600.0,
            "pontuacao_acumulada_ajustada": 35.6
        },    
        {
            "nome": "Jardel Pereira",
            "rating": 1529.0,
            "jogos": 2,
            "pontuacao_acumulada_bruta": 90700.0,
            "pontuacao_acumulada_ajustada": 60.7
        },
        {
            "nome": "J\u00falia",
            "rating": 1490.0,
            "jogos": 2,
            "pontuacao_acumulada_bruta": 50700.0,
            "pontuacao_acumulada_ajustada": -19.3
        },
        {
            "nome": "Hugo",
            "rating": 1508.0,
            "jogos": 3,
            "pontuacao_acumulada_bruta": 84500.0,
            "pontuacao_acumulada_ajustada": -0.5
        },
        {
            "nome": "Thiago",
            "rating": 1505.0,
            "jogos": 1,
            "pontuacao_acumulada_bruta": 31900.0,
            "pontuacao_acumulada_ajustada": 6.9
        }
    ]
  
      // função para mapear rating → nível (mesma lógica do Python)
      function getNivel(rating) {
        if (rating < 1100) return "9 Kyu";
        if (rating < 1200) return "8 Kyu";
        if (rating < 1300) return "7 Kyu";
        if (rating < 1400) return "6 Kyu";
        if (rating < 1500) return "5 Kyu";
        if (rating < 1600) return "4 Kyu";
        if (rating < 1700) return "3 Kyu";
        if (rating < 1800) return "2 Kyu";
        if (rating < 1900) return "1 Kyu";
        if (rating < 2000) return "Shodan";
        if (rating < 2100) return "Nidan";
        if (rating < 2200) return "Sandan";
        if (rating < 2300) return "Yondan";
        if (rating < 2400) return "Godan";
        if (rating < 2500) return "Rokudan";
        if (rating < 2600) return "Nanadan";
        if (rating < 2700) return "Hachidan";
        if (rating < 2800) return "Kudan";
        return "Judan";
      }
  
      // ordena por rating decrescente
      jogadores.sort((a, b) => b.rating - a.rating);
  
      const tbody = document.querySelector("#jogadoresTable tbody");
      jogadores.forEach((jogador, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${idx + 1}</td>
          <td>${jogador.nome}</td>
          <td>${jogador.rating.toFixed(0)}</td>
          <td>${getNivel(jogador.rating)}</td>
        `;
        tbody.appendChild(tr);
      });
    } catch (err) {
      console.error("Erro ao carregar jogadores.json:", err);
    }
  }

  if (window.location.pathname.endsWith('/jogadores.html')) {

  window.addEventListener("DOMContentLoaded", loadJogadoresRanking);

  }
