import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../styles/components/listWeather'

import { Weather } from '../interfaces/Weather'

const ListWeather: React.FC<Weather> = ({
  date, time, tempMax, tempMin, humidity, main, description, icon,
}) => (
  <Container>
    <div>
      <span>{date}</span>
      <span>{time}</span>
      <span className="linha-vertical" />
      <span>
        {tempMax}
        {' '}
        <span className="temp-min-text">{tempMin}</span>
        {' '}
        C
      </span>
      <span className="linha-vertical" />
      <span>{humidity}</span>
    </div>
    <div className="weather-description">
      <div>
        <span>
          {main}
          {' '}
          -
          {' '}
        </span>
        <span>{description}</span>
      </div>
      <img src={icon} alt="icon" />
    </div>
  </Container>
)

ListWeather.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tempMax: PropTypes.string.isRequired,
  tempMin: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default ListWeather
