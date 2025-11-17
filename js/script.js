const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=-22.9068&longitude=-43.1729&current_weather=true';

async function buscarClima() {
    const elementoTemperatura = document.getElementById('temperatura');
    
    if (!elementoTemperatura) return; 

    try {
        const resposta = await fetch(apiURL);
        const dados = await resposta.json();
        const temperatura = dados.current_weather.temperature;
        
        elementoTemperatura.innerText = `${temperatura}°C`;
        
    } catch (erro) {
        console.error("Erro ao buscar clima:", erro);
        elementoTemperatura.innerText = "Indisponível";
    }
}

window.addEventListener('load', buscarClima);