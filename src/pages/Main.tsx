import { AxiosResponse } from 'axios'
import React, { ReactElement, useState } from 'react'

import { FiSearch } from 'react-icons/fi'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import api from '../services/api'

import { Container } from '../styles/pages/main'

interface Weather {
  'date': string,
  'time': string,
  'temp_max': string,
  'temp_min': string,
  'humidity': string,
  'main': string,
  'description': string,
  'icon': string
}

const Main = (): ReactElement => {
  const [city, setCity] = useState('')
  const [listWeather, setListWeather] = useState<Weather[]>([])

  async function searchWeatherFromCity() {
    await api.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${process.env.REACT_APP_OPENWEATHERMAP_TOKEN}`)
      .then((response: AxiosResponse) => {
        const listWeatherResponse = response.data.list
        let listWeatherAux: Weather[] = []
        listWeatherResponse.forEach((element: any) => {
          const kelvin = 273.15
          listWeatherAux = [...listWeatherAux, {
            date: element.dt_txt.substring(5, 10).replace('-', '/'),
            time: element.dt_txt.substring(11, 16),
            temp_max: `${(Number(element.main.temp_max) - kelvin).toFixed(0)}°`,
            temp_min: `${(Number(element.main.temp_min) - kelvin).toFixed(0)}°`,
            humidity: `${element.main.humidity}%`,
            main: element.weather[0].main,
            description: element.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}.png`,
          }]
        })
        setListWeather([...listWeatherAux])
        console.log(listWeatherAux)
        console.log(listWeather)
      })
  }

  return (
    <Container>
      <div id="page-main">
        <Navbar />
        <Banner />
        <div className="search-city">
          <p>Digite o nome da sua cidade</p>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Insira aqui o nome da sua cidade"
              value={city}
              onChange={(ev: React.FormEvent<HTMLInputElement>) => setCity(ev.currentTarget.value)}
            />
            <button type="button" onClick={() => searchWeatherFromCity()}>
              <FiSearch size={26} color="rgba(255, 254, 254, 0.87)" />
            </button>
          </div>
          <ul>
            {listWeather.map((weather: Weather) => (
              <li>
                <div>
                  <span>{weather.date}</span>
                  <span>{weather.time}</span>
                  <span className="linha-vertical" />
                  <span>
                    {weather.temp_max}
                    {' '}
                    <span className="temp-min-text">{weather.temp_min}</span>
                    {' '}
                    C
                  </span>
                  <span className="linha-vertical" />
                  <span>{weather.humidity}</span>
                </div>
                <div className="weather-description">
                  <div>
                    <span>
                      {weather.main}
                      {' '}
                      -
                      {' '}
                    </span>
                    <span>{weather.description}</span>
                  </div>
                  <img src={weather.icon} alt="icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Main
