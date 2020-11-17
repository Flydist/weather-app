import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { ButtonsContainer, StyledButton, HelpText } from './CityButtonsList.styled'
import Loader from '../Loader/Loader'

import { findSimilarCities } from '../Asyncs/asyncs'

const CityButtonsList = ({ searchedValue, handleSelectCity }) => {
  const [foundCities, setFoundCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isErr, setIsError] = useState(false)
  const [isNothingFound, setIsNothingFound] = useState(false)

  useEffect(() => {
    if (searchedValue !== '') {
      setIsLoading(true)
      setIsError(false)
      findSimilarCities(searchedValue)
        .then((res) => {
          if (res.length === 0) {
            setIsNothingFound(true)
            setIsLoading(false)
            setFoundCities([])
          } else {
            setFoundCities(res)
            setIsLoading(false)
            setIsNothingFound(false)
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
          setIsError(true)
          setIsLoading(false)
        })
    } else {
      setFoundCities([])
    }
  }, [searchedValue])

  if (isErr) {
    return <h5>Что-то пошло не так...</h5>
  }

  return (
    <Col lg={3} md={5} sm={12}>
      <ButtonsContainer>
        <Row className="flex-column">
          {foundCities.length === 0 && !isNothingFound ? (
            <HelpText>Тут будет список городов</HelpText>
          ) : (
              // eslint-disable-next-line react/jsx-indent
              <HelpText>Найденные города:</HelpText>)}
          {isNothingFound && <HelpText>Ничего не найдено :(</HelpText>}
          <div>{isLoading && <Loader />}</div>
          {!isLoading
            && foundCities.map((city) => (
              <Col lg={12} key={city.woeid}>
                <StyledButton variant="primary" onClick={() => handleSelectCity(city.woeid)}>
                  {city.title}
                </StyledButton>
              </Col>
            ))}
        </Row>
      </ButtonsContainer>
    </Col>
  )
}

CityButtonsList.propTypes = {
  searchedValue: PropTypes.string,
  handleSelectCity: PropTypes.func,
}

CityButtonsList.defaultProps = {
  searchedValue: null,
  handleSelectCity: () => null,
}

export default CityButtonsList
