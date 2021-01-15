import { AxiosResponse } from 'axios'
import React, { ReactElement, useState } from 'react'

import { FiSearch } from 'react-icons/fi'
import Button from '@material-ui/core/Button'
import ClipLoader from 'react-spinners/ClipLoader'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ListWeather from '../components/ListWeather'
import CurrentWeather from '../components/CurrentWeather'

import api from '../services/api'

import { convertKevinToCelsius } from '../utils/convertKevinToCelsius'

import { Container } from '../styles/pages/main'

import { Weather } from '../interfaces/Weather'

const Main = (): ReactElement => {
  const [city, setCity] = useState('')
  const [currentWeather, setCurrentWeather] = useState<Weather>({
    date: '', description: '', humidity: '', icon: '', main: '', tempMax: '', tempMin: '', time: '',
  })
  const [listWeather, setListWeather] = useState<Weather[]>([])
  const [isLoadedCurrentWeather, setIsLoadedCurrentWeather] = useState(0)
  const [isLoadedListWeather, setIsLoadedListWeather] = useState(0)

  async function searchWeatherFromCity() {
    setIsLoadedCurrentWeather(1)
    setIsLoadedListWeather(1)

    await api.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_TOKEN}`)
      .then((response: AxiosResponse) => {
        const element = response.data
        setCurrentWeather({
          date: 'Agora',
          description: element.weather[0].description,
          humidity: element.main.humidity,
          icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}.png`,
          main: element.weather[0].main,
          tempMax: `${convertKevinToCelsius(element.main.temp_max)}°`,
          tempMin: `${convertKevinToCelsius(element.main.temp_min)}°`,
          time: '',
        })
        setIsLoadedCurrentWeather(2)
      })

    await api.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${process.env.REACT_APP_OPENWEATHERMAP_TOKEN}`)
      .then((response: AxiosResponse) => {
        const listWeatherResponse = response.data.list
        let listWeatherAux: Weather[] = []

        listWeatherResponse.forEach((element: any) => {
          listWeatherAux = [...listWeatherAux, {
            date: element.dt_txt.substring(5, 10).replace('-', '/'),
            time: element.dt_txt.substring(11, 16),
            tempMax: `${convertKevinToCelsius(element.main.temp_max)}°`,
            tempMin: `${convertKevinToCelsius(element.main.temp_min)}°`,
            humidity: `${element.main.humidity}%`,
            main: element.weather[0].main,
            description: element.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}.png`,
          }]
        })
        setListWeather([...listWeatherAux])
        setIsLoadedListWeather(2)
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
            <Button variant="contained" color="primary" id="button-search" onClick={() => searchWeatherFromCity()} size="large">
              <FiSearch size={26} color="rgba(255, 254, 254, 0.87)" />
            </Button>
          </div>
          {(isLoadedCurrentWeather === 1 || isLoadedListWeather === 1) && (
            <ClipLoader size={100} color="#0f5a94" />
          )}

          {(isLoadedCurrentWeather === 2 && isLoadedListWeather === 2) && (
            <>
              <CurrentWeather
                date={currentWeather.date}
                description={currentWeather.description}
                humidity={currentWeather.humidity.toString()}
                icon={currentWeather.icon}
                main={currentWeather.main}
                tempMax={currentWeather.tempMax}
                tempMin={currentWeather.tempMin}
                time={currentWeather.time}
              />

              <ul>
                {listWeather.map((weather: Weather) => (
                  <ListWeather
                    key={`${weather.date}-${weather.time}`}
                    date={weather.date}
                    description={weather.description}
                    humidity={weather.humidity}
                    icon={weather.icon}
                    main={weather.main}
                    tempMax={weather.tempMax}
                    tempMin={weather.tempMin}
                    time={weather.time}
                  />
                ))}
              </ul>
            </>
          )}

        </div>
      </div>
    </Container>
  )
}

export default Main
