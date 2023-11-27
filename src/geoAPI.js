async function getCountry() {
  const API_KEY = '09f1f6ffa0cc08d306046acd234b057d';
  let userIpAddress, url;

  return fetch('https://api64.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      userIpAddress = data.ip;
      url = `http://api.ipstack.com/${userIpAddress}?access_key=${API_KEY}`;
      return fetch(url);
    })
    .then((response) => response.json())
    .then((data) => {
      return data.country_name;
    })
    .catch((error) => console.error(error));
}

function getLang(country) {
  if (country === 'mexico') return 'es';
  if (country === 'united states') return 'en';
  if (country === 'canada') return 'en';
  if (country === 'france') return 'fr';
  if (country === 'germany') return 'de';
  if (country === 'italy') return 'it';
  if (country === 'spain') return 'es';
  if (country === 'united kingdom') return 'en';
  if (country === 'china') return 'zh';
  if (country === 'japan') return 'ja';
  if (country === 'south korea') return 'ko';
  if (country === 'india') return 'hi';
  if (country === 'russia') return 'ru';
  if (country === 'brazil') return 'pt';
  if (country === 'australia') return 'en';
  if (country === 'argentina') return 'es';
  if (country === 'colombia') return 'es';
  if (country === 'south africa') return 'en';
  if (country === 'nigeria') return 'en';
  if (country === 'egypt') return 'ar';
  if (country === 'morocco') return 'ar';
  if (country === 'kenya') return 'en';
  if (country === 'ethiopia') return 'am';
  if (country === 'tanzania') return 'sw';
  if (country === 'algeria') return 'ar';
  if (country === 'uganda') return 'sw';
}

let movies = [];

getCountry().then((country) => {
  const content = document.getElementById('content');
  const lang = getLang(country.normalize().toLowerCase());
  fetch('/games/peliculas.json')
    .then((response) => response.json())
    .then((data) => {
      movies = data.filter((movie) => movie.original_language === lang);
      let grid = document.createElement('div');
      grid.classList.add('grid');
      let i = 0;
      movies.forEach((movie) => {
        if (i % 3 === 0) {
          content.appendChild(grid);
          grid = document.createElement('div');
          grid.classList.add('grid');
        }
        let article = document.createElement('article');
        article.classList.add('movie');
        article.style.margin = '1em';
        let img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;
        img.style.width = '100%';
        img.style.marginBottom = '1em';
        article.appendChild(img);
        let h3 = document.createElement('h3');
        h3.style.textAlign = 'center';
        h3.innerText = movie.title;
        article.style.padding = '1em';
        article.appendChild(h3);
        let p = document.createElement('p');
        p.style.textAlign = 'justify';
        p.innerText = movie.overview;
        article.appendChild(p);
        grid.appendChild(article);
        i++;
      });
    });
});
