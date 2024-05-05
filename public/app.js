async function consultarFilme() {
    const title = document.getElementById('title').value;
    const url = `https://www.omdbapi.com/?apikey=4fefbf60&t=${title}`;
    const response = await fetch(url);
    const data = await response.json();

    let info = `
        Título: ${data.Title} (${data.Year})
        Classificação: ${data.Rated}
        Lançamento: ${data.Released}
        Duração: ${data.Runtime}
        Gênero: ${data.Genre}
        Diretor: ${data.Director}
        Escritores: ${data.Writer}
        Atores: ${data.Actors}
        Sinopse: ${data.Plot}
        Idioma: ${data.Language}
        País: ${data.Country}
        Prêmios: ${data.Awards}
        Metascore: ${data.Metascore}
        Nota no IMDb: ${data.imdbRating}
        Votos no IMDb: ${data.imdbVotes}
        ID do IMDb: ${data.imdbID}
        Tipo: ${data.Type}
        Lançamento em DVD: ${data.DVD}
        Bilheteria: ${data.BoxOffice}
        Produção: ${data.Production}
        Website: ${data.Website ? `<a href="${data.Website}" target="_blank">Visitar</a>` : 'N/A'}
    `;

    document.getElementById('resultado').innerText = info;

    const poster = document.getElementById('poster');
    if (data.Poster && data.Poster !== 'N/A') {
        poster.src = data.Poster;
        poster.hidden = false; 
    } else {
        poster.hidden = true;
    }
}
