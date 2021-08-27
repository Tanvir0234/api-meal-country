const country = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res =>res.json())
    .then(data => countryDetail(data));
}
country();
const countryDetail = countries =>{
    const countriesDiv = document.getElementById('countries');
countries.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('countries');
    div.innerHTML =`
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="countryDetailByName('${country.name}')"> Detail </button>
    
    `
    /*
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.innerText=country.name;
    p.innerText=country.capital;
    div.appendChild(h3);
    div.appendChild(p);
    */
    countriesDiv.appendChild(div);
})
}
const countryDetailByName = name => {
    const url =`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]));
}

const displayCountry = country => {
    
    
     const detailDiv = document.getElementById('country-detail');
     //const div = document.createElement('div');
     detailDiv.innerHTML=`
     <p>Population : ${country.population}</p>
     <img width="200px" src="${country.flag}">

     `
    //detailDiv.appendChild(div);

}

