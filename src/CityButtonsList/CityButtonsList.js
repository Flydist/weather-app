import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import { ButtonsContainer, StyledButton, HelpText } from './CityButtonsList.styled'
import Loader from '../Loader/Loader'

import { findSimilarCities } from '../Asyncs/asyncs'


const CityButtonsList = ({ searchedValue, handleSelectCity }) => {

  const [foundCities, setFoundCities] = useState([])
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    if (searchedValue !== '') {
      isLoading(true)
      findSimilarCities(searchedValue)
        .then((res) => {
          setFoundCities(res)
          isLoading(false)
        })
        .catch((err) =>
          console.log(err)
        )
    }
    else {
      setFoundCities([])
    }

  }, [searchedValue])

  return (
    <Col lg={3} md={5} sm={12}>
      <ButtonsContainer>
        <Row className='flex-column'>
          {foundCities.length === 0 ? <HelpText>Тут будет список городов</HelpText> : <HelpText>Найденные города:</HelpText>}
          <div>{loading && <Loader />}</div>
          {!loading && foundCities.map((city, idx) => {
            return (
              <React.Fragment key={idx}>
                <Col lg={12}>
                  <StyledButton variant='primary' onClick={() => handleSelectCity(city.woeid)}>{city.title}</StyledButton>
                </Col>
              </React.Fragment>
            )
          })}
        </Row>
      </ButtonsContainer>
    </Col>
  )
}

export default CityButtonsList