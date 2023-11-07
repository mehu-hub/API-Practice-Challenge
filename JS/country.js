const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => getCountry(data))
}

function getCountry(country) {
    const dropDown = document.getElementById('dropdown');
    country.map((country) => {
        const link = document.createElement('li');
        link.innerHTML = `
        <a class="dropdown-item" onclick=showCountryDetails('${country.cca2}')>${country.name.common}</a>
        `
        dropDown.appendChild(link)
    })
}

function showCountryDetails(code) {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data[0]))
}

const showDetails = country => {
    const showDetailsContainer = document.getElementById('show-details');
    showDetailsContainer.innerHTML = `
        <h2>Capital: ${country.capital}</h2>
        <img src="${country.flags.png}"/> 
    `
}
loadData()