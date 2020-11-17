import React, { useEffect, useState, useMemo } from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import {
  Container, InfoContainer, CityState, StyledImage, HelpText,
} from './SelectedCity.styled'
import Loader from '../Loader/Loader'
import { getSelectedCity } from '../Asyncs/asyncs'

const SelectedCity = ({ selectedCityID }) => {
  const [currentCityData, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isErr, setIsError] = useState(false)

  useEffect(() => {
    if (selectedCityID) {
      setIsLoading(true)
      setIsError(false)
      getSelectedCity(selectedCityID)
        .then((res) => {
          const weather = res.consolidated_weather[0]
          const {
            weather_state_name,
            weather_state_abbr,
            the_temp,
            max_temp,
            min_temp,
            wind_speed,
          } = weather
          setData({
            title: res.title,
            state: weather_state_name,
            abbr: weather_state_abbr,
            current_temp: the_temp,
            max_temp,
            min_temp,
            wind_speed,
          })
          setIsLoading(false)
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
          setIsError(true)
          setIsLoading(false)
        })
    }
  }, [selectedCityID])

  const {
    title, state, current_temp, max_temp, min_temp, wind_speed, abbr,
  } = currentCityData

  const imgUrl = useMemo(() => `https://www.metaweather.com/static/img/weather/${abbr}.svg`, [abbr])

  if (Object.keys(currentCityData).length === 0) {
    return (
      <Col>
        <HelpText>Тут будет отображаться погода в выбранном городе</HelpText>
        {isLoading && <Loader />}
      </Col>
    )
  }
  if (isErr) {
    return <h5>Что-то пошло не так...</h5>
  }

  return (
    <Col>
      {isLoading && <Loader />}
      {!isLoading && (
        <Container>
          <StyledImage src={imgUrl} width={180} />
          <InfoContainer>
            <div>
              <CityState>
                {state}
                {' '}
                in
                {title}
              </CityState>
            </div>
            <div>
              <ul>
                <li>
                  Текущая температура:
                  {Math.trunc(current_temp)}
                  °C
                </li>
                <li>
                  Максимальная температура:
                  {Math.trunc(max_temp)}
                  °C
                </li>
                <li>
                  Минимальная температура:
                  {Math.trunc(min_temp)}
                  °C
                </li>
                <li>
                  Скорость ветра:
                  {Math.floor(wind_speed * 10) / 10}
                  {' '}
                  миль/ч
                </li>
              </ul>
            </div>
          </InfoContainer>
        </Container>
      )}
    </Col>
  )
}

SelectedCity.propTypes = {
  selectedCityID: PropTypes.number,
}

SelectedCity.defaultProps = {
  selectedCityID: 0,
}

export default SelectedCity
