import React, { useState } from 'react';
import './App.css';
import SearchCity from './SearchCity/SearchCity'
import CityButtonsList from './CityButtonsList/CityButtonsList'
import SelectedCity from './SelectedCity/SelectedCity'
import { Container, Row } from 'react-bootstrap'

function App() {

  const [searched, setSearched] = useState('')
  const [selectedCityID, setSelectedCity] = useState(null)
  const [error, isError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.searchInput.value
    setSearched(value)
  }

  const handleSelectCity = (selectedID) => {
    setSelectedCity(selectedID)
  }

  return (
    <Container>
      <SearchCity handleSubmit={handleSubmit} />
      {error && <h5>Что-то пошло не так... Ошибка выведена в консоль</h5>}
      {!error &&
        <Row>
          <CityButtonsList searchedValue={searched} handleSelectCity={handleSelectCity} isError={isError}>
          </CityButtonsList>
          <SelectedCity selectedCityID={selectedCityID} isError={isError}>
          </SelectedCity>
        </Row>
      }

    </Container>
  );
}

export default App;
