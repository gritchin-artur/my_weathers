import { fetchGalaryWeather } from './weather';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSearch = document.querySelector('.search-form');
const inputSearch = document.querySelector('input');
const div = document.querySelector('.gallery-weather');
const buttonSearch = document.querySelector('.find-weather')


buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputSearch.value.trim().toLowerCase());
    country = inputSearch.value.trim().toLowerCase();
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
        const markup = cards.list
            .map((card) => {
               return `<div class="weather-card">
        <h1>${card.name}</h1>
          <div class="info">
    <p class="info-item">
   temp ${Math.round(card.main.temp / 10)}
    </p>
     <p class="info-item">
   wind speed ${card.wind.speed} m/c
    </p>
    </p>
  </div>      
</div>`;
    })
          .join("");
    div.insertAdjacentHTML("beforeend", markup);
};
