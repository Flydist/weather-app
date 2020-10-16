import React from 'react'
import { Button } from 'react-bootstrap'
import { SearchContainer, StyledForm } from './SearchCity.styled'
import PropTypes from 'prop-types'

const SearchCity = ({ handleSubmit }) => {
  return (
    <SearchContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledForm.Group>
          <StyledForm.Label>Введите город для поиска</StyledForm.Label>
          <StyledForm.Control type="text" placeholder="Moscow" name='searchInput' />
        </StyledForm.Group>
        <Button variant="primary" type="submit">Поиск</Button>
      </StyledForm>
    </SearchContainer>
  )
}

SearchCity.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchCity