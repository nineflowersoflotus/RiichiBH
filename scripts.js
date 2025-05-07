// Sample data for 2024 and 2025 rankings
const rankingsData = {
    '2024': [
    { rank: 1,  name: 'Roger',   points: 2160, avgScore: 432, avgParticipation: 432 },
    { rank: 2,  name: 'Fabio',   points: 1510, avgScore: 302, avgParticipation: 302 },
    { rank: 3,  name: 'Thiago',  points: 1110, avgScore: 222, avgParticipation: 370 },
    { rank: 4,  name: 'Koshiro', points: 1005, avgScore: 201, avgParticipation: 201 },
    { rank: 5,  name: 'Mikio',   points: 970,  avgScore: 194, avgParticipation: 243 },
    { rank: 6,  name: 'Mario',   points: 920,  avgScore: 184, avgParticipation: 307 },
    { rank: 7,  name: 'Farley',  points: 790,  avgScore: 158, avgParticipation: 263 },
    { rank: 8,  name: 'Filipe',  points: 790,  avgScore: 158, avgParticipation: 263 },
    { rank: 9,  name: 'Jardel',  points: 660,  avgScore: 132, avgParticipation: 132 },
    { rank: 10, name: 'Victor',  points: 645,  avgScore: 129, avgParticipation: 323 },
    { rank: 11, name: 'Thais',   points: 640,  avgScore: 128, avgParticipation: 213 },
    { rank: 12, name: 'Hugo',    points: 500,  avgScore: 100, avgParticipation: 500 },
    { rank: 13, name: 'Marcela', points: 465,  avgScore: 93,  avgParticipation: 155 },
    { rank: 14, name: 'Catarina',points: 360,  avgScore: 72,  avgParticipation: 180 },
    { rank: 15, name: 'Giullia', points: 345,  avgScore: 69,  avgParticipation: 173 },
    { rank: 16, name: 'Felipe',  points: 315,  avgScore: 63,  avgParticipation: 105 },
    { rank: 17, name: 'Niels',   points: 270,  avgScore: 54,  avgParticipation: 135 },
    { rank: 18, name: 'Raphael', points: 225,  avgScore: 45,  avgParticipation: 56  },
    { rank: 19, name: 'Alex',    points: 180,  avgScore: 36,  avgParticipation: 180 },
    { rank: 20, name: 'Bruno',   points: 180,  avgScore: 36,  avgParticipation: 180 },
    { rank: 21, name: 'Eduardo', points: 135,  avgScore: 27,  avgParticipation: 68  },
    { rank: 22, name: 'Mauri',   points: 90,   avgScore: 18,  avgParticipation: 90  }
  ],
    '2025': [
      { rank: 1,  name: 'Julia',   points: 4100, avgScore: 1367, avgParticipation: 1367 },
      { rank: 2,  name: 'Filipe',  points: 2720, avgScore: 907,  avgParticipation: 907 },
      { rank: 3,  name: 'Fabio',   points: 2270, avgScore: 757,  avgParticipation: 757 },
      { rank: 4,  name: 'Roger',   points: 2040, avgScore: 680,  avgParticipation: 680 },
      { rank: 5,  name: 'Luiza',   points: 1920, avgScore: 640,  avgParticipation: 960 },
      { rank: 6,  name: 'Koshiro', points: 1720, avgScore: 573,  avgParticipation: 860 },
      { rank: 7,  name: 'Victor',  points: 1650, avgScore: 550,  avgParticipation: 550 },
      { rank: 8,  name: 'Marcela', points: 1400, avgScore: 467,  avgParticipation: 467 },
      { rank: 9,  name: 'Jardel',  points: 1260, avgScore: 420,  avgParticipation: 420 },
      { rank: 10, name: 'Emi',     points: 1200, avgScore: 400,  avgParticipation: 1200 },
      { rank: 11, name: 'Mikio',   points: 990,  avgScore: 330,  avgParticipation: 330 },
      { rank: 12, name: 'Felipe',  points: 900,  avgScore: 300,  avgParticipation: 450 },
      { rank: 13, name: 'Raphael', points: 720,  avgScore: 240,  avgParticipation: 240 },
      { rank: 14, name: 'Mario',   points: 540,  avgScore: 180,  avgParticipation: 270 },
      { rank: 15, name: 'Hugo',    points: 450,  avgScore: 150,  avgParticipation: 150 },
      { rank: 16, name: 'Thais',   points: 450,  avgScore: 150,  avgParticipation: 150 },
      { rank: 17, name: 'Camilly', points: 450,  avgScore: 150,  avgParticipation: 150 },
      { rank: 18, name: 'Thiago',  points: 450,  avgScore: 150,  avgParticipation: 150 },
      { rank: 19, name: 'Niels',   points: 360,  avgScore: 120,  avgParticipation: 180 },
      { rank: 20, name: 'Gabriel', points: 360,  avgScore: 120,  avgParticipation: 180 },
      { rank: 21, name: 'Farley',  points: 180,  avgScore: 60,   avgParticipation: 180 },
      { rank: 22, name: 'Cláudio', points: 180,  avgScore: 60,   avgParticipation: 180 },
      { rank: 23, name: 'Eduardo', points: 90,   avgScore: 30,   avgParticipation: 90  },
      { rank: 24, name: 'Alex',    points: 90,   avgScore: 30,   avgParticipation: 90  }
    ]
  };
  

  function toggleRankings(year) {
    // Update the heading
    if (window.location.pathname.endsWith('/index.html')) {
        const heading = document.getElementById('rankingYear');
        const tableBody  = document.getElementById('rankingTable');
        if (!heading || !tableBody) return;

        heading.textContent = `Ranking de Torneio (Rating & Nível) - ${year}`;

        // Clear existing table content
        tableBody.innerHTML = '';

        const alpha = 0.5;

        rankingsData[year].forEach(player => {
            // 1) base Dan
            let baseDan = player.points / 1000;
            if (year === '2024') {
                baseDan = player.points / 500;
            }

            // 2) refine with avgScore / avgParticipation
            let refinedDan = baseDan;
            if (player.avgScore != null && player.avgParticipation > 0) {
                const F = player.avgScore / player.avgParticipation;
                refinedDan = baseDan * (1 + alpha * (F - 1));
            }

            // 3) format Dan or kyu
            let displayRank;
            if (refinedDan >= 1) {
                displayRank = `${Math.round(refinedDan)} Dan`;
            } else {
                const kyu = Math.ceil((1 - refinedDan) * 10);
                displayRank = `${kyu} kyu`;
            }

            // 4) build row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.rank}</td>
                <td>${player.name}</td>
                <td>${player.points}</td>
                <td>${displayRank}</td>
            `;

            // 5) on click, show avgScore and avgParticipation
            row.style.cursor = 'pointer';
            row.addEventListener('click', () => {
                alert(
                    `Jogador: ${player.name}\n` +
                    `Pontuação Média: ${player.avgScore}\n` +
                    `Média de Participação: ${player.avgParticipation}`
                );
            });

            tableBody.appendChild(row);
        });

        // Update active button styling
        document.getElementById('btn2024').classList.remove('active');
        document.getElementById('btn2025').classList.remove('active');
        document.getElementById(`btn${year}`).classList.add('active');
    }
}

// Initialize
if (window.location.pathname.endsWith('/index.html')) {
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
        tr.addEventListener("click", () => {
            alert(
              `Jogador: ${jogador.nome}\n` +
              `Pontuação Ajustada Acumulada: ${jogador.pontuacao_acumulada_ajustada.toFixed(0)}\n` +
              `Pontuação Bruta Acumulada: ${jogador.pontuacao_acumulada_bruta.toFixed(0)}\n` +
              `Número de Jogos: ${jogador.jogos}`
            );
          });
    
        tbody.appendChild(tr);
      });
    } catch (err) {
      console.error("Erro ao carregar jogadores.json:", err);
    }
  }

  if (window.location.pathname.endsWith('/jogadores.html')) {

  window.addEventListener("DOMContentLoaded", loadJogadoresRanking);

  }