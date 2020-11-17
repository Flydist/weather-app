import React, { useState } from 'react'
import './App.css'
import { Container, Row } from 'react-bootstrap'
import SearchCity from './SearchCity/SearchCity'
import CityButtonsList from './CityButtonsList/CityButtonsList'
import SelectedCity from './SelectedCity/SelectedCity'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCityID, setSelectedCity] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { value } = e.target.elements.searchInput
    setSearchTerm(value)
  }

  const handleSelectCity = (selectedID) => {
    setSelectedCity(selectedID)
  }

  return (
    <Container>
      <SearchCity handleSubmit={handleSubmit} />
      <Row>
        <CityButtonsList searchedValue={searchTerm} handleSelectCity={handleSelectCity} />
        <SelectedCity selectedCityID={selectedCityID} />
      </Row>
    </Container>
  )
}

export default App
