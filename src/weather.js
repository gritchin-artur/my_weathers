
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export async function fetchGalaryWeather(country) {
const KEY = '5767a08f23978378cf4f185e72cfa13f';
const URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&';
    try {
        const response = await axios.get(
            `${URL}q=${country}&type=like&appid=${KEY}`
        );
        return response.data;
  } catch (error) {
    Notify.failure("We're sorry, but you've reached the end of search results.")
    }

};