import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { ButtonsContainer, StyledButton, HelpText } from './CityButtonsList.styled'
import Loader from '../Loader/Loader'

import { findSimilarCities } from '../Asyncs/asyncs'


const CityButtonsList = ({ searchedValue, handleSelectCity }) => {

  const [foundCities, setFoundCities] = useState([])
  const [loading, isLoading] = useState(false)
  const [err, isError] = useState(false)

  useEffect(() => {
    if (searchedValue !== '') {
      isLoading(true)
      isError(false)
      findSimilarCities(searchedValue)
        .then((res) => {
          setFoundCities(res)
          isLoading(false)
        })
        .catch((err) => {
          console.log(err)
          isError(true)
        }
        )
    }
    else {
      setFoundCities([])
    }

  }, [searchedValue])

  if (err) {
    return (
      <h5>Что-то пошло не так...</h5>
    )
  }

  return (
    <Col lg={3} md={5} sm={12}>
      <ButtonsContainer>
        {!err &&
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
        }

      </ButtonsContainer>
    </Col>
  )
}

CityButtonsList.propTypes = {
  searchedValue: PropTypes.string,
  handleSelectCity: PropTypes.func
};

export default CityButtonsList