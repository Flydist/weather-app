import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Container, InfoContainer, CityState, StyledImage, HelpText } from './SelectedCity.styled'
import Loader from '../Loader/Loader'
import { getSelectedCity } from '../Asyncs/asyncs'

const SelectedCity = ({ selectedCityID }) => {

  const [currentCityData, setData] = useState({})
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    if (selectedCityID !== '') {
      isLoading(true)
      getSelectedCity(selectedCityID)
        .then((res) => {
          const weather = res.consolidated_weather[0]
          setData({
            title: res.title,
            state: weather.weather_state_name,
            abbr: weather.weather_state_abbr,
            current_temp: weather.the_temp,
            max_temp: weather.max_temp,
            min_temp: weather.min_temp,
            wind_speed: weather.wind_speed
          })
          isLoading(false)
        }
        )
        .catch((err) =>
          console.log(err)
        )
    }
  }, [selectedCityID])

  const { title, state, current_temp, max_temp, min_temp, wind_speed, abbr } = currentCityData

  const imgUrl = `https://www.metaweather.com/static/img/weather/${abbr}.svg`

  const isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  if (isEmpty(currentCityData)) {
    return (
      <Col>
        <HelpText>Тут будет отображаться погода в выбранном городе</HelpText>
        {loading && <Loader />}
      </Col>
    )
  }

  return (
    <Col>
      {loading && <Loader />}
      {!loading &&
        <Container>
          <StyledImage src={imgUrl} width={180} />
          <InfoContainer>
            <div>
              <CityState>{state} в {title}</CityState>
            </div>
            <div>
              <ul>
                <li>Текущая температура: {Math.trunc(current_temp)}°C</li>
                <li>Максимальная температура: {Math.trunc(max_temp)}°C</li>
                <li>Минимальная температура: {Math.trunc(min_temp)}°C</li>
                <li>Скорость ветра: {Math.floor(wind_speed * 10) / 10} миль/ч</li>
              </ul>
            </div>
          </InfoContainer>
        </Container>}

    </Col>
  )
}

export default SelectedCity