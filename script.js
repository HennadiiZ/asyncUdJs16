'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// 248. Our First AJAX Call: XMLHttpRequest

// https://github.com/public-apis/public-apis

// https://restcountries.com/v2/
//https://restcountries.com/v2/name/portugal


const getCountryData = function(country) {

   const request = new XMLHttpRequest();
   request.open('GET', `https://restcountries.com/v2/name/${country}`);
   request.send();
   // console.log(request.resposeText);

    request.addEventListener('load', function () {
        console.log(this.resposeText);
        const data = JSON.parse(this.resposeText);
        console.log(data);
    
        const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
        `;
    
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.getElementsByClassName.opacity = 1;
    });
}

getCountryData('portugal');
getCountryData('usa');