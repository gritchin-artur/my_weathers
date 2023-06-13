import { fetchGalaryWeather } from './weather';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSearch = document.querySelector('.search-form');
const inputSearch = document.querySelector('input');
const div = document.querySelector('.gallery-weather');
const buttonSearch = document.querySelector('.find-weather')


buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputSearch.value.trim().toLowerCase());
   let country = inputSearch.value.trim().toLowerCase();
    fetchGalaryWeather(country)
        .then((cards) => {
            div.innerHTML = '';
            weatherCardList(cards)
               Notify.success(`✅ Hooray! We found city`);
    })
        .catch((error) => {
  Notify.failure("Sorry, there are no images matching your search query. Please try again.")
       }) 
})



function weatherCardList(cards) {
  console.log(cards)
        const markup = 
               `<div class="weather-card">
        <h1>${cards.name}</h1>
        <img id="wicon"  src=" https://openweathermap.org/img/wn/${cards.weather[0].icon}@2x.png" alt="icon">
          <div class="info">
    <p class="info-item">
   temp ${Math.round(cards.main.temp)}° С
    </p>
    <p class="info-item">
   description ${cards.weather[0].description}
    </p>
     <p class="info-item">
   wind speed ${cards.wind.speed} m/c
    </p>
    </p>
  </div>      
</div>`
  div.innerHTML = markup;
};