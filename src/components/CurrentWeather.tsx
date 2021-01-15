import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../styles/components/currentWeather'

import { Weather } from '../interfaces/Weather'

const CurrentWeather: React.FC<Weather> = ({
  date, time, tempMax, tempMin, humidity, main, description, icon,
}) => (
  <Container>
    <div className="temp-area">
      <div className="temp-info">
        <span className="temp-max">
          {tempMax}
          C
        </span>
        /
        <span className="temp-min">
          {tempMin}
          C
        </span>
      </div>
      <div className="humidity-info">
        <span className="humidity">
          {humidity}
          % umidade
        </span>
      </div>
    </div>
    <div className="weather-description-area">
      <div className="weather-description-info">
        <h2>{main}</h2>
        <p>{description}</p>
      </div>
      <img src={icon} alt="a" />
    </div>

  </Container>
)

CurrentWeather.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tempMax: PropTypes.string.isRequired,
  tempMin: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default CurrentWeather
